import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import { semplicitaProMedium, above } from "../styles"
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
      <MobileNavigation className="mobile-nav">
        <Menu open={open} setOpen={setOpen} />
        <Hamburger open={open} setOpen={setOpen} />
      </MobileNavigation>
      <DesktopNavigation className="desktop-nav">
        <List>
          <ListItem>
            <StyledLink to="/our-story">Our Story</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/our-story">Menu</StyledLink>
          </ListItem>
        </List>
      </DesktopNavigation>
    </Container>
  )
}

const Container = styled.header`
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;

  ${above.tabletLarge`
    padding: 15px 40px;
  `}

  .mobile-nav {
    display: block;

    ${above.tabletLarge`
      display: none;
    `}
  }

  .desktop-nav {
    display: none;

    ${above.tabletLarge`
      display: block;
    `}
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  text-transform: uppercase;
  letter-spacing: 2px;
`

const Logo = styled.div`
  ${semplicitaProMedium}
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 30px;

  ${above.tabletLarge`
    font-size: 24px;
  `}
`

const DesktopNavigation = styled.nav``

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  margin: 0;
`

const ListItem = styled.li`
  margin: 0 15px;

  a {
    ${above.tablet`
      font-size: 12px;
    `}
  }
`

const MobileNavigation = styled.div`
  flex-grow: 1;
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
