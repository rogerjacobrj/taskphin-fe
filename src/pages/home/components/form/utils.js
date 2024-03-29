import { toast } from 'react-toastify';

export const initialFormState = {
    name: '',
    email: '',
    phone: '',
    salary: '',
    status: '',
    skills: {}
};

export const initialErrorState = {
    name: '',
    email: '',
    phone: '',
    salary: '',
    status: '',
    skills: ''
};

export const generatePayload = (formData) => {
    return {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        salary: formData.salary,
        status: formData.status.value,
        skills: {
            react: formData.skills.react,
            node: formData.skills.node
        }
    };
};

export const showNotification = (type, message) => {
    if (type === "success") {
        toast.success(message);
    } else {
        toast.error(message);
    }
};