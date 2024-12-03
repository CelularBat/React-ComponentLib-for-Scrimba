import React from 'react';
import './compLib.css';

function Tooltip({color,style,title,children,...rest}) {
    const colors= ["black","blue","pink","green"];
    const styles = ["light","bold"];

    utils.verifyProp("style",style,styles);
    utils.verifyProp("color",color,colors);
    
    return (
        <>
            
        </>
    );
}

export default Tooltip;