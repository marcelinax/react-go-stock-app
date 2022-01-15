import React, { useState } from 'react';

import { CategoriesSelect } from '../components/inputs/CategoriesSelect';
import { DefaultLayout } from './../layouts/DefaultLayout';
import { Form } from '../components/global/Form';
import { Input } from '../components/inputs/Input';
import { MESSAGES } from './../messages/messages';
import { MeasureType } from '../enums/MeasureType';
import { MeasureTypesSelect } from '../components/inputs/MeasureTypesSelect';
import { PrimaryButton } from '../components/global/PrimaryButton';
import { Select } from '../components/inputs/Select';
import { TaxesSelect } from './../components/inputs/TaxesSelect';
import { apiClient } from './../api/apiClient';

export const CreateProduct: React.FC = () => {
    
    const [formDate, setFormDate] = useState<{name: string, measure_type: number, category_id: number,tax_id: number}>({
        name: '',
        measure_type: -1,
        category_id: 0,
        tax_id: 0
    });
    const [errors, setErrors] = useState<string[]>([]);

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
        console.log(e.target);
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
        }
        // if (error.response) {
        //     setErrors([...errors, error.response.data]);
        // } else {
        //     setErrors([...errors, MESSAGES.FORM_SUBMISSION_ERROR]);
        // }
    };

    const onFormSubmit = (e: React.SyntheticEvent<HTMLFormElement>): void => {
        e.preventDefault();
        createProduct();
    };

    const filterErrors = (value: string): string => {
        return errors.filter(err => {return err===value;})[0];
    };

    return (
        <>
            <DefaultLayout>
                <Form onSubmit={onFormSubmit}>
                    <div className='row'>
                        <Input id='name' title='Nazwa' value={formDate.name} onChange={onInputChange} error={filterErrors(MESSAGES.ENTER_PRODUCT_NAME)}/>
                        <MeasureTypesSelect value={formDate.measure_type} onChange={onSelectChange} error={filterErrors(MESSAGES.CHOOSE_MEASURE_TYPE)}/>
                        <CategoriesSelect onChange={onSelectChange} value={formDate.category_id} error={filterErrors(MESSAGES.CHOOSE_CATEGORY)}/>
                        <TaxesSelect onChange={onSelectChange} value={formDate.tax_id}error={filterErrors(MESSAGES.CHOOSE_TAX)} />
                    </div>
                    <div className='row'>
                        <PrimaryButton type='submit' title='Create' />
                    </div>
                </Form>
            </DefaultLayout>
        </>
    );
};
