import React from 'react'
import { render, screen } from '@testing-library/react'
import { ProductCard } from './'

const renderComponent = (productText, productImage, productPrice) => {
  return render(
    <ProductCard 
      productImage={productImage}
      productText={productText}
      productPrice={productPrice}
    />
  )
}


const products =
  {
    "id": "9537",
    "title": "Vinho Chileno Tinto Seco Merlot Garrafa 750ml",
    "images": [
      {
        "url": "https://courier-images-codechallenge.s3-us-west-2.amazonaws.com/product/00009537_f9ba8b41-3e7d-4d68-b8bd-eec7d1d63d5d.jpg",
      }
    ],
    "productVariants": [
      {
        "price": 54.9,
      }
    ],
  }


describe('Test from ProductCard Component', () => {
  it('should mount ProductCard Component', () => {
    const { title, images, productVariants } = products

    renderComponent(title, images[0].url, productVariants[0].price);

    const cardText = screen.getByRole('heading', { 
      name: /Vinho Chileno/i 
    })
    const cardImage = screen.getByRole('img', { 
      name: /Vinho Chileno/i
    })

    const cardDescription = screen.getAllByText(/Vinho Chileno Tinto Seco/i)[1]
    const cardPrice = screen.getByText(/R\$ 54,90/i)

    expect(cardText).toBeInTheDocument();
    expect(cardImage).toBeInTheDocument();
    expect(cardDescription).toBeInTheDocument();
    expect(cardPrice).toBeInTheDocument();
  })
})
