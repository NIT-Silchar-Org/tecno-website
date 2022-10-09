import React from 'react'
import styles from './TecnoTeamSidebar.module.scss'
import svg2 from '../../../public/assests/modules/Vector15.svg'
import svg3 from '../../../public/assests/modules/Vector14.svg'
import Image from 'next/image'

// const [active, setActive] = useState(true);

// const modules = [
//   'robotron',
//   'vWarz',
//   'showcase',
//   'amazers',
//   'conferenza',
//   'cyberwrap',
//   'mindsnare',
//   'asme',
//   'sae',
//   'smartcity',
//   'empresaario',
// ]

const TecnoTeamSidebar = ({
  selectedItem,
  setSelectedItem,
  setActive,
  active,
  modules,
}) => {
  return (
    <div
      className={`${styles.container} ${
        active ? styles.active : styles.inactive
      }`}
    >
      <div className={styles.head}>
        <div className={styles.text}>Team</div>
      </div>
      
      <div className={styles.svg_cnt}>
        <div className={styles.svg}>
          <Image src={svg3} layout="fill" objectFit="contain" priority="true" />
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.cont}>
          {modules.map((item, index) => {
            return (
              <div className={styles.item_cnt} key={index}>
                <div
                  className={`${styles.item} ${
                    selectedItem === index ? styles.selected : ''
                  }`}
                  onClick={() => setSelectedItem(index)}
                >
                  {item.type}
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

export default TecnoTeamSidebar
