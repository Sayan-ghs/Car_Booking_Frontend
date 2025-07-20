import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ConfirmRidepopup = (props) => {
        const[otp,setotp] = useState('')
const submitHandler = (e)=>{
        e.preventDefault()
}
  return (
    <div>
      <h5 className='p-1 text-center absolute top-0 w-[93%] '><i className="ri-arrow-down-s-line text-3xl text-gray-200 py-10 pt-14" onClick={()=>{
          props.SetRidePopupPanel(false)
        }}></i></h5>
         <h3 className='text-2xl font-semibold mb-5'> Confirm this Ride to start!</h3>
         <div className='flex items-center justify-between rounded-lg mt-4 p-3 bg-yellow-400 '>
                <div className='flex items-center gap-3'>
                        <img className='h-12 rounded-full object-cover w-12' src="https://tse2.mm.bing.net/th/id/OIP.AQtvP5FcfiEMQpu14ueJCgHaGU?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
                        <h2 className='text-xl font-medium'>Vstap Ghosh</h2>       
                </div>
                <h5 className='font-semibold text-lg'>2.2km</h5>
         </div>
         <div className='flex justify-between flex-col gap-2 items-center'>
            <div className='w-full mt-5 '>
              <div className='flex items-center gap-5 p-3 border-b-2'>
                <i className="ri-map-pin-3-fill"></i>
                <div>
                  <h3 className='text-lg font-medium'>562/11-A</h3>
                  <p className='text-sm text-gray-600 -mt-1'>Kankariya Talab, Ahamedabad</p>
                </div>
              </div>
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
            <div className='mt-6 w-full'>
                <form action="" onSubmit={(e)=>{
                        submitHandler(e)
                }}>
            <input value={otp} onChange={(e)=>{
                setotp(e.target.value)
            }} className='bg-[#eee] px-6 py-4 font-mono text-medium rounded-lg w-full mt-5' type="text" placeholder='Enter the OTP' />
            <Link to={'/captain-riding'} onClick={()=>{
            }} className='w-full flex justify-center mt-5 text-lg bg-green-600 font-semibold p-3 rounded-lg'>
              Accept
            </Link>
            <button onClick={()=>{
                props.setConfirmRidePopupPanel(false)
                props.SetRidePopupPanel(false)
            }} className='w-full mt-1 bg-red-500 text-lg text-white font-semibold p-3 rounded-lg'>
              cancel
            </button>
                </form>
            </div>
         </div>
    </div>
  )
}

export default ConfirmRidepopup
