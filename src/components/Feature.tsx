import React from 'react'

const Feature = () => {
  return (
    <div className="feature-section mt-5 w-[100%] p-10 ">
       <div className="heading-container text-center mb-5 mt-8">
          <h2
            style={{
              width: "30%",
              textAlign: "center",

              lineHeight: "0.1em",
              margin: "10px 0 20px",
            }}
            className="about-heading relative inline-block text-4xl font-bold"
          >
            <span className="line absolute left-0 right-0 top-1/2 transform -translate-y-1/2 bg-custom-blue h-[2px] w-full"></span>
            <span
              style={{
                background: "#fff",
                padding: "0px 10px",
              }}
              className="relative px-4 "
            >
              OUR CORE FEATURES
            </span>
          </h2>
          <div className='mt-4 mx-4'><p style={{fontSize:'21px',color: "#444444",padding:'20px'}}>Akeshya is a forward-thinking and intelligent design firm that is technically and creatively capable of transforming your brand into its best digital self. Our approach to design and development results in compelling, engaging branding and immersive digital experiences that provide a value for money.</p></div>
        </div>
        <div className="flex flex-wrap justify-center mx-4 lg:mx-16 ">
   <div style={{height:'135px'}} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 px-6 pb-8">
    <div className="box group mt-10 p-4 bg-custom-grayvish   hover:bg-custom-lightgray transition-shadow  transition-all duration-300 h-full flex flex-col ">
      <div className="flex items-center space-x-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24"><path fill="#ffbb2c" d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 8H4v8h16zm0-6H4v4h16zm-9 1v2H9V6zM7 6v2H5V6z"/></svg>
      <h4 style={{fontSize: "20px"}} className=" title text-xl font-semibold mb-2 text-black hover:text-blue-900">
       Web design    </h4>
      </div>
    </div>
  </div>
  <div style={{height:'135px'}} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 px-6 pb-8">
    <div className="box group mt-10 p-4 bg-custom-grayvish  hover:bg-custom-lightgray transition-shadow  transition-all duration-300 h-full flex flex-col ">
      <div className="flex items-center space-x-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24"><path fill="#5578ff" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m1 2v14h16V5zm16 7l-3.535 3.536l-1.415-1.415L17.172 12L15.05 9.879l1.415-1.415zM6.828 12l2.122 2.121l-1.414 1.415L4 12l3.536-3.536L8.95 9.88zm4.416 5H9.116l3.64-10h2.128z"/></svg>
     <h4 style={{fontSize: "20px"}} className="title text-xl font-semibold mb-2 text-black hover:text-blue-900">
      Development</h4>
      </div>
    </div>
  </div>
  <div  style={{height:'135px'}} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 px-6 pb-8">
    <div className="box group mt-10 p-4 bg-custom-grayvish  hover:bg-custom-lightgray transition-shadow  transition-all duration-300 h-full flex flex-col ">
      <div className="flex items-center space-x-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24"><path fill="#e80368" d="M14 7a2 2 0 1 1-4 0a2 2 0 0 1 4 0m1 4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4h1.5v4h3v-4H15zm-3-9C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M4 12a8 8 0 1 1 16 0a8 8 0 0 1-16 0"/></svg>
      <h4 style={{fontSize: "20px"}} className="title text-xl font-semibold mb-2 text-black hover:text-blue-900">
        Branding</h4>
        </div>
    </div>
  </div>
  <div style={{height:'135px'}} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 px-6 pb-8">
    <div className="box group mt-10 p-4 bg-custom-grayvish  hover:bg-custom-lightgray transition-shadow  transition-all duration-300 h-full flex flex-col">
      <div className="flex items-center space-x-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24"><path fill="#e361ff" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16M10.622 8.415l4.879 3.252a.4.4 0 0 1 0 .666l-4.88 3.252a.4.4 0 0 1-.621-.332V8.747a.4.4 0 0 1 .622-.332"/></svg>
    <h4 style={{fontSize: "20px"}} className="title text-xl font-semibold mb-2 text-black hover:text-blue-900">
      Media buying
      </h4>
      </div>
    </div>
  </div>
  <div style={{height:'135px'}} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 px-6 pb-8">
    <div className="box group mt-4 p-7 bg-custom-grayvish  hover:bg-custom-lightgray transition-shadow  transition-all duration-300 h-full flex flex-col ">
      <div className="flex items-center space-x-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24"><path fill="#47aeff" d="m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617m-2.006-.742A6.98 6.98 0 0 0 18 11c0-3.867-3.133-7-7-7s-7 3.133-7 7s3.133 7 7 7a6.98 6.98 0 0 0 4.875-1.975zm-3.847-8.699a2 2 0 1 0 2.646 2.646a4 4 0 1 1-2.646-2.646"/></svg>
      <h4 style={{fontSize: "20px"}} className="title text-xl font-semibold mb-2 text-black hover:text-blue-900">
        Search engine</h4>
        </div>
    </div>
  </div>
  <div style={{height:'135px'}} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 px-6 pb-8">
    <div className="box group mt-4 p-7 bg-custom-grayvish  hover:bg-custom-lightgray transition-shadow  transition-all duration-300 h-full flex flex-col ">
      <div className="flex items-center space-x-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24"><path fill="#ffa76e" d="M17 2h3a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3V0h2v2h6V0h2zm0 2v2h-2V4H9v2H7V4H5v16h14V4zM7 8h10v2H7zm0 4h10v2H7z"/></svg>
      <h4 style={{fontSize: "20px"}} className="title text-xl font-semibold mb-2 text-black hover:text-blue-900">
        Brand strategy
      </h4>
      </div>
    </div>
  </div>
  <div style={{height:'135px'}} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 px-6 pb-8">
    <div className="box group mt-4 p-7 bg-custom-grayvish  hover:bg-custom-lightgray transition-shadow  transition-all duration-300 h-full flex flex-col ">
      <div className="flex items-center space-x-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24"><path fill="#dbce11" d="m12 20.9l4.95-4.95a7 7 0 1 0-9.9 0zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0zM12 13a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 2a4 4 0 1 1 0-8a4 4 0 0 1 0 8"/></svg>
      <h4 style={{fontSize: "20px"}} className="title text-xl font-semibold mb-2 text-black hover:text-blue-900">
      Local search marketing
      </h4>
      </div>
    </div>
  </div>
  <div style={{height:'135px'}} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 px-6 pb-8">
    <div className="box group mt-4 p-5 bg-custom-grayvish   hover:bg-custom-lightgray transition-shadow  transition-all duration-300 h-full flex flex-col ">
      <div className="flex items-center space-x-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24"><path fill=" #4233ff" d="M2 12h2v9H2zm3 2h2v7H5zm11-6h2v13h-2zm3 2h2v11h-2zM9 2h2v19H9zm3 2h2v17h-2z"/></svg>
      <h4 style={{fontSize: "20px"}} className="title text-xl font-semibold mb-2 text-black hover:text-blue-900">
    Lead Tracking & Management
      </h4>
      </div>
    </div>
  </div>
  <div style={{height:'135px'}} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 px-6 pb-8">
    <div className="box group p-7  bg-custom-grayvish   hover:bg-custom-lightgray transition-shadow  transition-all duration-300 h-full flex flex-col justify-center">
      <div className="flex items-center space-x-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24"><path fill="#b2904f" d="M3 2h16.005C20.107 2 21 2.898 21 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H3zm4 2H5v16h2zm2 16h10V4H9zm2-4a3 3 0 1 1 6 0zm3-4a2 2 0 1 1 0-4a2 2 0 0 1 0 4m8-6h2v4h-2zm0 6h2v4h-2z"/></svg>
      
      <h4 style={{fontSize: "20px"}} className="title text-xl font-semibold mb-2 text-black hover:text-blue-900">
        Contact management</h4>
        </div>
    </div>
  </div>
  <div style={{height:'135px'}}className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 px-6 pb-8">
    <div className="box group p-7 bg-custom-grayvish   hover:bg-custom-lightgray transition-shadow  transition-all duration-300 h-full flex flex-col ">
      <div className="flex items-center space-x-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24"><path fill="#b20969" d="M15 4.582V12a3 3 0 1 1-2-2.83V2.05c5.053.501 9 4.765 9 9.95c0 5.523-4.477 10-10 10S2 17.523 2 12c0-5.185 3.947-9.449 9-9.95v2.012A8.001 8.001 0 0 0 12 20a8 8 0 0 0 3-15.418"/></svg>
      <h4 style={{fontSize: "20px"}} className="title text-xl font-semibold mb-2 text-black hover:text-blue-900">
        Media management
      </h4>
      </div>
    </div>
  </div>
  <div style={{height:'135px'}}className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 px-6 pb-8">
    <div className="box group  p-7 bg-custom-grayvish  hover:bg-custom-lightgray transition-shadow  transition-all duration-300 h-full flex flex-col ">
      <div className="flex items-center space-x-2" >
      <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24"><path fill="#ff5828" d="M9 1v2h6V1h2v2h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1zm11 10H4v8h16zm-9 2v4H6v-4zM7 5H4v4h16V5h-3v2h-2V5H9v2H7z"/></svg>
     <h4 style={{fontSize: "20px"}} className="title text-xl font-semibold mb-2 text-black hover:text-blue-900">
      Social scheduling
      </h4>
      </div>
    </div>
  </div>
  <div style={{height:'135px'}}className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 px-6 pb-8">
    <div className="box group  p-7 bg-custom-grayvish   hover:bg-custom-lightgray transition-shadow  transition-all duration-300 h-full flex flex-col ">
      <div className="flex items-center space-x-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24"><path fill="#29cc61" d="m7.552 13l.847-2.115L9.244 13zM16 12h1v2h-1a1 1 0 1 1 0-2m5-9H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m-8.402 13h-2.155l-.4-1h-3.29l-.4 1H4.199l1.199-2.998l.001-.002l2-5h2zM17 8h2v8h-3a3 3 0 1 1 0-6h1z"/></svg>
     <h4 style={{fontSize: "20px"}} className="title text-xl font-semibold mb-2 text-black hover:text-blue-900">
      Ad retargeting

      </h4>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Feature
