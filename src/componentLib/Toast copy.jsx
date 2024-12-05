import React from 'react';
import MagicPortal from './_internal/MagicPortal';
import Toast_static from './Toast_static';

function Toast({posX="40vw",posY="70vh",timeOut,initialState=false,
    status,title,text,animated,
    children,...rest}) {
        
    const [IsShowing,setIsShowing] = React.useState(initialState);
    const tO_Ref = React.useRef();

   
    React.useEffect( ()=>{
        setIsShowing(true);
        if (timeOut) {
            if (tO_Ref.current) { 
                clearTimeout(tO_Ref.current);
                if (animated){
                    const toastElem = document.querySelector('.CompLib-Toast');
                    console.log(toastElem);
                    toastElem
                    // need way to reset animation !!!!!
                   
                }
                
            } //reset timeout
            tO_Ref.current = setTimeout(()=>setIsShowing(false),timeOut);
        }
        return ()=>{
            if (tO_Ref.current) { clearTimeout(tO_Ref.current);}
        }
    },[children]);

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