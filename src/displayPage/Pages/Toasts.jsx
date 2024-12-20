import React from 'react';
import CompLib from '../../componentLib/CompLib_index';
import { nanoid } from 'nanoid';
import DisplayCode from '../components/DisplayCode';

function  Toasts({}) {
    const [PickedToastType,setPickedToastType] = React.useState("info");
    const [PickedToasttitle,setPickedToasttitle] = React.useState("Hello!");
    const [PickedToastText,setPickedToastText] = React.useState("Click on example to try me out!");

    

    const statuses = ["success",'warning',"error",'info'];

    const showStatuses = statuses.map((status) => { 
      return(
        <CompLib._Toast_static key={nanoid()} status={status} 
        onClick={()=>{
                setPickedToastType(status) ;
                setPickedToastText(`Toast status="${status}"`) 
                
            }
        }
        style={{cursor:"grab"}}>

        </CompLib._Toast_static>); 
    });

    return (
        <div className='Toasts'>
            <h1 className='pageTitle'>Toasts</h1>
            <DisplayCode 
                code= {`<CompLib.Toast status="success|warning|error|info" title="Title"
posX="50vw" posY="10vh" timeOut={5000} animated={true|false} {...rest}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
</CompLib.Toast>`} />

            <br/>
            <div className='container' style={{display:"grid",gridTemplate: "repeat(2, 1fr)/repeat(2, 1fr)" ,gap:"15px"}}>
                {showStatuses}
            </div>
            
            { PickedToastType && 
                
                    <CompLib.Toast status={PickedToastType} title={PickedToasttitle}
                    posY="15vh" posX="65vw" timeOut={5000} animated={true}
                    >
                        {PickedToastText}
                       
                    </CompLib.Toast>
               
            }

        </div>
    );
}

export default  Toasts;