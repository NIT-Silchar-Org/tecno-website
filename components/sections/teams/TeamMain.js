import TeamSection from './TeamSection'
import Image from 'next/image'
import bg from '../../../public/assests/modules/Vector14.svg'
import styles from '../teams/teamMain.module.scss'

const TeamMain = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>Tecno' 22 TEAM</div>
      {data.map((team, index) => {
        return <TeamSection className={styles.teamsection} teamdata={team} />
      })}
    </div>
  )
}

export default TeamMain
