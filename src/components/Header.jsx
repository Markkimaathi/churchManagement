import React from 'react'
import 
{BsJustify, BsArrowLeftSquareFill  }
 from 'react-icons/bs'
 import { IoPersonCircleSharp  } from "react-icons/io5";
import { useNavigate } from 'react-router';
function Header({OpenSidebar}) {
const navigate = useNavigate();
  const logout= ()=>{
    localStorage.removeItem('userRole'); 
    window.location.reload();
  }
  const handleProfile = ()=>{
navigate('ProfilePage')
  }


  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
        </div>
        <div className='header-right'>
            <IoPersonCircleSharp   className='icon1' onClick={handleProfile}/>
            <BsArrowLeftSquareFill  className='icon' onClick={logout}/>
        </div>
    </header>
  )
}

export default Header