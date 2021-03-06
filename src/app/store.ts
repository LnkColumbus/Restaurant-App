import { configureStore } from '@reduxjs/toolkit'

import locationReducer from '../features/location/locationSlice';
import tableReducer from '../features/table/tableSlice';

export const store = configureStore({
    reducer: {
        locations: locationReducer,
        tables: tableReducer
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch