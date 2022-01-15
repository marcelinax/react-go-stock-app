import React from 'react';

interface Props {
    id: string;
    title: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputClassName?: string;
}

export const Input: React.FC<Props> = ({inputClassName, id, onChange, title, value}) => {
    return (
        <div>
            <label>{title}</label>
            <input id={id} type='text' value={value}onChange={onChange} className={`form-control ${inputClassName}`}/>
        </div>
    );
};
