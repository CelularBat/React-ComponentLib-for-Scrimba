import React from 'react';
import "./Page.css";
import Header from './Header';
import MainPage from './MainPage';
import Navbar from './Navbar';

function Page({}) {
    const [SelectedTabIdx,setSelectedTabIdx] = React.useState(0);
    return (
        <div className='Page'>
            <Header/>
            <MainPage {...{SelectedTabIdx}}/>
            <Navbar {...{SelectedTabIdx,setSelectedTabIdx}}/>
        </div>
    );
}

export default Page;