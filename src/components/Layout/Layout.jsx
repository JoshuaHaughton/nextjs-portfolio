import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import classes from './Layout.module.css';
import React, {useState} from 'react'

const Layout = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={classes.container} >
      <Nav showModal={showModal}/>
        <main>
          {/* {children} */}
          {React.cloneElement(children, { showModal, setShowModal })}
        </main>
      <Footer />
    </div>
  )
}

export default Layout