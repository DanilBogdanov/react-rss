import { PageLimit } from '@/types/api';
import { LSKEY_PREV_QUERY } from '@/types/constants';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type QueryState = {
  search: string;
  perPage: PageLimit;
};

const initialState: QueryState = {
  search: localStorage.getItem(LSKEY_PREV_QUERY) ?? '',
  perPage: PageLimit.L20,
};

export const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      localStorage.setItem(LSKEY_PREV_QUERY, action.payload);
      state.search = action.payload;
    },
    setPerPage(state, action: PayloadAction<PageLimit>) {
      state.perPage = action.payload;
    },
  },
});

export default querySlice.reducer;
