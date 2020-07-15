import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import background from "../images/coffee-shop-exterior.jpg"
import background2 from "../images/coffee-landscape-fd7627dd1a3030240869c74bc496bda8.jpg"
import takeawaymenu from "../assets/docs/cirilo-filipino-kainan-takeaway-menu.pdf"
import dietaryadvice from "../assets/docs/cirilo-filipino-kainan-dietary-advice.pdf"
import interior from "../images/cirilo-interior.jpg"
import outside from "../images/cirilo-outside.jpg"

import { above, color } from "../styles"
import { Parallax } from "react-parallax"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Parallax bgImage={outside} strength={500}>
      <div style={{ height: "90vh" }}></div>
    </Parallax>
    <Section>
      <ShortText>
        Located in East London’s Cable Street, Cirilo Filipino Kainan is a
        humble unpretentious eatery serving Cirilo's take on classic hearty
        Filipino Food.
      </ShortText>
    </Section>
    <Parallax bgImage={interior} strength={500}>
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
        href={dietaryadvice}
        target="_blank"
        rel="noopener noreferrer"
      >
        Dietary and Allergy Information
        <div></div>
      </DietaryAdvice>
    </Section>
    <Map>
      <img src="https://maps.googleapis.com/maps/api/staticmap?center=51.510807,-0.068217&zoom=14&size=640x200&scale=2&markers=color:green|51.510807,-0.068217&key=AIzaSyD5ImLSyn8RONTNEz2IV9R8jnIQ_b2-BIw" />
    </Map>
  </Layout>
)

const Map = styled.div`
  img {
    width: 100vw;
  }
`

const Section = styled.section`
  max-width: 1200px;
  width: 80%;
  margin: 0 auto;
  padding: 80px 0;
`
const PhotoGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
`

const TakeAwayMenu = styled.a`
  color: ${color.black};

  &:active,
  &:focus,
  &:visited {
    color: ${color.black};
  }

  div {
    margin-bottom: 30px;
    border-bottom: 1px solid ${color.black};
    width: 125px;
  }
`

const DietaryAdvice = styled.a`
  color: ${color.black};

  &:active,
  &:focus,
  &:visited {
    color: ${color.black};
  }
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
