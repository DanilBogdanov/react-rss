import { FormsData } from '@/types/forms/formData';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type FormsState = {
  uncontrolledForms: FormsData[];
  reactHookForms: FormsData[];
  newForm: 'ref' | 'hook' | null;
};

const initialState: FormsState = {
  uncontrolledForms: [],
  reactHookForms: [],
  newForm: null,
};

export const formsSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    addUncontrolledForm(state, action: PayloadAction<FormsData>) {
      state.uncontrolledForms.unshift(action.payload);
    },
    addReactHookForm(state, action: PayloadAction<FormsData>) {
      state.reactHookForms.unshift(action.payload);
    },
    setNewForm(state, action: PayloadAction<'ref' | 'hook' | null>) {
      state.newForm = action.payload;
    },
  },
});

export default formsSlice.reducer;
