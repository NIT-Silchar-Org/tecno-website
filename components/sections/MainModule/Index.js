import React from 'react'
import styles from './MainModule.module.scss'
import Link from 'next/link'
const Index = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>Modules</div>
        <div className={styles.body}>
          the world of techies and ignite the innovative genius within you with
          events like Robotron. Particapate in workshops to discover exciting
          new topics. Get a chance to interact with distungusied personalities
          via Conferanza. Events like Archinova and Tycoon provide you with a
          perfect opportunity to hone your designing, and entrepreneurship
          skills. To top it all, exhibitions and Pixelate provide the perfect
          blend of creativity and art.
        </div>
        <div className={styles.btn_cnt}>
          <Link href="/modules">
            <div className={styles.btn}>View Modules</div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Index
