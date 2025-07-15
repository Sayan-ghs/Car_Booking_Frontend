import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
     <h5 className='p-1 text-center absolute top-0 w-[93%] '><i className="ri-arrow-down-s-line text-3xl text-gray-200 py-10 pt-14" onClick={()=>{
          props.setVehiclePanel(false)
        }}></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
        <div onClick={()=>{
                props.setConfirmedRidePanel(true)
        }} className='flex w-full p-3 border-2 active:border-black rounded-xl items-center justify-between mb-3'>
          <img className='h-12' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
        <div className=' w-1/2 -ml-2'>
          <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-line">4</i></span></h4>
          <h5 className='font-medium text-sm'>2 mins away</h5>
          <p className='font-normal text-xs text-gray-600'>Affordabe , compact rides</p>
        </div>
        <h2 className='text-xl font-lg'>$2.30</h2>
      </div>
        <div onClick={()=>{setConfirmedRidePanel(true)}} className='flex w-full p-3 border-2 active:border-black rounded-xl items-center justify-between mb-3'>
          <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
        <div className=' w-1/2 '>
          <h4 className='font-medium text-base'> MotorCycle <span><i className="ri-user-line">2</i></span></h4>
          <h5 className='font-medium text-sm'>3 mins away</h5>
          <p className='font-normal text-xs text-gray-600'>Affordabe , compact MotorCycle rides</p>
        </div>
        <h2 className='text-xl font-lg'>$1.00</h2>
      </div>
        <div onClick={()=>{setConfirmedRidePanel(true)}} className='flex w-full p-3 border-2 active:border-black rounded-xl items-center justify-between mb-3'>
          <img className='h-12' src="https://clipart-library.com/2023/Uber_Auto_312x208_pixels_Mobile.png" alt="" />
        <div className=' w-1/2 '>
          <h4 className='font-medium text-base'>Auto<span><i className="ri-user-line">4</i></span></h4>
          <h5 className='font-medium text-sm'>3 mins away</h5>
          <p className='font-normal text-xs text-gray-600'>Affordabe , compact Auto rides</p>
        </div>
        <h2 className='text-xl font-lg'>$1.30</h2>
      </div>
    </div>
  )
}

export default VehiclePanel
