import { createAsyncThunk } from '@reduxjs/toolkit'

import { restApi } from '../../api'
import { ITable } from '../../interfaces'

export const getTables = createAsyncThunk("tables/getTables", async () => {
    try {
        const res = await restApi.get("tables");
        return res.data;
    } catch (error) {
        console.log(error);
        //TODO: handle error
    }
});

export const getTable = createAsyncThunk("tables/getTable", async ( tableID: string ) => {
    try {
        const res = await restApi.get(`tables/${ tableID }`);
        return res.data;
    } catch (error) {
        console.log(error);
        //TODO: handle error
    }
});

export const addTable = createAsyncThunk("tables/addTable", async ( table: ITable ) => {
    try {
        const res = await restApi.post("tables", table );
        return res.data;
    } catch (error) {
        console.log(error);
        //TODO: handle error
    }
})