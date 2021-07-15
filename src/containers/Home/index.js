import React, { useContext, useState } from 'react'
import { AddressContext } from '../../store'
import { AddressSuggestion, PocLoader } from '../../components'

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
    <div>
      <AddressSuggestion
        label="Digite seu endereço"
        name="address"
        id="address"
        value={fieldValue}
        placeholder="Digite o endereço com número"
        handleChange={(address) => updateState(address)}
      />
      { hasValue && <PocLoader /> }
    </div>
  )
}

export default Home
