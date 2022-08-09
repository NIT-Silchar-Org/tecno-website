import React from 'react'
import Image from 'next/image'
import BGFIRST from '../../../public/assests/landingPage/parallaxbg.png'
import BGBOTTOM from '../../../public/assests/landingPage/parallaxpng.png'
import BGBOTTOMSM from '../../../public/assests/landingPage/parallaxpng-crop.png'
import Header from './Header'
import Socials from './Socials'

function Parallax() {
  return (
    <div
      className="relative h-screen w-screen overflow-y-hidden"
      style={{
        background:
          'linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url(assests/landingPage/parallaxbg.png)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute top-[15vh] w-full z-20 text-white">
        <Header />
      </div>
      <div className='absolute hidden md:block   md:top-48 right-8  md:left-8 z-40'>

        <Socials />
      </div>

      <div className="absolute relative z-10 w-screen h-screen top-0 left-0 invisible">
        <Image src={BGFIRST} layout="fill" objectFit="cover" />
      </div>
      <div className="absolute relative z-10 w-screen -top-[42vh] left-0 h-[80vh] hidden md:block">
        <Image src={BGBOTTOM} layout="fill" objectFit="cover" priority="true" />
      </div>
      <div className="absolute relative z-10 w-screen -top-[41vh] left-0 h-[80vh] md:hidden">
        <Image
          src={BGBOTTOMSM}
          layout="fill"
          objectFit="cover"
          priority="true"
        />
      </div>
    </div>
  )
}

export default Parallax
