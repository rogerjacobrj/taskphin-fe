// FormPage.js
import { useState } from 'react';
import Input from './components/input';
import SelectInput from './components/select';
import { skills, status, experience } from '../../constants';
import SkillItem from './components/skillItem';

const FormPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        salary: '',
        applicationStatus: null,
    });

    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        phone: '',
        applicationStatus: ''
    });

    const handleChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value,
        });

        // Clear the error message when the user starts typing
        setFormErrors({
            ...formErrors,
            [field]: '',
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        // Simple validation
        let isValid = true;
        const newFormErrors = {};

        // Validate Name
        if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
            isValid = false;
            newFormErrors.name = 'Name should only contain letters and spaces';
        }

        // Validate Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email.trim())) {
            isValid = false;
            newFormErrors.email = 'Enter a valid email address';
        }

        // Validate Phone (Allow only numbers)
        if (!/^\d+$/.test(formData.phone.trim())) {
            isValid = false;
            newFormErrors.phone = 'Phone should only contain numbers';
        }

        // Set errors and prevent form submission if validation fails
        if (!isValid) {
            setFormErrors(newFormErrors);
            return;
        }

        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    const onClose = () => {}

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
                        id="applicationStatus"
                        field="applicationStatus"
                        options={status}
                        value={formData.applicationStatus}
                        handleChange={handleChange}
                        error={formErrors.applicationStatus}
                        isMulti={false}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Skills</label>

                    {skills && skills.map(item => {
                        return <div className='flex space-x-4 mb-3' key={item.field}>
                            <SkillItem
                                skillName={item.title}
                                field={item.field}
                                options={experience}
                                handleChange={handleChange}
                            />
                        </div>
                    })}
                </div>

                <div className="mb-4">
                    <Input
                        type="number"
                        label="Expected Salary"
                        id="salary"
                        field="salary"
                        placeholder="Enter your expected salary"
                        value={formData.salary}
                        handleChange={handleChange}
                        error={formErrors.salary}
                    />
                </div>

                <button
                    type="submit"
                    className="w-40 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    onClick={handleSubmit}>
                    Submit
                </button>
                <button
                    type="button"
                    className="ml-3 bg-gray-300 text-gray-800 px-4 py-2 rounded-md mr-2"
                    onClick={onClose}
                >
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default FormPage;