import { Box, Container, Fab, Typography } from '@mui/material'
import { AddOutlined } from '@mui/icons-material'

import { CategoriesList } from '../components/menu'

export const Categories = () => {
  return (
    <Container>
        <Typography variant='h4'>Select a category</Typography>
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <CategoriesList />
        </Box>
        <Fab sx={{ position: 'absolute', bottom: -50, right: 16 }} color="primary" aria-label="add">
          <AddOutlined />
        </Fab>
    </Container>
  )
}
