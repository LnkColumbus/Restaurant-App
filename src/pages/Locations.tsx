import { Box, TextField, Typography } from '@mui/material'

export const Locations = () => {
  return (
    <>
        <Typography sx={{ mb: 2 }} variant="h4">Locations</Typography>
        <Box
            component="form"
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    id="outlined-basic"
                    label="Name Location"
                    variant="outlined"
                />
                
            </div>
        </Box>
    </>
  )
}
