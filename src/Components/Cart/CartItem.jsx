import React from 'react'
import Product from '../Products/Product'
import {Badge, Card, CardActions, Typography, IconButton} from '@mui/material'
import { RemoveCircleOutline, AddCircleOutline } from '@mui/icons-material'

const CartItem = ({product, handleAddProducts, handleDeleteProducts}) => {
  
  return (
    <Card>
        <Product product={product} inCartPage={true}/>
        <CardActions>
            <IconButton onClick={() => handleDeleteProducts(product.id, product.quantity-1)}>
                <RemoveCircleOutline />
            </IconButton>
            <Typography sx={{marginLeft:'5px'}}> {product.quantity}</Typography>
            <IconButton onClick={() => handleAddProducts(product.product_id, 1)}>
                <AddCircleOutline />
            </IconButton>
        </CardActions>
        <Typography>Item total cost: {product.line_total.formatted_with_symbol}</Typography>
    </Card>
  )
}

export default CartItem