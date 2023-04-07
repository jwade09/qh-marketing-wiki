import React from "react";
import Header from "./header";
import Footer from "./footer";

import "./styles/styles.scss"

const Layout = ({ children, title }) => {
    console.log(title)
    return (
        <>  
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout