import {
  createAsyncThunk,
  createSlice,
  isPending,
  isFulfilled,
} from '@reduxjs/toolkit';
import { Book } from '../../types/book';
import { QueryParams } from '../../types/queryParams';
import request from '../../helpers/request';

type InitialState = {
  items: Book[],
  totalCount: number,
  isLoading: boolean,
}

type ApiResponse = {
  totalItems: number,
  items: Book[]
}

const initialState = {
  items: [],
  totalCount: 0,
  isLoading: false,
} as InitialState;

export const booksSlice = createSlice({
  name: 'books',
  initialState: initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(loadMore.fulfilled, (state, action) => {
      if (!action.payload.items) {
        return;
      }

      state.items = [...state.items, ...action.payload.items];
    }),
    builder.addCase(loadBooks.fulfilled, (state, action) => {
      if (!action.payload.items) {
        return;
      }

      state.totalCount = action.payload.totalItems;
      state.items = action.payload.items;
    }),
    builder.addMatcher(isPending, (state) => {
      state.isLoading = true;
    }),
    builder.addMatcher(isFulfilled, (state) => {
      state.isLoading = false;
    })
  },
});

export default booksSlice.reducer;

const thunkCallback = (params: QueryParams) => {
  return request<ApiResponse>(params);
}

export const loadBooks = createAsyncThunk('books/fetch', thunkCallback);
export const loadMore = createAsyncThunk('books/fetchMore', thunkCallback);
