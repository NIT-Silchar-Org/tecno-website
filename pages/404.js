import React from 'react'
import Image from 'next/dist/client/image'
import ErrorImage from '../public/assests/Error404/404.png'
import LogoPng from '../public/assests/landingPage/tecnoesis.png'
function ErrorNotFoundPage() {
  return (
    <div className="relative">
      <div
        className="w-screen h-screen flex justify-center items-center bg-404bg"
        id="bgerror"
      >
        <div className="w-full md:w-[60%] h-auto" id="error">
          <Image src={ErrorImage} />
        </div>
      </div>
      <div className="absolute bottom-6 left-0 right-0 flex flex-col md:flex-row justify-center items-center">
        <div className="w-[100px] h-[100px] md:w-[100px] md:h-[100px] md:mb-4 relative">
          <Image src={LogoPng} />
        </div>
        <h1
          className="text-white flex justify-center items-center font-lemonMilk text-[2.5rem] md:text-[3.5rem] mt-6 tracking-widest  drop-shadow-[30px_30px_50px_50px_#FFFFFF]"
          style={{
            filter: 'drop-shadow(2px 8px 20px rgba(78, 223, 255, 0.5))',
          }}
        >
          TECNOESIS
        </h1>
      </div>
    </div>
  )
}

export default ErrorNotFoundPage
