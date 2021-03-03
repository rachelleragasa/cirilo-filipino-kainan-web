import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'

import Header from "./header"
import Footer from "../components/footer"
import Hero from '../components/hero'
import GlobalStyles from "../styles/global"
import "../styles/fontface.css"

const Layout = ({ children }) => {
  return (
    <Container>
      <GlobalStyles />
      <Header />
      <Hero />
      <main>{children}</main>
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  position: relative;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
