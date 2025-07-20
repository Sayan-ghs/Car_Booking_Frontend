import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide'

const CaptainRIding = () => {

const [FinishRidePanel,setFinishRidePanel] = useState(false)
const FinishRideRef = useRef(null)

useGSAP(function(){
    if(FinishRidePanel){
      gsap.to(FinishRideRef.current,{
        transform : 'translateY(0)'
      })
    } else{
      gsap.to(FinishRideRef.current,{
        transform : 'translateY(100%)'
      })
    }
},[FinishRidePanel])
  return (
      <div className='h-screen relative'>
        <div className='fixed p-4 top-0 flex items-center justify-between w-full'>
          <img className='w-16' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" />
          <Link to='/captain-login' className='h-10 w-10 bg-white flex items-center justify-center rounded-full '><i className="ri-logout-box-r-line"></i></Link>
        </div>
        <div className='h-4/5'>
            <img className='h-full' src="https://www.google.com/maps/d/thumbnail?mid=1rQcR1r8Q8mv4BO9oWuppaMQa0Mg" alt="" />
        </div>
        <div onClick={()=>{
                setFinishRidePanel(true)
        }} className='h-1/5 p-4 px-8 bg-yellow-400 flex justify-between relative items-center'>
        <h5 className='p-1 text-center absolute top-0 w-[95%]'><i className="ri-arrow-up-s-line text-3xl px-10 text-black py-10 pt-14" onClick={()=>{

        }}></i></h5>
        <h4 className='font-semibold text-xl'>4KM Away</h4>
        <button className='mt-5 bg-green-600 font-semibold p-3 px-10 rounded-lg'> Complete Ride </button>
        </div>
        <div ref = {FinishRideRef} className='fixed w-full z-10 h-screen bottom-0 bg-white translate-y-full px-3 py-10 pt-12'>
        <FinishRide setFinishRidePanel={setFinishRidePanel} />
        </div>
      </div>
  )
}

export default CaptainRIding
