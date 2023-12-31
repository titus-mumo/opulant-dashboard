import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Card } from '../components'
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import useAppContext from '../context/userContext'
import { useNavigate } from 'react-router-dom'


export const Home = () => {
  const {user} = useAppContext()
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()
  const notauthorised = () => toast.error("You are not authorised to add a product yet")

  const getProducts = async() => {
    try {
      const response = await axios.get('https://node-api-kqht.onrender.com/api/products/')
      setProducts(response.data)
      if (products) {
        setIsLoading(false)
      }
      success()
    } catch (error) {
      fail()
    }
  }
  const fail = () => toast.error("An error occured")
  const success = () => toast.success("Products loaded successfully")
  useEffect(()=> {getProducts()}, [])
  
  const handleAdd = (e) => {
    e.preventDefault()
    if(user){
      setTimeout(() =>{navigate('/add_product')}, 1000)
    } else{
      notauthorised()
      setTimeout(() => {navigate('/login')},1000)
    }
  }
  return (
    <main className=''>
      <Toaster />
     <Link onClick={handleAdd}>
        <div className="bg-green-700 rounded-lg shadow m-4 hover:cursor-pointer" >
          <div className="w-full mx-auto max-w-screen-xl p-2.5 md:flex md:items-center md:justify-center">
        <span className="text-lg text-white text-center">Add a product
          </span>  
        </div>
        </div>
      </Link>


      {
        !isLoading ? (
          <div className='flex flex-wrap justify-normal'>{products.map(product => {
            return (
              <Card key={product._id} product={product} />
            )
          })}</div>) : (<p>Loading Products....</p>)
      }
    </main>

  )
}
