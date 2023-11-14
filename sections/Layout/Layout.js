import Head from "next/head";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

import styles from './Layout.module.css';

const Layout = ({ children }) => {
    return (
      <>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </>
    )
  }
  
  export default Layout;