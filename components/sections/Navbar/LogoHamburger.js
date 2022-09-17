import React from 'react'
import styles from '../../sections/Modules/Modules.module.scss'
import logo from '../../../public/assests/modules/Logo.svg'
import Image from 'next/image'
function LogoHamburger() {
  return (
    <button className={styles.logo} >
      <Image src={logo} layout="fill" objectFit="contain" priority="true" />
    </button>
  )
}

export default LogoHamburger
