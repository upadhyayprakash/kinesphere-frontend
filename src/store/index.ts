import { configureStore } from '@reduxjs/toolkit'

// We'll define the store type based on the store we created in the provider
const store = configureStore({
  reducer: {
    dummy: (state = {}) => state,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
