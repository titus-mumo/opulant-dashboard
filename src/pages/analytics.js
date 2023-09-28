import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Doughnut } from 'react-chartjs-2'
import 'chart.js/auto'

export const Analytics = () => {
  const [labels, setLabels] = useState([])
  const [items, setItems] = useState([])
  const [dataFetched, setDataFetched] = useState(false)
  const [quantity, setQuantity] = useState([])

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('https://node-api-kqht.onrender.com/api/products/')
      setItems(response.data)
      const itemLabels = items.map(item => String(item.name))
      const itemQuantity = items.map(item => (item.quantity))
      setLabels(itemLabels)
      setQuantity(itemQuantity)
      setDataFetched(quantity.length > 0)
    }
    getData()  
  }, [labels, items, quantity])

  const data = {
    labels : labels,
    datasets: [{
      label: 'Quantity',
      data: quantity, 
      backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple', 'orange', 'black', 'brown'],
      hoverOffset: 4
    }]
  }

  return (
    <div>
      {
        dataFetched ? (
          <div className='max-w-lg border-gray-500 border-2 rounded-xl shadow-xl shadow-gray-500/50'>
            <Doughnut data={data} />
          </div>): (
            <div>Loading data...</div>
          
        )
      }
    </div>
  )
}
