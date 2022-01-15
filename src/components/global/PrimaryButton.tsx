import React from 'react';

interface Props {
    title: string;
    type: 'button' | 'submit' | 'reset' ;
    className?: string;
    onClick?: () => void;
    
}

export const PrimaryButton: React.FC<Props> = ({title,type,className,onClick}) => {
    return (
        <button type={type} onClick={onClick} className={`${className}`}>{title}</button>
    );
};
