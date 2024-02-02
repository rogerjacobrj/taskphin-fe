import CandidateTable from './components/table';
import { useState, useEffect } from 'react';
import customAxios from '../../configs';
import Modal from './components/modal';
import "./styles.css";

const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        fetchCandidates(true);
    }, []);

    const fetchCandidates = async (isInitial = false) => {
        isInitial && setIsLoading(true);

        try {
            const response = await customAxios.get('/candidates');
            if (response && response.status >= 200 && response.status < 300) {
                setCandidates(response.data.data);
            }

            isInitial && setIsLoading(false);
        } catch (error) {
            console.log(error);
            isInitial && setIsLoading(false);
        }
    };

    const handleEdit = (id) => {
        // Implement edit functionality
        console.log(`Edit candidate with ID ${id}`);
    };

    const handleDelete = async (id) => {
        try {
            const response = await customAxios.delete(`/candidates/${id}`);

            if (response && response.status >= 200 && response.status < 300 && response.data.status) {
                fetchCandidates(false);
            }
        } catch (error) {
            console.log("error", error);
        }
    };

    const toggleCandidateModal = () => {
        setShowModal(!showModal);
    };

    const onCreate = (status) => {
        if (status) {
            toggleCandidateModal();
            fetchCandidates(false);
        }
    };

    return (
        // <div className='container px-10'>
        //     <div className='header p-6 flex flex-row justify-between items-center mb-6'>
        //         <h1 className='text-lg font-semibold'>Applicant List</h1>
        //         <button className="bg-indigo-500 p-2 rounded" onClick={showAddApplicantForm}>
        //             <span className='text-white'>Add Applicant</span>
        //         </button>
        //     </div>
        //     <table className='table-fixed w-100 border border-slate-400 rounded-lg'>
        //         <thead >
        //             <tr className='p-4'>
        //                 <th className='border border-slate-300 p-2'>#</th>
        //                 <th className='border border-slate-300 p-2'>Name</th>
        //                 <th className='border border-slate-300 p-2'>Email</th>
        //                 <th className='border border-slate-300 p-2'>Score</th>
        //                 <th className='border border-slate-300 p-2'>Status</th>
        //                 <th className='border border-slate-300 p-2'>Action</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             <tr>
        //                 <td className='border border-slate-300 p-2'>1</td>
        //                 <td className='border border-slate-300 p-2'>Mark Antony </td>
        //                 <td className='border border-slate-300 p-2'>mark@test.com</td>
        //                 <td className='border border-slate-300 p-2'>4</td>
        //                 <td className='border border-slate-300 p-2'>Rejected</td>
        //                 <td className='border border-slate-300 p-2'>Edit Delete</td>
        //             </tr>
        //             <tr>
        //                 <td className='border border-slate-300 p-2'>1</td>
        //                 <td className='border border-slate-300 p-2'>Mark Antony </td>
        //                 <td className='border border-slate-300 p-2'>mark@test.com</td>
        //                 <td className='border border-slate-300 p-2'>4</td>
        //                 <td className='border border-slate-300 p-2'>Rejected</td>
        //                 <td className='border border-slate-300 p-2'>Edit Delete</td>
        //             </tr>
        //             <tr>
        //                 <td className='border border-slate-300 p-2'>1</td>
        //                 <td className='border border-slate-300 p-2'>Mark Antony </td>
        //                 <td className='border border-slate-300 p-2'>mark@test.com</td>
        //                 <td className='border border-slate-300 p-2'>4</td>
        //                 <td className='border border-slate-300 p-2'>Rejected</td>
        //                 <td className='border border-slate-300 p-2'>Edit Delete</td>
        //             </tr>
        //             <tr>
        //                 <td className='border border-slate-300 p-2'>1</td>
        //                 <td className='border border-slate-300 p-2'>Mark Antony </td>
        //                 <td className='border border-slate-300 p-2'>mark@test.com</td>
        //                 <td className='border border-slate-300 p-2'>4</td>
        //                 <td className='border border-slate-300 p-2'>Rejected</td>
        //                 <td className='border border-slate-300 p-2'>Edit Delete</td>
        //             </tr>
        //         </tbody>
        //     </table>
        // </div>
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Candidate Dashboard</h1>
            <CandidateTable
                candidates={candidates}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onAdd={toggleCandidateModal}
                isLoading={isLoading}
            />

            {showModal && <Modal
                onCreate={onCreate}
                onClose={toggleCandidateModal}
            />}
        </div>
    );
};

export default Home;