import React from 'react'
import Image from 'next/image'
import BGFIRST from '../../../public/assests/landingPage/parallaxbg.png'
import BGBOTTOM from '../../../public/assests/landingPage/parallaxpng.png'
import Logo from "../../../public/assests/landingPage/logo.svg";
import Header from './Header';

function Parallax() {
  return (
    <div className="relative h-screen w-screen overflow-y-hidden">
      <div className='absolute top-[15vh] w-full z-20 text-white'>
        <Header/>

      </div>
      <div className="absolute relative w-screen h-screen top-0 left-0">
        <Image
          src={BGFIRST}
          layout="fill"
          objectFit='cover'
      />
      </div>
      <div className="absolute relative z-10 w-screen -top-[43vh] left-0 h-[80vh]">
        <Image
          src={BGBOTTOM}
          layout="fill"
          objectFit='cover'
          priority="true"
      />
      </div>

      <div className='h-60 w-80 mx-auto flex absolute z-20'>

        <div className='h-[10rem] w-[10rem]'>
        <Image
          src={Logo}
          layout="fill"
          objectFit='cover'
          priority="true"
        />
      </div>
      
      
      </div>
    </div>
  )
}

export default Parallax
