import React from 'react'
import { Link } from 'react-router-dom'

const CaptainHome = () => {
  return (
      <div className='h-screen'>
        <div className='fixed p-4 top-0 flex items-center justify-between w-full'>
          <img className='w-16' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" />
          <Link to='/home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full '><i className="ri-logout-box-r-line"></i></Link>
        </div>
        <div className='h-1/2'>
            <img src="https://www.google.com/maps/d/thumbnail?mid=1rQcR1r8Q8mv4BO9oWuppaMQa0Mg" alt="" />
        </div>
        <div className='h-1/2 p-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center justify-start gap-4'>
            <img className='h-10 w-10 rounded-full object-cover' src="https://th.bing.com/th/id/OIP.YQGwtpOGecZajkbh2HMMGAHaHa?w=176&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="" />
            <h4 className='text-lg font-medium'>Sayan Ghosh</h4>
          </div>
          <div>
            <h4 className='text-xl font-semibold'>$2.35</h4>
            <p className='text-sm text-gray-500'>Earned</p>
          </div>
        </div>
          <div className='flex p-3 bg-gray-30 rounded-full justify-center gap-5 items-start'>
            <div className='text-center'>
              <i className=" text-3xl font-thin ri-time-line"></i>
              <h5 className='text-lg font-medium '>10.2</h5>
              <p className='text-sm text-gray-600'>Hours Online</p>
            </div>
            <div className='text-center'>
              <i className=" text-3xl font-thin ri-speed-up-fill"></i>
              <h5 className='text-lg font-medium '>10.2</h5>
              <p className='text-sm text-gray-600'>Hours Online</p>
            </div>
            <div className='text-center'>
              <i className=" text-3xl font-thin ri-sticky-note-line"></i>
              <h5 className='text-lg font-medium '>10.2</h5>
              <p className='text-sm text-gray-600'>Hours Online</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CaptainHome
