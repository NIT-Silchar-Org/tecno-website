import React from 'react'
import styles from '../Navbar/Navbar.module.scss'
import ham from '../Navbar/Hamburger.module.scss'
function HamBurger({open}) {
  return (
    <>
      <div className={styles.hambtn}>
        <button
          className={` ${ham.hamburger} ${ham.hamburger_glitch} 
                        ${open ? ham.is_active : null} `}
          
        >
          <span className={ham.hamburger_box}>
            <span className={ham.hamburger_inner}></span>
          </span>
        </button>
      </div>
    </>
  )
}

export default HamBurger
