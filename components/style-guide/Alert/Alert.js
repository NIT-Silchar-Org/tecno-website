import React from 'react'
import styles from './styles.module.scss'

const Alert = ({text}) => {
  return (
    <div>
      <div className={styles.btn_cnt}>
        <div className={styles.btn}>{text}</div>
      </div>
    </div>
  )
}

export default Alert
