import { Link, } from 'react-router-dom';
import React from 'react';
import { useLocation } from 'react-router-dom';

interface Props {
    icon: React.ReactNode,
    title: string,
    to: string
}

export const SidebarLink: React.FC<Props> = ({ icon, title,to }) => {
    
    const location = useLocation();

    return (
        <Link to={to} className={`sidebar-link text-decoration-none d-flex flex-column align-items-center justify-content-center p-2 w-100 mb-3 cursor-pointer position-relative ${to === location.pathname && 'sidebar-link--active'}`}>
            {icon}
            <span className={'mt-1 text fw-500 fs-6 text-gray'}>{title}</span>
        </Link>
    );
};
