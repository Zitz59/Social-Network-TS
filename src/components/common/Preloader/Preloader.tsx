import React from 'react';
import preloader from '../../../assets/images/Loading_2.gif';

export const Preloader = () => {
    return <div style={{width: '50px', height: '50px'}}>
        <img src={preloader} alt={"loader"}/>
    </div>
}
