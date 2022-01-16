import {BiSearchAlt2} from 'react-icons/bi';
import React from 'react';

interface Props{
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;  
}

export const Search: React.FC<Props> = ({placeholder, value, onChange}) => {
    return (
        <div className='row align-items-center'>
            <div className='col  position-relative'>
                <input type='text' placeholder={placeholder} value={value} onChange={onChange} className='form-control text-gray pe-5'/>
                <BiSearchAlt2 fill='gray' className='position-absolute top-50 end-0 translate-middle me-3' />
            </div>
        </div>
    );
};
