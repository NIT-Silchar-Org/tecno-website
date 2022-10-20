import TeamSection from './TeamSection'
import styles from '../teams/teamMain.module.scss'

const TeamMain = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>Tecno 22 TEAM</div>
      {data.map((team, index) => {
        return (
          <TeamSection
            className={styles.teamsection}
            key={index}
            teamdata={team}
          />
        )
      })}
    </div>
  )
}

export default TeamMain
