import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import background from "../images/coffee-shop-exterior.jpg"
import background2 from "../images/coffee-landscape-fd7627dd1a3030240869c74bc496bda8.jpg"
import takeawaymenu from "../assets/docs/cirilo-filipino-kainan-takeaway-menu.jpg"

import { above, semplicitaProSemiBold, color } from "../styles"
import { Parallax } from "react-parallax"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Parallax bgImage={background} strength={500}>
      <div style={{ height: 500 }}></div>
    </Parallax>
    <Section>
      <ShortText>
        A humble unpretentious eatery serving Cirilo's take on classic hearty
        Filipino Food.
      </ShortText>
    </Section>
    <Parallax bgImage={background2} strength={500}>
      <div style={{ height: 500 }}></div>
    </Parallax>
    <Section>
      <h2>Our Menu</h2>
      <p>
        We are currently open for takeaway only. We hope to welcome dine-in
        customers soon.
      </p>
      <TakeAwayMenu
        href={takeawaymenu}
        target="_blank"
        rel="noopener noreferrer"
      >
        Takeaway Menu
        <div></div>
      </TakeAwayMenu>
      <h6>Dietary and Allergy Advice</h6>
      <p>
        We are committed to serving all our valued customers fresh and hearty
        food.{" "}
      </p>
      <DietaryAdvice
        href={takeawaymenu}
        target="_blank"
        rel="noopener noreferrer"
      >
        Dietary and Allergy Information
        <div></div>
      </DietaryAdvice>
    </Section>
  </Layout>
)

const Section = styled.section`
  max-width: 1200px;
  width: 80%;
  margin: 0 auto;
  padding: 80px 0;

  a {
    text-decoration: none;
    &:active,
    &:focus,
    &:visited {
      color: ${color.black};
    }
  }
`

const TakeAwayMenu = styled.a`
  div {
    margin-bottom: 30px;
    border-bottom: 1px solid ${color.black};
    width: 125px;
  }
`

const DietaryAdvice = styled.a`
  div {
    margin-bottom: 30px;
    border-bottom: 1px solid ${color.black};
    width: 240px;
  }
`

const ShortText = styled.p`
  text-align: center;
  padding: 40px 0;
  font-size: 20px;

  ${above.tablet`
    padding: 40px 140px;
  `}
`

export default IndexPage
