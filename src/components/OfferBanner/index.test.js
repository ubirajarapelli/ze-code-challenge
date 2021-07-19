import React from 'react'
import { render, screen } from '@testing-library/react'
import { OfferBanner } from './'

const renderComponent = () => {
  return render(
    <OfferBanner />
  )
}

describe('Test from OfferBanner Component', () => {
  it('should mount Container Component', () => {
    renderComponent();
    const bannerImage = screen.getByRole('img', { 
      name: /cerveja tupiniquin/i
    })
    const bannerText = screen.getByRole('img', { 
      name: /cerveja tupiniquin/i
    })

    expect(bannerImage).toBeInTheDocument();
    expect(bannerText).toBeInTheDocument();
  })
})
