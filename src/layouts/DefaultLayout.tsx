import React from 'react';
import { Sidebar } from '../components/compositional/Sidebar';

interface Props {
    children: React.ReactNode
}
export const DefaultLayout: React.FC<Props> = ({children}) => {
    return (
        <div className='h-100 w-100 d-flex'>
            <Sidebar />
            <div className='h-full w-100 content'>
                <div className='container mx-auto h-100'>
                    {children}
                </div>
            </div>
        </div>
    );
};
