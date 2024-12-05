import React from 'react';
import NavbarItem from './components/NavbarItem';
import { nanoid } from 'nanoid';
import classNames from 'classnames';
import { Pages_labels } from './Pages/Pages_index';


function Navbar({SelectedTabIdx,setSelectedTabIdx,IsNavSticky}) {
    const navItems = Pages_labels;

    const compNavItems=navItems.map((item,idx)=>{
        return(
            <NavbarItem key={nanoid()}
            selected={SelectedTabIdx===idx}
            onClick={()=>{setSelectedTabIdx(idx)}}>
                {item}
            </NavbarItem>
        )
    });

    return (
        <div className={classNames('Navbar',{sticky : IsNavSticky})}>
            {compNavItems}
        </div>
    );
}

export default Navbar;