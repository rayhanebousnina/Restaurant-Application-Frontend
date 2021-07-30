import React from 'react'
import '../../App.css';
import SidebarData from '../Admin-side/SidebarData'

const Sidebar = () => {
  return(
    <div className="sidebar">
        <ul>
            {SidebarData.map((val,key) => (
                
                    <li key={key} onClick={()=> {window.location.pathname = val.link}}>
                        <div>{val.icon}</div>
                        <div>{val.title}</div>
                    </li>
                )
            )}
        </ul>
    </div>
   )

 }

export default Sidebar