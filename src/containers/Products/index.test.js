import React from 'react'
import { act } from 'react-dom/test-utils'
import wait from 'waait'
import { MockedProvider } from '@apollo/client/testing'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import { AddressContextProvider } from '../../store'
import { ALL_PRODUCTS } from '../../services'
import Products from './'

const productsMock = [{
  request: {
    query: ALL_PRODUCTS,
    variables: { id: "532" },
  },
  pocs: {
    id: "532",
    products: [{
      id: "8868",
      title: "Skol 269ml - Unidade",
      images: [
        {
          url: "https://courier-images-codechallenge.s3-us-west-2.amazonaws.com/product/8868_205f958d-2e51-48a3-b4d5-a2998765571a.jpg",
          __typename: "ProductImage"
        }
      ],
      productVariants: [
        {
          price: 2.09,
          __typename: "ProductVariant"
        }
      ],
      __typename: "Product"
    }],
    __typename: "POC"
  },
}]

const renderComponent = (mock) => {
  return render(
    <AddressContextProvider>
      <MockedProvider mocks={mock} addTypename={false}>
        <Products />
      </MockedProvider>
    </AddressContextProvider>
  )
}

const fakeLocalStorage = {
  id:"532",
  status:"AVAILABLE",
  fullAddress:"R. Américo Brasiliense - Chácara Santo Antônio (Zona Sul), São Paulo - SP, Brasil",
  algorithm:"NEAREST",
  lat:"-23.6317641",
  long:"-46.7014641",
  now:"2021-07-21T00:12:15.492Z"
}

describe('Test from Products Container', () => {
  beforeEach(() => {
    localStorage.setItem('clientLocation', JSON.stringify(fakeLocalStorage));
  });

  it('should make a snapshot from Home Container', async () => {
    const { container } = renderComponent(productsMock)
    await act(() => wait(6))
    expect(container).toMatchSnapshot()
  })
})
