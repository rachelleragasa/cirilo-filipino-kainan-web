import React from "react"
import styled from "styled-components"
import { above, color, greyBackground, semplicitaProMedium } from "../styles"
import FacebookIcon from "../assets/icons/facebook.svg"
import InstagramIcon from "../assets/icons/instagram.svg"

const Footer = () => (
  <Container>
    <FooterInfo>
      <div>
        <h3>Where are we?</h3>
        <p>
          4 Cable St,
          <br />
          Whitechapel,
          <br />
          London E1 8J
        </p>
      </div>
      <div>
        <h3>Hours</h3>
        <p>Mon - Tues / closed</p>
        <p>Thurs - Sun / 5pm - 10pm</p>
      </div>
      <div>
        <h3>Contact Us</h3>
        <p>020 7702 2299</p>
        <p>eat@cirilofilipinokainan.co.uk</p>
      </div>
    </FooterInfo>
    <ul>
      <li>
        <a
          href="https://www.facebook.com/cirilofilipinokainan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={FacebookIcon} alt="Click here to view our facebook page" />
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
    </ul>
    <div>© {new Date().getFullYear()} Cirilo Filipino Kainan</div>
  </Container>
)

const Container = styled.footer`
  height: auto;
  padding: 40px 20px 20px 20px;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 2px;
  color: ${color.white};
  ${greyBackground};
  text-align: center;

  ${above.tabletLarge`
    padding: 40px 40px 20px 40px;
  `}

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
    padding: 0;
    margin: 20px auto;
    width: 50px;
  }

  img {
    width: 20px;
  }
`

const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 40px;

  ${above.tabletLarge`
    flex-direction: row;
    width: 900px;
    justify-content: space-between;
  `}

  h3 {
    ${semplicitaProMedium};
    font-size: 20px;
    line-height: 24px;
  }

  p {
    font-size: 14px;
    line-height: 20px;
  }
`

export default Footer
