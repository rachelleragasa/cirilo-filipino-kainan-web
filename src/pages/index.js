import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MenuLink from "../assets/menu/menu.pdf"
import food from "../images/pouring-sauce.jpg"
import food2 from "../images/stick-balls.jpg"
import food3 from '../images/chicken-adobo.jpg'

import { above, color, semplicitaProMedium } from "../styles"
import { Parallax } from "react-parallax"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Section>
        <ShortText>
          Located in East London’s Cable Street, Cirilo Filipino Kainan is a
          humble unpretentious eatery serving Cirilo's take on classic hearty
          Filipino Food.
        </ShortText>
      </Section>
      <StyledParallax bgImage={food} strength={500}>
        <div style={{ height: 350 }}></div>
      </StyledParallax>
      <Section id="menu">
        <h2>Our Menu</h2>
        <Menu href={MenuLink} target="_blank" rel="noopener noreferrer">
          Food and Drinks Menu
          <div></div>
        </Menu>
        <h6>Takeaway & Delivery</h6>
        <p>
          We have partnered with Uber Eats so that we can continue bringing
          hearty, filipino food from our kitchen to yours. But you can still
          give us a call to order for collection.
        </p>
      </Section>
      <StyledParallax bgImage={food2} strength={500}>
        <div style={{ height: 350 }}></div>
      </StyledParallax>
      <Section id="book">
        <h2>Bookings</h2>
        <p>
          To book a table with us, please give us a call on <Link href="tel:+442077022299"
          target="_blank"
          rel="noopener noreferrer">020 7702 2299</Link> or send us an email
          at <Link
          href="mailto:eat@cirilofilipinokainan.co.uk"
          target="_blank"
          rel="noopener noreferrer"
        >eat@cirilofilipinokainan.co.uk.</Link> We accept walk-ins however, due to restricted
          numbers we strongly advise you to book in advance.
        </p>
        <p>
          Your safety and comfort are our top priority and as such, in-line with Government
          protocols have implemented the following measures:
        </p>
        <h6>Social Distancing</h6>
        <p>Maximum of 6 people or 2 households of any size.</p>
        <p>Enforced social distancing with all tables set at a minimum of 1 metre apart.</p>
        <p>
          We request that diners wear a face mask upon entry until sat a table, and would please
          wear one at all times when not sat at their table (ie when visiting restrooms etc).
        </p>
        <p>
          Guests awaiting tables might be asked to wait outside of the restaurant if social distancing
          and/or occupancy levels require us to do so.
        </p>
        <h6>Health & Safety Measures</h6>
        <p>
          Your safety and comfort are our top priority and as such, in-line with Government protocols
          and building upon our existing cleaning and sanitising measures have implemented the following:
        </p>
        <p>Alcohol-based hand sanitisers are available for guest use - throughout the restaurant.</p>
        <p>Tables, tableware and chairs are thoroughly sanitised between each use prior to seating the next table.</p>
        <p>All on our team abide by rigorous personal hygiene protocols and wear suitable personal protective equipment.</p>
        <p>
          Temperature checks will be taken upon arrival and contact details are required for all dining in and
          if necessary will be used to support Government track and trace requirements.
        </p>
        <p>If you have any other queries, please do not hesitate to contact us <Link
          href="mailto:eat@cirilofilipinokainan.co.uk"
          target="_blank"
          rel="noopener noreferrer">eat@cirilofilipinokainan.co.uk</Link></p>
      </Section>
      <StyledParallax bgImage={food3} strength={500}>
        <div style={{ height: 350 }}></div>
      </StyledParallax>
      <Section id="open-hours">
        <h2>Opening Hours</h2>
        <p>Monday / Closed</p>
        <p>Tuesday / 6pm - 10:30pm</p>
        <p>Wednesday - Saturday / 12pm - 10:30pm</p>
        <p>Sunday / 12pm - 10pm</p>
      </Section>
    </Layout>
  )
}

const Section = styled.section`
  max-width: 1200px;
  width: 85%;
  margin: 0 auto;
  padding: 80px 0;

  ${above.tabletLarge`
    width: 65%;
  `}
`

const Menu = styled.a`
  color: ${color.black};

  &:active,
  &:focus,
  &:visited {
    color: ${color.black};
  }

  div {
    margin-bottom: 30px;
    border-bottom: 1px solid ${color.black};
    width: 175px;
  }
`

const Link = styled.a`
  &:active,
  &:visited {
    color: ${color.black};
  }
`

const StyledParallax = styled(Parallax)`
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(32, 23, 19, 0.5);
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
