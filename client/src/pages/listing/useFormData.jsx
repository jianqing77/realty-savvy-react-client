import { useState } from 'react';

export default function useFormData() {
    const [formData, setFormData] = useState({
        title: '',
        listingType: 'Lease', // default
        description: '',
        availableDate: '',
        price: '',
        propertyType: 'Apartment', // default
        address: '',
        city: '',
        state: '',
        zipCode: '',
        bedrooms: '',
        bathrooms: '',
        sqft: '',
        agentCompany: '',
        agentName: '',
        agentPhone: '',
        homeAge: '',
        petPolicy: [],
        imageUrls: [],
        refUrl: '',
        email: '',
    });

    const [formErrors, setFormErrors] = useState({});

    const formChangeHandler = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const validateForm = () => {
        const errors = {};
        const requiredFields = {
            title: formData.title,
            listingType: formData.listingType,
            price: formData.price,
            propertyType: formData.propertyType,
            address: formData.address,
            city: formData.city,
            state: formData.state,
            zipCode: formData.zipCode,
            bedrooms: formData.bedrooms,
            bathrooms: formData.bathrooms,
            agentCompany: formData.agentCompany,
            agentName: formData.agentName,
            email: formData.email,
        };

        // Check each field and add to errors if empty
        for (const key in requiredFields) {
            if (!requiredFields[key]) {
                errors[key] = 'This field is required';
            }
        }

        return errors;
    };

    return {
        formData,
        formErrors,
        setFormData,
        setFormErrors,
        formChangeHandler,
        validateForm,
    };
}
