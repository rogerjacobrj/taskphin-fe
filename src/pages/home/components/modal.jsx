import PropTypes from 'prop-types';
import ApplicantForm from './form';

const Modal = (props) => {

    const { candidate, onClose, onCreate, mode } = props;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-md shadow-md max-w-2xl  max-h-screen overflow-scroll w-full">
                <h2 className="text-2xl font-bold mb-4">{mode === "create" ? "Add New" : "Update"} Candidate</h2>
                <ApplicantForm
                    candidate={candidate}
                    onClose={onClose}
                    onCreate={onCreate}
                    mode={mode}
                />
            </div>
        </div>
    );
};

Modal.propTypes = {
    candidate: PropTypes.array,
    onClose: PropTypes.func,
    onCreate: PropTypes.func,
    mode: PropTypes.string,
};

export default Modal;