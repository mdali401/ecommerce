import React from 'react'
import {Card, CardMedia, CardContent, Typography, CardActions, IconButton, Grid} from '@mui/material'
import { AddShoppingCartSharp } from '@mui/icons-material'

const Product = ({product, handleAddProducts, inCartPage}) => {
   
  return (
    <Grid>
        <Card sx={{minWidth:'200px', maxWidth:'400px',margin:'10px', padding:'5px', border:'2px solid skyblue',justifyContent:'center'}}>
            <CardContent>
                <CardMedia component='img' height='70%' image={product.image.url} />
                <Typography gutterBottom variant='h5'>{product.name}</Typography>
                <Typography dangerouslySetInnerHTML={{__html: product.description}} variant='body1'></Typography>
                <Typography variant='subtitle2'>{product.price.formatted_with_symbol}</Typography>
            </CardContent> 
            {!inCartPage ? 
            <CardActions>
                <IconButton onClick={() => handleAddProducts(product.id, 1)}><AddShoppingCartSharp /></IconButton>
            </CardActions>
            : ''
            }
        </Card>
    </Grid>
  )
}

export default Product