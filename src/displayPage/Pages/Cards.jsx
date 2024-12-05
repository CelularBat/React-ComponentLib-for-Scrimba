import React from 'react';
import CompLib from '../../componentLib/CompLib_index';
import DisplayCode from '../components/DisplayCode';

function  Cards({}) {
    return (
        <div className='Cards'>
            <h1 className='pageTitle'>Cards</h1>
            <DisplayCode 
                code= {`<CompLib.Card icon={icon-optional} iconColor={color-optional}  title="Title" {...rest}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
</CompLib.Card>`} />
            <br/>
            <br/>
            <br/>
            <CompLib.Card title="Easy deployment">
                Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
            </CompLib.Card>
        </div>
    );
}

export default  Cards;