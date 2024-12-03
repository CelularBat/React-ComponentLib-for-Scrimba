import React from 'react';
import './Banners.css';
import CompLib from '../../componentLib/CompLib_index';

function  Banners({}) {
    const lines = ["single","multi"];
    const statuses = ["success",'warning',"error",'info'];



    const showSingle = statuses.map((status) => { 
      return(
        <div className='flexRow' style={{width:"100%", gap:"20px"}} > 
            <h3 className='arrayLabel-sm'>{status}</h3>
            <CompLib.Banner line="single" status={status}></CompLib.Banner>
        </div>
    ); 
    });

    const showMulti = statuses.map((status) => { 
        return(
        <div className='flexRow' style={{width:"100%", gap:"20px"}} > 
        <h3 className='arrayLabel-sm'>{status}</h3>
            <CompLib.Banner line="multi" status={status}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
            </CompLib.Banner>
            </div>
        ); 
        
      });

    return (
        <div className='Banners'>
            <h1 className='pageTitle'>Banners</h1>
            <h3 className='arrayLabel'>Multi lines:</h3>
            <div className='flexCol'>
            {showMulti}
            </div>
            <br/>
            <h3 className='arrayLabel'>Single lines:</h3>
            <div className='flexCol'>
            {showSingle}
            </div>
        </div>
    );
}

export default  Banners;