import React from 'react'
import styles from './Sidebar.module.scss'

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <div className={styles.text}>Modules</div>
      </div>
      <div className={styles.body}>
        <div className={styles.item}>Robotron</div>
      </div>
    </div>
  )
}

export default Sidebar
