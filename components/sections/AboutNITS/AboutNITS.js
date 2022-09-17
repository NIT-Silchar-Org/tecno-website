import React from 'react'
import styles from "./AboutNITS.module.scss"

const AboutNITS = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>About NITS</div>
        <div className={styles.body}>
          A bright future requires a bright start. NITS abides by this mantra.
          The institute believes in equipping students with the knowledge and
          skills in their chosen streams, inculcate values, identify hidden
          talents, and provide opportunities for students to realize their full
          potential. It facilitates the requisite support and encouragement via
          various cultural and academic activities to shape the body and soul.
          It has transformed into a sought out centre of learning.
        </div>
      </div>
    </section>
  )
}

export default AboutNITS