import React from 'react';
import CompLib from '../../componentLib/CompLib_index';
import DisplayCode from '../components/DisplayCode';
import workationLogo from "../../assets/workationLogo.svg"


function  Testimonials({}) {
    const img = <img src="https://s3-alpha-sig.figma.com/img/ebbd/218e/43da4fc0a30598c1777461ca480d0fde?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fq66dryV3NvyuIL7cLomfFk57Se6VF7DgVhuT1RrcufMe5PUpMwbfCV5stEfksD9nrhiJloGzHvKU6PuP4~9RjSsagw8OJNngMEsgKO383XT3a0ayH6DAS3ddR7bO5d9KKEeofCqhgN8eXsvvB0hxuENpYUG-haIz41u9o8~K2mJ8S5jtvOzZwfV~CYIeXAlrTzQhkpSpLHKeV8MOeNAQM6NxtnDpYwvGtGD2nwOssSSxRCH2DrimzIQhOIT3i5nlaQ7n3FpjC48WSKdLF7Dvg5uYueOK0RbH-EXTNJ5GsdPj5oPl7IIh34JLyFb0IzGrYfi6Cq7B9UWvH~HheMB8g__" />
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