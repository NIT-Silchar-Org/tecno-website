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
      <div className='mt-10 md:mt-0 relative'>
         <div className=" flex flex-col md:flex-row justify-center items-center">
        <div className="w-[100px] h-[100px] md:w-[250px] md:h-[250px] md:mb-16 relative">
            <Image src={LogoPng}    />
        </div>
        <h1 className="flex justify-center items-center font-lemonMilk text-[3.5rem] md:text-[8.5rem] mt-6 tracking-widest md:-ml-6">
          TECNOESIS
        </h1>
<<<<<<< HEAD
      </div>
      <h1 className='text-center text-[1.3rem] md:text-[2.28rem] font-mokotoGlitch opacity-60 -mt-20 mb-8'>BACK TO THE FUTURE</h1>
      <h1 className='text-center text-4xl font-lemonMilk mt-4'>14. 15. 16. 17</h1>
      <h1 className='text-center text-4xl font-lemonMilk my-2'>October</h1>
=======
        </div>
        <div className='absolute w-[100vw] -bottom-2 md:bottom-12 flex justify-end'>
          <h1 className="font-roadRage text-xl md:text-3xl w-1/4">
          2022
        </h1>
        </div>
        
      </div>
     
      
      <h1 className='text-center text-[1.3rem] md:text-[2.28rem] font-mokotoGlitch  opacity-60 mt-0 md:-mt-20 mb-8'>BACK TO THE FUTURE</h1>
      <h1 className='text-center text-2xl md:text-4xl font-lemonMilk mt-4'>14. 15. 16. 17</h1>
      <h1 className='text-center text-2xl md:text-4xl font-lemonMilk my-2'>October</h1>
>>>>>>> 8037a8b04ea7287774a5b64933f10f1a899b6c22
    </div>
  )
}

export default Header
