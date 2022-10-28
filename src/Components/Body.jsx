import React, {useState, useEffect} from 'react'


import Product from './Products/Product'

const Body = ({commerce, handleAddProducts}) => {
  const [productsData, setProductsData] = useState([])

  const fetchProducts = () => {
    commerce.products.list().then(response => response && setProductsData(response.data))
  }

  useEffect(() => {
    fetchProducts()
    console.log(productsData)
  }, [])
  
  const productsList = productsData.map((productInfo, index) => {
      return <Product key={index} product={productInfo} handleAddProducts={handleAddProducts}/>
  })
  return (
    <div style={{display:'flex', flexWrap:'wrap',justifyContent:'center', alignItems:'center'}}>
      
      {productsList}
    </div>
  )
}

export default Body