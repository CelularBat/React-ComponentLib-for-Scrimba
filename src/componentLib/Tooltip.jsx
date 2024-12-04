import React, { useEffect } from 'react';
import MagicPortal from './_internal/MagicPortal';
import Tooltip_static from './Tooltip_static';
import useEffectOnUpdate from './_internal/useEffectOnUpdate';

function Tooltip({ posX,posY,
    color,type,title,children, ...rest
}) {
    const [IsShown,setIsShown] = React.useState(false);
    
    //offset position to spawn tail in clickpoint
    const offsetPosX=`calc(${posX} - 110px)`;
    const offsetPosY=`calc(${posY} - 110px)`;

    useEffectOnUpdate( ()=>{
        setIsShown(true);
    },[color,type,title,children,posX,posY]);

    return IsShown?(
        <>
        <MagicPortal posX={offsetPosX} posY={offsetPosY} >
            <Tooltip_static {...rest} {...{color,type,title}} _onClickX={()=>setIsShown(false)} >
                {children}
            </Tooltip_static>
        </MagicPortal>
            
        </>
    ) : null;
}

export default Tooltip;