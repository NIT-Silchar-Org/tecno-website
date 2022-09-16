import React from 'react'
import { useState} from 'react'
import {useAuth} from '../providers/authContext'
import {userBackendRegister} from '../utils/auth_handlers'

function Register() {
    const {firebaseUser} = useAuth()

    const [name, setName] = useState("hello")
    const [email, setEmail] = useState("")
    const [collegeName, setCollegeName] = useState("")
    const [regID, setRegID] = useState(null)
    const [userName, setUserName] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    console.log(firebaseUser?.accessToken);
    let token = firebaseUser?.accessToken
    const handleSignup =  ()=>{
        userBackendRegister({ name,email,  collegeName, regID, userName,imageUrl, token })
    }
     


  return (
    <div>

        <div>
            <h1>Name</h1>
            <input value={name} onChange={(e)=>setName(e.target.value)}/>
            <h1>Email</h1>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} />
            <h1>College Name</h1>
            <input value={collegeName} onChange={(e) => setCollegeName(e.target.value)}/>
            <h1>Reg ID</h1>
            <input value={regID} onChange={(e)=>setRegID(e.target.value)} />
            <h1>Username</h1>
            <input value={userName}  onChange={(e)=> setUserName(e.target.value)} />

            <button onClick={handleSignup}>Click</button>

        </div>
    </div>
  )
}

export default Register