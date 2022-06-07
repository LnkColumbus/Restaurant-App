import { createAsyncThunk } from '@reduxjs/toolkit'

import { restApi } from '../../api'
import { ILocation } from '../../interfaces'

export const getLocations = createAsyncThunk("location/getLocations", async() => {
    try {
        const res = await restApi.get("locations");
        return res.data;
    } catch (error) {
        console.log(error);
        //TODO: handle error
    }
});

export const getLocation = createAsyncThunk("location/getLocation", async( locationID: string ) => {
    try {
        const res = await restApi.get(`locations/${ locationID }`);
        return res.data;
    } catch (error) {
        console.log(error);
        //TODO: handle error
    }
});

export const addLocation = createAsyncThunk("location/addLocation", async( location: ILocation ) => {
    try {
        const res = await restApi.post("locations", location);
        return res.data;
    } catch (error) {
        console.log(error);
        //TODO: handle error
    }
})