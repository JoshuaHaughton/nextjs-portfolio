import Head from 'next/head';
import React from 'react'
import Nav from '../Nav/Nav';
import classes from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={classes.container} >
      <Head>
        <title>Joshua Haughton's Portolio</title>
        <meta name="description" content="Nextjs Crypto Tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
        <main>
          {children}
        </main>
    </div>
  )
}

export default Layout