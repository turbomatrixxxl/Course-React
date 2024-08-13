import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './tasksSlice';

export const storeAsyncThunk = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
