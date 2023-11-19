import { productsApi } from '@/api/productsApi';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type ProductsState = {
  isListLoading: boolean;
  isDetailLoading: boolean;
};

const initialState: ProductsState = {
  isListLoading: false,
  isDetailLoading: false,
};

export const productsSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setIsListLoading(state, action: PayloadAction<boolean>) {
      state.isListLoading = action.payload;
    },
    setIsDetailLoading(state, action: PayloadAction<boolean>) {
      state.isDetailLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      productsApi.endpoints.fetchProducts.matchPending,
      (state) => {
        state.isListLoading = true;
      }
    );
    builder.addMatcher(
      productsApi.endpoints.fetchProducts.matchFulfilled,
      (state) => {
        state.isListLoading = false;
      }
    );
    builder.addMatcher(
      productsApi.endpoints.fetchProducts.matchRejected,
      (state) => {
        state.isListLoading = false;
      }
    );
  },
});

export default productsSlice.reducer;
