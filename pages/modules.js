import React from 'react'
import Sidebar from '../components/sections/Sidebar/Sidebar'
import Main from "../components/sections/Modules/Modules"
import styles from '../styles/Modules.module.scss'

const Modules = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bg}>
        <div id={styles.one}></div>
        <div id={styles.two}></div>
        <div id={styles.three}></div>
        <div id={styles.four}></div>
      </div>
      <div className={styles.main}>
        <Main />
      </div>
      <div>
        <Sidebar />
      </div>
    </div>
  )
}

export default Modules
