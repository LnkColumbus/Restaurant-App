import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { addTable, getTables } from './tableApi'

import { ITable } from '../../interfaces';

interface TableState {
    tables: ITable[];
    isLoading: boolean;
    status: string;
}

const initialState: TableState = {
    tables: [],
    isLoading: false,
    status: ''
}

export const tableSlice = createSlice({
    name: "table",
    initialState,
    reducers: {},
    extraReducers: {
        [getTables.pending.type]: (state) => {
            state.status = 'pending';
            state.isLoading = true;
        },
        [getTables.fulfilled.type]: (state, action: PayloadAction<ITable[]>) => {
            state.status = 'success';
            state.tables = action.payload;
            state.isLoading = false;
        },
        [getTables.rejected.type]: (state) => {
            state.status = 'rejected';
            state.isLoading = false;
        },
        [addTable.pending.type]: (state) => {
            state.status = 'pending';
            state.isLoading = true;
        },
        [addTable.fulfilled.type]: (state, action: PayloadAction<ITable>) => {
            state.status = 'success';
            state.tables.push(action.payload);
            state.isLoading = false;
        },
        [addTable.rejected.type]: (state) => {
            state.status = 'rejected';
            state.isLoading = false;
        }
    }
});

export default tableSlice.reducer;