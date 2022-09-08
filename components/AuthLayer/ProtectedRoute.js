import React from 'react'
import {useRouter} from 'next/router'
import {useEffect} from 'react'
import {useAuth} from '../../providers/authContext'
function ProtectedRoute({children}) {

    const {user} = useAuth()
    const router = useRouter()

    useEffect(()=>{
        if(!user){
            router.push('/login')
        }
    }, [router.push, user])
  return <>{user?children:null}</>
  
}

export default ProtectedRoute