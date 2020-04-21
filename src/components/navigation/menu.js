import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import { above } from "../../styles"

const Menu = ({ open }) => {
  return (
    <Container aria-labelledby="mainmenu" open={open}>
      <MenuList>
        <MenuItem>
          <Link to="/our-story">Our Story</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/our-story">Menu</Link>
        </MenuItem>
      </MenuList>
    </Container>
  )
}

const Container = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;

    ${above.tablet`
      font-size: 1.5rem;
      text-align: center;
    `}

    &:hover {
      color: #343078;
    }
  }
`

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
`

const MenuItem = styled.li`
  padding: 2rem 0;
`

Menu.defaultProps = {
  open: false,
}

Menu.propTypes = {
  open: PropTypes.bool,
}
export default Menu
