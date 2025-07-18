import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
      <div className='h-screen'>
        <Link to='/home' className='fixed h-10 w-10 right-2 top-2 bg-white flex items-center justify-center rounded-full '><i className="ri-home-line text-lg font-medium"></i></Link>
        <div className='h-1/2'>
            <img src="https://www.google.com/maps/d/thumbnail?mid=1rQcR1r8Q8mv4BO9oWuppaMQa0Mg" alt="" />
        </div>
        <div className='h-1/2 p-4'>
         <div className='flex items-center justify-between'>
        <img className ='h-20' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
        <div className='text-right flex flex-col justify-between'>
        <h2 className='text-lg font-medium'>Sayan</h2>      
        <h4 className='text-xl font-semibold -mt-2'>MP04 AB1234</h4>
        <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
        </div>  
        </div>
         <div className='flex justify-between flex-col gap-2 items-center'>
            <div className='w-full mt-5 '>
              <div className='flex items-center gap-5 p-3 border-b-2'>
                <i className="ri-map-pin-fill"></i>
                <div>
                  <h3 className='text-lg font-medium'>Third Wave Coffee</h3>
                  <p className='text-sm text-gray-600 -mt-1'>Kankariya Talab, Ahamedabad</p>
                </div>
              </div>
              <div className='flex items-center gap-5 p-3 '>
                <i className="ri-money-dollar-circle-line"></i>
                <div>
                  <h3 className='text-lg font-medium'>$2.30</h3>
                  <p className='text-sm text-gray-600 -mt-1'> Cash </p>
                </div>
              </div>
            </div>
            <button className='w-full mt-5 bg-green-600 font-semibold p-2 rounded-lg'>Make a payment</button>
         </div>
        </div>
      </div>
  )
}

export default Riding

