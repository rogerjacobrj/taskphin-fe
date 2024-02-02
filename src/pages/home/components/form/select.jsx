import PropTypes from 'prop-types';
import Select from "react-select";

const SelectInput = (props) => {

    const { label, id, value, options, handleChange, field, isMulti, error } = props;

    return (
        <>
            {label && <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
                {label}
            </label>}
            <Select
                id={id}
                options={options && options.map(item => {
                    return { label: item.label, value: item.value }
                })}
                value={value}
                onChange={(selectedOption) => handleChange(field, selectedOption)}
                isMulti={isMulti}
                className="react-select-container"
                classNames={{
                    control: () => "react-select-control"
                }}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </>
    );
};

SelectInput.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string,
    field: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    handleChange: PropTypes.func,
    error: PropTypes.string,
    options: PropTypes.array,
    isMulti: PropTypes.bool
};

export default SelectInput;