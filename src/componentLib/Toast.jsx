import React from 'react';
import MagicPortal from './_internal/MagicPortal';
import Toast_static from './Toast_static';
import useEffectOnUpdate from './_internal/useEffectOnUpdate';

function Toast({posX="40vw",posY="70vh",timeOut,initialState=false,
    status,title,text,animated,
    children,...rest}) {

    const [IsShowing,setIsShowing] = React.useState(initialState);
    const tO_Ref = React.useRef(null); // handle to timeOut

   


    useEffectOnUpdate( ()=>{
        setIsShowing(true);
        if (timeOut) { // timeOut prop

            if (tO_Ref.current) { 
                clearTimeout(tO_Ref.current);
                if (animated){
                    const toastElem = document.querySelector('.CompLib-Toast');
                    
                    // need way to reset animation !!!!!
                                        
                   
                }
                
            } //reset timeout
            tO_Ref.current = setTimeout(()=>setIsShowing(false),timeOut);
        }

        return ()=>{
            if (tO_Ref.current) { clearTimeout(tO_Ref.current);}
        }
    },[children,posX,posY]);

    return (
        <>
        <MagicPortal {...{posX,posY}}>
            {IsShowing &&
            <Toast_static {...rest} {...{status,title,text,animated}}
             _animationTime={timeOut}  > 
                {children}
            </Toast_static>}

        </MagicPortal>
            
        </>
    );
}

export default Toast;