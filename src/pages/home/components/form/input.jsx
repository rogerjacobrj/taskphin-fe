import PropTypes from 'prop-types';

const Input = (props) => {

    const { type, label, id, field, placeholder, value,
        handleChange, error, disabled } = props;

    return (
        <>
            {label && <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={field}>
                {label}
            </label>}
            <input
                type={type}
                id={id}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder={placeholder}
                value={value}
                onChange={(e) => handleChange(field, e.target.value)}
                disabled={disabled}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </>
    );
};

Input.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.string,
    field: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    handleChange: PropTypes.func,
    error: PropTypes.string,
    disabled: PropTypes.bool,
};

export default Input;