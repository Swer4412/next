import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-blue-500 p-6 lg:px-8 hover:p-16 dark:text-red-500">
        Hello
      </main>
    </>
  )
}
