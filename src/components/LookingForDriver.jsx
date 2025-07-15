import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div>
      <h5 className='p-1 text-center absolute top-0 w-[93%] '><i className="ri-arrow-down-s-line text-3xl text-gray-200 py-10 pt-14" onClick={()=>{
          props.setVehicleFound(false)
        }}></i></h5>
         <h3 className='text-2xl font-semibold mb-5'>Looking For a Driver</h3>
         <div className='flex justify-between flex-col gap-2 items-center'>
            <img className ='h-20' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />           
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

export default LookingForDriver
