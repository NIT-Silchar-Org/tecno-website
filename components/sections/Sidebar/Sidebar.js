import React, { useState } from 'react'
import styles from './Sidebar.module.scss'
import svg1 from '../../../public/assests/modules/Vector14.svg'
import svg2 from '../../../public/assests/modules/Vector15.svg'
import Image from 'next/image'
import Link from 'next/link'

const modules = [
  'robotron',
  'vWarz',
  'showcase',
  'amazers',
  'conferenza',
  'cyberwrap',
  'mindsnare',
  'asme',
  'sae',
  'smartcity',
  'empresaario',
]

const Sidebar = ({ selectedItem }) => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <div className={styles.text}>Modules</div>
      </div>
      <div className={styles.svg_cnt}>
        <div className={styles.svg}>
          <Image src={svg1} layout="fill" objectFit="contain" priority="true" />
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.cont}>
          {modules.map((item, index) => {
            return (
              <Link href={`#${item}`} replace>
                <div className={styles.item_cnt} key={index}>
                  <div
                    className={`${styles.item} ${
                      selectedItem === index ? styles.selected : ''
                    }`}
                  >
                    {item}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
      <div className={styles.svg_cnt}>
        <div className={styles.svg2}>
          <Image src={svg2} layout="fill" objectFit="contain" priority="true" />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
