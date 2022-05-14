import Nav from '../Nav/Nav';
import classes from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={classes.container} >
      <Nav />
        <main>
          {children}
        </main>
    </div>
  )
}

export default Layout