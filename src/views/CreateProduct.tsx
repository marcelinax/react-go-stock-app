import React, { useState } from 'react';

import { DefaultLayout } from './../layouts/DefaultLayout';
import { MESSAGES } from './../messages/messages';
import { ProductForm } from './../components/ProductForm';
import { apiClient } from './../api/apiClient';
import { locales } from './../Locales';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const CreateProduct: React.FC = () => {
    
    const [formDate, setFormDate] = useState<{name: string, measure_type: number, category_id: number,tax_id: number}>({
        name: '',
        measure_type: -1,
        category_id: 0,
        tax_id: 0
    });
    const [errors, setErrors] = useState<string[]>([]);
    const navigate = useNavigate();

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { id, value } = e.target;
        setFormDate({
            ...formDate,
            [id]: value
        });
    };

    const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) : void => {
        const { id, value } = e.target;
        setFormDate({
            ...formDate,
            [id]: value
        });
    };

    const checkValidation = (): boolean => {
        let isValid = true;
        const errs = [];
        if (formDate.tax_id === 0) {
            errs.push(MESSAGES.CHOOSE_TAX);
            isValid = false;
            
        }
        if (formDate.category_id === 0) {
            errs.push( MESSAGES.CHOOSE_CATEGORY);
            isValid = false;
        }
        if (formDate.measure_type === -1) {
            errs.push( MESSAGES.CHOOSE_MEASURE_TYPE);
            isValid = false;
        }
        if (!formDate.name) {
            errs.push( MESSAGES.ENTER_PRODUCT_NAME);
            isValid = false;
        }
        setErrors([...errs]);
        return isValid;
    };

    const createProduct = async (): Promise<void> => {
        if (checkValidation()) {
            await apiClient.post('products', {
                ...formDate,
                category_id: +formDate.category_id,
                tax_id: +formDate.tax_id,
                type: 'BASIC'
            });
            setErrors([]);
            navigate('/products');
            toast.success(locales.product_added_successfully);
        }
    };

    const onFormSubmit = (e: React.SyntheticEvent<HTMLFormElement>): void => {
        e.preventDefault();
        createProduct();
    };

    const filterErrors = (value: string): string => {
        return errors.filter(err => {return err === value;})[0];
    };

    return (
        <DefaultLayout>
            <ProductForm heading={locales.add_product} category={formDate.category_id} tax={formDate.tax_id} measure_type={formDate.measure_type} name={formDate.name} onFormSubmit={onFormSubmit}
                categoryError={filterErrors(MESSAGES.CHOOSE_CATEGORY)} measure_typeError={filterErrors(MESSAGES.CHOOSE_MEASURE_TYPE)} nameError={filterErrors(MESSAGES.ENTER_PRODUCT_NAME)}
                taxError={filterErrors(MESSAGES.CHOOSE_TAX)} onInputChange={onInputChange} onSelectChange={onSelectChange} 
            />
        </DefaultLayout>
    );
};
