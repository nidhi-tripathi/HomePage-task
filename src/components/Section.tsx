import React from "react";
import "./Section.css";

const Section = () => {
  return (
    <>
      <div
        style={{ textAlign: "center" }}
        className="w-[100%] bg-custom-lightgray flex flex-row justify-center p-5"
      >
        <div className="w-[80%] flex flex-wrap justify-between  mx-2">
          <div className="flex items-center w-auto p-2 ">
            <div className="relative overflow-hidden group">
              <img
                src="client11.png"
                alt="Image 1"
                width={120}
                height={100}
                className="object-cover transform transition-transform duration-500 grayscale group-hover:grayscale-0"
              />
            </div>
          </div>
          <div className="flex items-center w-auto p-2 ">
            <div className="relative overflow-hidden group">
              <img
                src="client22.png"
                alt="Image 2"
                width={120}
                height={100}
                className="object-cover transform transition-transform duration-500 grayscale group-hover:grayscale-0"
              />
            </div>
          </div>
          <div className="flex items-center w-auto p-2 ">
            <div className="relative overflow-hidden group">
              <img
                src="client33.png"
                alt="Image 3"
                width={120}
                height={100}
                className="object-cover transform transition-transform duration-500 grayscale group-hover:grayscale-0"
              />
            </div>
          </div>
          <div className="flex items-center w-auto p-2 ">
            <div className="relative overflow-hidden group">
              <img
                src="client44.png"
                alt="Image 4"
                width={120}
                height={100}
                className="object-cover transform transition-transform duration-500 grayscale group-hover:grayscale-0"
              />
            </div>
          </div>
          <div className="flex items-center w-auto p-2 ">
            <div className="relative overflow-hidden group">
              <img
                src="client55.png"
                alt="Image 5"
                width={120}
                height={100}
                className="object-cover transform transition-transform duration-500 grayscale group-hover:grayscale-0"
              />
            </div>
          </div>
          <div className="flex items-center w-auto p-2 ">
            <div className="relative overflow-hidden group">
              <img
                src="client66.png"
                alt="Image 6"
                width={120}
                height={100}
                className="object-cover transform transition-transform duration-500 grayscale group-hover:grayscale-0"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="about-section w-[100%] p-10 ">
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
              ABOUT US
            </span>
          </h2>
        </div>
        <div
          style={{}}
          className="content-container flex flex-col md:flex-row justify-between gap-10 text-[19px] mx-4"
        >
          <div className="column p-5 md:w-1/2">
            <p
              style={{
                fontSize: "22px",
                color: "#444444",
              }}
              className="text-left"
            >
              We are Akeshya, a firm that specializes in web design and
              marketing. We help transform ideas into reality with a team of
              passionate graphic designers, web developers, and seasoned
              marketing advisors.
            </p>
            <ul
              style={{
                padding: "10px",
                fontSize: "22px",
                color: "#444444",
              }}
              className="list-disc pl-4 my-4"
            >
              <li className="flex items-center gap-1 p-1 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="mr-2"
                >
                  <path
                    fill="#14279b"
                    d="m11.602 13.76l1.412 1.412l8.466-8.466l1.414 1.415l-9.88 9.88l-6.364-6.365l1.414-1.414l2.125 2.125zm.002-2.828l4.952-4.953l1.41 1.41l-4.952 4.953zm-2.827 5.655L7.364 18L1 11.636l1.414-1.414l1.413 1.413l-.001.001z"
                  />
                </svg>
                We started with a simple idea: do what is best for the client.
              </li>
              <li className="flex items-center gap-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="mr-2"
                >
                  <path
                    fill="#14279b"
                    d="m11.602 13.76l1.412 1.412l8.466-8.466l1.414 1.415l-9.88 9.88l-6.364-6.365l1.414-1.414l2.125 2.125zm.002-2.828l4.952-4.953l1.41 1.41l-4.952 4.953zm-2.827 5.655L7.364 18L1 11.636l1.414-1.414l1.413 1.413l-.001.001z"
                  />
                </svg>
                Our methodical and individual approach to each project delivers
                the finest possible results for your media.
              </li>
              <li className="flex items-center gap-2  mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="mr-2"
                >
                  <path
                    fill="#14279b"
                    d="m11.602 13.76l1.412 1.412l8.466-8.466l1.414 1.415l-9.88 9.88l-6.364-6.365l1.414-1.414l2.125 2.125zm.002-2.828l4.952-4.953l1.41 1.41l-4.952 4.953zm-2.827 5.655L7.364 18L1 11.636l1.414-1.414l1.413 1.413l-.001.001z"
                  />
                </svg>
                Our day-to-day work is to solve your problems utilising the most
                up-to-date, practical adaptive technology, and we have a lot of
                fun doing it.
              </li>
            </ul>
          </div>
          <div className="column p-4 md:w-1/2">
            <p
              style={{
                fontSize: "22px",
                color: "#444444",
              }}
              className="text-left"
            >
              We're professional, but we're also friendly, and we'll always pay
              attention to your concerns. We expect to work with innovative
              people that have an open mind and are dedicated to making every
              idea a reality. We want to hear from you if you're interested in
              SEO, have Web Development ideas, or require a graphic designer who
              can match your goals.
            </p>
            <a
              href="#about"
              className="btn-get-started font-raleway font-medium text-[20px] tracking-[1px] inline-block py-[13px] px-[35px] rounded-[50px] transition-all duration-500 text-custom-blue border-2 border-custom-blue hover:bg-custom-blue hover:text-white mt-6"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="about-columns mt-12 flex justify-between gap-8 mx-5">
          <div className="column flex-1 ml-10">
            <img
              style={{ width: "300%" }}
              src="about.png"
              alt="About Image"
              className="w-full h-auto"
            />
          </div>
          <div className="column mt-5 flex-1 space-y-4">
            <div
              style={{ marginLeft: "70px" }}
              className="row flex items-center justify-center"
            >
              <img src="img1.png" alt="Row Image" className="w-17 h-16 mt-6 " />
              <div
                style={{ fontWeight: "bold" }}
                className="count-box  text-5xl  py-2 px-4 "
              >
                3835039
              </div>
            </div>
            <div className="row flex items-center justify-center">
              <p style={{fontSize:'20px',marginLeft:'150px'}}><span style={{fontWeight:'bold'}}>Organic Reach</span> (Global)</p>
            </div>
            <div className="row flex items-center justify-center">
              <img
                src="img2.png"
                alt="Row Image"
                className="w-17 h-16 p-1 mt-2"
              />
              <div
                style={{ fontWeight: "bold" }}
                className="count-box  text-5xl  py-2 px-4 "
              >
                14081
              </div>
            </div>
            <div className="row flex items-center justify-center">
              <p style={{fontSize:'20px',marginLeft:'120px'}}><span style={{fontWeight:'bold'}}>Watch Hours</span>(Asia)</p>
            </div>
          </div>
          <div
            
            className="column mt-2  flex-1 space-y-4"
          >
            <div className="row flex items-center justify-center">
              <img src="img3.png" alt="Icon Image" className="w-16 h-16 mt-3" />
              <div
                style={{ fontWeight: "bold" }}
                className="count-box  text-5xl  py-2 px-4 "
              >
                85
              </div>
            </div>
            <div className="row flex items-center justify-center">
              <p style={{fontSize:'20px',marginLeft:'120px'}}><span style={{fontWeight:'bold'}}>Campaigns</span></p>
            </div>
            <div className="row flex items-center  justify-center">
              <img src="img4.png" alt="Icon Image" className="w-16 h-16 mt-4" />
              <div
                style={{ fontWeight: "bold" }}
                className="count-box  text-5xl py-2 px-4 "
              >
                17
              </div>
            </div>
            <div className="row flex items-center justify-center">
              <p style={{fontSize:'20px',marginLeft:'220px'}}><span style={{fontWeight:'bold'}}>Excellent CTR</span>%(Asia)</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
