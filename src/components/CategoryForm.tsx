import { Form } from './global/Form';
import { Input } from './inputs/Input';
import { PrimaryButton } from './global/PrimaryButton';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
    onFormSubmit: (e: React.SyntheticEvent<HTMLFormElement>) => void;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    category: string;
    error: string;
    heading: string;
}
export const CategoryForm: React.FC<Props> = ({
    category,
    onFormSubmit,
    onInputChange,
    error,
    heading
}) => {

    const navigate = useNavigate();

    return (
        <Form onSubmit={onFormSubmit}> 
            <div className='col flex p-5'>
                <h1 className='fs-2 mb-4'>{heading}</h1>
                <div className='row'>
                    <Input id='name' onChange={onInputChange} value={category} title='Nazwa kategorii' error={error}/>
                </div>
                <div className='col mt-5'>
                    <PrimaryButton title='Zapisz' type='submit' className='bg-primary me-2'/>
                    <PrimaryButton type='button' title='Anuluj' className='bg-danger' onClick={()=>{navigate('/categories');}}/>
                </div>
            </div>
        </Form>
    );
};
