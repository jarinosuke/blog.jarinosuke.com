import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"
import "./layout.css"

const Layout = ({ title, children }) => {
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(28),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >

      <header>
        <Link
          className="logo"
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </header>
      <main>{children}</main>
    </div >
  )
}

export default Layout
