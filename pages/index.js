import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import Landing from '../src/components/Landing/Landing'
import styles from '../styles/Home.module.css'
// import pdf from '../public/JoshuaHaughtonResume.pdf'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Josh Haughton's Portolio</title>
        <meta name="description" content="Josh Haughton Portfolio Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Landing />


     
    </div>
  )
}
