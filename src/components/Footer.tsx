"use client"
import React, { useEffect, useState } from 'react'
import './Footer.css'
const Footer = () => {
    
        const [isVisible, setIsVisible] = useState(false);
      
        useEffect(() => {
          const handleScroll = () => {
            if (window.pageYOffset > 100) {  
              setIsVisible(true);
            } else {
              setIsVisible(false);
            }
          };
      
          window.addEventListener('scroll', handleScroll);
      
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);
      
        const scrollToTop = () => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        };
  return (
    <div>
    <footer style={{
        height:'100px',
        boxShadow:'0 -4px 6px rgba(0, 0, 0, 0.1)'
        
    }} className="  py-4 ">
    <div className="container mx-auto flex justify-between items-center">
      <div style={{color:'black'}} className="text-[18px]">
        &copy; Copyright <span style={{fontSize:'20px',fontWeight:'bold'}}>Akeshya</span>. All Rights Reserved.
      </div>
      <div style={{fontSize:'20px'}} className="flex space-x-4">
        <a href="/terms" className="text-custom-blue hover:text-blue-500 transition-colors duration-300">Terms and Conditions</a>
        <a href="/refund" className="text-custom-blue hover:text-blue-500 transition-colors duration-300">Refund Policy</a>
        <a href="/privacy" className="text-custom-blue hover:text-blue-500 transition-colors duration-300">Privacy Policy</a>
      </div>
    </div>
  </footer>
  <button
      onClick={scrollToTop}
      className={`back-to-top fixed bottom-4 right-4 px-4 py-2  transition-all duration-300 ${isVisible ? 'visible' : 'invisible'}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="3.2em" height="3.2em" viewBox="0 0 16 16" className='rounded'><rect width="16" height="16" fill="#14279b"/><path fill="white" fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"/></svg>
    </button>
  </div>
  )
}

export default Footer
