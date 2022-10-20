import React from 'react'
import styles from './personCard.module.scss'
import SocialHandles from './socialhandles'

const personCard = ({ members }) => {
  return (
    <div className={styles.membercontainer}>
      <div className={styles.imagecnt}>
        <img
          width="300"
          height="300"
          className={styles.image}
          src={members?.posterImage}
        />
        <div className={styles.overlay}>
          {/* <div className={styles.memberposition}>{members?.position}</div> */}
          <SocialHandles position={members?.position} handles={members} />
        </div>
      </div>
      <div className={styles.name}>{members?.name}</div>
    </div>
  )
}

export default personCard
