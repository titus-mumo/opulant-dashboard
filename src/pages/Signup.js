import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [users, setUsers] = useState([])
    const [emailExists, setEmailExists] = useState(false)

    const navigate = useNavigate()

    const fail = () => toast.error("An error occured")
    const success = () => toast.success("Signed up successfully")
    const passwordnotmatching = () => toast.error("Passwords do not match")
    const emailexists = () => toast.error("Email exists")

    
    const handleSignup = async(event) => {
        event.preventDefault()
        if (password === confirmPassword) {
            const response = await axios.get('https://node-api-kqht.onrender.com/api/users/')
            setUsers(response.data)
            setEmailExists(users.filter(user => user.email === email))
            if (!emailExists) {
                await axios.post('https://node-api-kqht.onrender.com/api/users/', { email: email, password: password })
                try {
                    success();
                    setTimeout(() => {
                        navigate('/login');
                    }, 2000);
                } catch (error) {
                    fail();
                }
            } else {
                emailexists()
                setEmailExists(false)
            }
        } else{
            passwordnotmatching()
        }

    };
  return (
      <main className='flex justify-center items-center direction-column'>
          <Toaster />
          <form className='max-w-md basis-11/12 dark:bg-gray-600 p-5 rounded-xl' onSubmit={handleSignup}>
                  <div>
        <p className='text-gray-900 dark:text-white mb-6 text-sm'> A registered user? <Link to='/login' className='hover:cursor-pointer hover:underline  text-blue-600 dark:text-blue-500'> Login</Link></p>
    </div>  
  <div className="mb-6">
    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="user@gmail.com" required/>
  </div>
  <div className="mb-6">
    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='password'required/>
        </div>
          <div className="mb-6">
    <input type="password" id="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='confirm password'required/>
    </div>

    <button type="submit" className="text-white bg-blue-700 mb-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign-up</button>
      
          </form>
</main>
  )
}
