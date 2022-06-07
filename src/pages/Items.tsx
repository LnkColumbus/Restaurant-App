import { Box, Container, Typography } from '@mui/material'

import { ItemList } from '../components/menu'

const items = [
    {
        _id: 'ABC123',
        itemName: 'Hamburger1',
        description: 'Description1',
        price: 50,
        images: [
            'https://yt3.ggpht.com/a/AATXAJw6nsS-Zu2-hhJkzIQxGOy3rIQH4ep-RTdJWA=s900-c-k-c0xffffffff-no-rj-mo',
            'https://www.newsmax.com/CMSPages/GetFile.aspx?guid=4fdcb0c8-7413-4a13-92a8-fab15ab3cf9c&SiteName=Newsmax'
        ]
    },
    {
        _id: '123ABC',
        itemName: 'Hamburger2',
        description: 'Description1',
        price: 100,
        images: [
            'https://simpleketotest.com/wp-content/uploads/2019/07/Untitled-8.png',
            'https://s-media-cache-ak0.pinimg.com/736x/52/51/b2/5251b24d07153bd28cf8d490349dd9f0--tasty-burger-mcdonalds.jpg'
        ]
    }
]

export const Items = () => {
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
            <ItemList items={items} />
        </Box>
    </Container>
  )
}
