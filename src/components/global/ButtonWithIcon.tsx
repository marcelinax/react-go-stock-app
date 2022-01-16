import React from 'react';

interface Props {
    icon: React.ReactNode;
    className?: string;
    onClick: () => void;
}

export const ButtonWithIcon: React.FC<Props> = ({icon, className, onClick}) => {
    return (
        <button onClick={onClick} className={`btn ${className}`}>
            {icon}
        </button>
    );
};
