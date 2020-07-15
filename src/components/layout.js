import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "../components/footer"
import GlobalStyles from "../styles/global"
import "../styles/fontface.css"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
