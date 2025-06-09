// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import splashReducer from '../slice/splash'


export const store = configureStore({
  reducer: {
    splash: splashReducer,
  },
});
