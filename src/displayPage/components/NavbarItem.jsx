import React from 'react';
import './NavbarItem.css'
import classNames from 'classnames';

function  NavbarItem({children,selected,onClick}) {
    return (
        <div className={classNames('NavbarItem', {selected})} onClick={onClick}>
            <div className="NavbarItem--text">{children}</div>
        </div>
    );
}

export default  NavbarItem;