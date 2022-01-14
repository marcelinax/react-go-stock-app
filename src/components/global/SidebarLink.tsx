import React from 'react';

interface Props {
    icon: React.ReactNode,
    title: String
}

export const SidebarLink: React.FC<Props> = ({icon, title}) => {
    return (
        <div className='sidebar-link d-flex flex-column align-items-center p-2 w-100 mb-3 cursor-pointer'>
            {icon}
            <p className='text-gray mt-1 text fw-500 fs-6'>{title}</p>
        </div>
    );
};
