import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import Img from "gatsby-image"

import { above, color, semplicitaProBold, semplicitaProMedium } from "../styles"

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
                4 Cable Street — London — E1 8JG
            </HeroSubtext>
            <nav role="navigation">
              <HeroLinks>
                  <li>
                  <a href="#menu">Menu</a>
                  </li>
                  <li>
                  <a href="#book">Book</a>
                  </li>
              </HeroLinks>
            </nav>
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
  top: calc(90vh - 380px);
  right: 0;
  left: 0;
`

const HeroSubtext = styled.p`
  color: ${color.white};
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-align: center;
  padding: 0 20px;

  ${above.tabletLarge`
    font-size: 18px;
  `}
`

const HeroLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;

  ${above.tabletLarge`
    top: 65vh;
  `}

  li {
    padding: 0 10px;
    text-align: center;
    margin: 20px;
    cursor: pointer;

    ${above.tablet`
      width: 250px;
    `}

    a {
      position: relative;
      text-decoration: none;
      color: ${color.white};
      text-transform: uppercase;
      ${semplicitaProMedium};
      letter-spacing: 2px;
      font-size: 48px;

      ${above.tabletLarge`
        font-size: 56px;
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