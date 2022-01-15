import React, { useState } from 'react';

import { CategoriesSelect } from '../components/inputs/CategoriesSelect';
import { DefaultLayout } from './../layouts/DefaultLayout';
import { Form } from '../components/global/Form';
import { Input } from '../components/inputs/Input';
import { MeasureType } from '../enums/MeasureType';
import { MeasureTypesSelect } from '../components/inputs/MeasureTypesSelect';
import { PrimaryButton } from '../components/global/PrimaryButton';
import { Select } from '../components/inputs/Select';
import { TaxesSelect } from './../components/inputs/TaxesSelect';
import { apiClient } from './../api/apiClient';

export const CreateProduct: React.FC = () => {
    
    const [formDate, setFormDate] = useState<{name: string, measure_type: string, category_id: number,tax_id: number}>({
        name: '',
        measure_type: '',
        category_id: 0,
        tax_id:0
    });

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

  

    const createProduct = async (): Promise<void> => {
        await apiClient.post('products', {
            ...formDate,
            category_id: +formDate.category_id,
            tax_id: +formDate.tax_id,
            type: 'BASIC'
        });
    };

    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        createProduct();
    };


    return (
        <>
            <DefaultLayout>
                <Form onSubmit={onFormSubmit}>
                    <div className='row'>
                        <Input id='name' title='Nazwa' value={formDate.name} onChange={onInputChange} />
                        <MeasureTypesSelect value={formDate.measure_type} onChange={onSelectChange}/>
                        <CategoriesSelect onChange={onSelectChange} value={formDate.category_id} />
                        <TaxesSelect onChange={onSelectChange} value={formDate.tax_id} />
                    </div>
                    <div className='row'>
                        <PrimaryButton type='submit' title='Create'/>
                    </div>
                </Form>
            </DefaultLayout>
        </>
    );
};
