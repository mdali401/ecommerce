import React from 'react'
import {AppBar,Badge, Box, IconButton, Typography} from '@mui/material'
import {ShoppingCartSharp} from '@mui/icons-material'
import {Link} from 'react-router-dom'

const Navbar = ({cartSize}) => {
  console.log(cartSize)
  return (
    <AppBar position="sticky" sx={{marginBottom:'20px', textDecoration:'none'}}>
        <Box sx={{display:'flex', flexDirection:'row', alignItems: 'center', justifyContent:'space-between', padding:'10px'}}>
          <Typography variant="h6" component="div">
            E-Commerce
          </Typography>
          <Link to='/' style={{color:'white', textDecoration:'none'}}>
          <Typography variant="h6" component="div">
            Home
          </Typography>
          </Link>
          <Link to='/cart' style={{color:'white'}}>
            <IconButton color='inherit'><Badge badgeContent={cartSize} color='secondary'><ShoppingCartSharp /></Badge></IconButton>
          </Link>
        </Box>
      </AppBar>
    
  )
}

export default Navbar
