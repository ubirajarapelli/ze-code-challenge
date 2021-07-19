import React, { useState } from 'react'
import { CategoryFilterElement, FilterCheckButton, Skeleton } from './style'

export const CategoryFilter = ({ categories, onChange }) => {
  const [ radioCheked, setRadioCheked ] = useState()

  if (categories === undefined) {
    return <Skeleton>Loading...</Skeleton>;
  }

  const handleChange = radioHandler => (event) => {
    const { id } = event.target
    setRadioCheked(id)

    if (radioHandler === undefined) {
      return
    }
    return radioHandler(event)
  }
  
  return (
    <CategoryFilterElement>
      {categories.map(({__typename, id, title}) =>(
        <FilterCheckButton key={id}>
          <input 
            type="radio" 
            name={__typename} 
            id={title} 
            value={id}
            onChange={handleChange(onChange)} 
            checked={radioCheked === title} 
          />
          <label htmlFor={title}>{title}</label>
        </FilterCheckButton>
      ))}
    </CategoryFilterElement>
  )
}
