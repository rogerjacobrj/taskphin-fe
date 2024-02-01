import PropTypes from 'prop-types';
import SelectInput from './select';
import Input from './input';

const SkillItem = (props) => {

    const { id, field, value, handleChange, skillName, options } = props;

    return (
        <>
            <div className="skill-item flex space-x-4 items-center w-100 justify-between">
                <div>

                    <Input
                        type="text"
                        placeholder="Enter skill"
                        value={skillName}
                        handleChange={handleChange}
                        disabled={true}
                    />
                </div>
                <SelectInput
                    id={id}
                    field={field}
                    options={options}
                    value={value}
                    handleChange={handleChange}
                    isMulti={false}
                />
            </div>
        </>
    );
};

SkillItem.propTypes = {
    id: PropTypes.string,
    field: PropTypes.string,
    value: PropTypes.string,
    handleChange: PropTypes.func,
    skillName: PropTypes.string,
    error: PropTypes.string,
    options: PropTypes.array,
};
export default SkillItem;