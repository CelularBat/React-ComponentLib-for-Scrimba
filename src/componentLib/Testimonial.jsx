import React from 'react';
import './compLib.css';
import quotationIcon from "./_internal/quotationIcon.svg";
import classNames from 'classnames';


function Testimonial({children,logo,author,job,img,backgroundColor,...rest}) {
    let defaultBgColor = img ? "#2545B8":"#F9FAFB";
    if (backgroundColor) { defaultBgColor=backgroundColor }

    let defaultFontColor = img ? "white" : "#111827";

    children = img? children: `“${children}”`;
    return (
        <>
           <div {...rest} className='CompLib-Testimonial' style={{backgroundColor:defaultBgColor, color:defaultFontColor}}>
                
                {img &&
                    <div className='img'>
                        {img}
                    </div>
                }
                <div className={classNames('text-container',{noPic:!img})}>
                    { img?
                        <div className='quotationMark'>
                            <img src={quotationIcon}/>
                        </div>
                        :
                        <div className='logo'>
                            {logo}
                         </div>
                    }
                    <div className='text'>
                        {children}
                    </div>
                    { img?
                        <div className='author'>
                            {author}
                            <div className='job'>
                            {job}
                            </div>
                        </div>
                        :
                        <div className='author'>
                            <span style={{color:"#111827",fontWeight:"500"}}>{author}</span>
                            <span style={{color:"#2E59F3",fontWeight:"1000",fontSize:"1.3rem"}}> / </span> 
                            <span style={{color:"#6B7280",fontWeight:"500"}}>{job}</span>
                        </div>

                    }
                   


                </div>

           </div>
        </>
    );
}

export default Testimonial;