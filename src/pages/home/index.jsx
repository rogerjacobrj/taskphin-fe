import CandidateTable from './components/table';
import { useState } from 'react';
import Modal from './components/modal';
import "./styles.css";

const Home = () => {
    const [showModal, setShowModal] = useState(false);

    const [candidates, setCandidates] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', status: 'Rejected', salary: '3000', experience: '3 years' },
        { id: 2, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', status: 'Rejected', salary: '3000', experience: '3 years' },
        { id: 3, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', status: 'Rejected', salary: '3000', experience: '3 years' },
        { id: 4, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', status: 'Rejected', salary: '3000', experience: '3 years' },
        { id: 5, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', status: 'Rejected', salary: '3000', experience: '3 years' },
        { id: 6, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', status: 'Rejected', salary: '3000', experience: '3 years' },
        { id: 7, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', status: 'Rejected', salary: '3000', experience: '3 years' },
        { id: 8, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', status: 'Rejected', salary: '3000', experience: '3 years' },
        { id: 9, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', status: 'Rejected', salary: '3000', experience: '3 years' },
        { id: 10, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', status: 'Rejected', salary: '3000', experience: '3 years' },
        { id: 11, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', status: 'Rejected', salary: '3000', experience: '3 years' },
        { id: 12, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', status: 'Rejected', salary: '3000', experience: '3 years' },
        { id: 13, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', status: 'Rejected', salary: '3000', experience: '3 years' },
        { id: 14, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', status: 'Rejected', salary: '3000', experience: '3 years' },
        { id: 15, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', status: 'Rejected', salary: '3000', experience: '3 years' },
        { id: 16, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', status: 'Rejected', salary: '3000', experience: '3 years' },
        { id: 17, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', status: 'Rejected', salary: '3000', experience: '3 years' },
        { id: 18, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', status: 'Rejected', salary: '3000', experience: '3 years' },
        { id: 19, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', status: 'Rejected', salary: '3000', experience: '3 years' },
        { id: 20, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', status: 'Rejected', salary: '3000', experience: '3 years' },
        { id: 21, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', status: 'Rejected', salary: '3000', experience: '3 years' },
        { id: 22, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', status: 'Rejected', salary: '3000', experience: '3 years' },
        { id: 23, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', status: 'Rejected', salary: '3000', experience: '3 years' },
        { id: 24, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', status: 'Rejected', salary: '3000', experience: '3 years' },
        { id: 25, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', status: 'Rejected', salary: '3000', experience: '3 years' },
        { id: 26, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', status: 'Rejected', salary: '3000', experience: '3 years' },
    ]);

    const handleEdit = (id) => {
        // Implement edit functionality
        console.log(`Edit candidate with ID ${id}`);
    };

    const handleDelete = (id) => {
        // Implement delete functionality
        console.log(`Delete candidate with ID ${id}`);
    };

    const toggleCandidateModal = () => {
        setShowModal(!showModal);
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
            />
            {showModal && <Modal onClose={toggleCandidateModal} />}
        </div>
    );
};

export default Home;