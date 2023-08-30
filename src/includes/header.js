import * as React from "react"
import { Link } from "gatsby"

import logo from "../images/qh-logo.svg"

const Header = () => {


  return (
    <section>
      <title></title>
      <header className="white">
        <div className="wrapper gutter-sm">
          <div className="h-logo">
            <Link to="/" className="flex align-center">
              <div className="logo">
                <img src={logo} alt="Quantum Health logo" />
              </div>
              <div className="slash">/</div>
              <div className="wiki">MARKETING WIKI</div>
            </Link>
          </div>
        </div>
      </header>
    </section>
  )
}

export default Header