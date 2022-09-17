import React from 'react'
import styles from './EventCard.module.scss'
import Image from 'next/image'

const EventCard = ({ data }) => {
  console.log({data});
  return (
    <div className={styles.container}>
      <div className={styles.wrapper_outline}>
        <div className={styles.wrapper}>
          <div className={styles.image}>

            <Image
              src="https://placehold.jp/150x150.png"
              layout="fill"
              objectFit="cover"
              priority="true"
            />

          </div>
          <div className={styles.overlay}>{data?.name}</div>
        </div>
      </div>
    </div>
  )
}

export default EventCard
