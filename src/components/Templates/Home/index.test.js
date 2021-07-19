import React from 'react';
import { render } from '@testing-library/react'
import { HomeTemplate } from './'

const renderComponent = () => {
  return render(
    <HomeTemplate>
      <h1>Home Template</h1>
    </HomeTemplate>
  )
}

describe('Test from HomeTemplate Component', () => {
  it('should make a snapshot from HomeTemplate Component', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
