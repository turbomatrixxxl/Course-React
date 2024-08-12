import { configureStore } from '@reduxjs/toolkit';

import { tasksReducer, filtersReducer } from './reducer';

export const storeAction = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
