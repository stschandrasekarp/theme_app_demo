import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from "../styles/Home.module.scss";

const Layout = ({ children }) => {
    return (
        <>
            <Header styles={styles} />
            {children}
            <Footer styles={styles} />
        </>
    )
}

export default Layout