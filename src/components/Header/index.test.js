import React from 'react'
import { render, screen } from '@testing-library/react'
import { Header } from './'

const renderComponent = (address) => {
  return render(
    <Header address={address}/>
  )
}

const deviveryAddress = "R. Herbert Spencer - Vila Andrade, São Paulo - SP, Brazil"

describe('Test from Header Component', () => {
  it('should mount Header Component', () => {
    renderComponent();

    const logoImg = screen.getByRole('img')
    const siginButton = screen.getByRole('button', { name: /login/i })
    const shopbasketButton = screen.getByRole('button', { name: /ir para a sacola de compras/i })

    expect(logoImg).toHaveAttribute('alt', 'Logotipo Brewlivery')
    expect(siginButton).toBeInTheDocument()
    expect(shopbasketButton).toBeInTheDocument()
  })

  it('should mount Header Component with address data', () => {
    renderComponent(deviveryAddress);

    const logoImgAlt = screen.getByAltText(/Logotipo Brewlivery/)
    const siginButton = screen.getByRole('button', { name: /login/i })
    const shopbasketButton = screen.getByRole('button', { name: /ir para a sacola de compras/i })
    const addresss = screen.getByText(  /r\. herbert spencer \- vila andrade, são paulo \- sp, brazil/i)
    expect(logoImgAlt).toBeInTheDocument()
    expect(addresss).toBeInTheDocument()
    expect(siginButton).toBeInTheDocument()
    expect(shopbasketButton).toBeInTheDocument()
  })
})
