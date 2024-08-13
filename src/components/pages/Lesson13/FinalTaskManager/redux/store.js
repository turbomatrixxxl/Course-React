import { configureStore } from '@reduxjs/toolkit';

import { tasksReducer } from './tasksSlice';
import { filtersReducer } from './filtersSlice';

export const storeFinalTaskManager = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
