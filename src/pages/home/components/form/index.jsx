import { useState, useEffect } from 'react';
import Input from './input';
import SelectInput from './select';
import { skills, status, experience } from '../../../../constants';
import SkillItem from './skillItem';
import PropTypes from 'prop-types';
import customAxios from '../../../../configs';
import { validateDetails } from './validations';
import { initialErrorState, initialFormState, generatePayload } from './utils';
import { showNotification } from './utils';

const ApplicantForm = (props) => {

    const { onClose, onCreate, candidate, mode } = props;

    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState(initialFormState);

    const [formErrors, setFormErrors] = useState(initialErrorState);

    const handleChange = (field, value) => {
        if (field === "react" || field === "node") {
            const skills = {
                ...formData.skills,
                [field]: value.value,
            };

            setFormData({
                ...formData,
                skills
            });
        } else {
            setFormData({
                ...formData,
                [field]: value,
            });
        }

        // Clear the error message when the user starts typing
        setFormErrors({
            ...formErrors,
            [field]: '',
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { isValid, newFormErrors } = validateDetails(formData);

        if (!isValid) {
            setFormErrors(newFormErrors);
            return;
        }

        let errorMessage = `Failed to ${mode === "create" ? "add" : "update"} candidate record`;

        try {
            const payload = generatePayload(formData);

            setIsLoading(true);

            let response = '';
            let message = '';

            if (mode === "create") {
                message = 'Added candidate record';
                response = await customAxios.post('/candidates', payload);
            } else {
                message = 'Updated candidate record';
                response = await customAxios.put(`/candidates/${candidate[0].candidateid}`, payload);
            }

            if (response && response.status >= 200 && response.status < 300) {
                showNotification("success", message);
                onCreate(true);
                setIsLoading(false);
            } else {
                onCreate(false);
                setIsLoading(false);
                showNotification("error", errorMessage);
            }
        } catch (error) {
            onCreate(false);
            setIsLoading(false);
            showNotification("error", errorMessage);
        }
    };

    useEffect(() => {
        if (candidate && candidate.length > 0) {
            const candidateStatus = status.find(item => item.value === candidate[0].status);

            const data = {
                ...candidate[0],
                status: candidateStatus,
            };

            setFormData(data);
        }
    }, [candidate]);

    return (
        <div className="add-candidate container mx-auto mt-8">
            <form>
                <div className="mb-4">
                    <Input
                        type="text"
                        label="Name"
                        id="name"
                        field="name"
                        placeholder="Enter Full Name"
                        value={formData.name}
                        handleChange={handleChange}
                        error={formErrors.name}
                    />
                </div>

                <div className="mb-4">
                    <Input
                        type="email"
                        label="Email"
                        id="email"
                        field="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        handleChange={handleChange}
                        error={formErrors.email}
                    />
                </div>

                <div className="mb-4">
                    <Input
                        type="tel"
                        label="Phone"
                        id="phone"
                        field="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        handleChange={handleChange}
                        error={formErrors.phone}
                    />
                </div>

                <div className="mb-4">
                    <SelectInput
                        label="Status"
                        id="status"
                        field="status"
                        options={status}
                        value={Object.keys(formData.status).length > 0 ? formData.status : ''}
                        handleChange={handleChange}
                        error={formErrors.status}
                        isMulti={false}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Skills</label>

                    {skills && skills.map(item => {
                        return <div className='flex space-x-4 mb-3' key={item.field}>
                            <SkillItem
                                skillName={item.label}
                                field={item.field}
                                options={experience}
                                handleChange={handleChange}
                                value={formData && formData.skills ? formData.skills[item.field] : {}}
                            />
                        </div>
                    })}

                    {formErrors.skills && <p className="text-red-500 text-sm mt-1">{formErrors.skills}</p>}
                </div>

                <div className="mb-4">
                    <Input
                        type="number"
                        label="Expected Salary($)"
                        id="salary"
                        field="salary"
                        placeholder="Enter your expected salary in USD"
                        value={formData.salary}
                        handleChange={handleChange}
                        error={formErrors.salary}
                    />
                </div>

                {mode === "create" && <button
                    type="submit"
                    className="w-40 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    onClick={handleSubmit}>
                    {isLoading ? "Adding..." : "Add Candidate"}
                </button>}

                {mode === "edit" && <button
                    type="submit"
                    className="w-40 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    onClick={handleSubmit}>
                    {isLoading ? "Saving..." : "Save"}
                </button>}

                <button
                    type="button"
                    className="ml-3 bg-gray-300 text-gray-800 px-4 py-2 rounded-md mr-2"
                    onClick={onClose}>
                    Cancel
                </button>
            </form>
        </div>
    );
};

ApplicantForm.propTypes = {
    candidate: PropTypes.array,
    onClose: PropTypes.func,
    onCreate: PropTypes.func,
    mode: PropTypes.string,
};

export default ApplicantForm;