import React from 'react';
import CompLib from '../../componentLib/CompLib_index';
import { nanoid } from 'nanoid';
import DisplayCode from '../components/DisplayCode';


function  Tooltips({}) {
    const colors= ["black","blue","pink","green"];
    const styles = ["light","bold"];

     const [TooltipProps,setTooltipProps] = React.useState(
        {color: "black",
        type:"light", 
        title:'Check me out!',
        text: "Check me out!",
        posX: "3000px",
        posY: "3000px"

     });


    const showLight = colors.map((color) => { 
      return(
        <CompLib._Tooltip_static key={nanoid()} title="Archive notes" type="light" color={color}
        style={{cursor:"grab"}}
        onClick={(e)=>{setTooltipProps( prev=>
            ({...prev,
                color: color,
                type: "light",
                text: `type="light" color="${color}"`,
                posX: `${e.clientX}px`,
                posY: `${e.clientY}px`

            }) 
        )}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
        </CompLib._Tooltip_static>
      ); 
    });

    const showBold = colors.map((color) => { 
        return(
          <CompLib._Tooltip_static key={nanoid()}  title="Archive notes" type="bold" color={color}
          style={{cursor:"grab"}}
          onClick={(e)=>{setTooltipProps( prev=>
                ({...prev,
                    color: color,
                    type: "bold",
                    text: `type="bold" color="${color}"`,
                    posX: `${e.clientX}px`,
                    posY: `${e.clientY}px`

                }) 
          )}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
          </CompLib._Tooltip_static>
        ); 
      });

    return (
        <div className='Tooltips'>
            <h1 className='pageTitle'>Tooltips</h1>
            <DisplayCode 
                code= {`<CompLib.Tooltip colors="black|blue|pink|green|" type="bold|light" title="Title"
posX="50vw" posY="300px" {...rest}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
</CompLib.Tooltip>`} />
            
       
            <div className='flexRow' style={{gap:"60px"}}>
                <div>
                    <h3 className='arrayLabel'>Bold</h3>
                    <div className='flexCol' style={{gap:"25px"}}>
                        {showBold}
                    </div>
                </div>

                <div>
                    <h3 className='arrayLabel'>Light</h3>
                    <div className='flexCol' style={{gap:"25px"}}>
                        {showLight}
                    </div>
                </div>

            </div>

            <CompLib.Tooltip {...TooltipProps}>
               {TooltipProps.text}
            </CompLib.Tooltip>



            
        </div>
    );
}

export default  Tooltips;