import React from 'react'
import socialStyle from "/components/style-guide/Socials/socialStyle.module.scss"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebook,
    faLinkedin,
    faTwitter,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons'
library.add(faFacebook, faLinkedin, faTwitter, faInstagram)

const Socials = () => {
    return (
        <div className={socialStyle.main}>
            <div className={socialStyle.fb}>
                <a
                    href="https://www.facebook.com/tecnoesis.nits"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon
                        className={socialStyle.iconSize}
                        icon={['fab', 'facebook']} />
                </a>
            </div>

            <a
                href="https://www.linkedin.com/company/tecnoesis-nit-silchar/about/"
                target="_blank"
                rel="noreferrer"
            >
                <div className={socialStyle.linkedIN}>
                    <FontAwesomeIcon
                        className={socialStyle.iconSize}
                        icon={['fab', 'linkedin']} />
                </div>
            </a>

            <a
                href="https://twitter.com/tecnoesis_nits"
                target="_blank"
                rel="noreferrer"
            >
                <div className={socialStyle.twitter}>
                    <FontAwesomeIcon
                        className={socialStyle.iconSize}
                        icon={['fab', 'twitter']} />
                </div>
            </a>

            <a
                href="https://www.instagram.com/tecnoesis.nits/?hl=en"
                target="_blank"
                rel="noreferrer"
            >
                <div className={socialStyle.insta}>
                    <FontAwesomeIcon
                        className={socialStyle.iconSize}
                        icon={['fab', 'instagram']} />
                </div>
            </a>
        </div>
    )
}

export default Socials
