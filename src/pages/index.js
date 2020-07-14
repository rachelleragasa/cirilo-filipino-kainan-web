import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import background from "../images/hero-bg.png"
import { above } from "../styles"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <HeroContainer>
      <HeroImage
        src={background}
        alt=" The outside of Cirilo Filipino Kainan"
      />
    </HeroContainer> */}
  </Layout>
)

const HeroContainer = styled.div`
  width: 100%;
  height: auto;

  ${above.tabletLarge`
    height: 90vh;
    padding: 0px 40px;
  `}
`

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export default IndexPage
