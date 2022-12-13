import { configureStore } from '@reduxjs/toolkit';
import tableOfContentsReducer from './tableOfContentsSlice';
const listReducer = {
    tableOfContentsReducer,
};
export const store = configureStore({
    reducer: listReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
