import {BiLaptop} from 'react-icons/bi';
import { DefaultLayout } from './../layouts/DefaultLayout';
import React from 'react';

export const Homepage: React.FC = () => {
    return (
        <DefaultLayout> 
            <div className='row vh-100'>
                <div className='col-12'>
                    <h1 className='text-center text-primary pt-5'>Witamy w panel Go STOCK</h1>
                </div>
                <div className='col-12 d-flex flex-column align-items-center justify-content-center homepage-content'>
                    <BiLaptop size={40}/>
                    <h3 className='text-center text-primary'>Wybierz akcję</h3>
                    <p className='text-primary fw-500'>z panelu</p>
                </div>
            </div>
            
        </DefaultLayout>
    );
};
