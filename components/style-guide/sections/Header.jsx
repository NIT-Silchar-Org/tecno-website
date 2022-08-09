import React from 'react'

// import Logo from '../../../style-guide/utils/Icons/Logo'
import Image from 'next/dist/client/image'
import LogoPng from '../../../public/assests/landingPage/tecnoesis.png'
function Header() {
  return (
    <div className="block">
      <h1 className="flex justify-center items-center font-roadRage text-4xl">
        Coming Soon
      </h1>
      <div className="flex justify-center items-center">
        <div className="w-[250px] h-[250px] mb-16 relative">
            <Image src={LogoPng}    />
        </div>
        <h1 className="flex justify-center items-center font-lemonMilk text-[8.5rem] mt-6 tracking-widest -ml-6">
          TECNOESIS
        </h1>
      </div>
      <h1 className='text-center text-[1.3rem] md:text-[2.28rem] font-mokotoGlitch opacity-60 -mt-20 mb-8'>BACK TO THE FUTURE</h1>
      <h1 className='text-center text-4xl font-lemonMilk mt-4'>14. 15. 16. 17</h1>
      <h1 className='text-center text-4xl font-lemonMilk my-2'>October</h1>
    </div>
  )
}

export default Header
