import React from 'react';
import { render }from '@testing-library/react'
import App from './App'

describe('Test from App Component', () => {
  it('should mount App Component', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

});