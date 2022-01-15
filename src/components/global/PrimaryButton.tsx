import React from 'react';

interface Props {
    title: string;
    type: 'button' | 'submit' | 'reset' ;
    className?: string;
    
}

export const PrimaryButton: React.FC<Props> = ({title,type,className}) => {
    return (
        <button type={type} className={`${className}`}>{title}</button>
    );
};
