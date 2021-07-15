import React from 'react'
import { useQuery } from '@apollo/client'
import { CATEGORIES } from '../../services'

export const CategoryFilter = () => {

  const { loading, error, data } = useQuery(CATEGORIES)

  if (loading) {
    return <div>Loading...</div>;
  }
  
  return (
    <>
      {data.allCategory.map(({__typename, id, title}) =>(
        <div key={id}>
          <label htmlFor={title}>{title}</label>
          <input type="checkbox" name={__typename} id={title} />
        </div>
      ))}
    </>
  )
}
