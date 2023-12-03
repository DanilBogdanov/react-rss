import { countries } from '@/types/countries';
import { createSlice } from '@reduxjs/toolkit';

type CountryState = {
  countries: string[];
};

const initialState: CountryState = {
  countries: countries,
};

export const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {},
});

export default countrySlice.reducer;
