import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Homepage from '../pages/Home'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>MTSN</title>
        <meta name="description" content="Multi Tech Solutions " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-mtsn.png" />
      </Head>
      
      <main className={styles.main}>
      <Homepage />
      </main>
      

    </>
  )
}
