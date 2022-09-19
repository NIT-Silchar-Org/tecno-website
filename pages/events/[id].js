import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
// import DummyLogo from '../../public/assests/stash/dummylogo.png'
import Header from '../../components/Header';
import TeamMember from '../../components/teamMember';
import Button from '../../components/Button';
import { fetchEventById } from '../../utils/events_fetch';
import { useAuth } from '../../providers/authContext';
import { teamRegister } from '../../utils/event_register';
import Alert from '../../components/Alert';
import {useRouter} from 'next/router'
import Navbar from '../../components/sections/Navbar/Navbar';
import HamBurger from '../../components/sections/Navbar/HamBurger';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ReactMarkdown from 'react-markdown';
  
function Event() {
  const [isFormHidden, setIsFormHidden] = useState(true)
  const scrollToRef = useRef()

  useEffect(() => {
    if (!isFormHidden) {
      scrollToRef.current.scrollIntoView()
    }
  }, [isFormHidden])

  // const [members, addMembers] = useState([{ member: '' }]);
  const [teamname, setTeamName] = useState('')
  const [username, setUsername] = useState('')
  const [memberCount, setMemberCount] = useState(1)
  const [members, setMembers] = useState([])

  const { auth } = useAuth()
  // console.log(data.module);
  const handleReg = async () => {
    const token = await auth.currentUser.getIdToken()
    const body = {
      name: teamname,
      members: members,
    }
    const res = await teamRegister(id, body, token)
    console.log(res)
  }
  const router = useRouter()
  const [data, setData] = useState(null)
  const { id } = router.query
  useEffect(() => {
    fetchEventById(id).then((res) => {
      setData(res?.data?.msg)
    })
    // let id = params?.id
    // console.log(resp);
    // let data = resp?.data?.msg
  }, [])
  return (
    <>
      <div className="justify-center bg-black w-full h-screen">
        <Navbar profile="/profile" pfp="" hamburger={<HamBurger />} />
        <div className="section-one">
          <Header />

          <div className="details-section-wrapper">
            <div className="text-3xl text-center justify-start relative items-center">
              {/* <h2>Logo</h2>
               */}

              <div className="event-logo relative">
                <Image src={data?.module?.iconImage} width={80} height={80} />
              </div>
              <div>
                <h1 className="text-start">{data?.name}</h1>
                <h1 className="text-white text-lg mokoto-glitch-font">
                  Module : Robotron
                </h1>
              </div>
            </div>
            <div className="poster relative">
              <Image
                src={data?.posterImage}
                layout="fill"
                // width="100%"
                // height="100%"
                objectFit="cover"
                priority="true"
              />
            </div>
            <div className="details scrollbar-hidden">
              <p className="text-white"><ReactMarkdown>{data?.description}</ReactMarkdown></p>
            </div>

            <div className="my-2">
              <Button
                onClick={() => {
                  setIsFormHidden(false)
                  scrollToRef.current.scrollIntoView()
                }}
              >
                Register
              </Button>
            </div>
          </div>
        </div>

        <div className="section-second">
          <div className="bg-purple w-full h-full relative">
            {data?.posterImage && (
              <Image
                src={data?.posterImage}
                layout="fill"
                // width="100%"
                // height="100%"
                objectFit="cover"
                priority="true"
              />
            )}
          </div>
        </div>
      </div>
      <div
        className={`bg-black w-full h-screen justify-center form-bg ${
          isFormHidden && 'hidden'
        } `}
        ref={scrollToRef}
      >
        <Alert text="hello" />
        <div className="form-section">
          <h1 className="text-lg text-white mokoto-glitch-font">
            Registration Form
          </h1>
          <div className=" input-wrapper">
            <div className="input-field">
              <input
                value={teamname}
                onChange={(e) => setTeamName(e.target.value)}
                className="form-input"
                placeholder="Team Name"
              />
              <div className="input-border"></div>
            </div>
            {/* <div>
                <input className="form-input" placeholder="" />
                <div className="input-border"></div>
              </div> */}
          </div>
          <TeamMember
            members={members}
            setMembers={setMembers}
            memberCount={memberCount}
            setMemberCount={setMemberCount}
            username={username}
            setUsername={setUsername}
          />
          <div className="my-2" onClick={handleReg}>
            <Button>Submit</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Event
