import React from 'react'
import Image from 'next/image'
import styles from "./SponsorCard.module.scss"

const SponserCard = ({imgSrc,imghref = '/',text =''}) => {
  return (
    <a target="_blank" rel="noreferrer" href={imghref}>
      <div className={styles.cardContainer}>
        <div className={styles.imgContainer}>
          <Image layout='fill' objectFit='contain' src={imgSrc} alt="this is an image"/>
        </div> 
        <div className={styles.SponsorText}>{text}</div>
      </div>
    </a>
  )
}

export default SponserCard
