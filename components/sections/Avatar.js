import React from 'react'
import Image from 'next/image'
import Bg from '../../public/assests/profile/profileBg.png'
import demo from '../../public/assests/profile/demo.png'
import { icons } from '../../style-guide/utils/icons'
import TecnoCoin from '../style-guide/TecnoCoin'
import EventAttended from '../style-guide/EventAttended'

const Avatar = () => {
  return (
    <div className="relative w-screen bg-bgPrimary overflow-y-hidden">
      <div className="absolute relative top-0 w-screen h-[30vh] md:h-[40vh]">
        <Image src={Bg} layout="fill" objectFit="cover" priority="true" />
      </div>
      <div className="relative w-full h-32">
        <div className="absolute top-[-12vh] relative w-[12rem] h-[12rem] mx-auto z-10">
          <Image
            src={demo}
            layout="fill"
            objectFit="content"
            priority="true"
            className="rounded-full"
          />
          <div className="absolute top-[10rem] right-[2rem]">
            {icons.profile.camera}
          </div>
        </div>
      </div>
      <div className="">
        <div className="font-semibold text-2xl text-white text-center mb-6">
          Bhaskar Wary
        </div>
        <div className="flex justify-around w-full pb-8">
          <EventAttended noOfEvents={6} />
          <TecnoCoin noOfCoins={600} />
        </div>
        <div className="w-[90vw] mx-auto mb-8">{icons.profile.cusBorder}</div>
        <div className="flex justify-between w-4/5 mx-auto">
          <div className="w-1/2 text-white text-center p-3 font-bold text-[1.2rem] bg-gradient-to-r from-[#FF26C2] to-[#FF26C2] rounded-l-lg border-[#FF26C2]">
            Details
          </div>
          <div className="w-1/2 text-white text-center p-3 font-bold text-[1.2rem] bg-gradient-to-l from-[#4EDFFF] to-[#4EDFFF] rounded-r-lg border-[#4EDFFF]">
            Coins
          </div>
        </div>
        <div className="my-8 relative">
          <div className="w-[90vw] mx-auto">{icons.profile.cusBorder}</div>
          <div className="absolute -top-[1rem] left-[30vw] md:left-[35vw] flex items-center justify-center text-white w-[40vw] md:w-[30vw] z-20 bg-bgPrimary p-1">
            Personal Details
          </div>
        </div>
        <div className="mt-8 w-[90vw] mx-auto">
          <div className="text-white">Name:- Wary</div>
          <div className="w-[80vw] mx-auto my-8">{icons.profile.cusBorder}</div>
          <div className="text-white">College:- NIT Silchar</div>
          <div className="w-[80vw] mx-auto my-8">{icons.profile.cusBorder}</div>
          <div className="text-white">Mobile No:- 6543210981</div>
          <div className="w-[80vw] mx-auto my-8">{icons.profile.cusBorder}</div>
        </div>
      </div>
    </div>
  )
}

export default Avatar
