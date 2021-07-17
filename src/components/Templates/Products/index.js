import React from 'react'
import { Container, Footer, Header } from '../..'
import { ProductsTemplateElement } from './style'

export const ProductsTemplate = ({ children, address }) => {
  return (
    <>
      <Header address={address} />
      <ProductsTemplateElement>
        <Container>
          {children}
        </Container>
      </ProductsTemplateElement>
      <Footer />
    </>
  )
}
