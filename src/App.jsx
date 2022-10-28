import React, {useEffect, useState} from 'react'
import Navbar from './Components/Navbar'
import Body from './Components/Body'
import CartPage from './Components/Cart/CartPage'
import {commerce} from './lib/Commerce'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


const App = () => {
  const [cart, setCart] = useState(0)

  function handleAddProducts(productId, quantity) {
    console.log(productId)
    commerce.cart.add(productId, quantity).then(res => getCart())

  }

  function handleDeleteProducts(productId, quantity) {
    commerce.cart.update(productId, {quantity}).then(res => getCart())
  }

  function handleRemoveProducts(){
    
  }

  function getCart() {
    console.log('this runs')
    commerce.cart.retrieve().then(response => setCart(response))
    
    //console.log(cartSize, 'after runs')
  }

  useEffect(() => {
    getCart()
  },[])

  return (
    <div>
      {console.log('runs')}
      
     <Router>
        <Routes>
          <Route path='/' element={<><Navbar cartSize={cart.total_items} /><Body commerce={commerce} handleAddProducts={handleAddProducts}/></>} />
          <Route path='/cart' element={<><Navbar cartSize={cart.total_items} /><CartPage cart={cart} handleAddProducts={handleAddProducts} handleDeleteProducts={handleDeleteProducts}/></>} />
        </Routes>
     </Router>
    </div>
  )
}

export default App 