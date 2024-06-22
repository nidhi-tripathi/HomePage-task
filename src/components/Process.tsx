import React from 'react'

const Process = () => {
  return (
    <div className="process-section mt-5 w-[100%] p-10 ">
       <div className="heading-container text-center mb-5 mt-8">
          <h2
            style={{
              width: "25%",
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
                padding: "0 20px",
              }}
              className="relative px-4 "
            >
             OUR PROCESS
            </span>
          </h2>
          <div className='mt-4'><p style={{fontSize:'21px'}}>Over the years we’ve evolved a tested method for attaining achievement for each one of our clients.</p></div>
        </div>
      
        <div style={{marginTop:'200px'}} className="flex flex-wrap justify-center mx-10 mt-10">
  <div className="w-full md:w-1/2 px-4 mb-4">
    <div className="box group p-6 bg-custom-grayvish rounded-lg shadow-lg hover:bg-blue-900 transition-shadow hover:text-white transition-all duration-300 h-full flex flex-col justify-center items-center text-center mx-8 min-h-full">
      <h4 style={{ fontSize: '25px' }} className="title text-xl font-semibold mb-2">1.Planning</h4>
      <p style={{ fontSize: '21px' }} className="description transition-all duration-300">
      We help you turn all of your ideas into a digital product that meets all of your requirements. We begin each project by determining its scope and needs. This is done by collaborating closely with you to ensure that we're all on the same page.
      </p>
    </div>
  </div>
  <div className="w-full md:w-1/2 px-4 mb-4">
    <div  className="box group p-6 bg-custom-grayvish rounded-lg shadow-lg hover:bg-blue-900 transition-shadow hover:text-white transition-all duration-300 h-full flex flex-col justify-center items-center text-center mx-8 min-h-full">
      <h4 style={{ fontSize: '25px' }} className="title text-xl font-semibold mb-2">2.Design</h4>
      <p style={{ fontSize: '21px' }} className="description transition-all duration-300">
      We build our websites carefully through a series of workshops, wire-framing, and user experience (UX) sessions, resulting in a site that reinforces trust, conveys important brand messaging, and provides a return on innovation.
      </p>
    </div>
  </div>
  
  <div style={{marginTop:'250px'}} className="w-full md:w-1/2 px-4 mb-4">
    <div className="box group p-6 bg-custom-grayvish rounded-lg shadow-lg hover:bg-blue-900 transition-shadow hover:text-white transition-all duration-300 h-full flex flex-col justify-center items-center text-center mx-8 min-h-full">
      <h4 style={{ fontSize: '25px' }} className="title text-xl font-semibold mb-2">3.Development</h4>
      <p style={{ fontSize: '21px' }} className="description transition-all duration-300">
      We provide extensive front-end and back-end development that allows your idea to stand alone. Our in-house developers work side-by-side with the artistic team to seek out natural breakpoints inside the content and order practicality based on acknowledged statistics.
      </p>
    </div>
  </div>
  <div  style={{marginTop:'250px'}} className="w-full md:w-1/2 px-4 mb-4 ">
    <div className="box group p-6 bg-custom-grayvish rounded-lg shadow-lg hover:bg-blue-900 transition-shadow hover:text-white transition-all duration-300 h-full flex flex-col justify-center items-center text-center mx-8 min-h-full">
      <h4 style={{ fontSize: '25px' }} className="title text-xl font-semibold mb-2">4.Marketing</h4>
      <p style={{ fontSize: '21px' }} className="description transition-all duration-300">
      We come up with ideas and campaigns to help your business prosper online. Our campaigns and virtual approach have a verified tune report of accomplishing brilliant results, gathering new leads and site visitors in your website and assist them convert.
      </p>
    </div>
  </div>
</div>


    </div>
  )
}

export default Process
