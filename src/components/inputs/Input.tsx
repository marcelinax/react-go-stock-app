import React from 'react';

interface Props {
    id: string;
    title: string;
    value: string;
    error: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputClassName?: string;
}

export const Input: React.FC<Props> = ({inputClassName, id, onChange, title, value,error}) => {
    return (
        <div className='col'>
            <label className='fs-7 text-gray fw-500'>{title}</label>
            <input id={id} type='text' value={value} onChange={onChange} className={`form-control text-gray ${inputClassName}`} />
            {error && <span className='fs-7 text-danger fw-500'>{error}</span>}
        </div>
    );
};
