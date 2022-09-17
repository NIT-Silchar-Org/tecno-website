import React from 'react'
import styles from './Card.module.scss'

const Index = ({details}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>Download Our APP</div>
      <div className={styles.card}>
        {details}
      </div>
    </div>
  )
}

export default Index
