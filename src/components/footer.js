import React from "react"
import styled from "styled-components"

const Footer = () => (
  <Container>© {new Date().getFullYear()} Cirilo Filipino Kainan</Container>
)

const Container = styled.footer`
  height: 50px;
  padding: 20px 5%;
`

export default Footer
