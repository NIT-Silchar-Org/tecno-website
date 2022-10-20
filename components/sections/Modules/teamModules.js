import Module from '../Module/Module'
import styles from './Modules.module.scss'
import Image from 'next/image'
import bg from '../../../public/assests/modules/Vector14.svg'

const Modules = ({ setSelectedItem, setActive, active, modules }) => {
  return (
    <div className={styles.container} onClick={() => setActive(false)}>
      <div className={styles.head}>
        <div className={styles.text}>TECNO'22 TEAM</div>
      </div>
      <div className={styles.bg}>
        <Image
          src={bg}
          layout="fill"
          objectFit="contain"
          priority="true"
          objectPosition="center"
        />
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
              <Module
                data={module}
                setSelectedItem={setSelectedItem}
                ind={index}
              />
            </section>
          )
        })}
      </div>
    </div>
  )
}

export default Modules
