import React from 'react';
import { BsGrid1X2Fill, BsChatDotsFill, BsPersonFill, BsClipboardData, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          Church Management
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href="/">
            <BsGrid1X2Fill className='icon'/> Dashboard
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/pastoral-care">
            <BsChatDotsFill className='icon'/> Pastoral Care
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/leadership">
            <BsPersonFill className='icon'/> Leadership
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/administration">
            <BsClipboardData className='icon'/> Administration
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/about">
            <BsMenuButtonWideFill className='icon'/> About
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/settings">
            <BsFillGearFill className='icon'/> Settings
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar;
