import React, { useState } from 'react'
import styles from './Sidebar.module.scss'
import svg1 from '../../../public/assests/modules/Vector14.svg'
import svg2 from '../../../public/assests/modules/Vector15.svg'
import Image from 'next/image'

const modules = [
  'Robotron',
  'Robotron',
  'Robotron',
  'Robotron',
  'Robotron',
  'Robotron',
  'Robotron',
  'Robotron',
  'Robotron',
  'Robotron',
  'Robotron',
]

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState(0)
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
              <div className={styles.item_cnt}>
                <div
                  className={`${styles.item} ${
                    selectedItem === index ? styles.selected : ''
                  }`}
                  onClick={() => setSelectedItem(index)}
                  key={index}
                >
                  {item}
                </div>
              </div>
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
