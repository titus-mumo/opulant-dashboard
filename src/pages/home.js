import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Card } from '../components'


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
      return (
        <Card key={ product._id} product={product}/>
      )
      
    })}</div>
  )
}
