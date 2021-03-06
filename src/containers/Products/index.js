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
  const { id, status } = state;
  const [ notFound, setNotFound ] = useState(false)
  const [ fullAddress, setFullAddress ] = useState(null)
  const [ pocId, setPocId ] = useState(null)
  const [ categoryId, setCategoryId ] = useState(null)
  const [ hasStatus, setHasStatus ] = useState('idle')


  const notFoudPoc = () => {
    <Loader message="Não temos distribuidor ativo em sua região, por favor, escolha outro endereço" />
  }

  useLayoutEffect(() => {
    const storageAdress = JSON.parse(localStorage.getItem('clientLocation'))

    const { id, fullAddress } = storageAdress
    if(id) {
      setFullAddress(fullAddress)
      setPocId(id)
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
            data-testid="product-title"
            key={id}
            productImage={images[0].url}
            productText={title}
            productPrice={productVariants[0].price}
          />
        ))}
      </ProductsElement>
    </ProductsTemplate>
  )
}

export default Products
