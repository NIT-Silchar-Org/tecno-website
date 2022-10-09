import '../styles/globals.css'
import {AuthProvider} from '../providers/authContext'
const unprotectedRoutes = [
  '/login',
  '/signup',
  '/',
  '/register',
  '/modules',
  '/events',
  '/spark/form',
  '/tecnoteam'
]
import {useRouter} from 'next/router'
import ProtectedRoute from '../components/AuthLayer/ProtectedRoute'
function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (

    <AuthProvider>

      <div>

        {unprotectedRoutes.includes(router.pathname) ?(

          <Component {...pageProps} />
        ):(
          <ProtectedRoute>

            <Component {...pageProps} />
          </ProtectedRoute>
        )}
      </div>
    </AuthProvider>
  )
}

export default MyApp
