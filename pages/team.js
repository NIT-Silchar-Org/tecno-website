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
import { useAuth } from '../providers/authContext'
import { teamsFetch } from '../utils/team_fetch'
function Team() {
  const [toggleState, setToggleState] = useState(1)
  const { auth, firebaseUser } = useAuth()
  const [teams, setTeams] = useState([])

  const toggleTab = (index) => {
    setToggleState(index)
  }

  useEffect(() => {
    auth.currentUser.getIdToken().then((token) => {
      teamsFetch(token).then((resp) => {
        setTeams(resp.data.msg)
      })
    })
  }, [firebaseUser, auth, toggleState])

  useEffect(() => {})
  return (
    <>
      <div className="teamBack">
        <div className="registration1">
          <div className="designTop">
            <Navbar profile="/profile" pfp="" hamburger={<HamBurger />} />
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
          {toggleState === 1 && (
            <Pending
              teams={teams.filter(
                (team) => team.team.registrationStatus === 'PENDING',
              )}
              deleteFromPending={(id) =>
                setTeams(teams.filter((t) => t.id !== id))
              }
            />
          )}
          {toggleState === 2 && (
            <Registered
              teams={teams.filter(
                (team) => team.team.registrationStatus === 'REGISTERED',
              )}
            />
          )}
          {toggleState === 3 && (
            <Rejected
              teams={teams.filter(
                (team) => team.team.registrationStatus === 'CANCELLED',
              )}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default Team
