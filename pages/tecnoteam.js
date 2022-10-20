import React, { useState } from 'react'
import TeamMain from '../components/sections/teams/TeamMain'
import TecnoTeamSidebar from '../components/sections/TecnoTeamSidebar/TecnoTeamSidebar'
import styles from '../styles/tecnoteam.module.scss'
import Navbar from '../components/sections/Navbar/Navbar'
import HamBurger from '../components/sections/Navbar/HamBurger'
import PersonCard from '../components/sections/teams/PersonCard'
import teamdata from '../Data/tecnoteamdata.json'

const TecnoTeam = ({ data }) => {
  return (
    <>
      <Navbar profile="/profile" pfp="" hamburger={<HamBurger />} />
      <TeamMain data={data} />
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
