import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import classes from "./Layout.module.css";
import React from "react";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const showModal = useSelector((state) => state.modal.showModal);
  const darkMode = useSelector((state) => state.darkMode.showDarkMode);

  let containerClasses = classes.container;

  showModal && (containerClasses = `${classes.container} ${classes.showModal}`);
  darkMode && (containerClasses = `${containerClasses} ${classes.darkMode}`);

  return (
    <div className={containerClasses}>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
