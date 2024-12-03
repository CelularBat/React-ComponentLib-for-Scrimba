import React from 'react';
import utils from './_internal/utils';
import classNames from 'classnames';
import './compLib.css';

function Badge({children,type,color,...rest}) {

    const colors= ["gray",'red',"yellow",'green',"blue",'indigo',"purple","pink"];
    const types = ["square","pill"];

    utils.verifyProp("type",type,types);
    utils.verifyProp("color",color,colors);

    return (
        <>
           <div {...rest} className={classNames("CompLib-Badge" , color , type)}>
                {children}
            </div>  
        </>
    );
}

export default Badge;