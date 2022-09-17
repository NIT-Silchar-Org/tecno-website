import React, { useEffect, useState } from 'react'
import styles from './Module.module.scss'
import Image from 'next/image'
import EventCard from '../EventCard/EventCard'
import left from '../../../public/assests/modules/Left.svg'
import right from '../../../public/assests/modules/Right.svg'
import { useInView } from 'react-intersection-observer'

const events = [
  'Robotron',
  'Robotron',
  'Robotron',
  'Robotron',
  'Robotron',
  'Robotron',
]

const len = events.length

const Module = ({ name, setSelectedItem, ind }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const toggle = (mult) => {
    const index = activeIndex + 1 * mult
    if (index < 0) setActiveIndex(len - 3)
    else if (index > len - 3) setActiveIndex(0)
    else setActiveIndex(index)
  }

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 1,
  })

  useEffect(() => {
    if(inView) setSelectedItem(ind)
  }, [inView, ind, setSelectedItem])

  return (
    <div
      className={styles.container}
      ref={ref}
    >
      <div className={styles.head}>
        <div className={styles.image_cnt}>
          <div className={styles.image}>
            <Image
              src="https://placehold.jp/150x150.png"
              layout="fill"
              objectFit="contain"
              priority="true"
            />
          </div>
        </div>
        <div>{name}</div>
      </div>
      <div className={styles.slider}>
        <div
          className={styles.left}
          onClick={() => {
            toggle(-1)
          }}
        >
          <Image src={left} layout="fill" objectFit="contain" priority="true" />
        </div>
        <div className={styles.carousel}>
          {events.map((event, index) => {
            return (
              <div
                style={{
                  transform: `translateX(-${activeIndex * 100}%)`,
                  transition: 'all 0.5s ease-in-out',
                }}
                key={index}
              >
                <EventCard name={event} />
              </div>
            )
          })}
        </div>
        <div className={styles.right} onClick={() => toggle(1)}>
          <Image
            src={right}
            layout="fill"
            objectFit="contain"
            priority="true"
          />
        </div>
      </div>
    </div>
  )
}

export default Module
