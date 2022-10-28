import React, {useState} from 'react'
import {Grid, Typography} from '@mui/material'
import CartItem from './CartItem'

const CartPage = ({cart, handleAddProducts, handleDeleteProducts}) => {
    console.log(cart, 'check')

    if(!cart) return;

    const cartItems = cart.line_items.map((product,index) => {
        return <Grid item key={index} ><CartItem product={product} handleAddProducts={handleAddProducts} handleDeleteProducts={handleDeleteProducts}/></Grid>
    })
    console.log(cartItems, 'cartItems')
    return (
        cartItems.length ?
        <Grid container spacing={3} justifyContent='center'>
            {cartItems}
        </Grid>
        :
        <Typography align='center'>No items in cart</Typography>
        
    )
}

export default CartPage