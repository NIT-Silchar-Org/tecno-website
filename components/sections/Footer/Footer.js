import React from 'react'
import Header from '../../style-guide/Header/Header'
import styles from './Footer.module.scss'
import Image from 'next/image'
import logo from '../../../public/assests/landingPage/logoOutline.svg'
import Link from 'next/link'

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
              <div className={styles.btn}>
                <Link href="https://drive.google.com/file/d/1n0z-jPHsTJOfy4DNYKFALGZAV5lArNu-/view">
                  Download Brochure
                </Link>
              </div>
            </div>
            <div className={styles.btn_cnt}>
              <div className={styles.btn}>
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLScZu6nYeZqgvyaEr2sQmXcAUs2MKObQzpNWhCJtd-u-YD16bw/viewform?usp=sf_link">
                  Become Our Campus Ambassador
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.foot}>
          <div className={styles.contact}>CONTACT US</div>
          <div>team@tecnoesis.org</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
