import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
          <div className='flex items-center justify-between'>
          <div className='flex items-center justify-start gap-4'>
            <img className='h-10 w-10 rounded-full object-cover' src="https://th.bing.com/th/id/OIP.YQGwtpOGecZajkbh2HMMGAHaHa?w=176&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="" />
            <h4 className='text-xl font-medium'>Sayan Ghosh</h4>
          </div>
          <div>
            <h4 className='text-xl font-bold'>$2.35</h4>
            <p className='text-sm text-gray-500'>Earned</p>
          </div>
        </div>
          <div className='flex p-2 mt-3 bg-gray-100 rounded-xl justify-center gap-5 items-start w-full'>
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
  )
}

export default CaptainDetails
