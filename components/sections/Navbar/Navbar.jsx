import styles from '../Navbar/Navbar.module.scss'
// import ham from '../Navbar/Hamburger.module.scss'
import React, { useState } from 'react'
import Profile from './Profile'
import NavButton from '../Navbar/NavButton'
import Link from 'next/link'
// import { useAuth } from '../../../providers/authContext';

const navLinks = [
  /* Set navlinks to different routes */
  { text: 'HOME', route: '/#hero' },
  { text: 'MODULES', route: '/modules' },
  { text: 'ABOUT', route: '/#about' },
  { text: 'MY REGISTRATIONS', route: '/team' },
  { text: 'GALLERY', route: '/#gallery' },
  { text: 'CONTACT US', route: '/#footer' },
]

export default function Navbar(props) {
  const [open, toggleNavbar] = useState(false)

  const onNavlinkClick = () => {
    toggleNavbar((prevstate) => !prevstate)
  }

  return (
    <div className={styles.nav}>
      <div
        onClick={() => {
          toggleNavbar(!open)
        }}
      >
        {React.cloneElement(props.hamburger, {
          open: open,
        })}
      </div>

      <div className={open ? styles.navbarshow : styles.navbar}>
        <Profile href={props.profile} />
        <div className={styles.navitemcontainer}>
          {navLinks.map((links, index) => {
            return (
              <Link href={links.route} key={index}>
                <NavButton
                  text={links.text}
                  onClick={onNavlinkClick}
                  key={index}
                />
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
