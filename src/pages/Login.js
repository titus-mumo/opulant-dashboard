import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {useCookies} from 'react-cookie'   
import useAppContext from '../context/userContext'

export const Login = () => {
    const {user, setUser} = useAppContext()
    const[, setCookie]= useCookies(["user"])
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const success = () => toast.success("Login successful")
    //const error = () => toast.error("An error occurred. Try again")
    const shortpassword = () => toast.error("Password is too short")
    
    const handleLogin = async (event) => {
        event.preventDefault()
        if (password.length >= 8) {
            try {
                const res = await axios.post('https://node-api-kqht.onrender.com/api/users/login/', {email:email, password:password})
                if (res && res.status === 200){
                    let {email, password, _id} = res.data
                    setUser({_id, email, password})
                } 
                console.log(user)
            } catch(error){
                const fail = () => toast.error(String(error.response.data.message))
                fail()
            }
        } else {
            shortpassword()
        }
    }

    // Add a useEffect hook to handle navigation when user state changes
    useEffect(() => {
    if (user) {
        setCookie('user', user);
        success();
        setTimeout(() => navigate('/'), 2000);
    }
    }, [user]); // Run this effect whenever the user state changes

  return (
      <main className='flex justify-center items-center direction-column'>
          <Toaster />
          <form className='max-w-md basis-11/12 dark:bg-gray-600 p-5 rounded-xl' onSubmit={handleLogin}>
                  <div>
        <p className=' text-sm text-gray-900 dark:text-white mb-6'> Not registered yet? <Link to='/sign-up' className='hover:cursor-pointer hover:underline  text-blue-600 dark:text-blue-500'> Sign up</Link></p>
    </div> 
  <div className="mb-6">
    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="user@gmail.com" required/>
  </div>
  <div className="mb-6">
    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='password'required/>
    </div>

    <button type="submit" className="text-white bg-blue-700 mb-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
       
          </form>
</main>
  )
}
