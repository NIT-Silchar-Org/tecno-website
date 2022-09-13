import React from 'react'
import Module from '../Module/Module'
import styles from './Modules.module.scss'
import Image from 'next/image'
import logo from '../../../public/assests/modules/Logo.svg'
import profile from '../../../public/assests/modules/ProfileDefault.svg'

const modules = ['Robotron', 'Robotron', 'Robotron', 'Robotron']

const Modules = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <div className={styles.logo}>
          <Image src={logo} layout="fill" objectFit="contain" priority="true" />
        </div>
        <div className={styles.profile}>
          <Image
            src={profile}
            layout="fill"
            objectFit="contain"
            priority="true"
          />
        </div>
      </div>
      {modules.map((module, index) => {
        return <Module key={index} name={module} />
      })}
    </div>
  )
}

export default Modules
