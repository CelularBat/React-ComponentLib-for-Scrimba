import React from 'react';
import NavbarItem from './components/NavbarItem';
import { nanoid } from 'nanoid';

function Navbar({SelectedTabIdx,setSelectedTabIdx}) {
    const navItems = ["Badge","Banner","Card","Testimonial","Tooltip","Toast"];

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
        <div className='Navbar'>
            {compNavItems}
        </div>
    );
}

export default Navbar;