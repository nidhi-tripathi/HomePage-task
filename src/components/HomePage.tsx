import React from 'react';

import Image from 'next/image'

const HomePage = () => {
  return (
    <div className="flex flex-col-reverse p-12 lg:grid lg:grid-cols-2 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]">
      <div
       style={{
        padding:'50px',
        marginTop:"80px",
        
        }}
       className="flex flex-col justify-center items-start p-4 md:p-10 gap-5 lg:gap-6 lg:pr-16">
        <h1 className="text-6xl md:text-5xl xl:text-6xl font-bold leading-tight font-raleway text-custom-blue mb-2.7">
          Grow your business with Akeshya
        </h1>
        <h2
        
        className="text-custom-gray text-[32px] mb-[52px] font-raleway font-medium leading-[1.4]">
          We are a team of talented website designers, developers & digital marketeers
        </h2>
        <div>
          <a href="#about" 
             className="btn-get-started font-raleway font-medium text-[20px] tracking-[1px] inline-block py-[13px] px-[35px] rounded-[50px] transition-all duration-500 text-custom-blue border-2 border-custom-blue hover:bg-custom-blue hover:text-white">
            Get Started
          </a>
        </div>
      </div>
      <div className=" flex justify-center items-center lg:items-end relative ">
        <img
          src="page.png"
          alt="Page Image"
          className="object-cover"
          style={{
            animation: 'upDown 2s ease-in-out infinite',
          }}
         
        />
      </div>
    </div>
  );
};

export default HomePage;
