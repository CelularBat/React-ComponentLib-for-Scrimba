import React from 'react';
import CompLib from '../../componentLib/CompLib_index';

function  Cards({}) {
    return (
        <div className='Cards'>
            <h1 className='pageTitle'>Cards</h1>
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