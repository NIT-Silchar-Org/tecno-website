import React from 'react'
// import styles from './alert.module.css'
import styles from '../components/sections/Footer/Footer.module.scss'

export default function Alert({ text }) {
  return (
    <div className={styles.btn_cnt}>
      <div className={styles.btn}>
        {text}
        </div>
    </div>
  )
}
