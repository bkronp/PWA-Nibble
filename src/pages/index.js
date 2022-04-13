import Head from 'next/head'
import ComponentsIndex from '../components/index/componentindex'



export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Nibble TI</title>
        <meta name="description" content="Nibble Soluciones Informaticas" />
        <imag rel="icon" href="/Image/favicon.ico" />
      </Head>
      <script src="dist/js/index.min.js"></script>
      <ComponentsIndex/>
    </div>
  )
}
