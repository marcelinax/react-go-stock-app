import {BiBox, BiListPlus, BiSitemap} from 'react-icons/bi';

import { Logo } from '../global/Logo';
import React from 'react';
import { SidebarLink } from '../global/SidebarLink';

export const Sidebar: React.FC = () => {
    return (
        <div className='sidebar bg-white shadow fixed top-0 left-0 h-100 py-5 px-2' >
            <Logo/>
            <SidebarLink title='Products' icon={<BiBox fill='#aaaaaf' size={22}/>} />
            <SidebarLink title='Categories' icon={<BiSitemap fill='#aaaaaf' size={22}/>} />
            <SidebarLink title='New Product' icon={<BiListPlus fill='#aaaaaf' size={22}/>} />
        </div>
    );
};
