import React from 'react';
import preloader from '../../../assets/images/Loading_3.gif';
import s from './Preloader.module.css'

export const Preloader = () => {
    return (
        <div className={s.preloaderBlock}>
            <div className={s.preloaderInner}>
                <img src={preloader} alt={'loader'}/>
            </div>
        </div>
    )
}
