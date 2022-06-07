import { FC, useMemo, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { Box, CardActionArea, Card, CardMedia, Grid, Link, Typography } from '@mui/material'

import { IMenuItem } from '../../interfaces'

interface Props {
    item: IMenuItem;
}

export const ItemCard: FC<Props> = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    
    const productImage = useMemo(() => {
        return isHovered 
            ? `${ item.images[1] }`
            : `${ item.images[0] }`
    }, [isHovered, item.images]);

    return (
        <Grid
            item
            xs={6}
            sm={4}
            onMouseEnter={ () => setIsHovered(true) }
            onMouseLeave={ () => setIsHovered(false) }
        >
            <Card>
                <Link component={RouterLink} to="/menu-item-detail">
                    <CardActionArea>
                        <CardMedia
                            alt={ item.itemName }
                            className="fadeIn"
                            component="img"
                            image={ productImage }
                            onLoad={ () => setIsImageLoaded( true ) }
                        />
                    </CardActionArea>
                </Link>
        </Card>
        <Box sx={{ mt: 1, display: isImageLoaded ? "block" : "none" }} className="fadeIn">
            <Typography fontWeight={700}>{ item.itemName }</Typography>
            <Typography fontWeight={500}>${ item.price }</Typography>
        </Box>
    </Grid>
  )
}
