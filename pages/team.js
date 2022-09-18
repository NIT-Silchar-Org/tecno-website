import React, { useEffect } from 'react'
// import ReactDOM from 'react-dom';
import Image from 'next/image'
import { useState } from 'react'
// import TeamLogo from "../public/assests/TeamStat/Ellipse_2168.png"
// import downArr from "../public/assests/TeamStat/vector.png"
import TopDesign from '../public/assests/TeamStat/Group_5204.png'
import Registered from '../components/sections/TeamRegist/Registered'
import Pending from '../components/sections/TeamRegist/Pending'
import Rejected from '../components/sections/TeamRegist/Rejected'
import Navbar from '../components/sections/Navbar/Navbar'
import HamBurger from '../components/sections/Navbar/HamBurger'
function Team() {
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index)
    console.log('clicked!')
  }

  useEffect(() => {})
  return (
    <>
      <div className="teamBack">
        <div className="registration1">
          <div className="designTop">
            <Navbar profile="/profile" pfp="" hamburger={<HamBurger/>}  />
            <Image src={TopDesign} />
          </div>
          <div className="regStatus">
            <div>
              <button
                className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
                onClick={() => toggleTab(1)}
              >
                Pending
              </button>
            </div>
            <div>
              <button
                className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
                onClick={() => toggleTab(2)}
              >
                Registered
              </button>
            </div>
            <div>
              <button
                className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'}
                onClick={() => toggleTab(3)}
              >
                Rejected
              </button>
            </div>
          </div>
        </div>
        <hr className="teamhr" />
        <div className="content-tabs">
          {toggleState === 1 && <Pending />}
          {toggleState === 2 && <Registered />}
          {toggleState === 3 && <Rejected />}
        </div>
      </div>
    </>
  )
}

export default Team
