import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
      <div className='bg-center bg-cover bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen w-full pt-8 flex justify-between flex-col'>
        <img className='w-16 ml-8' src='https://download.logo.wine/logo/Uber/Uber-Logo.wine.png'/>
        <div className='bg-white pb-7 py-4 px-4'>
                <h2 className='text-3xl font-bold'>
                        Get started with Uber
                </h2>
                <Link to='/login' className=' flex items-center justify-center w-full bg-black text-white py-3 rounded mt-4'  >
                        continue
                </Link>
        </div>
      </div>
    </div>
  )
}

export default Start