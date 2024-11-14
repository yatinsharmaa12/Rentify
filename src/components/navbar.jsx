import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className='bg-[#c7764a] w-screen h-20 -mt-2 flex flex-row justify-between items-center cursor-pointer'>
        <div className='flex items-center ml-8'>
          <div className='flex items-center'>
            <img src='#' alt='' className='w-12 h-12' />
          </div>
          <div className='ml-8 text-white font-bold'>
            <h2>
              <span className='text-[#702d0a] font-extrabold'>S</span>hare<span className='text-[#702d0a] font-extrabold'>S</span>quare
            </h2>
          </div>
        </div>
        <div className='flex items-center mr-4 space-x-4'>
          <NavLink to='/login' className="no-underline">
            <div className='flex items-center justify-center w-20 h-10 font-bold text-black border border-black bg-[#FEFAF6] rounded-md hover:bg-[#ffc18c]'>
              <img src="/assets/login.png" alt='' className='w-4 h-4 mr-2' />
              Login
            </div>
          </NavLink>
          <img src="/assets/icons8-vertical-line-32.png" alt='' className='w-px h-8 mx-2' />
          <NavLink to='/signup' className="no-underline">
            <div className='flex items-center justify-center w-24 h-10 font-bold text-black border border-black bg-[#FEFAF6] rounded-md hover:bg-[#ffc18c]'>
              <img src='/assets/add-user.png' alt='' className='w-4 h-4 mr-2' />
              Sign Up
            </div>
          </NavLink>
        </div>
      </div>
      
      <div className='flex items-center h-16 bg-white border-b border-gray-300 font-bold text-black'>
        <div className='flex items-center space-x-8 ml-8'>
          <NavLink to='/home' className='text-black hover:text-[#ca6c19] no-underline'>
            Home
          </NavLink>
          <NavLink to='/property' className='text-black hover:text-[#ca6c19] no-underline'>
            Post your Property
          </NavLink>
          <NavLink to='/aboutus' className='text-black hover:text-[#ca6c19] no-underline'>
            About Us
          </NavLink>
          <NavLink to='/contactus' className='text-black hover:text-[#ca6c19] no-underline'>
            Contact Us
          </NavLink>
        </div>
        <NavLink to='/account' className='ml-auto mr-4'>
          <div className='w-10 h-10'>
            <img src="/assets/user.png" alt='' className='w-full h-full rounded-full' />
          </div>
        </NavLink>
      </div>
    </>
  )
}

export default Navbar
