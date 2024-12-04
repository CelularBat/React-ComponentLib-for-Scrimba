import React from 'react';
import './compLib.css';
import utils from './_internal/utils';
import classNames from 'classnames';

function Toast_static({status="success",title,text,children,
    animated=false,_animationTime, style,...rest}) {
    const statuses = ["success",'warning',"error",'info'];
    utils.verifyProp("status",status,statuses);

    let defaultTitle,defaultText,icon;
    switch(status){
        case 'success':
            defaultTitle = "Sucess!";
            icon = <svg width="16" height="16" viewBox="0 0 16 16" fill="#34D399" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.7071 6.70711C12.0976 6.31658 12.0976 5.68342 11.7071 5.29289C11.3166 4.90237 10.6834 4.90237 10.2929 5.29289L7 8.58579L5.70711 7.29289C5.31658 6.90237 4.68342 6.90237 4.29289 7.29289C3.90237 7.68342 3.90237 8.31658 4.29289 8.70711L6.29289 10.7071C6.68342 11.0976 7.31658 11.0976 7.70711 10.7071L11.7071 6.70711Z" fill="#34D399"/>
            </svg>;
            defaultText="Your work has been saved";
            break;
        case 'warning':
            defaultTitle = "Warning";
            icon=<svg width="16" height="14" viewBox="0 0 16 14" fill="#FBBF24" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.25694 1.09882C7.02154 -0.26048 8.97863 -0.260481 9.74324 1.09882L15.3235 11.0194C16.0735 12.3526 15.11 13.9999 13.5804 13.9999H2.41978C0.890129 13.9999 -0.073299 12.3526 0.676631 11.0194L6.25694 1.09882ZM9 11C9 11.5523 8.55229 12 8 12C7.44772 12 7 11.5523 7 11C7 10.4477 7.44772 10 8 10C8.55229 10 9 10.4477 9 11ZM8 3C7.44772 3 7 3.44772 7 4V7C7 7.55228 7.44772 8 8 8C8.55228 8 9 7.55228 9 7V4C9 3.44772 8.55228 3 8 3Z" fill="#FBBF24"/>
            </svg>;
            defaultText="A network error was detected";     
            break;
        case 'error':
            defaultTitle = "Error";
            icon=<svg width="20" height="20" viewBox="0 0 20 20" fill="#F87171" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM8.70711 7.29289C8.31658 6.90237 7.68342 6.90237 7.29289 7.29289C6.90237 7.68342 6.90237 8.31658 7.29289 8.70711L8.58579 10L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071C7.68342 13.0976 8.31658 13.0976 8.70711 12.7071L10 11.4142L11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071C13.0976 12.3166 13.0976 11.6834 12.7071 11.2929L11.4142 10L12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289C12.3166 6.90237 11.6834 6.90237 11.2929 7.29289L10 8.58579L8.70711 7.29289Z" fill="#F87171"/>
            </svg>;
            defaultText="Please re-save your work again";  
            break;
        case 'info':
            defaultTitle = "Information";
            icon= <svg width="16" height="16" viewBox="0 0 16 16" fill="#60A5FA" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9 4C9 4.55228 8.55228 5 8 5C7.44772 5 7 4.55228 7 4C7 3.44772 7.44772 3 8 3C8.55228 3 9 3.44772 9 4ZM7 7C6.44772 7 6 7.44772 6 8C6 8.55229 6.44772 9 7 9V12C7 12.5523 7.44772 13 8 13H9C9.55228 13 10 12.5523 10 12C10 11.4477 9.55228 11 9 11V8C9 7.44772 8.55228 7 8 7H7Z" fill="#60A5FA"/>
            </svg>;
            defaultText="Please read updated information";  
            break;
    }

    if(title){defaultTitle = title}
    if(text){defaultText = text}
    if(children){defaultText = children} //children has priority


    return (
        <>
            <div {...rest} className={classNames('CompLib-Toast',status, {animated})}
            style={{...style, animationDuration:`${_animationTime}ms`}}
            >

                <div className='icon'>
                    {icon}
                </div>

                <div className='msg-container flexCol' style={{alignItems:"flex-start"}}>
                    <div className='header'>
                        {defaultTitle}
                    </div>
                    
                    <div className='text'>
                        {defaultText}
                    </div>
                    
                </div>
            </div>
            
        </>
    );
}

export default Toast_static;