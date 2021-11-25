import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from 'store'

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
    signIn: (state, action: PayloadAction<object>) => {
      state.user = action.payload
    },
    signOut: (state) => {
      state = initialState
    }
  }
})

export const { signIn, signOut } = authSlice.actions

export const selectUser = (state: RootState) => state.auth.user

export default authSlice.reducer
