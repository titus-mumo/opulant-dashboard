import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'

export const Card = ({ product }) => {

    const success = (id) => toast.success(`${id} deleted successfully`)
    const fail = () => toast.error('An error occured in the process')
    
    const deleteProduct = async(id) => {
        try {
            alert(`Are you sure you want to delete this item?`)
            const response = await axios.delete(`https://node-api-kqht.onrender.com/api/products/${id}`)
            window.location.reload()
            success(response.data.name)
        } catch (error) {
            fail()
        }
    }

    const format = Intl.NumberFormat('en-US')

  return (
      
      <div className="max-w-sm bg-gray-150 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
          <Toaster />
    <div className='flex justify-center align-middle'>
        <a href="/">
            <img className="rounded-t-lg h-40 w-30" src={product.image} alt=""/>
        </a>
    </div>

          <div className="p-5">
              <div className='max-w-30 flex flex-wrap m-0 p-0 justify-center'>
                <a href="/">
                  <h5 className="mb-2 text-xl tracking-tight text-gray-900 dark:text-white leading-normal w-30 max-w-100%">{ product.name}</h5>
                </a>
            </div>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Quantity: {product.quantity}</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Price: { format.format(product.price)}</p>
              <div className='flex justify-around'>
            <Link to={`/edit_product/${product._id}`}>
            <span className="inline-flex items-center justify-center m-3 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:cursor-pointer basis-1/2">
            Edit
                </span>
                </Link>
                      <span  onClick={() => deleteProduct(product._id)} className="inline-flex items-center justify-center m-3 px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 hover:cursor-pointer basis-1/2">
            Delete
                  </span>
            </div>
    </div>
</div>

  )
}
