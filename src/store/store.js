import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import filmsReducer from './slices/filmsSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    films: filmsReducer,
  },
});
