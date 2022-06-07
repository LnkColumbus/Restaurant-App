import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Avatar, Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import { AddLocationAltOutlined, SaveOutlined } from '@mui/icons-material'
import { useAppDispatch } from '../app/hooks';
import { addLocation } from '../features/location/locationApi';

type FormData = {
    locationName: string,
    phone: number,
    city: string,
    state: string
}

const locationSchema = yup.object({
    locationName: yup.string().required('This field is required'),
    phone: yup.number().required('This field is required').typeError('It has to be a number'),
    city: yup.string().required('This field is required'),
    state: yup.string().required('This field is required')
});

export const Locations = () => {

    const dispatch = useAppDispatch();

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(locationSchema)
    });

    const onSubmit: SubmitHandler<FormData> = (data) => {
        dispatch( addLocation(data) );
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
                    <AddLocationAltOutlined />
                </Avatar>
                <Typography component="h1" variant="h5">Locations</Typography>
                <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={ handleSubmit(onSubmit) }>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="locationName"
                                required
                                autoFocus
                                fullWidth
                                label="Location Name"
                                error={ !!errors.locationName }
                                helperText={ errors.locationName?.message }
                                { ...register('locationName') }
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="phone"
                                required
                                fullWidth
                                label="Phone"
                                type="number"
                                error={ !!errors.phone }
                                helperText={ errors.phone?.message }
                                { ...register('phone') }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="city"
                                required
                                fullWidth
                                label="City"
                                error={ !!errors.city }
                                helperText={ errors.city?.message }
                                { ...register('city') }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="state"
                                required
                                fullWidth
                                label="State"
                                error={ !!errors.state }
                                helperText={ errors.state?.message }
                                { ...register('state') }
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
