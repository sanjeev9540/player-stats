import { configureStore } from '@reduxjs/toolkit'
import { statsApi } from './slices/statsApi'
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    [statsApi.reducerPath]: statsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(statsApi.middleware),
});

setupListeners(store.dispatch);