import React from 'react'
import { useState } from 'react'
import { team_register } from '../utils/event_register'
import {useAuth} from '../providers/authContext'

function test() {
  const [teamname, setTeamname] = useState('')
  const [username, setUsername] = useState('')
  const [secondusername, setSecondUsername] = useState('')
  const {auth} = useAuth()
  


  const handleRegister = async () => {
    let body = {
      name: teamname,
      members: [
        {
          username: username,
          role: 'LEADER',
        },
        {
          username: secondusername,
          role: 'MEMBER',
        },
      ],
    }
    let firebaseToken = await auth.currentUser.getIdToken();
    console.log(firebaseToken);

    let resp = await team_register(1, body,firebaseToken )
    console.log(resp);
  }

  return (
    <div>
      <h1>Hello</h1>

      <div>
        <h1>Team Name</h1>
        <input value={teamname} onChange={(e) => setTeamname(e.target.value)} />
        <h1>Username</h1>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <h1>Username</h1>
        <input value={secondusername} onChange={(e) => setSecondUsername(e.target.value)} />
        {/* <h1>College Name</h1>
            <input value={collegeName} onChange={(e) => setCollegeName(e.target.value)}/>
            <h1>Reg ID</h1>
            <input value={regID} onChange={(e)=>setRegID(e.target.value)} />
            <h1>Username</h1>
            <input value={userName}  onChange={(e)=> setUserName(e.target.value)} /> */}

        <button onClick={handleRegister}>Click</button>
      </div>
    </div>
  )
}

export default test
