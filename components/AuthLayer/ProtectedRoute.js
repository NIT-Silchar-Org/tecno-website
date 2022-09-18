import React from 'react'
import {useRouter} from 'next/router'
import {useEffect} from 'react'
import {useAuth} from '../../providers/authContext'
function ProtectedRoute({children}) {

    const {firebaseUser, signup} = useAuth()
    const router = useRouter()

    useEffect(()=>{
        if(!firebaseUser){
            console.log(firebaseUser)
            // router.push('/login')
            signup().then((e)=>{
                console.log(e);
            })

        }
    }, [firebaseUser])
  return <>{firebaseUser?children:null}</>
  
}

export default ProtectedRoute