import React from 'react';
import { NavLink } from 'react-router-dom';
import { SidebarData } from './SidebarData';

function Sidebar() {
    return (
        <div className='Side'>
            <ul className='SidebarList'>
                {SidebarData.map((val, key) => (
                    <li className='rows' id={window.location.pathname === val.link ? "active" : ""} key={key}>
                        <NavLink to={val.link}>
                            <div id='icon'>{val.icon}</div>
                            <div id='title'>{val.title}</div>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
