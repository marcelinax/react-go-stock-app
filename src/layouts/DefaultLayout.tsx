import React from 'react';
import { Sidebar } from '../components/compositional/Sidebar';

interface Props {
    children: React.ReactNode
}
export const DefaultLayout: React.FC<Props> = ({children}) => {
    return (
        <div className='vh-100 vw-100 d-flex'>
            <Sidebar />
            <div className='container h-full mx-auto'>
                {children}
            </div>
        </div>
    );
};
