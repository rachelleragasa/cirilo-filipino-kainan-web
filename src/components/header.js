import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { semplicitaProMedium, semplicitaProLight, above } from "../styles"
import FacebookIcon from "../assets/icons/facebook.svg"
import InstagramIcon from "../assets/icons/instagram.svg"

const Header = () => {
  return (
    <Container>
      <div>
        <StyledLink to="/">
          <Logo>
            Cirilo<span>Filipino Kainan</span>
          </Logo>
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
  padding: 15px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;

  ${above.tabletLarge`
    padding: 15px 40px;
  `}
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  text-transform: uppercase;
  letter-spacing: 2px;
`

const Logo = styled.div`
  ${semplicitaProMedium};
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 30px;

  span {
    display: none;

    ${above.mobile`
      ${semplicitaProLight};
      display: inline-block;
      font-size: 12px;
      position: relative;
      top: -5px;
      left: 10px;
    `}
  }
`

const SocialIcons = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-grow: 1;
  text-align: center;

  li {
    margin-left: 20px;
  }

  img {
    width: 20px;
  }
`

export default Header
