import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { AddressContext } from '../../store'
import { POC_SEARCH } from '../../services'

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
        // console.log('aqui', data.pocSearch.length)
        return redirectToProducts()
      }

      const { id, status } = data.pocSearch[0]
      const updateState = Object.assign(state, {id, status})
      setState(updateState)
      redirectToProducts()
    }
  
  }, [data])

  if(loading) {
    return <div>Carregando</div>
  }
  
  return <div>Achamos um distribuidor perto de você</div>


}
