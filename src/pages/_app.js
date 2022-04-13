import Layout from '../components/index/Layout'
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import  'aos/dist/aos.css' ;

function MyApp({ Component, pageProps }) {
  return(
  <div>
    <Layout>
     <Component {...pageProps} />
  </Layout>
  </div>
  )
}

export default MyApp