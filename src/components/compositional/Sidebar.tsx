import {BiHome, BiListPlus, BiPackage, BiSitemap, BiX} from 'react-icons/bi';

import { ButtonWithIcon } from '../global/ButtonWithIcon';
import { Logo } from '../global/Logo';
import React from 'react';
import { SidebarLink } from '../global/SidebarLink';
import { locales } from './../../Locales';

interface Props {
    isMobileSidebarOpen: boolean;
    isMobileSidebarHiding: boolean;
    onCloseMobileSidebarClick: () => void;
}

export const Sidebar: React.FC<Props> = ({isMobileSidebarOpen, isMobileSidebarHiding, onCloseMobileSidebarClick}) => {
    return (
        <div className={`sidebar bg-primary shadow position-fixed top-0 left-0 h-100 py-5 px-md-2 ${(isMobileSidebarOpen || isMobileSidebarHiding) && 'sidebar-mobile-open' } ${isMobileSidebarHiding && 'sidebar-mobile-hide'}`} >
            {isMobileSidebarOpen && <ButtonWithIcon icon={<BiX size={30} fill='#fff' />} onClick={onCloseMobileSidebarClick} className='position-absolute d-md-none top-1 left-0'/>}
            <Logo/>
            <SidebarLink to='/' title={locales.home} icon={<BiHome fill='white' size={22} />} />
            <SidebarLink to='/products' title={locales.products} icon={<BiPackage fill='white' size={22} />} />
            <SidebarLink to='/new-product' title={locales.add_product} icon={<BiListPlus fill='white' size={22}/>} />
            <SidebarLink to='/categories' title={locales.categories} icon={<BiSitemap fill='white' size={22}/>} />
            <SidebarLink to='/new-category' title={locales.add_category} icon={<BiListPlus fill='white' size={22} />} />
            <p className='position-absolute bottom-0 ms-3 text-white fs-8'>&copy; marcelinax</p>
        </div>
    );
};
