import React from 'react';

interface Props {
    className?: string,
    children: React.ReactNode,
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const Form: React.FC<Props> = ({className, children,onSubmit}) => {
    return (
        <div className='bg-light-gray border-1-gray'>
            <form onSubmit={onSubmit}>
                {children}
            </form>
        </div>
    );
};
