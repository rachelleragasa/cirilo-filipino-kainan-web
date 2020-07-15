import React from "react"
import styled from "styled-components"
import { above, color, greyBackground, semplicitaProMedium } from "../styles"

const Footer = () => (
  <Container>
    <FooterInfo>
      <FooterColumn>
        <h3>Where are we?</h3>
        <p>
          4 Cable St,
          <br />
          Whitechapel,
          <br />
          London E1 8J
        </p>
      </FooterColumn>
      <FooterColumn>
        <h3>Hours</h3>
        <p>Mon - Tues / closed</p>
        <p>Thurs - Sun / 5pm - 10pm</p>
      </FooterColumn>
      <FooterColumn>
        <h3>Contact Us</h3>
        <p>020 7702 2299</p>
        <p>eat@cirilofilipinokainan.co.uk</p>
      </FooterColumn>
    </FooterInfo>
    <div>© {new Date().getFullYear()} Cirilo Filipino Kainan</div>
  </Container>
)

const Container = styled.footer`
  height: auto;
  padding: 40px 20px 20px 20px;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 2px;
  color: ${color.white};
  ${greyBackground};
  text-align: center;

  ${above.mobile`
    font-size: 14px;
  `}

  ${above.tabletLarge`
    padding: 40px 40px 20px 40px;
  `}
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
    font-size: 12px;
    line-height: 20px;

    ${above.mobile`
      font-size: 14px;
    `}
  }
`

const FooterColumn = styled.div`
  margin-bottom: 20px;
`

export default Footer
