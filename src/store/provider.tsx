'use client'

import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

// Create a store with an empty reducer for now
const store = configureStore({
  reducer: {
    // Add your reducers here
    dummy: (state = {}) => state, // Temporary reducer to avoid the "no valid reducer" error
  },
})

export default function StoreProvider({ children }: PropsWithChildren) {
  return <Provider store={store}>{children}</Provider>
}
