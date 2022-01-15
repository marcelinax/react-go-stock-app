import { Form } from './global/Form';
import { Input } from './inputs/Input';
import { PrimaryButton } from './global/PrimaryButton';
import React from 'react';

interface Props {
    onFormSubmit: (e: React.SyntheticEvent<HTMLFormElement>) => void;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    category: string;
    error: string;
    buttonTitle: string;
}
export const CategoryForm: React.FC<Props> = ({
    category,
    onFormSubmit,
    onInputChange,
    error,
    buttonTitle
}) => {
    return (
        <Form onSubmit={onFormSubmit}> 
            <div className='row'>
                <Input id='name' onChange={onInputChange} value={category} title='Nazwa kategorii' error={error}/>
            </div>
            <div className='row'>
                <PrimaryButton title={buttonTitle} type='submit'/>
            </div>
        </Form>
    );
};
