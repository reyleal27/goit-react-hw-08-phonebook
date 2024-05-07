import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refreshUser } from './authOperation';


const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isError: null,
  isRefreshing: false,
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, (state, _action) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        // state.isError = null;
        // state.isLoading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.isError = action.error.message;
      })
      .addCase(login.pending, (state, _action) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.isRefreshing = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.isError = action.error.message;
      })
      .addCase(logout.pending, (state, _action) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state, _action) => {
        state.user = {name: null, email: null};
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.isError = action.error.message;
      })
      .addCase(refreshUser.pending, (state, _action) => {
        state.isLoading = true;
        state.isRefreshing = true;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.isRefreshing = false;
        
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isError = action.error.message;
        state.isRefreshing = false;
        state.isLoading = false;

      });
  },
});

export const authReducer = authSlice.reducer;
