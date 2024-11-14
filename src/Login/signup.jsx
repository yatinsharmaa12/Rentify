import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const SignUp = () => {
  const [userHandle, setUserHandle] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)
  const navigate = useNavigate()

  const handleSignUp = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:8080/auth/register', {
        userHandle,
        name,
        email,
        password,
      })

      if (response.data) {
        setSuccessMessage(response.data.message)
        setUserHandle('')
        setName('')
        setEmail('')
        setPassword('')
        setError(null)
        toast.success('Sign up successful!!')
        setTimeout(() => {
          navigate('/login')
        }, 3000)
      } else {
        setError(response.data.message)
      }
    } catch (error) {
      setError('An error occurred. Please try again later.')
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 rounded-lg shadow-lg bg-gradient-to-br from-white to-gray-200">
        <ToastContainer />
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Sign Up</h2>
        <form onSubmit={handleSignUp} className="flex flex-col space-y-4">
          {error && <p className="text-red-500 text-center">{error}</p>}
          {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}
          <div>
            <label htmlFor="userHandle" className="block text-gray-600 font-semibold mb-1">User Handle:</label>
            <input
              type="text"
              id="userHandle"
              placeholder="Enter user handle"
              value={userHandle}
              onChange={(e) => setUserHandle(e.target.value)}
              required
              className="w-full px-4 py-3 border rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <label htmlFor="name" className="block text-gray-600 font-semibold mb-1">Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 border rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-600 font-semibold mb-1">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-600 font-semibold mb-1">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
