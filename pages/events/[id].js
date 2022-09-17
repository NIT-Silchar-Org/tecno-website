import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import DummyLogo from '../../public/assests/stash/dummylogo.png'
import Header from '../../components/Header';
import TeamMember from '../../components/teamMember';
import Button from '../../components/button';
import { fetch_event_by_id } from '../../utils/events_fetch';
import { useAuth } from '../../providers/authContext';
import { team_register } from '../../utils/event_register';
function Event({data, id}) {
  const [isFormHidden, setIsFormHidden] = useState(true)
  const scrollToRef = useRef()

  useEffect(() => {
    if (!isFormHidden) {
      scrollToRef.current.scrollIntoView()
    }
  }, [isFormHidden])


  // const [members, addMembers] = useState([{ member: '' }]);
  const [teamname, setTeamName]  = useState("")
  const [username, setUsername] = useState("")
  const [memberCount, setMemberCount] = useState(1)
  const [members, setMembers] = useState([])

  const {auth} = useAuth()
  console.log({id});
  const handleReg = async () =>{
    const token = await auth.currentUser.getIdToken()
    let body ={
      name:teamname,
      members:members,




    }
    let res = await team_register(id,body, token )
    console.log(res);
  }
  return (
    <>
      <div className="justify-center bg-black w-full h-screen">
        <div className="section-one">
          <Header />
          <div className="details-section-wrapper">
            <div className="text-3xl text-center justify-start relative items-center">
              {/* <h2>Logo</h2>
               */}
              <div className="event-logo">
                <Image src={DummyLogo} />
              </div>
              <div>
                <h1 className="text-start">{data?.name}</h1>
                <h1 className="text-white text-lg mokoto-glitch-font">Module : Robotron</h1>
              </div>
            </div>
            <div className='poster'>
            </div>
            <div className="details scrollbar-hidden">
              <p className="text-white">
                {data?.description}
              </p>
            </div>

            <div className="my-2">
              
                <Button onClick={() => {
                  setIsFormHidden(false)
                  scrollToRef.current.scrollIntoView()
                }}>
                  Register
                </Button>
            </div>
          </div>
        </div>

        <div className="section-second">
          <div className="bg-purple w-full h-full"></div>
        </div>
      </div>
      <div
        className={`bg-black w-full h-screen justify-center form-bg ${isFormHidden && 'hidden'
          } `}
        ref={scrollToRef}
      >
        <div className="form-section">
          <h1 className="text-lg text-white mokoto-glitch-font">Registration Form</h1>
          <div className=" input-wrapper">
            <div className='input-field'>
              <input value={teamname} onChange={(e)=>setTeamName(e.target.value)} className="form-input" placeholder="Team Name" />
              <div className="input-border"></div>
            </div>
            {/* <div>
                <input className="form-input" placeholder="" />
                <div className="input-border"></div>
              </div> */}
          </div>
          <TeamMember members={members} setMembers={setMembers}  memberCount={memberCount} setMemberCount={setMemberCount} username={username}  setUsername={setUsername} />
          <div className='my-2' onClick={handleReg}>

            <Button>Submit</Button>
          </div>
          

        </div>
      </div>
    </>
  )
}

export default Event
export const getServerSideProps = async ({ params }) => {

  let resp = await fetch_event_by_id(params?.id)
  let id = params?.id
  console.log(resp);
  let data = resp?.data?.msg

  return {
    props: {
      data,
      id
    },
  }
}
