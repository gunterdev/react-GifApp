import { Grid, Typography } from '@mui/material';
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

export const GifGrid = ({category}) => {
    const {data:images, loading} = useFetchGifs(category);


  return (
    <div>
        <Typography component="h1" variant='h1' textAlign="center">{category}</Typography>
        { 
            loading ? 
            <div>Cargando...</div> 
            : 
            <Grid container spacing={1}>
                {images.map((image) => (
                    <GifGridItem key={image.id} {...image}/>
                ))}
            </Grid>
        }
    </div>
  )
}
