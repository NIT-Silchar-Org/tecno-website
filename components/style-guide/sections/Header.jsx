import React, { useEffect, useState } from 'react'
// import Logo from '../../../style-guide/utils/Icons/Logo'
import Image from 'next/dist/client/image'
import LogoPng from '../../../public/assests/landingPage/tecnoesis.png'

function Header() {
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => {
    setOffsetY(window.pageYOffset)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div className="block">
      <h1
        className="flex justify-center items-center font-roadRage text-4xl drop-shadow-[30px_30px_50px_50px_#FFFFFF]"
        style={{
          filter: 'drop-shadow(0px 4px 20px rgba(78, 223, 255, 0.5))',
          transform: `translateY(${offsetY * 0.2}px)`,
        }}
      >
        Coming Soon
      </h1>
      <div className="mt-10 md:mt-0 relative">
        <div className=" flex flex-col md:flex-row justify-center items-center">
          <div className="w-[100px] h-[100px] md:w-[250px] md:h-[250px] md:mb-16 relative">
            <Image src={LogoPng} />
          </div>
          <h1
            className="flex justify-center items-center font-lemonMilk text-[3.5rem] md:text-[8.5rem] mt-6 tracking-widest md:-ml-6 drop-shadow-[30px_30px_50px_50px_#FFFFFF]"
            style={{
              filter: 'drop-shadow(2px 8px 20px rgba(78, 223, 255, 0.5))',
            }}
          >
            TECNOESIS
          </h1>
        </div>
        <div className="absolute w-[100vw] -bottom-2 md:bottom-12 flex justify-end">
          <h1
            className="font-roadRage text-xl md:text-3xl w-1/4"
            style={{
              filter: 'drop-shadow(0px 4px 20px rgba(78, 223, 255, 0.5))',
            }}
          >
            2022
          </h1>
        </div>
      </div>

      <h1
        className="text-center text-[1.3rem] md:text-[2.28rem] font-mokotoGlitch  opacity-70 mt-0 md:-mt-20 mb-8"
        style={{
          textShadow:
            '0.05em 0 0 rgb(255,0,0,0.75), -0.025em -.05em 0 rgb(0,255,0,0.75), -0.025em 0.05em 0 rgb(0,0,255,0.75)',
        }}
      >
        BACK TO THE FUTURE
      </h1>
      <h1 className="text-center text-2xl md:text-4xl font-lemonMilk mt-4">
        20. 21. 22. 23
      </h1>
      <h1 className="text-center text-2xl md:text-4xl font-lemonMilk my-2">
        October
      </h1>
    </div>
  )
}

export default Header
