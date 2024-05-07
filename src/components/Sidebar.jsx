import React, { useEffect, useState } from 'react';
import * as SidebarData from './SidebarData'; // Import all named exports as an object

// Sidebar component
function Sidebar({ openSidebarToggle, OpenSidebar }) {

  const [sidebarData, setSidebarData] = useState([]);

  useEffect(() => {
    const userRole = localStorage.getItem('userRole');
    // Determine sidebar data based on user role
    let data;
    if (userRole === '2') {
      data = SidebarData.adminSidebarData;
    } else if (userRole === '1') {
      data = SidebarData.clergySidebarData;
    } else if (userRole === '0') {
      data = SidebarData.memberSidebarData;
    }
    setSidebarData(data);
  }, []); 

  console.log(sidebarData)
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          Church Management
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        {/* Map over sidebar data and render sidebar items */}
        {sidebarData.map((item, index) => (
          <li key={index} className='sidebar-list-item'>
            {/* Sidebar item link */}
            <a href={item.link}>
              {/* Sidebar item icon */}
              <item.icon className='icon' />
              {/* Sidebar item title */}
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar;
