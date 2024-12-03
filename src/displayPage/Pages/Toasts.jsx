import React from 'react';
import './Toasts.css'
import CompLib from '../../componentLib/CompLib_index';

function  Toasts({}) {
    const statuses = ["success",'warning',"error",'info'];

    const showStatuses = statuses.map((status) => { 
      return(
        <CompLib.Toast status={status}>

        </CompLib.Toast>); 
    });
    return (
        <div className='Toasts'>
            <h1 className='pageTitle'>Toasts</h1>
            <div className='container' style={{display:"grid",gridTemplate: "repeat(2, 1fr)/repeat(2, 1fr)" ,gap:"15px"}}>
                {showStatuses}
            </div>
            
        </div>
    );
}

export default  Toasts;