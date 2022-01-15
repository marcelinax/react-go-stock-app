import React, { useState } from 'react';

import { DefaultLayout } from './../layouts/DefaultLayout';
import { Form } from '../components/global/Form';
import { Input } from '../components/inputs/Input';
import { MESSAGES } from './../messages/messages';
import { PrimaryButton } from '../components/global/PrimaryButton';
import { apiClient } from './../api/apiClient';

export const CreateCategory: React.FC = () => {

    const [category, setCategory] = useState<string>('');
    const [errors, setErrors] = useState<string[]>([]);


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
        }
    };

    const onFormSubmit = (e: React.SyntheticEvent<HTMLFormElement>): void => {
        e.preventDefault();
        createCategory();
    };

    return (
        <DefaultLayout>
            <Form onSubmit={onFormSubmit}> 
                <div className='row'>
                    <Input id='name' onChange={onInputChange} value={category} title='Nazwa kategorii' error={errors.filter(err => {return MESSAGES.ENTER_CATEGORY_NAME === err;})[0]}/>
                </div>
                <div className='row'>
                    <PrimaryButton title='Stwórz' type='submit'/>
                </div>
            </Form>
        </DefaultLayout>
    );
};
