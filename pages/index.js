import React from 'react'
import Parallax from '../components/style-guide/sections/Parallax'
import AboutUs from '../components/style-guide/sections/AboutUs'
import AboutNIT from '../components/style-guide/sections/AboutNIT'
import Head from 'next/head'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
library.add(faFacebook, faLinkedin, faTwitter, faInstagram)

export default function Home() {
  return (
    <>
      <Head>
        <title>Tecnoesis 2022</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="bg-black">
        <Parallax />
        <AboutUs />
        <AboutNIT />

        {/* footer on phone view */}

        <div className="flex justify-center items-center  md:hidden text-white">
         
            <a
              href="https://www.facebook.com/tecnoesis.nits"
              target="_blank"
              rel="noreferrer"
              className="my-8 p-2 border-gray-500 border-[4px] mx-2 w-[3rem] rounded-full cursor-pointer hover:shadow-gradient"
            >
              <FontAwesomeIcon icon={['fab', 'facebook']} />
            </a>
     

          <a
            href="https://www.linkedin.com/company/tecnoesis-nit-silchar/about/"
            target="_blank"
            rel="noreferrer"
            className="my-8 p-2 border-gray-500 border-[4px] mx-2 w-[3rem] rounded-full cursor-pointer hover:shadow-gradient"
          >
            
              <FontAwesomeIcon icon={['fab', 'linkedin']} />
          
          </a>

          <a
            href="https://twitter.com/tecnoesis_nits"
            target="_blank"
            rel="noreferrer"
            className="my-8 p-2 border-gray-500 border-[4px] mx-2 w-[3rem] rounded-full cursor-pointer hover:shadow-gradient"
          >
            
              <FontAwesomeIcon icon={['fab', 'twitter']} />
   
          </a>

          <a
            href="https://www.instagram.com/tecnoesis.nits/?hl=en"
            target="_blank"
            rel="noreferrer"
            className="my-8 p-2 border-gray-500 border-[4px] mx-2 w-[3rem] rounded-full cursor-pointer hover:shadow-gradient"
          >
           
              <FontAwesomeIcon icon={['fab', 'instagram']} />
  
          </a>
        </div>
      </div>
    </>
  )
}
