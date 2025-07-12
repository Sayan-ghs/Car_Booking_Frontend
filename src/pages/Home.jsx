import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'

const Home = () => {
  const [pickup , setpickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen , setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const submitHandler = (e)=>{
    e.preventDefault()

  }

  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current, {
      height : '70%',
      opacity : 1,
      padding : 24
    })
    gsap.to(panelCloseRef.current,{
      opacity : 1
    })
    }else{
      gsap.to(panelRef.current,{
        height:'0%',
        opacity : 0,
        padding : 0
      })
      gsap.to(panelCloseRef.current,{
      opacity : 0
    })
    }
  },[panelOpen,panelCloseRef])

  return (
    <div className='relative h-screen'>
      <img className='w-16 absolute left-5 top-5' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" />

      <div className='h-screen w-screen'>
        <img className='w-full h-full object-cover' src="https://www.google.com/maps/d/thumbnail?mid=1rQcR1r8Q8mv4BO9oWuppaMQa0Mg"/>
      </div>
      <div className='absolute flex flex-col justify-end h-screen bottom-0 w-full p-5'>
        <div className='h-[30%] p-5 bg-white relative'>
          <h5 ref={panelCloseRef} onClick={()=>{
            setPanelOpen(false)
          }} className='absolute opacity-0 top-6 right-6 text-xl'>
            <i className="ri-arrow-down-s-line"></i>
          </h5>
        <h4 className='text-2xl font-semibold'>Find a trip</h4>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
          <div className="line absolute h-16 w-1 top-[34.6%] left-6 bg-gray-900 rounded-full"></div>
          <input onClick={()=>{
            setPanelOpen(true)
          }}
          value={pickup} onChange={(e)=>{
            setpickup(e.target.value)
          }} className ='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5' type='text' placeholder='Add a pick up location'/>
          <input onClick={()=>{
            setPanelOpen(true)
          }}
          value={destination} onChange={(e)=>{
            setDestination(e.target.value)
          }} className ='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5' type="text" placeholder='Enter your destination' />
        </form>
        </div>
        <div ref={panelRef} className=' bg-white h-0'>
          <LocationSearchPanel/>
        </div>
      </div>
    </div>
  )
}

export default Home
