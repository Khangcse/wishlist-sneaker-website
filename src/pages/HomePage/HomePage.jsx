import React, { useEffect } from 'react'
import { NavLink,Link } from 'react-router'
import '../../components/css/HomePage.css'
import Header from '../../components/js/Header'
import '../../components/css/Header.css'
import Footer from '../../components/js/Footer'
import Slideshow from './Slideshow'
import Menu_bar from '../../components/js/Menu_bar'

function addEventListener(){
  const nav_item_list = document.querySelectorAll('.nav_item');
  const menu_bar = document.querySelector('.menu_bar')
  const navbar_wrapper=  document.querySelector('.navbar_wrapper')
  nav_item_list.forEach((e)=>{
    e.addEventListener('mouseenter',()=>{
      menu_bar.classList.remove('opacity-0');
      menu_bar.classList.add('opacity-1');
      menu_bar.classList.remove('invisible');
      menu_bar.classList.add('visible');
      navbar_wrapper.classList.add('active');
    });
  });
  navbar_wrapper.addEventListener('mouseleave',()=>{
      menu_bar.classList.remove('opacity-1');
      menu_bar.classList.add('opacity-0');
      menu_bar.classList.remove('visible');
      menu_bar.classList.add('invisible');
  }
  );
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Adjust the threshold as needed
      navbar_wrapper.classList.add('active'); // Add solid background
    } else {
      navbar_wrapper.classList.remove('active'); // Revert to transparent
    }
  });
}
function cleanUpEventListener(){
  const nav_item_list = document.querySelectorAll('.nav_item');
  const menu_bar = document.querySelector('.menu_bar')
  const navbar_wrapper=  document.querySelector('.navbar_wrapper')
  nav_item_list.forEach((e)=>{
    e.removeEventListener('mouseenter',()=>{
      menu_bar.classList.remove('opacity-0');
      menu_bar.classList.add('opacity-1');
      menu_bar.classList.remove('invisible');
      menu_bar.classList.add('visible');
      navbar_wrapper.classList.add('active');
    })
  });
  navbar_wrapper.removeEventListener('mouseleave',()=>{
    menu_bar.classList.remove('opacity-1');
      menu_bar.classList.add('opacity-0');
      menu_bar.classList.remove('visible');
      menu_bar.classList.add('invisible');
  }
  );
  window.removeEventListener('scroll', () => {
    if (window.scrollY > 50) { // Adjust the threshold as needed
      navbar_wrapper.classList.add('active'); // Add solid background
    } else {
      navbar_wrapper.classList.remove('active'); // Revert to transparent
    }
  });
}
export default function HomePage() {
  useEffect(()=>{
    addEventListener();
    return  cleanUpEventListener();
  },[])
  return (
<>
    <nav className="navbar_wrapper flex justify-center items-center gap-[100px] text-lg  uppercase h-[15vh] sticky top-0 w-full z-[100]">
      <div className='flex gap-[40px] '>
        <NavLink to='/' className='nav_home' >Home</NavLink>
        <NavLink to='/sale' className='nav_item' >Sale
        <div className='menu_bar opacity-0 invisible w-full bg-black text-[#c2b067] absolute top-[100%] left-0 px-[10vw]'>
          <Menu_bar />
        </div>
        </NavLink>
        <NavLink to='/sneaker' className='nav_item' >Sneaker
        <div className='menu_bar opacity-0 invisible w-full bg-black text-[#c2b067] absolute top-[100%] left-0 px-[10vw]'>
          <Menu_bar />
        </div>
        </NavLink>
        <NavLink to='/clothes' className='nav_item' >Clothes
        <div className='menu_bar opacity-0 invisible w-full bg-black text-[#c2b067] absolute top-[100%] left-0 px-[10vw]'>
          <Menu_bar />
        </div>
        </NavLink>
        
      </div>
      <div className="text-[40px] font-viga font-bold text-[]">
        <NavLink to='/' >
        <span className="text-[#fff1e7]">WSLT</span>
        <span className='text-[#7f1734]'>SNKR</span>
        </NavLink>
      </div>
        <div className='flex gap-[40px]'>
        <NavLink to='/jewelry' className='nav_item' >Jewelry
        <div className='menu_bar opacity-0 invisible w-full bg-black text-[#c2b067] absolute top-[100%] left-0 px-[10vw]'>
          <Menu_bar />
        </div>
        </NavLink>
        <NavLink to='/news' className='nav_item' >News
        <div className='menu_bar opacity-0 invisible w-full bg-black text-[#c2b067] absolute top-[100%] left-0 px-[10vw]'>
          <Menu_bar />
        </div>
        </NavLink>
        <NavLink to='/contact' className='nav_item' >Contact
        <div className='menu_bar opacity-0 invisible w-full bg-black text-[#c2b067] absolute top-[100%] left-0 px-[10vw]'>
          <Menu_bar />
        </div>
        </NavLink>
        <NavLink to='/about' className='nav_item' >About
        <div className='menu_bar opacity-0 invisible w-full bg-black text-[#c2b067] absolute top-[100%] left-0 px-[10vw]'>
          <Menu_bar />
        </div>
        </NavLink>
      </div>
      <ul className='flex text-2xl absolute top-[calc(50%)] translate-y-[-50%] right-[100px] text-[#ffffff]'>
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
    <div className='translate-y-[-15vh] w-full bg-home_page_background h-[100vh] bg-cover bg-no-repeat'></div>
    
    
  
  <Slideshow />
  <div className='px-[10vw] mt-[100px]'>
    <div className='flex justify-between'>
      <div>
        <img src="/fire.png" className='w-7 inline-block mr-4'/>
        <h2 className='inline-block align-bottom text-xl font-bold'>Best selling sneakers</h2>
      </div>
      <Link className='text-2xl font-bold text-[#c2b067] w-[200px] h-[50px] rounded-lg bg-[#272757] text-center '>
      <span className='inline-block align-middle'>View all</span>
      </Link>
    </div>
    <div className='best-selling_product-container flex flex-wrap mt-[80px] gap-7 justify-between'>
      <div className='product_section'>
        <div className='box-image flex flex-col items-center justify-center h-[300px]'>
          <Link>
            <br/>
            <img src='https://authentic-shoes.com/wp-content/uploads/2024/12/HQ3489-010-1.png' 
            className='mx-auto w-[100%] max-w-[100%] max-h-[270px]'/>
          </Link>
        </div>
        <div className='product_section-title'>
          <Link className='product_section-link'>Nike Killshot 2 Leather Premium 'Tiempo Pack' HQ3489-010</Link>
        </div>
        <div className='product_section-rating'>

        </div>
        <div className='product-section_price'>

        </div>
      </div>
      <div className='product_section'>
        <div className='box-image flex flex-col items-center justify-center h-[300px]'>
          <Link>
            <br/>
            <img src='https://authentic-shoes.com/wp-content/uploads/2024/09/Giay-Nike-Air-Jordan-3-Retro-You-Were-Sleeping-FZ4811-001-3.png' 
            className='mx-auto w-[100%] max-w-[100%] max-h-[270px]'/>
          </Link>
        </div>
        <div className='product_section-title'>
          <Link className='product_section-link'>Nike Air Jordan 3 Retro ‘You Were Sleeping’ FZ4811-001</Link>
        </div>
        <div className='product_section-rating'>

        </div>
        <div className='product-section_price'>

        </div>
      </div>
      <div className='product_section'>
        <div className='box-image flex flex-col items-center justify-center h-[300px]'>
          <Link>
            <br/>
            <img src='https://authentic-shoes.com/wp-content/uploads/2023/04/new-balance-2002r-protection-pac_dc609df343f742dc8e6b4c057fe6085a-768x549.png' 
            className='mx-auto w-[100%] max-w-[100%] max-h-[270px]'/>
          </Link>
        </div>
        <div className='product_section-title'>
          <Link className='product_section-link'>New Balance 2002R ‘Protection Pack’ M2002RDD</Link>
        </div>
        <div className='product_section-rating'>

        </div>
        <div className='product-section_price'>

        </div>
      </div>
      <div className='product_section'>
        <div className='box-image flex flex-col items-center justify-center h-[300px]'>
          <Link>
            <br/>
            <img src='https://www.jordan1.vn/wp-content/uploads/2023/09/664578_01.jpg_37596e72ede348348b_90b9e2a4db944c51acda47999f883f0e.png' 
            className='mx-auto w-[100%] max-w-[100%] max-h-[270px]'/>
          </Link>
        </div>
        <div className='product_section-title'>
          <Link className='product_section-link'>Nike Union LA x Air Jordan 4 Retro ‘Off Noir’ DC9533-001</Link>
        </div>
        <div className='product_section-rating'>

        </div>
        <div className='product-section_price'>

        </div>
      </div>
    </div>
    <div className='best-selling_product-container flex flex-wrap mt-[40px] gap-7 justify-between'>
      <div className='product_section'>
        <div className='box-image flex flex-col items-center justify-center h-[300px]'>
          <Link>
            <br/>
            <img src='https://authentic-shoes.com/wp-content/uploads/2023/04/567948_01.jpg_b603f1b5b72e4952a71abf1fdd257811.png' 
            className='mx-auto w-[100%] max-w-[100%] max-h-[270px]'/>
          </Link>
        </div>
        <div className='product_section-title'>
          <Link className='product_section-link'>Nike Air Jordan 1 Retro High OG ‘Dark Mocha’ 555088-105</Link>
        </div>
        <div className='product_section-rating'>

        </div>
        <div className='product-section_price'>

        </div>
      </div>
      <div className='product_section'>
        <div className='box-image flex flex-col items-center justify-center h-[300px]'>
          <Link>
            <br/>
            <img src='https://authentic-shoes.com/wp-content/uploads/2024/05/CZ0790_102.png.png' 
            className='mx-auto w-[100%] max-w-[100%] max-h-[270px]'/>
          </Link>
        </div>
        <div className='product_section-title'>
          <Link className='product_section-link'>Nike Air Jordan 1 Retro Low OG ‘Mocha’ CZ0790-102</Link>
        </div>
        <div className='product_section-rating'>

        </div>
        <div className='product-section_price'>

        </div>
      </div>
      <div className='product_section'>
        <div className='box-image flex flex-col items-center justify-center h-[300px]'>
          <Link>
            <br/>
            <img src='https://authentic-shoes.com/wp-content/uploads/2024/08/httpshypebeast.comimage20240709g.png' 
            className='mx-auto w-[100%] max-w-[100%] max-h-[270px]'/>
          </Link>
        </div>
        <div className='product_section-title'>
          <Link className='product_section-link'>Nike Air Force 1 Low x Peaceminusone ‘Para Noise 3.0’ AQ3692-004</Link>
        </div>
        <div className='product_section-rating'>

        </div>
        <div className='product-section_price'>

        </div>
      </div>
      <div className='product_section'>
        <div className='box-image flex flex-col items-center justify-center h-[300px]'>
          <Link>
            <br/>
            <img src='https://authentic-shoes.com/wp-content/uploads/2024/08/Giay-Onitsuka-Tiger-Mexico-66-SD-Denim-Black-1183C310-001-1.png' 
            className='mx-auto w-[100%] max-w-[100%] max-h-[270px]'/>
          </Link>
        </div>
        <div className='product_section-title'>
          <Link className='product_section-link'>Onitsuka Tiger Mexico 66 SD Denim ‘Black’ 1183C310-001</Link>
        </div>
        <div className='product_section-rating'>

        </div>
        <div className='product-section_price'>

        </div>
      </div>
    </div>
  </div>
  <Footer /></>
  )
}

