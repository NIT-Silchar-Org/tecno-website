import React from 'react'
import Image from 'next/image'
import tecnoCoin from '../../style-guide/utils/Icons/TecnoCoins.svg'

const TecnoCoin = ({ noOfCoins }) => {
  return (
    <div className="w-2/5 flex flex-col items-center justify-center">
      <div className="relative w-[60px] h-[60px]">
        <Image
          src={tecnoCoin}
          layout="fill"
          objectFit="content"
          priority="true"
        />
      </div>
      <div className="text-white">
        <span className="font-semibold">Earned {noOfCoins}</span>
        <span className="font-normal"> Coins</span>
      </div>
    </div>
  )
}

export default TecnoCoin
