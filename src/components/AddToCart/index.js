import React, { useState } from 'react'
import { AddToCartElement, AddToCartButton, CounterButton, CounterValue, RemoveToCartButton } from './style'

export const AddToCart = () => {

  const [ quantity, setQuantity ] = useState(1)
  const [ showRemove, setShowRemove ] = useState(false)

  const decremetItem = (event) => {
    event.preventDefault()
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }

  const incremetItem = (event) => {
    event.preventDefault()
    setQuantity(quantity + 1)
  }

  const addToCart = (event) => {
    event.preventDefault()
    setShowRemove(true)
  }
  
  const removeToCart = (event) => {
    event.preventDefault()
    setQuantity(1)
    setShowRemove(false)
  }

  return (
    <AddToCartElement>
      <CounterButton onClick={(e) => decremetItem(e)} aria-label="Remover um item">-</CounterButton>
      <CounterValue type="text" value={quantity} readOnly />
      <CounterButton onClick={(e) => incremetItem(e)} aria-label="Adicionar mais um item">+</CounterButton>
      { !showRemove ? 
        <AddToCartButton onClick={(e) => addToCart(e)}>Adicionar</AddToCartButton> :
        <RemoveToCartButton onClick={(e) => removeToCart(e)}>Remover</RemoveToCartButton> 
      }

    </AddToCartElement>
  )
}
