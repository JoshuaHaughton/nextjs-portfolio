import Head from "next/head";
import ContactButton from "../src/components/UI/ContactButton/ContactButton";
import FixedDarkModeButton from "../src/components/UI/FixedDarkModeButton/FixedDarkModeButton";
import Landing from "../src/components/Page-Layout/Landing/Landing";
import Modal from "../src/components/UI/Modal/Modal";
import Projects from "../src/components/Page-Layout/Projects/Projects";
import classes from "../styles/Home.module.css";
import Contact from "../src/components/Page-Layout/Contact/Contact";

export default function Home() {
  return (
    <div className={classes.container}>
      <Head>
        <title>Josh Haughton&apos;s Portolio</title>
        <meta name="description" content="Josh Haughton Portfolio Site" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <Landing />
      <Projects />
      <Contact />

      <FixedDarkModeButton />
      <ContactButton />

      <Modal />
    </div>
  );
}
