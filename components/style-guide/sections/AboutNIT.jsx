import React from 'react'

export default function AboutNIT() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-black text-white">
      <div className="w-4/5 md:w-[60vw] text-center">
        <h1 className="text-lg md:text-[3rem] mb-[2rem] tracking-wider font-light font-lemonMilk">
          ABOUT NIT SILCHAR
        </h1>
        <p className="text-sm text-offWhite md:text-[1.25rem] mb-[1.5rem] uppercase leading-10">
          A bright future requires a bright start. NITS abides by this mantra.
          The institute believes in equipping students with the knowledge and
          skills in their chosen streams, inculcate values, identify hidden
          talents, and provide opportunities for students to realize their full
          potential. It facilitates the requisite support and encouragement via
          various cultural and academic activities to shape the body and soul.
          It has transformed into a sought out centre of learning.{' '}
        </p>
      </div>
    </div>
  )
}
