import React from 'react';
import './compLib.css';
import classNames from 'classnames';

function Card({children,title,icon,iconColor="#3F75FE"}) {
    let defaultIcon=<svg width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
    <path d="M7 16C4.79086 16 3 14.2091 3 12C3 10.0929 4.33457 8.4976 6.12071 8.09695C6.04169 7.74395 6 7.37684 6 7C6 4.23858 8.23858 2 11 2C13.4193 2 15.4373 3.71825 15.9002 6.00098C15.9334 6.00033 15.9666 6 16 6C18.7614 6 21 8.23858 21 11C21 13.419 19.2822 15.4367 17 15.9M15 13L12 10M12 10L9 13M12 10L12 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    

    if (icon){defaultIcon=icon}
    return (
        <div className={classNames("CompLib-Card")}>
            <div className='icon' style={{fill:iconColor, background:iconColor}}>
                {defaultIcon}
            </div>

            <div className='header'>{title}</div>
            <div className='text'>{children}</div>

            
            
        </div>
    );
}

export default Card;