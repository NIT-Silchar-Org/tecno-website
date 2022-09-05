import Module from '../Module/Module'
import styles from './Modules.module.scss'
import Image from 'next/image'
import logo from '../../../public/assests/modules/Logo.svg'
import slider from '../../../public/assests/modules/slider.svg'
import hamburger from '../../../public/assests/modules/hamburger.svg'

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

// const [active, setActive] = useState(false);

const Modules = () => {

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <div className={styles.logo}>
          <Image src={logo} layout="fill" objectFit="contain" priority="true" />
        </div>
        <div className={styles.hamburger}>
          <Image src={hamburger} layout="fill" objectFit="contain" priority="true" />
        </div>
        <div className={styles.text}>Modules</div>
        <div className={styles.slider} onClick={()=>setActive(true)}>
          <Image src={slider}/>
        </div>
      </div>
      {modules.map((module, index) => {
        return (
          <div id={module} key={index}>
            <Module name={module} />
          </div>
        )
      })}
    </div>
  )
}

export default Modules
