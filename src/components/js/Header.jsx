import React from 'react'
import { NavLink } from 'react-router'
import '../css/Header.css'
export default function Header() {
  return (
    <nav className="flex justify-center gap-[100px] text-lg items-center uppercase h-[10vh] fixed w-full z-[1]">
          <div className='flex gap-[40px] '>
          <NavLink to='/' className='nav_home' >Home</NavLink>
          <NavLink to='/sale' className='nav_item' >Sale</NavLink>
          <NavLink to='/sneaker' className='nav_item' >Sneaker</NavLink>
          <NavLink to='/clothes' className='nav_item' >Clothes</NavLink>
          
          </div>
          <div className="text-[40px] font-viga font-bold text-[]">
            <NavLink to='/sale' >
            <span className="text-[#fff1e7]">WSLT</span>
            <span className='text-[#7f1734]'>SNKR</span>
            </NavLink>
          </div>
          <div className='flex gap-[40px]'>
          <NavLink to='/jewelry' className='nav_item' >Jewelry</NavLink>
          <NavLink to='/news' className='nav_item' >News</NavLink>
          <NavLink to='/contact' className='nav_item' >Contact</NavLink>
          <NavLink to='/about' className='nav_item' >About</NavLink>
          </div>
        
        
        <ul className='flex text-2xl absolute top-[calc(5vh+14px-32px)] right-[100px] text-[#ffffff]'>
          <li>
              <i className="fa-solid fa-magnifying-glass cursor-pointer"></i>
          </li>
          <li className='inline-block header-divider'>
            
          </li>
          <li>
            <NavLink to='/cart' className='text-[#ffffff]'>
              <i className="fa-solid fa-cart-shopping cursor-pointer"></i>
            </NavLink>
          </li>
          
        </ul>
        </nav>
  )
}
