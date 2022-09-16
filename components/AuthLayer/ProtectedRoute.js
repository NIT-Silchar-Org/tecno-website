import React from 'react'
import {useRouter} from 'next/router'
import {useEffect} from 'react'
import {useAuth} from '../../providers/authContext'
function ProtectedRoute({children}) {

    const {firebaseUser} = useAuth()
    const router = useRouter()

    useEffect(()=>{
        if(!firebaseUser){
            router.push('/login')
        }
    }, [router.push, firebaseUser])
  return <>{firebaseUser?children:null}</>
  
}

export default ProtectedRoute