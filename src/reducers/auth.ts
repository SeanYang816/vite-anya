import { createSlice } from '@reduxjs/toolkit'
import { AuthStateProps } from 'types'

const initialState: AuthStateProps = {
  token: null,
  isAuthenticated: false,
  user: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authLogin: (state, { payload }) => {
      state.token = payload
      state.isAuthenticated = true
    },
    autoLogout: (state) => {
      Object.assign(state, initialState)
    }
  }
})

const auth = authSlice.reducer
export { auth }
export const { authLogin, autoLogout } = authSlice.actions