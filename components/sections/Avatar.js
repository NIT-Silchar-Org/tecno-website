import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Bg from '../../public/assests/profile/profileBg.png'
import demo from '../../public/assests/profile/demo.png'
import { icons } from '../../style-guide/utils/icons'
import TecnoCoin from '../style-guide/TecnoCoin'
import EventAttended from '../style-guide/EventAttended'

const Avatar = () => {
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
    <div className="relative w-screen bg-bgPrimary overflow-y-hidden">
      <div className="absolute relative top-0 w-screen h-[30vh] md:h-[60vh]">
        <Image
          src={Bg}
          layout="fill"
          objectFit="cover"
          priority="true"
          style={{ transform: `translateY(${offsetY * 0.4}px)` }}
        />
      </div>
      <div className="relative w-full h-32">
        <div className="absolute top-[-12vh] relative w-[12rem] h-[12rem] mx-auto z-10">
          <Image
            src={demo}
            layout="fill"
            objectFit="content"
            priority="true"
            className="rounded-full cursor-pointer"
          />
          <div className="absolute top-[10rem] right-[2rem] cursor-pointer">
            {icons.profile.camera}
          </div>
        </div>
      </div>
      <div className="w-screen md:w-[60vw] mx-auto">
        <div className="font-semibold text-2xl text-white text-center mb-6">
          Bhaskar Wary
        </div>
        <div className="flex justify-around w-full md:w-4/5 mx-auto pb-8">
          <EventAttended noOfEvents={6} />
          <TecnoCoin noOfCoins={600} />
        </div>
        <div className="w-[90%] mx-auto mb-8">{icons.profile.cusBorder}</div>
        <div className="flex justify-between w-4/5 md:w-3/5 mx-auto">
          <div className="w-1/2 text-white text-center p-3 font-bold text-[1.2rem] bg-gradient-to-r from-[#FF26C2] to-[#FF26C2] rounded-l-lg border-[#FF26C2] cursor-pointer">
            Details
          </div>
          <div className="w-1/2 text-white text-center p-3 font-bold text-[1.2rem] bg-gradient-to-l from-[#4EDFFF] to-[#4EDFFF] rounded-r-lg border-[#4EDFFF] cursor-pointer">
            Coins
          </div>
        </div>
        <div className="my-8 relative w-full">
          <div className="w-[90%] mx-auto">{icons.profile.cusBorder}</div>
          <div className="absolute -top-[1rem] left-[30%] md:left-[35%] flex items-center justify-center text-white w-[40%] md:w-[30%] z-20 bg-bgPrimary p-1">
            Personal Details
          </div>
        </div>
        <div className="mt-8 w-[90%] mx-auto">
          <div className="text-white">Name:- Wary</div>
          <div className="w-full mx-auto my-8">{icons.profile.cusBorder}</div>
          <div className="text-white">College:- NIT Silchar</div>
          <div className="w-full mx-auto my-8">{icons.profile.cusBorder}</div>
          <div className="text-white">Mobile No:- 6543210981</div>
          <div className="w-full mx-auto my-8">{icons.profile.cusBorder}</div>
        </div>
      </div>
    </div>
  )
}

export default Avatar
