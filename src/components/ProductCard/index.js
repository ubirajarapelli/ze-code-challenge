import React from 'react'
import { AddToCart } from '../AddToCart'
import { ProductCardElement, ProductCardImage, ProductCardTPrice, ProductCardText, ProductCardTitle } from './style'

export const ProductCard = ({ productImage, productText, productPrice }) => {

  const titleRegx = /^[^-]*[^ -]/
  const splitText = productText.match(titleRegx)
  const productTitle = splitText[0];
  const productDescription = splitText.input;

  const formatedPrice = (value) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
  }

  return (
    <ProductCardElement className="card">
      <ProductCardTitle>{productTitle}</ProductCardTitle>
      <ProductCardImage src={productImage} alt={productDescription} />
      <ProductCardText>{productDescription}</ProductCardText>
      <ProductCardTPrice>{formatedPrice(productPrice)}</ProductCardTPrice>
      <AddToCart />
    </ProductCardElement>
  )
}
