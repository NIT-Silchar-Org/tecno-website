import React from 'react'
import { useState } from 'react'
// import Alert from '../components/Alert'
import Button from '../components/Button'
// import Alert from '../components/Form/Alert'
import Input from '../components/Form/Input'
import HamBurger from '../components/sections/Navbar/HamBurger'
import Navbar from '../components/sections/Navbar/Navbar'
import { useAuth } from '../providers/authContext'
import { userBackendRegister } from '../utils/auth_handlers'
function Register() {
  const { auth } = useAuth()

  // const [name, setName] = useState('hello')
  const [firstName, setFirstName] = useState('')
  const [secondName, setSecondName] = useState('')
  const [phone, setPhone] = useState(null)

  const [email, setEmail] = useState('')
  const [collegeName, setCollegeName] = useState('')
  const [regID, setRegID] = useState(null)
  const [userName, setUserName] = useState('')
  // const [imageUrl, setImageUrl] = useState('')
  const imageUrl =""
  // console.log(firebaseUser?.accessToken);
  // let token = firebaseToken
  const handleSignup = async (e) => {
    e.preventDefault()
    const token = await auth.currentUser.getIdToken()
    await userBackendRegister({
      firstName,
      secondName,
      phone,
      email,
      collegeName,
      regID,
      userName,
      imageUrl,
      token,
    })
  }

  // const [message, setMessage] = useState("Hello")

  return (
    <div>
      <Navbar profile={"/profile"} hamburger={<HamBurger/>} />
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
          <h1 className="text-lg text-center text-white mokoto-glitch-font">Signup Form</h1>
          <form className="form" onSubmit={(e) => handleSignup(e)}>
            <div className=" input-wrapper">
              {/* <Input placeholder={'Name'} val={name} setVal={setName} req={true}/> */}
              <Input
                placeholder={'First Name'}
                val={firstName}
                setVal={setFirstName}
                req={true}
              />
              <Input
                placeholder={'Last Name'}
                val={secondName}
                setVal={setSecondName}
                req={true}
              />
              <Input
                placeholder={'Phone'}
                val={phone}
                setVal={setPhone}
                req={true}
              />
              <Input
                placeholder={'Username'}
                val={userName}
                setVal={setUserName}
                req={true}
              />
              <Input
                placeholder={'Email'}
                val={email}
                setVal={setEmail}
                req={true}
              />
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
              <div>
                
              </div>
            <div className="my-4">
              <Button>
                <button  type="submit">
                  Register
                </button>
              </Button>
              
            </div>
              {/* <Input placeholder={"Name"}/> */}
            </div>
            
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
