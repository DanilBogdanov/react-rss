import { combineReducers, configureStore } from '@reduxjs/toolkit';
import queryReducer from './reducers/querySlice';
import productsReducer from './reducers/productsSlice';
import { productsApi } from '@/api/productsApi';

export const rootReducer = combineReducers({
  query: queryReducer,
  products: productsReducer,
  [productsApi.reducerPath]: productsApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productsApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
