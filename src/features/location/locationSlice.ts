import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { addLocation, getLocation, getLocations } from './locationApi';
import { ILocation } from '../../interfaces';

interface LocationState {
    locations: ILocation[];
    isLoading: boolean;
    status: string;
}

const initialState: LocationState = {
    locations: [],
    isLoading: false,
    status: ''
}

export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {},
    extraReducers: {
        [getLocations.pending.type]: ( state ) => {
            state.status = 'pending';
            state.isLoading = true;
        },
        [getLocations.fulfilled.type]: (state, action: PayloadAction<ILocation[]> ) => {
            state.status = 'success';
            state.locations = action.payload;
            state.isLoading = false;
        },
        [getLocations.rejected.type]: (state) => {
            state.status = 'failed';
            state.isLoading = false
        },
        [addLocation.pending.type]: (state) => {
            state.status = 'pending';
            state.isLoading = true;
        },
        [addLocation.fulfilled.type]: (state, action: PayloadAction<ILocation> ) => {
            state.status = 'success';
            state.locations.push(action.payload);
            state.isLoading = false;
        },
        [addLocation.rejected.type]: (state) => {
            state.status = 'failed';
            state.isLoading = false;
        }
    }
})

export default locationSlice.reducer;