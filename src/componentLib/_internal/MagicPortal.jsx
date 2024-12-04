import React from 'react';
import { createPortal } from 'react-dom';
import { nanoid } from 'nanoid';


function MagicPortal({posX,posY,children,cbSetDestoy}) {

    const portal_Ref = React.useRef(`PortalId-${nanoid()}`);
    const node_Ref = React.useRef(document.createElement("div"));

    function unMount(){
        const domNode = document.getElementById(portal_Ref.current);
        domNode?.remove();
    }
    
    React.useEffect( ()=>{
        node_Ref.current.style.top = posY;
        node_Ref.current.style.left = posX;
    },[posX,posY]);

    React.useEffect( ()=>{
        node_Ref.current.id = portal_Ref.current;
        node_Ref.current.class = "CompLib-MagicPortal";
        node_Ref.current.style.position = 'fixed';
        node_Ref.current.style.zIndex = 100;
        node_Ref.current.style.top = posY;
        node_Ref.current.style.left = posX;

        document.querySelector('body').appendChild(node_Ref.current);

        return () =>{
            if (!Destroy){ //This prevent from unmounting twice, if cbSetDestoy unmounted it before
                unMount();
            }
            
        }
    },[]);



    const [Destroy,setDestroy] = React.useState(false);
    if (Destroy) {unMount()}

    if (cbSetDestoy) { cbSetDestoy(setDestroy) }

    return  (
        createPortal(
        ( 
            <>
                {children}
            </>
        )
        ,node_Ref.current
        )    
    ) 
}

export default MagicPortal;