import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import api from '@/app/services/api';

const rootReducers = combineReducers({
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(api.middleware),
});

export type RootState = ReturnType<typeof rootReducers>;

export type AppDispatch = typeof store.dispatch;

export default store;
