import React from 'react'
import AboutUsStyle from '../AboutUs/AboutUsStyle.module.scss'

const AboutUs = () => {
  return (
    <div className={AboutUsStyle.main}>
      <div className={AboutUsStyle.section}>
        <div className={AboutUsStyle.aboutUs}>ABOUT US</div>
        <div className={AboutUsStyle.aboutUsContent}>
          TECNOESIS is the annual techno-management Festival of NIT Silchar.
          Started with the aim of providing a platform for the student community
          to develop and showcase their technical prowess, Tecnoesis has
          expanded it’s horizon to become one of India’s prominent
          Techno-management Festival.
        </div>
        <a
          href="https://drive.google.com/file/d/1n0z-jPHsTJOfy4DNYKFALGZAV5lArNu-/view"
          target="_blank"
          rel="noreferrer"
        >
          <button className={AboutUsStyle.btn}>Download Brochure</button>
        </a>
      </div>
    </div>
  )
}

export default AboutUs
