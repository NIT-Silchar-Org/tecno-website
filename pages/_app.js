import '../styles/globals.css'
import { AuthProvider } from '../providers/authContext'
const unprotectedRoutes = ['/login', '/signup', '/', '/register', '/modules']
import { useRouter } from 'next/router'
import ProtectedRoute from '../components/AuthLayer/ProtectedRoute'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <AuthProvider>
      <ToastContainer />

      <div>
        {unprotectedRoutes.includes(router.pathname) ? (
          <Component {...pageProps} />
        ) : (
          <ProtectedRoute>
            <Component {...pageProps} />
          </ProtectedRoute>
        )}
      </div>
    </AuthProvider>
  )
}

export default MyApp
