import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './module/home'

const store = configureStore({
  reducer: {
    homeReducer
  }
})

export default store
