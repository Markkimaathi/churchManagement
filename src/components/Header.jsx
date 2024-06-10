import React from 'react'
import 
{BsJustify, BsArrowLeftSquareFill  }
 from 'react-icons/bs'
import { useNavigate } from 'react-router';
function Header({OpenSidebar}) {
const navigate = useNavigate();
  const logout= ()=>{
    localStorage.removeItem('userRole'); 
    localStorage.removeItem('UserID'); 
    window.location.reload();
  }

  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
        </div>
        <div className='header-right'>
            <BsArrowLeftSquareFill  className='icon' onClick={logout}/>
        </div>
    </header>
  )
}

export default Header