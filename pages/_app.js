import '../styles/globals.css'
import { AuthProvider } from '../providers/authContext'
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
import { useRouter } from 'next/router'
import ProtectedRoute from '../components/AuthLayer/ProtectedRoute'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Script from 'next/script'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <AuthProvider>
      <Head>
        <title>Tecnoesis 2022</title>
      </Head>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload" id="google-anaytlics-setup">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>

      <ToastContainer />

      <div>
        {unprotectedRoutes.includes(router.pathname) ||
        router.pathname.includes('events') ? (
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
