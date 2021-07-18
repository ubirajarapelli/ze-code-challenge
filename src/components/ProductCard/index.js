import React from 'react'
import { AddToCart } from '../AddToCart'
import { ProductCardElement, ProductCardImage, ProductCardTPrice, ProductCardText, ProductCardTitle } from './style'

export const ProductCard = ({ productImage, altText, productText, productPrice }) => {

  const titleRegx = /^[^-]*[^ -]/
  const splitText = productText.match(titleRegx)
  const productTitle = splitText[0];
  const productDescription = splitText.input;


  const formatedPrice = (value) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
  }

  return (
    <ProductCardElement>
      <ProductCardTitle>{productTitle}</ProductCardTitle>
      <ProductCardImage src={productImage} alt={altText} />
      <ProductCardText>{productDescription}</ProductCardText>
      <ProductCardTPrice>{formatedPrice(productPrice)}</ProductCardTPrice>
      <AddToCart />
    </ProductCardElement>
  )
}
