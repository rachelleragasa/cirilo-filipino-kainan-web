import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import { semplicitaProMedium, above } from "../styles"
import FacebookIcon from "../assets/icons/facebook.svg"
import InstagramIcon from "../assets/icons/instagram.svg"

const Header = () => {
  return (
    <Container>
      <div>
        <StyledLink to="/">
          <Logo>Cirilo</Logo>
        </StyledLink>
      </div>
      <SocialIcons>
        <li>
          <a
            href="https://www.facebook.com/cirilofilipinokainan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={FacebookIcon}
              alt="Click here to view our facebook page"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/cirilofilipinokainan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={InstagramIcon}
              alt="Click here to view our instagram page"
            />
          </a>
        </li>
      </SocialIcons>
    </Container>
  )
}

const Container = styled.header`
  padding: 15px 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
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
`

const SocialIcons = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-grow: 1;
  text-align: center;
  padding: 0;
  margin: 0;

  li {
    margin-left: 20px;
  }

  img {
    width: 20px;
  }
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
