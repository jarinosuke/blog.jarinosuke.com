import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"
//import "./layout.css"

const Layout = ({ location, title, children }) => {
  let header
  header = (
    <h3
      style={{
        fontFamily: `Helvetica Neue, Arial, "Apple Color Emoji"`,
        fontSize: 32,
        marginTop: 0,
      }}
    >
      <Link
        style={{
          boxShadow: `none`,
          color: `inherit`,
        }}
        to={`/`}
      >
        {title}
      </Link>
    </h3>
  )

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
    </div>
  )
}

export default Layout
