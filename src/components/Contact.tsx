import React from 'react'

const Contact = () => {
  return (
    <div  className="contact-section mt-5 w-[100%] p-10 ">
      <div className="heading-container text-center mb-5 mt-8">
          <h2
            style={{
              width: "22%",
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
              CONTACT US
            </span>
          </h2>
          
        </div>
        <div className=" p-8">
      <div className="container mx-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
            <h1 style={{color:'#14279b'}} className="text-4xl font-bold mb-4">Akeshya</h1>
            <p style={{fontSize:'19px',color: "#444444",}} className="text-left">Designers, developers & marketeers capable of delivering solutions according to your needs.</p>
          </div>
        <div style={{fontSize:'19px',color: "#444444",}} className="space-y-7">
            <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24" className="mr-2"><path fill="#14279b" d="m12 20.9l4.95-4.95a7 7 0 1 0-9.9 0zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0zM12 13a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 2a4 4 0 1 1 0-8a4 4 0 0 1 0 8"/></svg>
              <p>26-2-789, 7th street, Jyothi Nagar, Nellore, Andhra Pradesh 524004</p>
            </div>
            <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24" className="mr-2"><path fill="#14279b" d="M21 3a1 1 0 0 1 1 1v16.007a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V19h18V7.3l-8 7.2l-10-9V4a1 1 0 0 1 1-1zM8 15v2H0v-2zm-3-5v2H0v-2zm14.566-5H4.434L12 11.81z"/></svg>
              <p>info@akeshya.com</p>
            </div>
            <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24" className="mr-2"><path fill="#14279b" d="M9.366 10.682a10.56 10.56 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296a11.4 11.4 0 0 0 4.583 1.364a1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995Q19.307 21 18.5 21C9.94 21 3 14.06 3 5.5q0-.807.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.4 11.4 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294zm-2.522-.657l1.9-1.357A13.4 13.4 0 0 1 7.647 5H5.01Q5 5.25 5 5.5C5 12.956 11.044 19 18.5 19q.25 0 .5-.01v-2.637a13.4 13.4 0 0 1-3.668-1.097l-1.357 1.9a12.5 12.5 0 0 1-1.588-.75l-.058-.033a12.56 12.56 0 0 1-4.702-4.702l-.033-.058a12.4 12.4 0 0 1-.75-1.588"/></svg>
              <p>+91 94942 40922</p>
            </div>
          </div>
          <div>
            <form className="space-y-4">
              <input style={{width:'600px',fontSize:'19px',color: "#444444",}} type="text" placeholder="Your Name" className="w-full p-4 border border-gray-300 rounded" />
              <input style={{width:'600px',fontSize:'19px',color: "#444444",}} type="email" placeholder="Your Email" className="w-full p-4 border border-gray-300 rounded" />
              <input style={{width:'600px',fontSize:'19px',color: "#444444",}} type="text" placeholder="Subject" className="w-full p-4 border border-gray-300 rounded" />
              <textarea style={{width:'600px',fontSize:'19px',color: "#444444",}} placeholder="Your Message" className="w-full p-4 border border-gray-300 rounded h-32"></textarea>
              <div style={{marginLeft:'40%'}} className=" items-center justify-center ">
          <a href="#contact" 
             className="btn-get-started font-raleway font-medium text-[20px] tracking-[1px] inline-block py-[13px] px-[35px] rounded-[50px] transition-all duration-500 text-white border-2 bg-custom-blue hover:bg-custom-lightblue hover:text-white">
          Send Message
          </a>
        </div>
            </form>
          </div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact
