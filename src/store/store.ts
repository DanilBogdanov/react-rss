import { combineReducers, configureStore } from '@reduxjs/toolkit';
import countryReducer from './reducers/countrySlice';
import formsReducer from './reducers/formsSlice';

export const rootReducer = combineReducers({
  country: countryReducer,
  forms: formsReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export const store = setupStore();
