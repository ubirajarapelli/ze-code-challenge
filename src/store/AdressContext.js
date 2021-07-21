import React, { createContext, useState } from 'react'

const addressParams = {
  id: null,
  status: null,
  fullAddress: null,
  algorithm: "NEAREST",
  lat: null,
  long: null,
  now: new Date()
}

export const AddressContext = createContext(addressParams)

export const AddressContextProvider = ({ children }) => {

  const [state, setState] = useState(addressParams)

  return (
    <AddressContext.Provider value={{state, setState}}>
      {children}
    </AddressContext.Provider>
  );
};
