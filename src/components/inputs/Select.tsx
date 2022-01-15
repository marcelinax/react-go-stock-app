import React from 'react';

interface Props {
    children: React.ReactNode;
    title: string;
    value: string | number; 
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    id: string;
}

export const Select: React.FC<Props> = ({children, title, value, onChange, id}) => {
    return (
        <div>
            <label>{title}</label>
            <select id={id} value={value} onChange={onChange}>
                {children}
            </select>
        </div>
    );
};
