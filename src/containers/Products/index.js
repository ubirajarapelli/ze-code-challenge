import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useQuery, useLazyQuery } from '@apollo/client'
import { AddressContext } from '../../store'
import { ALL_PRODUCTS } from '../../services'
import { CategoryFilter, Loader, ProductCard, ProductsTemplate } from '../../components'
import { ProductsElement } from './style'

const Products = () => {
  const history = useHistory();
  const { state } = useContext(AddressContext)
  const { fullAddress, id, status } = state;

  const [ pocId, setPocId ] = useState(null)
  const [ hasStatus, setHasStatus ] = useState('idle')
  const [ categoryId, setCategoryId ] = useState(null)

  useLayoutEffect(() => {
    const sessionId = window.sessionStorage.getItem('pocID')

    console.log(sessionId);
    if(sessionId) {
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
      categoryId
    }

  const { loading, error, data } = useQuery(ALL_PRODUCTS, {
    variables
  })

  const [handleChange] = useLazyQuery(ALL_PRODUCTS, {
    variables
  })

  // console.log(loading, error, data)

  if (hasStatus === 'active') {
    return (
      <ProductsTemplate address={fullAddress}>
        <h1>Nenhum distribuidor aberto no momento =(</h1>
        <p>Geralmente, nossos distribuidores atendem sua região entre 08:00 e 06:00.</p>
        <p>Por favor, tente novamente em outro horário ou em outro endereço.</p>
      </ProductsTemplate>
    )
  }

  return (
    <ProductsTemplate address={fullAddress}>
      { loading && <Loader message="Carregando produtos" /> }
      <CategoryFilter 
        categories={data?.allCategory}
        onChange={(event) => handleChange(
          setCategoryId(event.target.value)
        )}
      />
      { data && !data.pocs.products.length && <div>Não tem produto</div> }
      <ProductsElement>  
        {data?.pocs.products.map(({ id, title, images, productVariants }) => (
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
