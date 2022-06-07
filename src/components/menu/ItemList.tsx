import { FC } from 'react'

import { Grid } from '@mui/material'

import { IMenuItem } from '../../interfaces';
import { ItemCard } from './ItemCard';

interface Props {
    items: IMenuItem[];
}

export const ItemList: FC<Props> = ({ items }) => {
  return (
    <Grid container spacing={4}>
        {
          items.map( item => (
            <ItemCard
                key={ item.itemName }
                item={ item }
            />
          ))
        }
    </Grid>
  )
}
