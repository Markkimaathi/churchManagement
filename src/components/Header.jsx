import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify, BsArrowLeftSquareFill  }
 from 'react-icons/bs'

function Header({OpenSidebar}) {

  const logout= ()=>{
    localStorage.removeItem('userRole'); 
    window.location.reload();
  }
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <BsSearch  className='icon'/>
        </div>
        <div className='header-right'>
            <BsFillBellFill className='icon'/>
            <BsFillEnvelopeFill className='icon'/>
            <BsPersonCircle className='icon'/>
            <BsArrowLeftSquareFill  className='icon' onClick={logout}/>
        </div>
    </header>
  )
}

export default Header