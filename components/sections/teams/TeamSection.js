import { useEffect, useState } from 'react'
import styles from '../teams/teamsection.module.scss'
import PersonCard from '../teams/PersonCard'
import Image from 'next/image'
import Link from 'next/link'

const TeamSection = ({ teamdata }) => {
  //   console.log(teamdata)
  return (
    <div>
      <div className={styles.head}>{teamdata?.type}</div>
      <section className={styles.teamsection}>
        {/* {teamdata?.members[0]?.name} */}
        {teamdata?.members.map((member, index) => {
          return <PersonCard members={member} key={index} />
        })}
      </section>
      <div className={styles.blank}></div>
    </div>
  )
}

export default TeamSection
