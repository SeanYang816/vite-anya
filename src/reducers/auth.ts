import { AsyncThunk, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getToken } from 'api/axios/mockApi'
import { AuthStateProps } from 'types'

type ParamsProps = {
  email: string;
  password: string;
}

export const login = createAsyncThunk('auth/login', async ({ email, password }: ParamsProps) => {
  const data = await getToken(email, password)
  if (Math.random() > 0.5) {
    return data
  }
  throw new Error('e04su3us;')
})

const initialState: AuthStateProps = {
  token: null,
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true
        state.error = null
        console.log('pending')

      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.loading = false
        console.log('fulfilled_' + payload)
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.loading = false
        console.log('rejected_' + payload)
      })
  }
})

const auth = authSlice.reducer
export { auth }
export const { authLogin, autoLogout } = authSlice.actions