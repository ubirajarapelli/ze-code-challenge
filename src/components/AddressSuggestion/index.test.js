import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AddressSuggestion } from './'

const renderComponent = (onChange, value = "") => {
  return render(
    <AddressSuggestion 
      label="Digite seu endereço"
      name="address"
      id="address"
      placeholder="Digite o endereço com número"
      onChange={onChange}
      value={value}
    />
  )
}

const onChangeMock = jest.fn()
const textValue = "Rua Americo"

describe('Test from AddressSuggestion Component', () => {
  renderComponent(onChangeMock)

  it('should mount AddressSuggestion Component', () => {
    const inputText = screen.getByRole('textbox', { 
      name: /digite seu endereço/i 
    })
    expect(inputText).toBeInTheDocument()
  })
})
