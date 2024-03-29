import React from 'react'
// import Logo from '../../../style-guide/utils/Icons/Logo'
import Image from 'next/dist/client/image'
import LogoPng from '../../../public/assests/landingPage/tecnoesis.png'
import styles from '../Header/Header.module.scss'
import { ANIMATION_EXIT } from '../MainLanding/MainLanding'

function Header({state}) {
  return (
    <div className={styles.cont}>
      <div
        className={`${styles.main} ${
          state === ANIMATION_EXIT ? styles.flick : ''
        }`}
      >
        <div className={styles.tecnoesisText}>
          <div className={styles.textAndLogo}>
            <div className={styles.logo}>
              <Image
                src={LogoPng}
                layout="fill"
                objectFit="cover"
                priority="true"
              />
            </div>
            <h1 className={styles.headingText}>TECNOESIS</h1>
          </div>
          <div className={styles.year}>
            <h1 className={styles.yearH1}>2022</h1>
          </div>
        </div>

        <h1 className={styles.backToTheFuture}>BACK TO THE FUTURE</h1>
        <div className={styles.foot}>
          <div className={styles.date}>20.21.22.23</div>
          <div className={styles.month}>OCTOBER</div>
        </div>
      </div>
    </div>
  )
}

export default Header
