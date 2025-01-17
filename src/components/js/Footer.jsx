import React from 'react'
import '../css/Footer.css'
import { Link } from 'react-router'
export default function Footer() {
  return (
    <div className='bg-black py-[100px] flex justify-between text-[#c2b067] px-[10vw] gap-7'>
      <div className='footer-menu_item'>
        <p className='footer-menu_title mb-[15px]'>CATEGORIES</p>
          <div className='flex flex-col gap-[15px]'>
          <div><Link>Sneaker</Link></div>
          <div><Link>Clothes</Link></div>
          <div><Link>Jewelry</Link></div>
          <div><Link>Sale</Link></div>
          </div>
      </div>
      <div className='footer-menu_item'>
        <p className='footer-menu_title mb-[15px]'>HELP</p>
        <div className='flex flex-col gap-[15px]'>
          <div><Link>FAQs and Help</Link></div>
          <div><Link>Order Status</Link></div>
          <div><Link>Delivery</Link></div>
          <div><Link>Returns</Link></div>
          <div><Link>Payment Options</Link></div>
        </div>
      </div>
      <div className='footer-menu_item'>
        <p className='footer-menu_title mb-[15px]'>ABOUT US</p>
        <div className='flex flex-col gap-[15px]'>
          <div><Link>Our Story</Link></div>
          <div><Link>Recruitment</Link></div>
          <div><Link>News</Link></div>
        </div>
      </div>
      <div className='footer-menu_item'>
        <p className='footer-menu_title mb-[15px]'>CONTACT</p>
        <div className='flex flex-col gap-[15px]'>
          <div><i className="fa-solid fa-location-dot mr-[10px]"></i><span>33 Van Coi Street, Ward 7, Tan Binh District, Ho Chi Minh City</span></div>
          <p className='pb-[5px] border-b-[1px] border-[#c2b067]'>Hotline: 0868781131</p>
        </div>
        <div className='mt-[15px]'>
          <p className='footer-menu_title '>FOLLOW US</p>
          <div className='flex gap-[30px] mt-[15px] text-2xl'>
            <Link><i className="fa-brands fa-facebook"></i></Link>
            <Link><i className="fa-brands fa-instagram"></i></Link>
            <Link><i className="fa-brands fa-x-twitter"></i></Link>
            <Link><i className="fa-brands fa-youtube"></i></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
