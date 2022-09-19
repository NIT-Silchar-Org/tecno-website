import { app } from '../firebase'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { useHistory } from "react-router-dom"
import { useRouter } from 'next/router'
import { async } from '@firebase/util'

const AuthContext = React.createContext()

export function useAuth() {
  return React.useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [firebaseUser, setFirebaseUser] = useState()
  const [backendUser, setBackendUser] = useState()
  const [loading, setLoading] = useState(true)
  const history = useRouter()
  // const location = useLocation();
  const auth = getAuth()
  let api_url = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user/me`

  async function signup() {
    try {
      const provider = new GoogleAuthProvider()
      provider.setCustomParameters({
        login_hint: 'user@gmail.com',
      })
      const result = await signInWithPopup(auth, provider)
      console.log('User Signed In:')
      console.log(result.user)
    } catch (error) {
      console.log(error)
    }
  }
  async function logout() {
    setBackendUser(undefined)
    await signOut(auth)
    history.push('/') // sends the user to home after logout
  }
  const getAccessToken = async () => {
    let token = await auth.currentUser.getIdToken()
    return token
  }
  async function signInBackend(user) {
    console.log(user)
    try {
      let backendUser
      if (user) {
        // const credential = GoogleAuthProvider.credentialFromResult(user);
        // const credential = user?.accessToken
        // console.log(credential);
        let token = await getAccessToken()
        console.log(token)
        const res = await axios.get(
          api_url, // send token back
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        backendUser = res.data
      }
      setBackendUser(backendUser)
      return backendUser
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((user) => {
      setFirebaseUser(user)
      signInBackend(user).then((bcUser) => {
        setLoading(false)
        console.log('bc: ', bcUser)
        if (user && (!bcUser || bcUser.status >= 300)) {
          history.push('/register') // if user does not exist in backend send to register
        }
      })
    })
    return unsuscribe
  }, [])
  const value = {
    firebaseUser,
    backendUser,
    setBackendUser,
    signup,
    logout,
    auth,
  }
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
