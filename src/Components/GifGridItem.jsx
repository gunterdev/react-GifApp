import { Card,CardActionArea,CardMedia,CardContent,Typography, Grid } from '@mui/material';
import React from 'react';

const GifGridItem = ({id,title,url}) => {
  return (
    <>
        <Grid item xs={3}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="300"
                        image={url}
                        alt={url}
                        sx={{objectFit:"cover"}}
                    />
                    <CardContent>
                        <Typography height="4rem" gutterBottom variant="h6" component="div">
                        {title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    </>
  )
}

export default GifGridItem