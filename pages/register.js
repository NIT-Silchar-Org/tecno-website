import React from 'react'
import { useState } from 'react'
import Alert from '../components/Form/Alert'
import Input from '../components/Form/Input'
import { useAuth } from '../providers/authContext'
import { userBackendRegister } from '../utils/auth_handlers'
function Register() {
  const { auth } = useAuth()

  const [name, setName] = useState('hello')
  const [email, setEmail] = useState('')
  const [collegeName, setCollegeName] = useState('')
  const [regID, setRegID] = useState(null)
  const [userName, setUserName] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  // console.log(firebaseUser?.accessToken);
  // let token = firebaseToken
  const handleSignup = async (e) => {
    e.preventDefault()
    let token = await auth.currentUser.getIdToken()
    await userBackendRegister({
      name,
      email,
      collegeName,
      regID,
      userName,
      imageUrl,
      token,
    })
  }

  return (
    <div>
      {/* <Alert text={"Hello"} /> */}
      {/* <div>
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

        </div> */}
      <div className="bg-black w-full h-screen justify-center form-bg ">
        <div className="form-section">
          <h1 className="text-lg text-white mokoto-glitch-font">Signup Form</h1>
          <form className="form" onSubmit={(e)=>handleSignup(e)}>
            <div className=" input-wrapper">
              <Input placeholder={'Name'} val={name} setVal={setName} req={true}/>
              <Input
                placeholder={'Username'}
                val={userName}
                setVal={setUserName}
                req={true}
              />
              <Input placeholder={'Email'} val={email} setVal={setEmail}
              req={true} />
              <Input
                placeholder={'Collge Name'}
                val={collegeName}
                setVal={setCollegeName}
                req={true}
              />
              <Input
                placeholder={'Registration ID'}
                val={regID}
                setVal={setRegID}
                req={true}
              />
              {/* <Input placeholder={"Name"}/> */}
            </div>
            <div className="my-4">
            <button
              
              className="btn secondary-solid text-xl"
              type='submit'
            >
              Register
            </button>
          </div>
          </form>
          
        </div>
      </div>
    </div>
  )
}

export default Register
