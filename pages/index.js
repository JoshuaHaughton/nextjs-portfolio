import Head from "next/head";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import Landing from "../src/components/Landing/Landing";
import Modal from "../src/components/Modal/Modal";
import Projects from "../src/components/Projects/Projects";
import styles from "../styles/Home.module.css";
// import pdf from '../public/JoshuaHaughtonResume.pdf'

export default function Home({showModal, setShowModal}) {
  

  return (
    <div className={styles.container}>
      <Head>
        <title>Josh Haughton's Portolio</title>
        <meta name="description" content="Josh Haughton Portfolio Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <button onClick={() => setShowModal(prev => !prev)}>Open Modal</button>
      <Landing showModal={showModal} />
      <Projects showModal={showModal} />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      {/* <Modal onClose={() => setShowModal(false)} show={showModal} /> */}

    </div>
  );
}
