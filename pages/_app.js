import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
      return <>
            <Head>
                  <link rel="icon" href="favicon-mtsn.png" />
            </Head>
            <Header />
            <Component {...pageProps} />
            <Footer />
      </>
}
