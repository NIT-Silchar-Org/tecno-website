import React from 'react'
import styles from './Card.module.scss'
import Image from 'next/image'
import spark from '../../../public/assests/landingPage/Spark.png'
import Link from 'next/link'

const Index = ({ details }) => {
  return (
    <Link href="/spark/form">
      <div className={styles.wrapper}>
        <div className={styles.head}>{details}</div>
        <a className={styles.card}>
          <Image src={spark} layout="fill" objectFit="contain" />
        </a>
      </div>
    </Link>
  )
}

export default Index
