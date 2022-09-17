<<<<<<< HEAD
// import React, { useEffect } from 'react'
=======
import React from 'react'
>>>>>>> 5d32fc8a39b46c2aeb87dafced18b1e6118da9fa
// import Logo from '../../../style-guide/utils/Icons/Logo'
import Image from 'next/dist/client/image'
import LogoPng from '../../../public/assests/landingPage/tecnoesis.png'
import headerStyle from '../Header/HeaderStyle.module.scss'

function Header() {
  return (
    <div className={headerStyle.main}>
      <div className={headerStyle.tecnoesisText}>
        <div className={headerStyle.textAndLogo}>
          <div className={headerStyle.logo}>
            <Image src={LogoPng} />
          </div>
          <h1 className={headerStyle.headingText}>TECNOESIS</h1>
        </div>
        <div className={headerStyle.year}>
          <h1 className={headerStyle.yearH1}>2022</h1>
        </div>
      </div>

      <h1 className={headerStyle.backToTheFuture}>BACK TO THE FUTURE</h1>
    </div>
  )
}

export default Header
