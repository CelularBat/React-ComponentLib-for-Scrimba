import React from 'react';
import './Tooltips.css'
import CompLib from '../../componentLib/CompLib_index';
import { nanoid } from 'nanoid';

function  Tooltips({}) {
    const colors= ["black","blue","pink","green"];
    const styles = ["light","bold"];


    const showLight = colors.map((color) => { 
      return(
        <CompLib.Tooltip key={nanoid()} title="Archive notes" style="light" color={color}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
        </CompLib.Tooltip>
      ); 
    });

    const showBold = colors.map((color) => { 
        return(
          <CompLib.Tooltip key={nanoid()}  title="Archive notes" style="bold" color={color}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
          </CompLib.Tooltip>
        ); 
      });

    return (
        <div className='Tooltips'>
            <h1 className='pageTitle'>Tooltips</h1>
       
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



            
        </div>
    );
}

export default  Tooltips;