import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "../components/footer"
import Hero from '../components/hero'
import GlobalStyles from "../styles/global"
import "../styles/fontface.css"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
