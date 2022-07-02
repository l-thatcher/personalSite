import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Louis Thatcher</title>
        <meta name="home" content="home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
       <div>
         <h1 className="text-3xl">
           Hello world! THIS IS A TEST
         </h1>
       </div>
      </main>

      <footer>

      </footer>
    </div>
  )
}
