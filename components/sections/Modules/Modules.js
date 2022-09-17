import Module from '../Module/Module'
import styles from './Modules.module.scss'
import Image from 'next/image'
import logo from '../../../public/assests/modules/Logo.svg'
// import slider from '../../../public/assests/modules/slider.svg'
import hamburger from '../../../public/assests/modules/hamburger.svg'
import bg from '../../../public/assests/modules/Vector14.svg'

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

const Modules = ({setSelectedItem, setActive, active}) => {

  return (
    <div className={styles.container} onClick={()=>setActive(false)}>
      <div className={styles.head}>
        <div className={styles.logo}>
          <Image src={logo} layout="fill" objectFit="contain" priority="true" />
        </div>
        <div className={styles.hamburger}>
          <Image src={hamburger} layout="fill" objectFit="contain" priority="true" />
        </div>
        <div className={styles.text}>Modules</div>
      </div>
      <div className={styles.bg}>
        <Image src={bg} layout="fill" objectFit="contain" priority="true"/>
      </div>
      <div>
        {modules.map((module, index) => {
          return (
            <section id={module} key={index}>
              <Module name={module} setSelectedItem={setSelectedItem} ind={index} />
            </section>
          )
        })}
      </div>
    </div>
  )
}

export default Modules
