import React from 'react'
import styles from "./About.module.scss"

const About = () => {
    return (
      <section id="about" className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.title}>About Us</div>
          <div className={styles.body}>
            Tecnoesis is the annual techno-managerial event of NIT Silchar,
            promising all tech geeks the ideal niche of fascinating events,
            workshops, competitions and interactions worth a lifetime. This mega
            event has left its mark as of the most prominent techfests across
            the country. The cauldron of enthusiasm and knowledge attracts
            various students, presenting the chance to let their minds run wild
            with ideads, fostering the inventors of the future.
          </div>
        </div>
      </section>
    )
}

export default About