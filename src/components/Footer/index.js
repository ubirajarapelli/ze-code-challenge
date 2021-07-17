import React from 'react'
import { Container } from '../Container'
import { FooterElement } from './style'

export const Footer = () => {
  return (
    <FooterElement>
      <Container>
        <p>Termos de uso e política de privacidade</p>
        <p>© 2021 Brewlivery.com</p>
        <p>Beba com moderção</p>
      </Container>
    </FooterElement>
  )
}
