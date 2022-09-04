import React, { useState } from 'react'
import Sidebar from '../components/sections/Sidebar/Sidebar'
import Main from "../components/sections/Modules/Modules"
import styles from '../styles/Modules.module.scss'

const Modules = () => {
  const [selectedItem, setSelectedItem] = useState(0)
  return (
    <div className={styles.mod_container}>
      <div className={styles.bg}>
        <div id={styles.one}></div>
        <div id={styles.two}></div>
        <div id={styles.three}></div>
        <div id={styles.four}></div>
      </div>
      <div className={styles.main}>
        <Main setSelectedItem={setSelectedItem} />
      </div>
      <div>
        <Sidebar selectedItem={selectedItem} />
      </div>
    </div>
  )
}

export default Modules
