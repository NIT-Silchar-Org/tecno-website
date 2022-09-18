import React from 'react'
import styles from '../sections/Modules/Modules.module.scss'
import logo from '../../public/assests/modules/Logo.svg'
import Image from 'next/image'
import {useAuth} from '../../providers/authContext'
import {useState} from 'react'
function LoginButton() {
    const { signup} = useAuth()
    const [isdisabled, setIsdisabled] = useState(false)
    const handleLogin = async () =>{
        setIsdisabled(true)
        try{
            await signup()
        }catch(err){
            console.log(err);
        }
        setIsdisabled(false)
    }


  return (
    <button className={styles.logo}  onClick={handleLogin} disabled={isdisabled}>
      <Image src={logo} layout="fill" objectFit="contain" priority="true" />
    </button>
  )
}

export default LoginButton
