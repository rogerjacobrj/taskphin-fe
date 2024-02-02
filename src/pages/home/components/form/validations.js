export const validateDetails = (formData) => {
    let isValid = true;
    const newFormErrors = {};

    // Validate Name
    if (!/^[a-zA-Z.\s]+$/.test(formData.name.trim())) {
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

    // Validate applicant status
    if (Object.keys(formData.status).length === 0) {
        isValid = false;
        newFormErrors.status = 'Enter the status of applicant';
    }

    // Validate skills
    if (Object.keys(formData.skills).length === 0) {
        isValid = false;
        newFormErrors.skills = 'Enter valid experience';
    }

    // Validate salary
    if (formData.salary <= 0) {
        isValid = false;
        newFormErrors.salary = 'Enter a valid salary';
    }

    return {
        isValid,
        newFormErrors
    }
};