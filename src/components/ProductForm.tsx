import { CategoriesSelect } from './inputs/CategoriesSelect';
import { Form } from './global/Form';
import { Input } from './inputs/Input';
import { MeasureTypesSelect } from './inputs/MeasureTypesSelect';
import { PrimaryButton } from './global/PrimaryButton';
import React from 'react';
import { TaxesSelect } from './inputs/TaxesSelect';
import { locales } from './../Locales';
import { useNavigate } from 'react-router-dom';

interface Props {
    onFormSubmit: (e: React.SyntheticEvent<HTMLFormElement>) => void;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    tax: number;
    category: number;
    name: string;
    measure_type: number,
    measure_typeError: string;
    taxError: string;
    categoryError: string;
    nameError: string;
    heading: string;
}

export const ProductForm: React.FC<Props> = ({
    onFormSubmit,
    onInputChange,
    onSelectChange,
    measure_type,
    name,
    category,
    tax,
    measure_typeError,
    categoryError,
    nameError,
    taxError,
    heading
}) => {

    const navigate = useNavigate();

    return (
        <Form onSubmit={onFormSubmit}>
            <div className='col flex p-5'>
                <h1 className='fs-2 mb-4'>{heading}</h1>
                <div className='row'>
                    <Input id='name' title={locales.name} value={name} onChange={onInputChange} error={nameError}/>
                </div>
                <div className='row mt-md-4'>
                    <div className='col-12 col-md-4'>
                        <MeasureTypesSelect value={measure_type} onChange={onSelectChange} error={measure_typeError} />
                    </div>
                    <div className='col-12 col-md-4'>
                        <CategoriesSelect onChange={onSelectChange} value={category} error={categoryError} />
                    </div>
                    <div className='col-12 col-md-4'>
                        <TaxesSelect onChange={onSelectChange} value={tax} error={taxError} />
                    </div>
                </div>
                <div className='col mt-5'>
                    <PrimaryButton type='submit' title={locales.save} className='bg-primary me-2'/>
                    <PrimaryButton type='button' title={locales.cancel} className='bg-danger' onClick={()=>{navigate('/products');}}/>
                </div>
            </div>
        </Form>
    );
};
