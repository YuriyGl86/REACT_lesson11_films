import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import filmsReducer from './slices/filmsSlice'
import favoritesReducer from './slices/favoritesSlice'
import { fetchApiSlice } from './slices/fetchAPI';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    films: filmsReducer,
    favorites: favoritesReducer,
    [fetchApiSlice.reducerPath]: fetchApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fetchApiSlice.middleware)
});
