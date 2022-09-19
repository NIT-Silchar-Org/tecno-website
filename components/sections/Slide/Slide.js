import React, { useState } from 'react'
import GlassCard from '../../style-guide/GlassCard/Index'
import styles from './Slide.module.scss'
// import Image from 'next/image'
// import btnL from '../../../public/assests/landingPage/btnL.svg'
// import btnR from '../../../public/assests/landingPage/btnR.svg'

const cards = ['Get Your Spark TShirt']

const Slide = () => {
  // const [activeIndex, setActiveIndex] = useState(0)
  // const len = cards.length
  // const toggle = (mult) => {
  //   const index = activeIndex + 1 * mult
  //   if (index < 0) setActiveIndex(len - 1)
  //   else if (index > len - 1) setActiveIndex(0)
  //   else setActiveIndex(index)
  // }
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {/* <div
          className={styles.btn}
          onClick={() => {
            toggle(-1)
          }}
        >
          <Image src={btnL} layout="fill" objectFit="cover" priority="true" />
        </div> */}
        <div className={styles.carousel}>
          {cards.map((card, index) => {
            return (
              <div
                key={index}
                style={{
                  // transform: `translateX(-${activeIndex * 100}%)`,
                  transition: 'all 0.5s ease-in-out',
                }}
              >
                <GlassCard details={card} />
              </div>
            )
          })}
        </div>
        {/* <div
          className={styles.btn}
          onClick={() => {
            toggle(1)
          }}
        >
          <Image src={btnR} layout="fill" objectFit="cover" priority="true" />
        </div> */}
      </div>
    </div>
  )
}

export default Slide
