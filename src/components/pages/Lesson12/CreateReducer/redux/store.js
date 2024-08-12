import { configureStore } from '@reduxjs/toolkit';

import { tasksReducer, filtersReducer } from './reducer';

export const storeReducer = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
