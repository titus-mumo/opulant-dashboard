import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'

export const Edit = () => {
    let { id } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')
    const [image, setImage] = useState('')
    const [edit, setEdit] = useState(false)

    const success = (id) => toast.success(`${id} editted successfully`)
    
    try {
        useEffect(() => {
            const getProduct = async (id) => {
                const response = await axios.get(`https://node-api-kqht.onrender.com/api/products/${id}`)
                setName(response.data.name)
                setPrice(response.data.price)
                setQuantity(response.data.quantity)
                setImage(response.data.image)
                setIsLoading(false)
            }
            getProduct(id)
        }, [id])
    } catch (error) {
        console.log(error.message)
    }


    const editItem = async (e) => {
        e.preventDefault()
        setEdit(true)
        try {
            const response = await axios.put(`https://node-api-kqht.onrender.com/api/products/${id}`, { name: name, price: price, quantity: quantity, image: image })
            success(response.data.name)
        } catch (error) {
            console.log(error.message)
        }
        setEdit(false)
    }

    return (
        <div className='flex justify-center items-center'>
            <Toaster />
<form className='max-w-md basis-11/12 dark:bg-gray-600 p-5 rounded-xl' onSubmit={editItem}>
  <div className="mb-6">
    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required/>
  </div>
  <div className="mb-6">
    <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
    <input type="number" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='50'required/>
    </div>
<div className="mb-6">
    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
    <input type="number" id="price"  value={price} onChange={(e) => setPrice(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='100'required/>
</div>
<div className="mb-6">
    <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image URL</label>
    <input type="text" id="image" value={image} onChange={(e) => setImage(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='https://example-image.com'required/>
  </div>
              <div className='flex flex-wrap justify-around'>
              {
                  !isLoading &&
                  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                  }
                  <Link to='/'>
                      <button type='button' className="text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800">Go to Home Page</button>
                  </Link>
  </div>
  
          </form>
        </div>
        
  )
}
