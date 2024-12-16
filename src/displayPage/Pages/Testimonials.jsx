import React from 'react';
import CompLib from '../../componentLib/CompLib_index';
import DisplayCode from '../components/DisplayCode';
import workationLogo from "../../assets/workationLogo.svg"
import portfolioIMG from "../../assets/portfolio.jpg"

function  Testimonials({}) {
    const img = <img src={portfolioIMG} />
    const logo = <img src={workationLogo}/>
    return (
        <div className='Testimonials'>
            <h1 className='pageTitle'>Testimonials</h1>
            <DisplayCode 
                code= {`/* use either img or logo */
<CompLib.Testimonial img={imgObject} logo={logoObject}
author="May Andersons" job="Workcation, CTO" {...rest}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
</CompLib.Testimonial>`} />
           
            
            <h3 className='arrayLabel'>With image:</h3>
      
            <div style={{display:"grid", placeItems:'center'}}>
                <CompLib.Testimonial img={img} author="May Andersons" job="Workcation, CTO">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
                </CompLib.Testimonial>
            </div>
            <br/>
            <h3 className='arrayLabel'>Without image, with logo:</h3>
        
            <div style={{display:"grid", placeItems:'center'}}>
                <CompLib.Testimonial author="May Andersons" job="Workcation, CTO" logo={logo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
                </CompLib.Testimonial>
            </div>


            
           
        </div>
    );
}

export default  Testimonials;