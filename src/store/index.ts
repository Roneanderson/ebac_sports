import { configureStore } from '@reduxjs/toolkit'

import carrrinhoReducer from './reducers/carrinho'

export const store = configureStore({
  reducer: {
    carrinho: carrrinhoReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
