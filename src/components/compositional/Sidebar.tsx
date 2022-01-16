import {BiHome, BiListPlus, BiPackage, BiSitemap} from 'react-icons/bi';

import { Logo } from '../global/Logo';
import React from 'react';
import { SidebarLink } from '../global/SidebarLink';

export const Sidebar: React.FC = () => {
    return (
        <div className='sidebar bg-primary shadow position-fixed top-0 left-0 h-100 py-5 px-2' >
            <Logo/>
            <SidebarLink to='/' title='Home' icon={<BiHome fill='white' size={22} />} />
            <SidebarLink to='/products' title='Produkty' icon={<BiPackage fill='white' size={22} />} />
            <SidebarLink to='/new-product' title='Dodaj produkt' icon={<BiListPlus fill='white' size={22}/>} />
            <SidebarLink to='/categories' title='Kategorie' icon={<BiSitemap fill='white' size={22}/>} />
            <SidebarLink to='/new-category' title='Dodaj kategorię' icon={<BiListPlus fill='white' size={22}/>} />
        </div>
    );
};
