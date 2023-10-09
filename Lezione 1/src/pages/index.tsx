import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css' //Viene importato solo in questo file.

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        
      </main>
    </>
  )
}