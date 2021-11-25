import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
  user: object
}

const initialState: AuthState = {
  user: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.user = action.payload
    },
    signOut: (state) => {
      state = initialState
    }
  }
})

export const { signIn, signOut } = authSlice.actions

export default authSlice.reducer
