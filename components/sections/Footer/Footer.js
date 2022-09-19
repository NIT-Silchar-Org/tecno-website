import React from 'react'
import Header from '../../style-guide/Header/Header'
import styles from './Footer.module.scss'
import Image from 'next/image'
import logo from '../../../public/assests/landingPage/logoOutline.svg'

const Footer = () => {
  return (
    <div id="footer" className={styles.wrapper}>
      <div className={styles.bg}>
        <div className={styles.st1}></div>
        <div className={styles.st2}></div>
      </div>
      <div className={styles.logo}>
        <Image src={logo} />
      </div>
      <div className={styles.container}>
        <div className={styles.head}>
          <Header />
        </div>
        <div className={styles.body}>
          <div className={styles.content}>
            <div className={styles.btn_cnt}>
              <div className={styles.btn}>Download Brochure</div>
            </div>
            <div className={styles.btn_cnt}>
              <div className={styles.btn}>Become Our Campus Ambassador</div>
            </div>
          </div>
        </div>
        <div className={styles.foot}>
          <div className={styles.contact}>CONTACT US</div>
          <div>user123@tecnoesis.org</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
