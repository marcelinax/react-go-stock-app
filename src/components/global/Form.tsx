import React from 'react';

interface Props {
    className?: string,
    children: React.ReactNode
}

export const Form: React.FC<Props> = ({className, children}) => {
    return (
        <div className='bg-light-gray border-1-gray'>
            <form>
                {children}
            </form>
        </div>
    );
};
