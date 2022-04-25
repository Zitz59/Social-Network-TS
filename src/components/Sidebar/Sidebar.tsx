import React from 'react';

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
        </div>
    );
};

export default Sidebar;