import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import background from "../images/coffee-shop-exterior.jpg"
import background2 from "../images/coffee-landscape-fd7627dd1a3030240869c74bc496bda8.jpg"
import MenuLink from "../assets/menu/food-and-drinks.pdf"
import dietaryadvice from "../assets/menu/cirilo-filipino-kainan-dietary-advice.pdf"
import interior from "../images/cirilo-interior.jpg"
import outside from "../images/cirilo-outside.jpg"
import foodShot from "../images/all-food-high-view.jpg"

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
      <Menu href={MenuLink} target="_blank" rel="noopener noreferrer">
        Food and Drinks Menu
        <div></div>
      </Menu>
      <h6>Takeaway & Delivery</h6>
      <p>
        We have partnered with Uber Eats so that we can continue bringing
        hearty, filipino food from our kitchen to yours. But you can still give
        us a call to order for collection.
      </p>
    </Section>
    <Parallax bgImage={foodShot} strength={500}>
      <div style={{ height: 500 }}></div>
    </Parallax>
    <Section>
      <h2>Health & Safety</h2>
      <p>
        Your safety and comfort are our top priority and as such, in-line with
        Government protocols have implemented the following measures:
      </p>
      <h6>Social Distancing</h6>
      <p>
        Enforced social distancing with all tables set at a minimum of 1 metre
        apart.
      </p>
      <p>
        Guests awaiting tables might be asked to wait outside of the restaurant
        if social distancing and/or occupancy levels require us to do so.
      </p>
      <h6>Health & Safety Measures</h6>
      <p>Building upon our existing cleaning and sanitising measures:</p>
      <p>
        Alcohol-based hand sanitisers are available for guest use - throughout
        the restaurant.
      </p>
      <p>
        Tables, tableware and chairs are thoroughly sanitised between each use
        prior to seating the next table.
      </p>
      <p>
        All on our team abide by rigorous personal hygiene protocols and wear
        suitable personal protective equipment.
      </p>
      <p>
        Temperature checks will be taken upon arrival and contact details are
        required for all dining in and if necessary will be used to support
        Government track and trace requirements.
      </p>
      <p>
        If you have any other queries, please do not hesitate to contact us{" "}
        <a href="eat@cirilofilipinokainan.co.uk">
          eat@cirilofilipinokainan.co.uk
        </a>
      </p>
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
