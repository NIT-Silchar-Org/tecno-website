
import React, { useState } from 'react'
import Sidebar from '../components/sections/Sidebar/Sidebar'
import Main from "../components/sections/Modules/Modules"
import styles from '../styles/Modules.module.scss'
import Slider from '../components/style-guide/Slider/Slider'
import { fetch_module } from '../utils/events_fetch'
import Navbar from '../components/sections/Navbar/Navbar'
import LogoHamburger from '../components/sections/Navbar/LogoHamburger'
import HamBurger from '../components/sections/Navbar/HamBurger'



const Modules = ({data}) => {
  const [selectedItem, setSelectedItem] = useState(0)
  const [active, setActive] = useState(false);
  return (
    <>
    <Navbar profile="/profile" pfp="" hamburger={<HamBurger/>}  />
      <div className={styles.mod_container}>
        
        <div className={styles.bg}>
          <div id={styles.one}></div>
          <div id={styles.two}></div>
          <div id={styles.three}></div>
          <div id={styles.four}></div>
        </div>
        <div className={styles.main}>
          <Main setSelectedItem={setSelectedItem} setActive={setActive} active={active} modules={data} />

        </div>
        <div>
          <Sidebar setSelectedItem={setSelectedItem} selectedItem={selectedItem} active={active} setActive={setActive} modules={data} />
        </div>


      </div>
    </>
  )
}

export default Modules

export const getStaticProps = async () =>{
  let resp = await fetch_module();
  let data = resp?.data?.msg
  console.log(resp);
  return {
    props:{
      data
    }
  }
}
