import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Head } from "./head";

import "./styles/styles.scss"

const Layout = ({ children, title }) => {
    console.log(title)
    return (
        <>  
            <Head title={title} />
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout