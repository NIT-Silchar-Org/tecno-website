import React from 'react'
import {useAuth} from '../providers/authContext'
function Login() {

    const { signup} = useAuth()
    const handleLogin = async () =>{
        try{
            await signup()
        }catch(err){
            console.log(err);
        }
    }
  return (
    <button onClick={()=>handleLogin()}>login</button >
  )
}

export default Login