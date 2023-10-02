import React, { useState } from 'react'

export const Colors = () => {
    const colors = ['red', 'green', 'blue', 'black', 'orange']
    const [active, setActive] = useState('red')
    return (
        colors.map(color => 
        <div>
            <ul className='flex justify-start ml-6'>
                <li className='flex m-5 align-middle hover:cursor-pointer' onClick={() => setActive(color)}>
                    <h1 style={{ color: color }}>.</h1>
                    <div className='mt-1'>
                        <p className='ml-10' style={active === color ? { color: color } : { opacity: 0 }} >the color is {color}</p>
                    </div>
                </li>
            </ul>
        </div>)
    )
}
