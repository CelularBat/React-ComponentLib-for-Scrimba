import React from 'react';
import './Badges.css'
import CompLib from '../../componentLib/CompLib_index';

function  Badges({}) {
    const colors= ["gray",'red',"yellow",'green',"blue",'indigo',"purple","pink"];
    const types = ["square","pill"];

    const showSquares = colors.map( (col) => { 
      return(<CompLib.Badge color={col} type={"square"}>{col}</CompLib.Badge>); 
    });

    const showPills = colors.map( (col) => { 
        return(<CompLib.Badge color={col} type={"pill"}>{col}</CompLib.Badge>); 
      });

    return (
        <div className='Badges'>
            <h1 className='pageTitle'>Badges</h1>
            <div className='flexRow'>
                <h3 className='arrayLabel'>Square :</h3>
                <div className='flexRow'>
                {showSquares} 
                </div>
            </div>

            <div className='flexRow'>
                <h3 className='arrayLabel'>Pill :</h3>
                <div className='flexRow'>
                {showPills}
                </div>
            </div>

          
        </div>
    );
}

export default  Badges;