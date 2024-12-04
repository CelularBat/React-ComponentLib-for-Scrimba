import React from 'react';
import CompLib from '../../componentLib/CompLib_index';
import { nanoid } from 'nanoid';


function  Toasts({}) {
    const [PickedToastType,setPickedToastType] = React.useState();

    const statuses = ["success",'warning',"error",'info'];

    const showStatuses = statuses.map((status) => { 
      return(
        <CompLib._Toast_static key={nanoid()} status={status} 
        onClick={()=>setPickedToastType(status)} style={{cursor:"grab"}}>

        </CompLib._Toast_static>); 
    });

    return (
        <div className='Toasts'>
            <h1 className='pageTitle'>Toasts</h1>
            <div className='container' style={{display:"grid",gridTemplate: "repeat(2, 1fr)/repeat(2, 1fr)" ,gap:"15px"}}>
                {showStatuses}
            </div>
            
            { PickedToastType && 
                
                    <CompLib.Toast status={PickedToastType} title="Test !"
                    posY="10vh" posX="50vw" timeOut={5000} animated={true}
                    >
                        Toast status="{PickedToastType}"
                    </CompLib.Toast>
               
            }

        </div>
    );
}

export default  Toasts;