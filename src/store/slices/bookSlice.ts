import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { bookService } from '../../services/bookService';
import { Book } from '../../models/Book';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  return await bookService.getBooks();
});

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [] as Book[],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchBooks.pending, state => {
        state.loading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Error al cargar';
      });
  },
});

export default booksSlice.reducer;
