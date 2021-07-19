import React from 'react'
import { render, screen } from '@testing-library/react'
import { Loader } from './index'

const renderComponent = (message) => {
  return render(
    <Loader message={message} />
  )
}

const loadMessage = "Carregando Produtos"

describe('Test from Container Component', () => {
  it('should mount Container Component', () => {
    renderComponent(loadMessage);
    const dialogContainer = screen.getByRole('dialog');
    expect(dialogContainer).toBeInTheDocument();
  })
})
