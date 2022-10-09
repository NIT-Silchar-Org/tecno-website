import React, { useState } from 'react'
// import Sidebar from '../components/sections/Sidebar/Sidebar'
import TecnoTeamSidebar from '../components/sections/TecnoTeamSidebar/TecnoTeamSidebar'
import Main from '../components/sections/Modules/Modules'
import styles from '../styles/Modules.module.scss'
// import Slider from '../components/style-guide/Slider/Slider'
// import { fetchModule } from '../utils/events_fetch'
import Navbar from '../components/sections/Navbar/Navbar'
// import LogoHamburger from '../components/sections/Navbar/LogoHamburger'
import HamBurger from '../components/sections/Navbar/HamBurger'
import teamdata from '../Data/tecnoteamdata.json'

const TecnoTeam = ({ data }) => {
  const [selectedItem, setSelectedItem] = useState(0)
  const [active, setActive] = useState(false)
  return (
    <>
      <Navbar profile="/profile" pfp="" hamburger={<HamBurger />} />
      <div className={styles.mod_container}>
        <div className={styles.bg}>
          <div id={styles.one}></div>
          <div id={styles.two}></div>
          <div id={styles.three}></div>
          <div id={styles.four}></div>
        </div>
        <div className={styles.main}>
          <Main
            setSelectedItem={setSelectedItem}
            setActive={setActive}
            active={active}
            modules={data}
          />
        </div>
        <div>
          <TecnoTeamSidebar
            setSelectedItem={setSelectedItem}
            selectedItem={selectedItem}
            active={active}
            setActive={setActive}
            modules={data}
          />
        </div>
      </div>
    </>
  )
}

export default TecnoTeam

export async function getStaticProps() {
  const resp = teamdata
  const data = resp
  return {
    props: {
      data,
    },
  }
}
