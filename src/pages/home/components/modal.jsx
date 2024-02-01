import PropTypes from 'prop-types';
import FormPage from './form';

const Modal = (props) => {

    const { candidates, onEdit, onDelete, onAdd, onClose, onCreate } = props;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-md shadow-md max-w-2xl  max-h-99 w-full overflow-y-auto">
                <h2 className="text-2xl font-bold mb-4">Add New Candidate</h2>
                <FormPage onClose={onClose} onCreate={onCreate} />
            </div>
        </div>
    );
};

Modal.propTypes = {
    candidates: PropTypes.array,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
    onAdd: PropTypes.func,
    onClose: PropTypes.func,
    onCreate: PropTypes.func
};

export default Modal;