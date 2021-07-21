import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CategoryFilter } from './'

const renderComponent = (categories, onChange) => {
  return render(
    <CategoryFilter 
      categories={categories}
      onChange={onChange}
    />
  )
}

const onChangeMock = jest.fn()

const category = [
  {
    "title": "Cervejas",
    "id": "94"
  }
]

describe('Test from CategoryFilter Component', () => {
  it('Should mount CategoryFilter Component', () => {
    renderComponent(category, onChangeMock)

    const firstCategory = screen.getByText('Cervejas')
    expect(firstCategory).toBeInTheDocument()
  })

  it('Should select a Category when a click on Component', () => {
    renderComponent(category, onChangeMock)

    const firstCategory = screen.getByRole('radio', { value: "94" })
    userEvent.click(firstCategory)
    expect(onChangeMock).toBeCalled()
    expect(firstCategory).toBeChecked()

  })
})
