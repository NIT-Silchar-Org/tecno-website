import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Header from '../../components/Header'
import TeamMember from '../../components/teamMember'
import Button from '../../components/Button'
import { fetchEventById, fetchEventsAll } from '../../utils/events_fetch'
import { useAuth } from '../../providers/authContext'
import { teamRegister } from '../../utils/event_register'
import { useRouter } from 'next/router'
import Navbar from '../../components/sections/Navbar/Navbar'
import HamBurger from '../../components/sections/Navbar/HamBurger'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { toast } from 'react-toastify'
import {compareAsc} from 'date-fns'

function Event({ data }) {
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
  const [registrationState, setRegistrationState] = useState('Register')

  const { auth, backendUser, signup } = useAuth()
  const handleReg = async () => {
    if (teamname.trim() == '') {
      toast.error('Team Name is required')
      return
    }
    const token = await auth.currentUser.getIdToken()
    const body = {
      name: teamname,
      members: members,
    }
    const res = await teamRegister(id, body, token)
    if (!res.error && res.status < 300) {
      toast.success('Registered Successfully')
      setIsFormHidden(true)
    }
  }
  const router = useRouter()
  // const [data, setData] = useState(null)
  const markdown = data?.description.toString()
  const minTeamSize = data?.minTeamSize
  const maxTeamSize = data?.maxTeamSize
  const { id } = router.query
  // useEffect(() => {
  //   fetchEventById(id).then((res) => {
  //     setData(res?.data?.msg)
  //   })
  //   // let id = params?.id
  //   // let data = resp?.data?.msg
  // }, [])
  const deleteMember = (index) => {
    const newMembers = members.filter((val, idx) => idx != index)
    setMembers(newMembers)
    setMemberCount(memberCount - 1)
  }
  useEffect(() => {
    const startDate = new Date(data.registrationStartTime)
    const endDate = new Date(data.registrationEndTime)
    const now = new Date()
    if (compareAsc(now, startDate) === -1) setRegistrationState('Registration Not Started')
    else if (compareAsc(now, endDate) === 1)
      setRegistrationState('Registration Closed')
  }, [data])
  const showBtn = data.module.thirdPartyURL.length === 0;
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
                <h1 className="text-start text-lg2">{data?.name}</h1>
                <div className="gap" />
                <h1 className="text-white text-lg mokoto-glitch-font">
                  Module : {data?.module?.name}
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
            <div className=" text-label">
              <p>Min Team Size : {minTeamSize}</p>
              <p>Max Team Size : {maxTeamSize}</p>
            </div>
            <div className="details scrollbar-hidden">
              <p className="text-white">
                <ReactMarkdown remarkPlugins={[remarkGfm]} linkTarget="_blank">
                  {markdown}
                </ReactMarkdown>
              </p>
            </div>

            {
              showBtn?<div className="my-2">
              {backendUser?.status < 300 ? (
                registrationState === 'Register'? (<Button
                  onClick={() => {
                    setIsFormHidden(false)
                    scrollToRef.current?.scrollIntoView()
                  }}
                >
                  {registrationState}
                </Button>):(<div className="btnDis">{registrationState}</div>)
              ) : (
                <Button onClick={signup}>Login</Button>
              )}
            </div>:null
            }
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
      {!isFormHidden && (
        <div
          className={`bg-black w-full h-screen justify-center form-bg ${
            isFormHidden && 'hidden'
          } `}
          ref={scrollToRef}
        >
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
                  required
                />
                <div className="input-border"></div>
              </div>
              {/* <div>
                <input className="form-input" placeholder="" />
                <div className="input-border"></div>
              </div> */}
            </div>

            <div className=" input-wrapper">
              <div className="input-field">
                <h2 className="my-2 text-input text-lg">Leader </h2>
                <div className="input-field">
                  <input
                    value={backendUser.msg.username}
                    // onChange={(e) => setTeamName(e.target.value)}
                    className="form-input"
                    // placeholder="Leader"
                    disabled
                  />
                  <div className="input-border"></div>
                </div>
              </div>
              {/* <div>
                <input className="form-input" placeholder="" />
                <div className="input-border"></div>
              </div> */}
            </div>
            <div className=" input-wrapper">
              <div className="input-field">
                <h2 className="my-2 text-input text-lg">Leader Phone</h2>
                <div className="input-field">
                  <input
                    value={backendUser.msg.phoneNumber}
                    // onChange={(e) => setTeamName(e.target.value)}
                    className="form-input"
                    // placeholder="Leader"
                    disabled
                  />
                  <div className="input-border"></div>
                </div>
              </div>
              {/* <div>
                <input className="form-input" placeholder="" />
                <div className="input-border"></div>
              </div> */}
            </div>
            {data && data.maxTeamSize != 1 && (
              <TeamMember
                members={members}
                setMembers={setMembers}
                memberCount={memberCount}
                setMemberCount={setMemberCount}
                username={username}
                setUsername={setUsername}
                maxMemberCount={data.maxTeamSize}
                deleteMember={deleteMember}
              />
            )}
            <div className="my-2" onClick={handleReg}>
              <Button>Submit</Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetchEventsAll()
  // console.log(res.data.msg.map((event) => event.id))
  const paths = res.data.msg.map((event) => ({
    params: {
      id: `${event.id}`,
    },
  }))

  console.log(paths)
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const res = await fetchEventById(context.params.id)
  return {
    props: { data: res.data.msg },
  }
}

export default Event
