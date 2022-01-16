import React, { useState } from 'react';

import {BiMenu} from 'react-icons/bi';
import { ButtonWithIcon } from '../components/global/ButtonWithIcon';
import { Sidebar } from '../components/compositional/Sidebar';

interface Props {
    children: React.ReactNode
}
export const DefaultLayout: React.FC<Props> = ({ children }) => {
    
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
    const [isMobileSidebarHiding, setIsMobileSidebarHiding] = useState(false);

    


    return (
        <div className='h-100 w-100 d-flex'>
            <ButtonWithIcon icon={<BiMenu size={30} fill='#404C59' />} onClick={() => setIsMobileSidebarOpen(true)} className='position-absolute d-md-none'/>
            <Sidebar isMobileSidebarOpen={isMobileSidebarOpen} isMobileSidebarHiding={isMobileSidebarHiding} onCloseMobileSidebarClick={() => {
                setIsMobileSidebarOpen(false);
                setIsMobileSidebarHiding(true);
                setTimeout(() => {
                    setIsMobileSidebarHiding(false);
                }, 490);
            }}/>
            <div className='h-full w-100 content'>
                <div className='container mx-auto h-100'>
                    {children}
                </div>
            </div>
        </div>
    );
};
