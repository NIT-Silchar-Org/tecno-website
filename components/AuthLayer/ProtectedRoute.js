import React from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAuth } from '../../providers/authContext'
import { toast } from 'react-toastify'
function ProtectedRoute({ children }) {

  const { firebaseUser } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!firebaseUser) {
      router.push('/')
      toast.error("You are not authorized to view this page")
    }
  }, [router.push, firebaseUser])
  return <>{firebaseUser ? children : null}</>

}

export default ProtectedRoute
