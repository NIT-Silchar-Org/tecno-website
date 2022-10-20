import styles from '../teams/socialhandles.module.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faInstagram,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

library.add(faFacebook, faLinkedin, faTwitter, faInstagram, faGithub)

const SocialHandles = ({ position, handles }) => {
  return (
    <div className={styles.container}>
      <div className={styles.memberposition}>{position}</div>
      <div className={styles.socialhandles}>
        {handles.facebook && (
          <a href={handles.facebook} target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              className={styles.socialicon}
              icon={['fab', 'facebook']}
            />
          </a>
        )}

        {handles.linkedin && (
          <a href={handles.linkedin} target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              className={styles.socialicon}
              icon={['fab', 'linkedin']}
            />
          </a>
        )}

        {handles.github && (
          <a href={handles.github} target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              className={styles.socialicon}
              icon={['fab', 'github']}
            />
          </a>
        )}
      </div>
    </div>
  )
}

export default SocialHandles
