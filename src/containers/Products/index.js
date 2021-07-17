import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { AddressContext } from '../../store'
import { ALL_PRODUCTS } from '../../services'
import { CategoryFilter, ProductCard, ProductsTemplate } from '../../components'
import { ProductsElement } from './style'

const Products = () => {
  const history = useHistory();
  const { state } = useContext(AddressContext)
  const { fullAddress, id, status } = state;

  const [ pocId, setPocId ] = useState(null)
  const [ hasStatus, setHasStatus ] = useState('idle')

  useLayoutEffect(() => {
    
    const sessionId = window.sessionStorage.getItem('pocID')

    if(sessionId) {
      console.log(sessionId);
      setPocId(sessionId)
      return
    }

    if(id === null) {
      history.push('/')
    }
  }, [pocId])

  useEffect(() => {
    if(status === 'CLOSED') {
      setHasStatus('active')
    }
  }, [status])

  const variables = {
      id: pocId,
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
    <ProductsTemplate address={fullAddress}>
      <CategoryFilter />
      <ProductsElement>
        {data && data.pocs.products.map(({ id, title, images, productVariants }) => (
          <ProductCard 
            key={id}
            productImage={images[0].url}
            altText={title}
            productText={title}
            productPrice={productVariants[0].price}
          />
        ))}
      </ProductsElement>
    </ProductsTemplate>
  )
}

export default Products
