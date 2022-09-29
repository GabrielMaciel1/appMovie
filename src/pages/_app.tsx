import '../styles/global.css'

import Layout from '../components/Layout'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Component {...pageProps} />
    </>
    
    
  )
}

export default MyApp
