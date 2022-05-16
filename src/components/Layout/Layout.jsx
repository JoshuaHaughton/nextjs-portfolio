import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import classes from './Layout.module.css';
import React from 'react'

const Layout = ({ children }) => {

  return (
    <div className={classes.container} >
      <Nav />
        <main>
          {children}
          {/* {React.cloneElement(children, { showModal, setShowModal })} */}
        </main>
      <Footer />
    </div>
  )
}

export default Layout