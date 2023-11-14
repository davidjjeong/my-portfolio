import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

import styles from './Layout.module.css';

const Layout = ({ children }) => {
    return (
      <>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </>
    )
  }
  
  export default Layout;