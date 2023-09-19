import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'


export const Home = () => {
  const [products, setProducts] = useState([])

  const getProducts = async() => {
    try {
      const response = await axios.get('https://node-api-kqht.onrender.com/api/products/')
      setProducts(response.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(()=> {getProducts()}, [])
  return (
    <div>{products.map(product => {
      return <div>
        <p>{product._id}</p>
        <p>{product.name}</p>
        <p>{product.price}</p>
        <p>{product.quantity}</p>
        <img src={product.image} alt={product.name} />
      </div>
    })}</div>
  )
}
