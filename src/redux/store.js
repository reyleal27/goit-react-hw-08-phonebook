import { configureStore } from '@reduxjs/toolkit';
import { contactSlice } from './contactSlice';
import { filterSlice } from './filterSlice';
import { authSlice } from '../redux/auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    contacts: contactSlice.reducer,
    filter: filterSlice.reducer,
  },
});
