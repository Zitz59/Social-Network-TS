import React from 'react';
import styles from '../Sidebar/Sidebar.module.css'
import {SidebarType} from '../../redux/state';
import SideBarItem from './SidebarItem/SideBarItem';

type SidebarPropsType = {
    sidebar:SidebarType[]

}

function Sidebar(props: SidebarPropsType) {
    let sideBarElements = props.sidebar.map((sideBar) =>
        <SideBarItem name={sideBar.name} avatar={sideBar.avatar}/>)
    return (
        <div>
            {sideBarElements}
            {/*<div>
                Alexey
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWTetpXuW5y9MgX063lA3pYmNRgIiasWqTow&usqp=CAU"
                    alt=""/>
            </div>
            <div>
                Anton
                <img src="https://cspromogame.ru//storage/upload_images/avatars/788.jpg" alt=""/>
            </div>
            <div>
                Ann
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJfHAQ8--afJ6JLSQZx2_vzPLYCECkqJgsow&usqp=CAU"
                    alt=""/>
            </div>*/}

        </div>
    );
};

export default Sidebar;