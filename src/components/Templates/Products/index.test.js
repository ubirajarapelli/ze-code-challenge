import React from 'react';
import { render } from '@testing-library/react'
import { ProductsTemplate } from './'

const renderComponent = () => {
  return render(
    <ProductsTemplate>
      <h1>Products Template</h1>
    </ProductsTemplate>
  )
}

describe('Test from ProductsTemplate Component', () => {
  it('should make a snapshot from ProductsTemplate Component', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
