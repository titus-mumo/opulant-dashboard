import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Card } from '../components'
import { Link } from 'react-router-dom'


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
    <>
     <Link to='/add_product'>
        <div className="bg-green-700 rounded-lg shadow m-4 dark:bg-gray-800 hover:cursor-pointer" >
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-center">
        <span className="text-lg text-white text-center dark:text-gray-400">Add a product
          </span>  
        </div>
        </div>
      </Link>


      
    <div className='flex flex-wrap justify-normal'>{products.map(product => {
      return (
        <Card key={ product._id} product={product}/>
      )
      
    })}</div>
    </>

  )
}
