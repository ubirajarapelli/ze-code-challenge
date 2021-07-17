import React from 'react'
import { useQuery } from '@apollo/client'
import { CATEGORIES } from '../../services'
import { CategoryFilterElement, FilterCheckButton } from './style'

export const CategoryFilter = () => {

  const { loading, error, data } = useQuery(CATEGORIES)

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleChange = (id) => {
    console.log(id);
  }
  
  return (
    <CategoryFilterElement>
      {data.allCategory.map(({__typename, id, title}) =>(
        <FilterCheckButton key={id}>
          <label htmlFor={title}>{title}</label>
          <input type="radio" name={__typename} id={title} onChange={() => handleChange(id)} />
        </FilterCheckButton>
      ))}
    </CategoryFilterElement>
  )
}
