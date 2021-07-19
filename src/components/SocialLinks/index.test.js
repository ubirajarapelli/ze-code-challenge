import React from 'react'
import { render, screen } from '@testing-library/react'
import { SocialLinks } from './'

const renderComponent = () => {
  return render(
    <SocialLinks />
  )
}

describe('Test from SocialLinks Component', () => {

  it('should mount SocialLinks Component', () => {
    renderComponent();
    const facebookLink = screen.getByRole('link', {  
      name: /link para a brewlivery no facebook/i
    })
    const instagramLink = screen.getByRole('link', { 
      name: /link para a brewlivery no instagam/i
    })
    const twitterLink = screen.getByRole('link', { 
      name: /link para a brewlivery no twitter/i
    })

    expect(facebookLink).toBeInTheDocument();
    expect(instagramLink).toBeInTheDocument();
    expect(twitterLink).toBeInTheDocument();
  })

})
