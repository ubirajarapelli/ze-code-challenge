import React from 'react'
import { render, screen } from '@testing-library/react'
import { Footer } from './'

const renderComponent = () => {
  return render(
    <Footer>
      <p>Termos de uso e política de privacidade</p>
      <p>© 2021 Brewlivery.com</p>
      <p>Beba com moderção</p>
    </Footer>
  )
}

describe('Test from Footer Component', () => {
  it('should mount Container Component', () => {
    renderComponent();
    const textTerms = screen.getByText(/Termos de uso/);
    const textBrand = screen.getByText(/© 2021/);
    const textResponsibly = screen.getByText(/Beba com moderção/);
    expect(textTerms).toBeInTheDocument();
    expect(textBrand).toBeInTheDocument();
    expect(textResponsibly).toBeInTheDocument();
  })
})
