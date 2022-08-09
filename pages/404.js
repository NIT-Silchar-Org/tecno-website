import React from 'react'
import Image from 'next/dist/client/image'
import ErrorImage from '../public/assests/Error404/404.png'
function ErrorNotFoundPage() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-404bg">
      <div className="w-full md:w-[60%] h-auto">
        <Image src={ErrorImage} />
      </div>
    </div>
  )
}

export default ErrorNotFoundPage
