import Module from '../Module/Module'
import styles from './Modules.module.scss'
import Image from 'next/image'
// import logo from '../../../public/assests/modules/Logo.svg'
// import slider from '../../../public/assests/modules/slider.svg'
import bg from '../../../public/assests/modules/Vector14.svg'
import TecnoTeamModule from '../TecnoTeamModule/TecnoTeamModule'
// import LoginButton from '../../AuthLayer/LoginButton'
// import LogoHamburger from '../Navbar/LogoHamburger'
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

const Modules = ({ setSelectedItem, setActive, active, modules, isteampage }) => {
  return (
    <div className={styles.container} onClick={() => setActive(false)}>
      <div className={styles.head}>
        {/* <LoginButton/> */}

        {/* <div className={styles.hamburger} onClick={()=> setActive(true)}> */}
        {/*   <Image src={hamburger} layout="fill" objectFit="contain" priority="true" /> */}
        {/* </div> */}
        <div className={styles.text}>Modules</div>
      </div>
      <div className={styles.bg}>
        <Image src={bg} layout="fill" objectFit="contain" priority="true" />
      </div>
      <div>
        {modules.length === 0 && (
          <div className={styles.comingSoon}>
            <h1>Coming Soon</h1>
          </div>
        )}
        {modules.map((module, index) => {
          return (
            <section id={module} key={index}>
              {isteampage ? (
                <TecnoTeamModule
                data={module}
                setSelectedItem={setSelectedItem}
                ind={index}
                // isteampage={true}
              />
              ):(
                <Module
                data={module}
                setSelectedItem={setSelectedItem}
                ind={index}
                // isteampage={true}
              />
              )}
            </section>
          )
        })}
      </div>
    </div>
  )
}

export default Modules
