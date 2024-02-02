import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import SelectInput from './select';
import Input from './input';
import { experience } from '../../../../constants';

const SkillItem = (props) => {
    
    const [selectOption, setSelectOption] = useState('');

    const { id, field, handleChange, skillName, options, value, error } = props;

    useEffect(() => {
        if (value && value.length > 0) {
            const option = experience.find(item => item.value === value);
            setSelectOption(option);
        }
    }, [value]);

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
                    value={selectOption}
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
    handleChange: PropTypes.func,
    skillName: PropTypes.string,
    options: PropTypes.array,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    error: PropTypes.string,
};

export default SkillItem;