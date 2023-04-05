import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import logo from "../images/qh-logo.svg"

const Header = () => {


  return (
    <section>
      <title></title>
      <header class="white">
        <div class="wrapper gutter-sm">
          <div class="h-logo">
            <Link to="/" className="flex align-center">
              <div class="logo">
                <img src={logo} />
              </div>
              <div class="slash">/</div>
              <div class="wiki">MARKETING WIKI</div>
            </Link>
          </div>
        </div>
      </header>
    </section>
  )
}

export default Header