import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Doughnut, Bar } from 'react-chartjs-2'
import 'chart.js/auto'
import toast, {Toaster} from 'react-hot-toast'

export const Analytics = () => {
  const [labels, setLabels] = useState([])
  const [items, setItems] = useState([])
  const [dataFetched, setDataFetched] = useState(false)
  const [quantity, setQuantity] = useState([])
  const [price, setPrice] = useState([])
  //const format = Intl.NumberFormat('en-US')
  // const load = () => toast('Analyzing data...')
  // const success = () => toast.success('Analysis complete')
  const fail = () => toast.error('An error occured')
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('https://node-api-kqht.onrender.com/api/products/')
        setItems(response.data)
        const itemLabels = items.map(item => String(item.name))
        const itemQuantity = items.map(item => (item.quantity))
        const itemPrice = items.map(item => (item.price))
        setLabels(itemLabels)
        setQuantity(itemQuantity)
        setPrice(itemPrice)
        setDataFetched(quantity.length > 0)
      } catch (error) {
        fail()
      }
    }
    getData()  
  }, [labels, items, quantity, price])

  const quantityData = {
    labels : labels,
    datasets: [{
      label: 'Quantity',
      data: quantity, 
      backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple', 'orange', 'black', 'brown'],
      hoverOffset: 4
    }]
  }

  const priceData = {
    labels : labels,
    datasets: [{
      label: 'Price',
      data: price, 
      backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple', 'orange', 'black', 'brown'],
      hoverOffset: 4
    }]
  }
  

  return (
    <div className='flex flex-wrap w-full justify-around h-full bg-white'>
      <Toaster />
      <div>
        {
          dataFetched ? (
            <div className='flex flex-wrap justify-around'>
            <div className='border-gray-500 border-2 rounded-xl shadow-xl shadow-gray-500/50 m-2 p-3 basis-1/2  dark:bg-gray-800 dark:text-white max-w-xl sm:min-w-sm sm:max-w-md'>
              <h1 className='text-lg font-bold text-black dark:text-white  dark:bg-gray-800'>Product's Quantity Pie Chart</h1>
              <Doughnut data={quantityData} className='dark:bg-gray-800 dark:text-white flex flex-wrap'/>
            </div>
            <div className=' border-gray-500 border-2 rounded-xl shadow-xl shadow-gray-500/50 m-2 p-3 basis-1/2 dark:bg-gray-800 dark:text-white'>
              <h1 className='text-lg font-bold text-black dark:text-white dark:bg-gray-800'>Product's Price Bar Graph</h1>
              <Bar data={priceData} className='dark:bg-gray-800 dark:text-white flex flex-wrap'/>
              </div>
              </div>) : (
            ''
          )
        }
      </div>
      </div>
  )
}
