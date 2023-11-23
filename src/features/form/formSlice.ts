import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialFormState = {
  bookCategory: string,
  sortOrder: string,
  searchQuery: string,
}

const initialState = {
  bookCategory: '',
  sortOrder: 'relevance',
  searchQuery: '',
} as InitialFormState;

export const formSlice = createSlice({
  name: 'form',
  initialState: initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.bookCategory = action.payload;
    },
    setSortOrder: (state, action: PayloadAction<string>) => {
      state.sortOrder = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const {
  setCategory,
  setSortOrder,
  setSearchQuery,
} = formSlice.actions;

export default formSlice.reducer;
