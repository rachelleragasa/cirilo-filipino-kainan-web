import React from "react"
import styled from "styled-components"

import { above, color, whiteBackground, semplicitaProMedium } from "../styles"
import pin from "../assets/icons/pin.svg"
import phone from "../assets/icons/phone.svg"
import email from "../assets/icons/email.svg"

const Footer = () => (
  <Container>
    <FooterInfo>
      <div>
        <Link
          href="https://g.page/cirilofilipinokainan?share"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={pin} alt="Get directions to Cirilo Filipino Kainan" />
          <p>Directions</p>
        </Link>
      </div>
      <div>
        <Link
          href="tel:+442077022299"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={phone} alt="Call us to make a reservation" />
          <p>Contact Us</p>
        </Link>
      </div>
      <div>
        <Link
          href="mailto:eat@cirilofilipinokainan.co.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={email} alt="Email us to make a reservation" />
          <p>Email Us</p>
        </Link>
      </div>
    </FooterInfo>
    <CopyRight>© {new Date().getFullYear()} Cirilo Filipino Kainan</CopyRight>
  </Container>
)

const Container = styled.footer`
  height: auto;
  font-size: 12px;
  letter-spacing: 1.5px;
  color: ${color.black};
  ${whiteBackground};
  text-align: center;

  ${above.mobile`
    font-size: 14px;
  `}
`

const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  border-top: 1px solid #e0e0e0;
  max-width: 768px;
  padding: 40px 20px 20px 20px;

  ${above.tabletLarge`
    flex-direction: row;
    justify-content: space-between;
    padding: 40px 40px 20px 40px;
  `}

  img {
    width: 24px;
    height: 24px;
  }

  div {
    margin: 10px 0;
  }

  p {
    ${semplicitaProMedium};
    margin: 0;
    color: ${color.black};
  }
`

const Link = styled.a`
  &:active,
  &:visited {
    color: ${color.black};
  }
`

const CopyRight = styled.div`
  ${semplicitaProMedium};
  color: ${color.grey};
  padding: 20px 0 30px 0;
`

export default Footer
