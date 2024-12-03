import React from 'react';
import Pages from './Pages/Pages_index';

function MainPage({SelectedTabIdx}) {
    console.log(Pages[SelectedTabIdx])

    const PageToRender=Pages[SelectedTabIdx] 
    
    return (
        <div className='MainPage'>
            <PageToRender />
        </div>
    );
}

export default MainPage;