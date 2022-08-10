import React from 'react'
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
    <div className=" h-[50vh] md:h-[60vh] w-[3rem] text-white  z-20">
      <div className="my-8 p-2 border-gray-500 border-[4px] rounded-full cursor-pointer hover:shadow-gradient">
        <a
          href="https://www.facebook.com/tecnoesis.nits"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={['fab', 'facebook']} />
        </a>
      </div>

      <a
        href="https://www.linkedin.com/company/tecnoesis-nit-silchar/about/"
        target="_blank"
        rel="noreferrer"
      >
        <div className="my-8 p-2 border-gray-500 border-[4px]  rounded-full cursor-pointer hover:shadow-gradient">
          <FontAwesomeIcon icon={['fab', 'linkedin']} />
        </div>
      </a>

      <a
        href="https://twitter.com/tecnoesis_nits"
        target="_blank"
        rel="noreferrer"
      >
        <div className="my-8 p-2 border-gray-500 border-[4px]  rounded-full cursor-pointer hover:shadow-gradient">
          <FontAwesomeIcon icon={['fab', 'twitter']} />
        </div>
      </a>

      <a
        href="https://www.instagram.com/tecnoesis.nits/?hl=en"
        target="_blank"
        rel="noreferrer"
      >
        <div className="my-8 p-2 border-gray-500 border-[4px]  rounded-full cursor-pointer hover:shadow-gradient">
          <FontAwesomeIcon icon={['fab', 'instagram']} />
        </div>
      </a>
    </div>
  )
}

export default Socials
