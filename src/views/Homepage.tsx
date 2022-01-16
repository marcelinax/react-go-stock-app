import {BiLaptop} from 'react-icons/bi';
import { DefaultLayout } from './../layouts/DefaultLayout';
import React from 'react';
import { locales } from './../Locales';

export const Homepage: React.FC = () => {
    return (
        <DefaultLayout> 
            <div className='row vh-100'>
                <div className='col-12'>
                    <h1 className='text-center text-primary pt-5'>{locales.welcome_to_panel_go_stock}</h1>
                </div>
                <div className='col-12 d-flex flex-column align-items-center justify-content-center homepage-content'>
                    <BiLaptop size={40}/>
                    <h3 className='text-center text-primary'>{locales.choose_action}</h3>
                    <p className='text-primary fw-500'>{locales.from_panel}</p>
                </div>
            </div>
            
        </DefaultLayout>
    );
};
