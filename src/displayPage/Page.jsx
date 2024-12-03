import React from 'react';
import "./Page.css";
import Header from './Header';
import MainPage from './MainPage';
import Navbar from './Navbar';

function Page({}) {
    const [SelectedTabIdx,setSelectedTabIdx] = React.useState(0);
    const [IsNavSticky,setIsNavSticky] = React.useState(false);

    // React.useEffect(() => {
    //     const handleScroll = () => {
    //         console.log(window.scrollY , IsNavSticky);
    //         if ( window.scrollY < 100){
    //             setIsNavSticky(false);
    //         }
    //         if (window.scrollY > 100){
    //             setIsNavSticky(true);
    //         }
            
    //     };
    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

    return (
        <div className='Page'>
            <Header/>
            <MainPage {...{SelectedTabIdx}}/>
            <Navbar {...{SelectedTabIdx,setSelectedTabIdx,IsNavSticky}}/>
        </div>
    );
}

export default Page;