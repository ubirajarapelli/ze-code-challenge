import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AddToCart } from './'

const renderComponent = () => {
  return render(
    <AddToCart />
  )
}

describe('Test from AddToCart Component', () => {
  it('should mount AddToCart Component', () => {
    renderComponent();
    const decrementButton = screen.getByRole('button', { 
      name: /remover um item/i 
    })
    const incrementButton = screen.getByRole('button', { 
      name: /adicionar mais um item/i 
    })
    const quantity = screen.getByRole('textbox')
    const addButton = screen.getAllByRole('button', { name: /adicionar/i })[1]
    
    expect(decrementButton).toBeInTheDocument()
    expect(incrementButton).toBeInTheDocument()
    expect(quantity).toHaveAttribute('value', '1')
    expect(addButton).toBeInTheDocument()
  })

  it('Should increment value when a click at plus (+) button', () => {
    renderComponent();
    const incrementButton = screen.getByRole('button', { 
      name: /adicionar mais um item/i 
    })
    const quantity = screen.getByRole('textbox')

    expect(incrementButton).toBeInTheDocument()
    expect(quantity).toHaveAttribute('value', '1')

    userEvent.click(incrementButton)
    expect(quantity).toHaveAttribute('value', '2')
  })

  it('Should decrement value when a click at minus (-) button', () => {
    renderComponent();
    const decrementButton = screen.getByRole('button', { 
      name: /remover um item/i 
    })
    const quantity = screen.getByRole('textbox')

    expect(decrementButton).toBeInTheDocument()
    expect(quantity).toHaveAttribute('value', '1')

    userEvent.click(decrementButton)
    expect(quantity).toHaveAttribute('value', '0')
  })

  it('Should show remove button when a click on Add button', () => {
    renderComponent();
    const addButton = screen.getAllByRole('button', { name: /adicionar/i })[1]
    const removeButton = screen.getAllByRole('button', { name: /remover/i })[0]
    
    userEvent.click(addButton)

    expect(removeButton).toBeInTheDocument()
    expect(addButton).not.toBeInTheDocument()
  })

  it('Should show Add button when a click on Remove button', () => {
    renderComponent();
    const quantity = screen.getByRole('textbox')
    const addButton = screen.getAllByRole('button', { name: /adicionar/i })[1]
    
    userEvent.click(addButton)

    const removeButton = screen.getAllByRole('button', { name: /remover/i })[0]
    expect(removeButton).toBeInTheDocument()
    expect(addButton).not.toBeInTheDocument()

    userEvent.click(removeButton)

    expect(quantity).toHaveAttribute('value', '1')
    // expect(addButton).toBeInTheDocument()
    // expect(removeButton).not.toBeInTheDocument()
  })

})
