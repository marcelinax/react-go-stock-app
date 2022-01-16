import React from 'react';

interface Props {
    className?: string,
    children: React.ReactNode,
    onSubmit: (e: React.SyntheticEvent<HTMLFormElement>) => void;
}

export const Form: React.FC<Props> = ({className, children,onSubmit}) => {
    return (
        <div className='bg-gray-100 border border-2 rounded-2 overflow-hidden border-gray-2 my-5'>
            <form onSubmit={onSubmit}>
                {children}
            </form>
        </div>
    );
};
