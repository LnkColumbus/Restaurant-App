import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Avatar, Box, Button, Container, FormControl, FormHelperText, Grid, InputLabel, MenuItem, TextField, Typography, Select } from '@mui/material'
import { SaveOutlined, TableBarOutlined } from '@mui/icons-material'

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { addTable } from '../features/table/tableApi';
import { getLocations } from '../features/location/locationApi';

type FormData = {
    location: string,
    tableNumber: number,
    tableCapacity: number,
}

const locationSchema = yup.object({
    location: yup.string().required('This field is required'),
    tableNumber: yup.number().required('This field is required').typeError('It has to be a number'),
    tableCapacity: yup.number().required('This field is required').typeError('It has to be a number'),
});

export const Tables = () => {

    const { locations } = useAppSelector((state) => state.locations);
    const dispatch = useAppDispatch();

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(locationSchema)
    });

    useEffect(() => {
      dispatch( getLocations() );
    }, [])

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log({data});
        dispatch( addTable(data) );
    }
    
    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <TableBarOutlined />
                </Avatar>
                <Typography component="h1" variant="h5">Tables</Typography>
                <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={ handleSubmit(onSubmit) }>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-helper-label">Select Location</InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    label="Select Location"
                                    defaultValue=""
                                    inputProps={ register('location') }
                                    error={ !!errors.location }
                                    { ...register('location') }
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {
                                        locations.map( location => (
                                            <MenuItem key={location._id} value={location._id}>{location.locationName}</MenuItem>
                                        ))
                                    }
                                    {/* <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem> */}
                                </Select>
                                <FormHelperText>{ errors.location?.message }</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="tableNumber"
                                required
                                fullWidth
                                autoFocus
                                label="Table Number"
                                type="number"
                                error={ !!errors.tableNumber }
                                helperText={ errors.tableNumber?.message }
                                { ...register('tableNumber') }
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="tableCapacity"
                                required
                                fullWidth
                                label="Table Capacity"
                                type="number"
                                error={ !!errors.tableCapacity }
                                helperText={ errors.tableCapacity?.message }
                                { ...register('tableCapacity') }
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        endIcon={ <SaveOutlined /> }
                    >
                        Save
                    </Button>
                </Box>
            </Box>        
        </Container>
    )
}
