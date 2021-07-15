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
// now: "2017-08-01T20:00:00.000Z"

export const AddressContext = createContext(addressParams)

export const AddressContextProvider = ({ children }) => {

  const [state, setState] = useState(addressParams)

  return (
    <AddressContext.Provider value={{state, setState}}>
      {children}
    </AddressContext.Provider>
  );
};
