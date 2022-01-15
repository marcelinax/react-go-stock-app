import { DefaultLayout } from './../layouts/DefaultLayout';
import { Form } from '../components/global/Form';
import React from 'react';

export const CreateProduct: React.FC = () => {
    return (
        <>
            <DefaultLayout>
                <Form>
                    <div className='row'></div>
                </Form>
            </DefaultLayout>
        </>
    );
};
