import React from 'react'
import styles from './Alert.module.scss'
function Alert({text, _type}) {
  return (
    <div className={styles.alert}>
      {text}
    </div>
  )
}

export default Alert
