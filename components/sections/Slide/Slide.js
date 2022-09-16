import React from 'react'
import GlassCard from "../../style-guide/GlassCard/Index"
import styles from "./Slide.module.scss"

const Slide = () => {
  return (
      <div className={styles.wrapper}>
          <div className={styles.container}>
              <GlassCard />
          </div>
    </div>
  )
}

export default Slide