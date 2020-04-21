import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import { semplicitaProMedium } from "../styles"
import Menu from "../components/navigation/menu"
import Hamburger from "../components/navigation/hamburger"

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <Container>
      <div>
        <StyledLink to="/">
          <Logo>Cirilo</Logo>
        </StyledLink>
      </div>
      <Navigation>
        <Menu open={open} setOpen={setOpen} />
        <Hamburger open={open} setOpen={setOpen} />
      </Navigation>
    </Container>
  )
}

const Container = styled.header`
  padding: 20px 8%;
  display: flex;
  flex-direction: row;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`

const Logo = styled.div`
  ${semplicitaProMedium}
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 30px;
`

const Navigation = styled.div`
  flex-grow: 1;
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
