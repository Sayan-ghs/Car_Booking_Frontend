import React from 'react'

const WaitForDriver = (props) => {
  return (
    <div>
      <h5 className='p-1 text-center absolute top-0 w-[93%] '><i className="ri-arrow-down-s-line text-3xl text-gray-200 py-10 pt-14" onClick={()=>{
          props.setWaitingForDriver(false)
        }}></i></h5>
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
         </div>
    </div>
  )
}

export default WaitForDriver
