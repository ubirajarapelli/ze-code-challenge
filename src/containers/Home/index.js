import React, { useContext, useState } from 'react'
import { AddressContext } from '../../store'
import { AddressSuggestion, HomeTemplate, PocLoader } from '../../components'
import { HomeElement } from './style'

const Home = () => {
  const { state, setState } = useContext(AddressContext)

  const [ fieldValue, setFieldValue ] = useState()
  const [ hasValue, setHasValue ] = useState(false)

  const updateState = (newValues) => {
    const newState = Object.assign(state, newValues)
    setState(newState)
    setHasValue(true)
  }

  // const [handleChange, { loading, error, data }] = useLazyQuery(INFO_PERSON)
    
  return (
    <HomeTemplate>
      <HomeElement>
        <h1><strong>Cervejas e Petiscos</strong><br /> 
        entregue na sua porta</h1> 
        <AddressSuggestion
          label="Digite seu endereço"
          name="address"
          id="address"
          value={fieldValue}
          placeholder="Digite o endereço com número"
          handleChange={(address) => updateState(address)}
        />
        { hasValue && <PocLoader /> }
      </HomeElement>
    </HomeTemplate>
  )
}

export default Home
