import React from 'react'

export default function AboutNIT() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-black text-white">
      <div className="w-4/5 md:w-[60vw] text-center">
        <h1 className="text-lg md:text-[3rem] mb-[2rem] tracking-wider font-light font-lemonMilk">
          ABOUT NIT SILCHAR
        </h1>
        <p className="text-sm text-offWhite md:text-[1.25rem] mb-[1.5rem] uppercase leading-10">
          TECNOESIS is the annual techno-management Festival of NIT Silchar.
          Started with the aim of providing a platform for the student community
          to develop and showcase their technical prowess, Tecnoesis has
          expanded it’s horizon to become one of India’s prominent
          Techno-management Festival.
        </p>
        <a
          href="https://drive.google.com/file/d/1P7MVYNq2I0SEke0-NSclAhSBnbQUoMd2/view"
          target="_blank"
          rel="noreferrer"
        >
          <button className=" uppercase text-sm md:ext-[1.25rem] border border-white p-[1rem] hover:bg-white hover:text-black hover:font-semibold transition-all">
            Download Brochure
          </button>
        </a>
      </div>
    </div>
  )
}
