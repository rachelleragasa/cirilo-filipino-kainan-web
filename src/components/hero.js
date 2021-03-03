import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import Img from "gatsby-image"

import { above, color, semplicitaProBold } from "../styles"

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
        <>
            <HeroImg
                fluid={data.hero.childImageSharp.fluid}
                alt="High view of food on a table"
            />
            <HeroSubtext>
                4 Cable Street
                <br />
                Whitechapel
                <br />
                London
                <br />
                E1 8JG
            </HeroSubtext>
            <HeroLinks>
                <li>
                <a href="#menu">Menu</a>
                </li>
                <li>
                <a href="#book">Book Now</a>
                </li>
            </HeroLinks>
        </>
    )
}


const HeroImg = styled(Img)`
  height: 80vh;

  ${above.tabletLarge`
    height: 100vh;
  `}

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(32, 23, 19, 0.7);
  }
`

const HeroSubtext = styled.p`
  position: absolute;
  top: 25vh;
  left: 0;
  right: 0;
  color: ${color.white};
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 10px;
  text-align: center;
  padding: 0 20px;

  ${above.tabletLarge`
    font-size: 24px;
    line-height: 48px;
    top: 30vh;
  `}
`

const HeroLinks = styled.ul`
  list-style: none;
  position: absolute;
  top: 45vh;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${above.tablet`
    flex-direction: row;
  `}

  ${above.tabletLarge`
    top: 55vh;
  `}

  li {
    border: 1px solid ${color.white};
    padding: 10px;
    text-align: center;
    margin: 20px;

    ${above.tablet`
      width: 250px;
    `}

    &:hover {
      background: rgba(255, 255, 255, 0.3);
      pointer: pointer;
    }

    a {
      text-decoration: none;
      color: ${color.white};
      text-transform: uppercase;
      ${semplicitaProBold};
      letter-spacing: 4px;
    }
  }
`

export default Hero