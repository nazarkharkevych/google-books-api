import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../features/books/booksSlice';
import formReducer from '../features/form/formSlice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
    form: formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
