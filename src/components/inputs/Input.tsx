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
        <div>
            <label>{title}</label>
            <input id={id} type='text' value={value} onChange={onChange} className={`form-control ${inputClassName}`} />
            {error && <span>{error}</span>}
        </div>
    );
};
