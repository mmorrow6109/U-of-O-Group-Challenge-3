import React, {useState} from 'react'
import "../App"
import {SidebarData} from './SidebarData'
import Home from '../pages/Home'


function Sidebar() {
    return (
        <div className='Side'>
            <ul className='SidebarList'>
                {SidebarData.map((val, key) => {
                    return (
                        <li className='rows'  id={window.location.pathname == val.link ? "active" : ""} key={key} onClick={() => {window.location.pathname = val.link}}> 
                          <div id='icon'>{val.icon}</div><div id='title'>{val.title}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default Sidebar