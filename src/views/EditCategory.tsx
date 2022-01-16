import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Category } from './../models/Category';
import { CategoryForm } from '../components/CategoryForm';
import { DefaultLayout } from './../layouts/DefaultLayout';
import { MESSAGES } from './../messages/messages';
import { apiClient } from './../api/apiClient';
import { toast } from 'react-toastify';

export const EditCategory: React.FC = () => {

    const [category, setCategory] = useState<Category | null>(null);
    const [categoryName, setCategoryName] = useState<string>('');
    const [errors, setErrors] = useState<string[]>([]);

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchCategoryById();
    }, []);
    
    useEffect(() => {
        if(category)
            setCategoryName(category.name);
    },[category]);

    const fetchCategoryById = async (): Promise<void> => {
        await apiClient.get(`product_categories/${params.id}`).then(res => setCategory(res.data.data));
    };

    const editCategory = async (): Promise<void> => {
        if (checkValidation()) {
            await apiClient.put(`product_categories/${params.id}`, {
                name: categoryName
            });
            setErrors([]);
            navigate('/categories');
        }
       
    };

    const checkValidation = (): boolean => {
        if (!categoryName) {
            setErrors([...errors, MESSAGES.ENTER_CATEGORY_NAME]);
            return false;
        }
        else {
            setErrors([]);
            return true;
        }
    };
    
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setCategoryName(e.target.value);
    };


    const onFormSubmit = (e: React.SyntheticEvent<HTMLFormElement>): void => {
        e.preventDefault();
        editCategory();
        toast.success('Kategoria zedytowana pomyślnie');
    };

    return (
        <DefaultLayout>
            <CategoryForm heading='Edytuj kategorię' category={categoryName} onInputChange={onInputChange} 
                error={errors.filter(err => { return MESSAGES.ENTER_CATEGORY_NAME === err; })[0]} onFormSubmit={onFormSubmit} />
        </DefaultLayout>
    );
};
