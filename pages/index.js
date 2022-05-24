import Head from "next/head";
import ContactButton from "../src/components/ContactButton/ContactButton";
import FixedDarkModeButton from "../src/components/FixedDarkModeButton/FixedDarkModeButton";
import Landing from "../src/components/Landing/Landing";
import Modal from "../src/components/Modal/Modal";
import Projects from "../src/components/Projects/Projects";
import classes from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={classes.container}>
      <Head>
        <title>Josh Haughton's Portolio</title>
        <meta name="description" content="Josh Haughton Portfolio Site" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <Landing />
      <Projects />

      <FixedDarkModeButton />
      <ContactButton />

      <Modal />
    </div>
  );
}
