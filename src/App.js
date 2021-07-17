import React, { Suspense } from 'react'
import { ApolloProvider } from '@apollo/client'
import { AddressContextProvider } from './store'
import { client } from './services'
import { GlobalStyles } from './App.style'
import AppRoutes from './containers/AppRoutes'

const App = () => {
  return (
    <Suspense fallback={<></>}>
      <AddressContextProvider>
        <ApolloProvider client={client}>
          <GlobalStyles />
          <AppRoutes />
        </ApolloProvider>
      </AddressContextProvider>
    </Suspense>
  );
}
export default App
