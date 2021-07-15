import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { AddressContext } from '../../store'
import { ALL_PRODUCTS } from '../../services'

import { CategoryFilter } from '../../components'

const Products = () => {
  const history = useHistory();
  const { state } = useContext(AddressContext)
  const { fullAddress, id, status } = state;

  console.log(state);

  const [ hasStatus, setHasStatus ] = useState('idle')

  useLayoutEffect(() => {
    console.log(id);
    if(id === null) {
      history.push('/')
    }
  }, [id])

  useEffect(() => {
    if(status === 'CLOSED') {
      setHasStatus('active')
    }
  }, [status])

  const variables = {
      id,
      search: '',
      categoryId: null
    }

  const { loading, error, data } = useQuery(ALL_PRODUCTS, {
    variables
  })

  console.log(loading, error, data)

  if (hasStatus === 'active') {
    return (
      <div>
        <h1>Nenhum distribuidor aberto no momento =(</h1>
        <p>Geralmente, nossos distribuidores atendem sua região entre 08:00 e 06:00.</p>
        <p>Por favor, tente novamente em outro horário ou em outro endereço.</p>
      </div>
    )
  }

  return (
    <>
      <CategoryFilter />
      <div>{fullAddress}</div>
      <div>
        <h2>Products</h2>
        <div>
          {data && data.pocs.products.map(({ id, title, images }) => (
            <div key={id} className="card">
              <img src={images[0].url} alt={title} />
              <p>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Products
