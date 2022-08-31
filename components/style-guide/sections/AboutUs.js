import React from 'react'

const AboutUs = () => {
  return (
    <div className="relative w-screen h-screen overflow-y-hidden bg-black flex flex-col items-center justify-center">
      <div className="w-4/5 md:w-[60vw] text-center">
        <div className="w-full text-center text-white text-lg md:text-[3rem] tracking-wider font-light font-lemonMilk mb-16">
          ABOUT US
        </div>
        <div className="text-offWhite w-full mx-auto text-sm md:text-xl uppercase text-center leading-10 mb-[1.5rem]">
          TECNOESIS is the annual techno-management Festival of NIT Silchar.
          Started with the aim of providing a platform for the student community
          to develop and showcase their technical prowess, Tecnoesis has
          expanded it’s horizon to become one of India’s prominent
          Techno-management Festival.
        </div>
        <a
          href="https://drive.google.com/file/d/1YuYYSWZmTqof0k43ZkPqJQXrFzmky9MK/view"
          target="_blank"
          rel="noreferrer"
        >
          <button className=" uppercase text-sm md:ext-[1.25rem] border border-white p-[1rem] hover:bg-white text-white hover:text-black hover:font-semibold transition-all">
            Download Brochure
          </button>
        </a>
      </div>
    </div>
  )
}

export default AboutUs
