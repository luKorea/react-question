import { createSlice } from '@reduxjs/toolkit'

const HomeSlice = createSlice({
  name: 'home',
  initialState: {
    data: 'demo'
  },
  reducers: {
    addActions(state, { payload }) {
      state.data = payload
    }
  }
})

export const { addActions } = HomeSlice.actions

export default HomeSlice.reducer
