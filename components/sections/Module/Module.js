import React, { useEffect, useState } from 'react'
import styles from './Module.module.scss'
import Image from 'next/image'
import EventCard from '../EventCard/EventCard'
import left from '../../../public/assests/modules/Left.svg'
import right from '../../../public/assests/modules/Right.svg'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel'

const events = [
  'Robotron',
  'Robotron',
  'Robotron',
  'Robotron',
  'Robotron',
  'Robotron',
]

const len = events.length

const Module = ({ data, setSelectedItem, ind }) => {
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

  console.log(data);
  useEffect(() => {
    if (inView) setSelectedItem(ind)
  }, [inView, ind, setSelectedItem])

  return (
    <div className={styles.container} ref={ref} id={data.id}>
      <div className={styles.head}>
        <div className={styles.image_cnt}>
          <div className={styles.image}>
            <Image
              src={data?.iconImage}
              layout="fill"
              objectFit="contain"
              priority="true"
              objectPosition="center"
            />
          </div>
        </div>
        <div>{data?.name}</div>
      </div>
      <CarouselProvider
        className={styles.slider}
        totalSlides={data?.events ? data?.events?.length : 0}
        naturalSlideHeight={223}
        naturalSlideWidth={303}
      >
        <ButtonBack
          className={styles.left}
          onClick={() => {
            toggle(-1)
          }}
        >
          <Image
            src={left}
            layout="fill"
            objectFit="contain"
            priority="true"
            objectPosition="center"
          />
        </ButtonBack>
        <Slider className={styles.carousel} classNameTray={styles.carouselTray}>
          {data?.events?.map((event, index) => {
            return (
              <Link href={`/events/${event?.id}`} key={index}>
                <Slide key={index} index={index} style={{ padding: 0 }}>
                  <EventCard data={event} />
                </Slide>
              </Link>
            )
          })}
        </Slider>
        <ButtonNext className={styles.right} onClick={() => toggle(1)}>
          <Image
            src={right}
            layout="fill"
            objectFit="contain"
            priority="true"
          />
        </ButtonNext>
      </CarouselProvider>
    </div>
  )
}

export default Module
