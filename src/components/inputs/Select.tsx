import React from 'react';

interface Props {
    children: React.ReactNode;
    title: string;
    value: string | number;
    error: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    id: string;
}

export const Select: React.FC<Props> = ({children, title, value, onChange, id, error}) => {
    return (
        <div className='col'>
            <label className='fs-7 text-gray fw-500'>{title}</label>
            <select id={id} value={value} onChange={onChange} className='w-100 text-gray rounded-2'>
                {children}
            </select>
            {error && <span className='fs-7 text-danger fw-500'>{error}</span>}
        </div>
    );
};
