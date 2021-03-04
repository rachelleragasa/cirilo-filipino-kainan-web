import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import Img from "gatsby-image"

import { above, color, semplicitaProBold, semplicitaProMedium, semplicitaProRegular } from "../styles"

const Hero = () => {
    const data = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "all-food-high-view.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  
    return (
      <Container>
          <HeroImg
              fluid={data.hero.childImageSharp.fluid}
              alt="High view of food on a table"
          />
          <HeroText>
            <HeroSubtext>
                4 Cable Street — Whitechapel, London — E1 8JG
            </HeroSubtext>
              <HeroLinks role="navigation">
                  <div>
                    <a href="#menu">Menu</a>
                  </div>
                  <div>
                    <a href="#book">Book</a>
                  </div>
              </HeroLinks>
          </HeroText>
      </Container>
    )
}

const Container = styled.div`
  position: relative;
  height: 90vh;

  ${above.tabletLarge`
    height: 100vh;
  `}
`

const HeroImg = styled(Img)`
  height: 100%;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(43, 36, 33, 0.6);
  }
`

const HeroText = styled.div`
  position: absolute;
  top: 32vh;
  right: 0;
  left: 0;

  ${above.tabletLarge`
    top: 36vh;
  `}
`

const HeroSubtext = styled.p`
  color: ${color.white};
  font-size: 16px;
  letter-spacing: 2px;
  text-align: center;
  padding: 0 20px;
  line-height: 1.3em;

  ${above.tabletLarge`
    font-size: 18px;
  `}
`

const HeroLinks = styled.nav`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${above.mobile`
    flex-direction: row;
  `}

  ${above.tabletLarge`
    top: 65vh;
  `}

  div {
    text-align: center;
    cursor: pointer;
    margin: 0 20px;

    a {
      position: relative;
      text-decoration: none;
      color: ${color.white};
      text-transform: uppercase;
      ${semplicitaProRegular};
      letter-spacing: 2px;
      font-size: 36px;
      line-height: 47px;

      ${above.mobile`
        font-size: 5.625vw;
      `}

      &:after {
        background: none repeat scroll 0 0 transparent;
        bottom: 0;
        content: "";
        display: block;
        height: 2px;
        left: 50%;
        position: absolute;
        background: #fff;
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
      }

      &:hover {
        &:after {
          width: 100%; 
          left: 0; 
        }
      }
    }
  }
`

export default Hero