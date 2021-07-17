import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { AddressContext } from '../../store'
import { POC_SEARCH } from '../../services'
import { PocLoaderElement } from './style'

export const PocLoader = () => {
  const history = useHistory();
  const { state, setState } = useContext(AddressContext)
  const { now, lat, long, algorithm } = state

  const { loading, error, data } = useQuery(POC_SEARCH, {
    variables: {
      now,
      lat,
      long,
      algorithm,
    }
  })

  const redirectToProducts = () => {
    history.push('/products')
  }

  useEffect(() => {
    if (data !== undefined) {

    
      if(!data.pocSearch.length) {
        console.log('Entrou aqui?');
        alert('deu ruim')
        // console.log('aqui', data.pocSearch.length)''
        return redirectToProducts()
      }

      const { id, status } = data.pocSearch[0]
      const updateState = Object.assign(state, {id, status})
      setState(updateState)
      redirectToProducts()
    }
  
  }, [data])

  if(loading) {
    return (
      <PocLoaderElement 
        role="dialog"
        aria-labelledby="Buscando o fornecedor mais próximo a você"
        aria-modal="true"
      >
        Estamos buscando o fornecedor mais próximo a você.
      </PocLoaderElement>
    )
  }

  return <></>


}
