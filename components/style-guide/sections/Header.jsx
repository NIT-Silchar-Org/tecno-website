import React from 'react'
// import Logo from '../../../style-guide/utils/Icons/Logo'
import Image from 'next/dist/client/image'
import LogoPng from '../../../public/assests/landingPage/tecnoesis.png'
function Header() {
  return (
    <div className=" ">
      <h1 className="text-center font-roadRage text-lg md:text-4xl  md:-mb-12 ">Coming Soon</h1>

      <div className="flex justify-center items-center md:items-start">
        <div className="relative w-full max-w-[1100px] h-[20vh]  md:h-[40vh] flex justify-center">
          <div className="flex justify-center items-center absolute top-0 left-0 right-0">
            <div className="w-[100px] h-[100px] md:w-[350px] md:h-[350px]  relative">
              <Image src={LogoPng} layout="fill" />
            </div>
            <h1 className="flex justify-center items-center font-lemonMilk text-4xl md:text-[8.5rem] mt-2 tracking-widest -ml-2 md:-ml-12">
              TECNOESIS
            </h1>
          </div>
          <div className="flex justify-center items-center absolute top-[4.4rem] md:top-[15rem] left-0 right-0">
            <h1 className="text-center text-[0.6rem] md:text-[2.28rem] font-mokotoGlitch  opacity-60 ml-[1.4rem] md:ml-2">
              BACK TO THE FUTURE
            </h1>
          </div>

          <div className=' absolute top-[4.4rem] right-12 md:top-[15rem] md:right-16'>
            <h1 className='text-white text-center text-sm md:text-2xl font-roadRage'>2022</h1>

          </div>

        </div>
      </div>

      <h1 className="text-center md:text-4xl text-lg font-lemonMilk mt-0 md:mt-16">
        14. 15. 16. 17
      </h1>

      <h1 className="text-center  md:text-4xl text-lg font-lemonMilk my-2">October</h1>
    </div>
  )
}

export default Header
