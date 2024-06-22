
import React, { useState }  from 'react'
import Link from "next/link";
import './Navbar.css'
const Navbar = () => {

  return (
    <div style={{height:'150px'}} className='fixed w-full top-0 z-50 bg-white p-6 md:p-9 flex justify-between items-center shadow-500/50'>    
      <h1 className='uppercase' style={{fontSize:'38px', color:'#14279b',fontWeight:'600',display:'flex'}}>
        <a href="/">
        <img style={{}} src ="logo.png" />
        </a><span style={{marginTop:'9px'}}>AKESHYA</span>
        </h1>
     
      <div style={{fontSize:'19px'}} className='hidden md:flex gap-10 p-4 mt-4'>
       
        <Link className='text-blue-900 hover:text-blue-900 mt-1' href="/home">Home</Link>
        <Link  className=' hover:text-blue-900 mt-1' href="/about">About</Link>
        <Link  className=' hover:text-blue-900 mt-1' href="/services">Services</Link>
        <button className="bg-custom-blue hover:bg-custom-lightblue text-white  py-3 px-7 rounded-full flex items-center justify-center">
            Contact us
        </button>
      </div>
    </div>
  )
}

export default Navbar
