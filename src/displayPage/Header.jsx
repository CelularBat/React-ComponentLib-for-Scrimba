import React from 'react';
import './Header.css';

function Header({}) {
    return (
        <div className='Header'>
            <h1>React Component Library for Scrimba</h1>
            <a href="https://github.com/CelularBat/React-ComponentLib-for-Scrimba/tree/main/src/componentLib">
             https://github.com/CelularBat/React-ComponentLib-for-Scrimba
            </a>
            <span>by CelularBat</span>
        </div>
    );
}

export default Header;