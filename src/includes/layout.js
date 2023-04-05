import React from "react";
import Header from "./header";
import Footer from "./footer";

import "./styles/styles.scss"

const Layout = ({ children, title }) => {

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout

export const Head = () => <title>Home Page</title>