import React from 'react';
import utils from './_internal/utils';
import classNames from 'classnames';
import './compLib.css';


function Banner({children,line,status,...rest}) {
    const lines = ["single","multi"];
    const statuses = ["success",'warning',"error",'neutral'];

    utils.verifyProp("line",line,lines);
    utils.verifyProp("status",status,statuses);

    return (
        <>
            <div {...rest} className={classNames('CompLib-Banner',line,status)}>
                <div className='header'></div>
                
                {(line === "multi") && 
                    <div className='text'>
                        {children}
                    </div>
                }
            </div>
        </>
    );
}

export default Banner;