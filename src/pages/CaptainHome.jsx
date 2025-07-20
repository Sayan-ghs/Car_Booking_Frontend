import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopup from '../components/RidePopup'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidepopup from '../components/ConfirmRidepopup'

const CaptainHome = () => {
  const [RidePopupPanel,SetRidePopupPanel] = useState(true)
  const ridePopuppanelRef = useRef(null)
  const ConfirmRidePopuppanelRef = useRef(null)
  const [confirmRidepopupPanel,setConfirmRidePopupPanel] = useState(false)

  useGSAP(function(){
    if(RidePopupPanel){
      gsap.to(ridePopuppanelRef.current,{
        transform : 'translateY(0)'
      })
    } else{
      gsap.to(ridePopuppanelRef.current,{
        transform : 'translateY(100%)'
      })
    }
  },[RidePopupPanel])
    useGSAP(function(){
    if(confirmRidepopupPanel){
      gsap.to(ConfirmRidePopuppanelRef.current,{
        transform : 'translateY(0)'
      })
    } else{
      gsap.to(ConfirmRidePopuppanelRef.current,{
        transform : 'translateY(100%)'
      })
    }
  },[confirmRidepopupPanel])
  return (
      <div className='h-screen'>
        <div className='fixed p-4 top-0 flex items-center justify-between w-full'>
          <img className='w-16' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" />
          <Link to='/captain-login' className='h-10 w-10 bg-white flex items-center justify-center rounded-full '><i className="ri-logout-box-r-line"></i></Link>
        </div>
        <div className='h-3/5'>
            <img className='h-full' src="https://www.google.com/maps/d/thumbnail?mid=1rQcR1r8Q8mv4BO9oWuppaMQa0Mg" alt="" />
        </div>
        <div className='h-2/5 p-6'>
        <CaptainDetails/>
        </div>
        <div ref = {ridePopuppanelRef} className='fixed w-full z-10 bottom-0 bg-white translate-y-full px-3 py-10 pt-12'>
          <RidePopup SetRidePopupPanel={SetRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel} />
        </div>
        <div ref = {ConfirmRidePopuppanelRef} className='fixed w-full z-10 h-screen bottom-0 bg-white translate-y-full px-3 py-10 pt-12'>
          <ConfirmRidepopup SetRidePopupPanel={SetRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel} />
        </div>
      </div>
  )
}

export default CaptainHome
