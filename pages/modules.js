import React, { useState } from 'react'
import Sidebar from '../components/sections/Sidebar/Sidebar'
import Main from "../components/sections/Modules/Modules"
import styles from '../styles/Modules.module.scss'
import Slider from '../components/style-guide/Slider/Slider'


const Modules = () => {
  const [selectedItem, setSelectedItem] = useState(0)
  const [active, setActive] = useState(false);
  return (
    <div className={styles.mod_container}>
      <div className={styles.bg}>
        <div id={styles.one}></div>
        <div id={styles.two}></div>
        <div id={styles.three}></div>
        <div id={styles.four}></div>
      </div>
      <div className={styles.main}>
        <Main setSelectedItem={setSelectedItem} setActive={setActive} active={active} />
      </div>
      <div>
        <Sidebar selectedItem={selectedItem} active={active} setActive={setActive} />
      </div>
      <Slider setActive={setActive} active={active}/>
    </div>
  )
}

export default Modules

export async function getStaticProps (){
  const resp = await fetchModule();
  const data = resp?.data?.msg
  // console.log(resp);
  return {
    props:{
      data
    }
  }
}
