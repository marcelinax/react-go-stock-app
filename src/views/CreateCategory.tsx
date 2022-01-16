import React, { useState } from 'react';

import { CategoryForm } from './../components/CategoryForm';
import { DefaultLayout } from './../layouts/DefaultLayout';
import { MESSAGES } from './../messages/messages';
import { apiClient } from './../api/apiClient';
import { locales } from './../Locales';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const CreateCategory: React.FC = () => {

    const [category, setCategory] = useState<string>('');
    const [errors, setErrors] = useState<string[]>([]);
    const navigate = useNavigate();

    const checkValidation = (): boolean => {
        if (!category) {
            setErrors([...errors, MESSAGES.ENTER_CATEGORY_NAME]);
            return false;
        }
        else {
            setErrors([]);
            return true;
        }
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setCategory(e.target.value);
    };

    const createCategory = async (): Promise<void> => {
        if (checkValidation()) {
            await apiClient.post('product_categories/' , {
                name: category
            });
            setErrors([]);
            navigate('/categories');
        }
    };

    const onFormSubmit = (e: React.SyntheticEvent<HTMLFormElement>): void => {
        e.preventDefault();
        createCategory();
        toast.success(locales.category_added_successfully);
    };

    return (
        <DefaultLayout>
            <CategoryForm heading={locales.add_category} onFormSubmit={onFormSubmit} category={category} onInputChange={onInputChange} error={errors.filter(err => { return MESSAGES.ENTER_CATEGORY_NAME === err; })[0]}/>
        </DefaultLayout>
    );
};
