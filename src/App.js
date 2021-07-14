import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { AddressSuggestion } from './components/AddressSuggestion'
import { CATEGORIES } from './services'

function App() {
  const [fieldValue, setFieldValue] = useState()

  const { loading, error, data } = useQuery(CATEGORIES);
  
  console.log(loading, error, data)

  return (
    <div>
      <AddressSuggestion
        label="cityOfBirth.label"
        name="cityOfBirth"
        id="cityOfBirth"
        value={fieldValue}
        placeholder="Escolha a cidade"
        handleChange={(city) => {
          setFieldValue(city);
        }}
      />
    </div>
  );
}
export default App;
