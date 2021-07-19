import React from 'react';
import { render } from '@testing-library/react'
import Home from './'

describe('Test from Home Container', () => {
  it('should make a snapshot from Home Container', () => {
    const { container } = render(<Home />)
    expect(container).toMatchSnapshot()
  })
})
