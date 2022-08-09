import React from 'react'
import Image from 'next/image'
import BGFIRST from '../../../public/assests/landingPage/parallaxbg.png'
import BGBOTTOM from '../../../public/assests/landingPage/parallaxpng.png'
import Header from './Header';

function Parallax() {
  return (
    <div className="relative h-screen w-screen overflow-y-hidden bg-fixed" style={{backgroundImage: "url(assests/landingPage/parallaxbg.png)"}}>
      <div className='absolute top-[14vh] w-full z-20 text-white'>
        <Header/>

      </div>
      <div className="absolute relative w-screen h-screen top-0 left-0 invisible">
        <Image
          src={BGFIRST}
          layout="fill"
          objectFit='cover'
      />
      </div>
      <div className="absolute relative z-10 md:w-screen -top-[43vh] right-0 md:left-0 h-[80vh]">
        <Image
          src={BGBOTTOM}
          layout="fill"
          objectFit='cover'
          priority="true"
      />
      </div>
    </div>
  )
}

export default Parallax
