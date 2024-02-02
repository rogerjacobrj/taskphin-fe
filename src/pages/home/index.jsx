import CandidateTable from './components/table';
import { useState, useEffect } from 'react';
import customAxios from '../../configs';
import Modal from './components/modal';
import { ToastContainer } from 'react-toastify';
import { showNotification } from './components/form/utils';

const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [candidates, setCandidates] = useState([]);
    const [candidate, setCandidate] = useState(null);
    const [mode, setMode] = useState("create");

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
            showNotification("error", "Failed to fetch candidate list");
            isInitial && setIsLoading(false);
        }
    };

    const handleEdit = async (id) => {
        try {
            const response = await customAxios.get(`/candidates/${id}`);

            if (response && response.status >= 200 && response.status < 300 && response.data.status) {
                setMode("edit");
                setCandidate(response.data.data);
                setShowModal(true);
            }
        } catch (error) {
            showNotification("error", "Failed to fetch candidate details");
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await customAxios.delete(`/candidates/${id}`);

            if (response && response.status >= 200 && response.status < 300 && response.data.status) {
                fetchCandidates(false);
                showNotification("success", "Candidate record deleted");
            }
        } catch (error) {
            showNotification("error", "Failed to delete candidate record");
        }
    };

    const toggleCandidateModal = () => {
        setMode("create");
        setShowModal(!showModal);
        setCandidate(null);
    };

    const onCreate = (status) => {
        if (status) {
            toggleCandidateModal();
            fetchCandidates(false);
        }
    };

    return (
        <>
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
                    candidate={candidate}
                    mode={mode}
                />}
            </div>

            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
};

export default Home;