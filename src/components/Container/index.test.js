import React from 'react'
import { render, screen } from '@testing-library/react'
import { Container } from './'

const renderComponent = () => {
  return render(
    <Container>
      <h1>Container Text</h1>
    </Container>
  )
}

describe('Test from Container Component', () => {
  it('should mount Container Component', () => {
    renderComponent();
    const textContainer = screen.getByText(/Container Text/)
    expect(textContainer).toBeInTheDocument()
  })
})
