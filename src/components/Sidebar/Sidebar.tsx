import React from 'react';


import SideBarItem from './SidebarItem/SideBarItem';
import {SidebarType} from '../../redux/sidebarReducer';


type SidebarPropsType = {
    sidebar: SidebarType[]

}

function Sidebar(props: SidebarPropsType) {
    let sideBarElements = props.sidebar.map((sideBar) =>
        <SideBarItem name={sideBar.name} avatar={sideBar.avatar} key={sideBar.id}/>)
    return (
        <div>
            {sideBarElements}
        </div>
    );
}

export default Sidebar;