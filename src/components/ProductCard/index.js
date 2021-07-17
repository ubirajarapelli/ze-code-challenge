import React from 'react'
import { ProductCardElement, ProductCardImage, ProductCardText } from './style'

export const ProductCard = ({ productImage, altText, productText, productPrice }) => {
  return (
    <ProductCardElement>
      <ProductCardImage src={productImage} alt={altText} />
      <ProductCardText>{productText}</ProductCardText>
      <ProductCardText>{productPrice}</ProductCardText>
    </ProductCardElement>
  )
}
