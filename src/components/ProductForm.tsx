import { CategoriesSelect } from './inputs/CategoriesSelect';
import { Form } from './global/Form';
import { Input } from './inputs/Input';
import { MeasureTypesSelect } from './inputs/MeasureTypesSelect';
import { PrimaryButton } from './global/PrimaryButton';
import React from 'react';
import { TaxesSelect } from './inputs/TaxesSelect';

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
    buttonTitle: string;
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
    buttonTitle
}) => {
    return (
        <Form onSubmit={onFormSubmit}>
            <div className='row'>
                <Input id='name' title='Nazwa' value={name} onChange={onInputChange} error={nameError}/>
                <MeasureTypesSelect value={measure_type} onChange={onSelectChange} error={measure_typeError}/>
                <CategoriesSelect onChange={onSelectChange} value={category} error={categoryError}/>
                <TaxesSelect onChange={onSelectChange} value={tax} error={taxError} />
            </div>
            <div className='row'>
                <PrimaryButton type='submit' title={buttonTitle} />
            </div>
        </Form>
    );
};
