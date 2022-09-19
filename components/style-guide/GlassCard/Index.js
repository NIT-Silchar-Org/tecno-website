import React from 'react'
import styles from './Card.module.scss'
import Image from 'next/image'
import spark from '../../../public/assests/landingPage/Spark.png'

const Index = ({ details }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>{details}</div>
      <a href="/" className={styles.card}>
        <Image src={spark} layout="fill" objectFit="contain" />
      </a>
    </div>
  )
}

export default Index
