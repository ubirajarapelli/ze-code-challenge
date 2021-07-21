import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { AddressContext } from '../../store'
import { POC_SEARCH } from '../../services'
import { Loader } from '../Loader'

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

  const setStorageItem = (adress) => {
    localStorage.setItem('clientLocation', JSON.stringify(adress));
  }

  useEffect(() => {
    if (data !== undefined) {
      if(!data.pocSearch.length) {
        setStorageItem(state);
        return redirectToProducts()
      }

      const { id, status } = data.pocSearch[0]
      const updateState = Object.assign(state, { id, status })

      setState(updateState)
      setStorageItem(updateState)
      redirectToProducts()
    }
  
  }, [data])

  if(loading) {
    return (
      <Loader 
        message="Estamos buscando o fornecedor mais próximo a você."
      />
    )
  }

  return <></>
}
