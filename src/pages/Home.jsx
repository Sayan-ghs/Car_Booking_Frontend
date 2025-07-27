import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import axios from 'axios'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmedRide from '../components/ConfirmedRide'
import LookingForDriver from '../components/LookingForDriver'
import WaitForDriver from '../components/WaitForDriver'

const Home = () => {
  const [pickup , setpickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen , setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const vehiclePanelref = useRef(null)
  const ConfirmedRidePanelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const VehicleFoundRef = useRef(null)
  const WaitingFordriverRef = useRef(null)
  const [vehiclePanel,setVehiclePanel] = useState(false)
  const [ConfirmedRidePanel , setConfirmedRidePanel] = useState(false)
  const [VehicleFound,setVehicleFound] = useState(false)
  const [WaitingForDriver , setWaitingForDriver] = useState(false)
  // suggestions fetched from backend
  const [suggestions, setSuggestions] = useState([])
  // track which field is active: 'pickup' or 'destination'
  const [activeField, setActiveField] = useState(null)
  const [fare , setfare] = useState(null)

  const submitHandler = (e)=>{
    e.preventDefault()

  }

  async function findTrip(){
    setVehiclePanel(true)
    setPanelOpen(false)

    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/ride/get-fare`,{
      params : {pickup,destination},
      headers : {
        Authorization : `Bearer ${localStorage.getItem('token')}`
      }
    })
    console.log(response.data)
    setfare(response.data)
  }

  useGSAP(function(){
    if(vehiclePanel){
    gsap.to(vehiclePanelref.current,{
      transform : 'translateY(0)'
    })
  }else{
    gsap.to(vehiclePanelref.current,{
      transform : 'translateY(100%)'
    })
  }
},[vehiclePanel])

  useGSAP(function(){
    if(VehicleFound){
    gsap.to(VehicleFoundRef.current,{
      transform : 'translateY(0)'
    })
  }else{
    gsap.to(VehicleFoundRef.current,{
      transform : 'translateY(100%)'
    })
  }
},[VehicleFound])

  useGSAP(function(){
    if(ConfirmedRidePanel){
    gsap.to(ConfirmedRidePanelRef.current,{
      transform : 'translateY(0)'
    })
  }else{
    gsap.to(ConfirmedRidePanelRef.current,{
      transform : 'translateY(100%)'
    })
  }
},[ConfirmedRidePanel])

  useGSAP(function(){
    if(WaitingForDriver){
    gsap.to(WaitingFordriverRef.current,{
      transform : 'translateY(0)'
    })
  }else{
    gsap.to(WaitingFordriverRef.current,{
      transform : 'translateY(100%)'
    })
  }
},[WaitingForDriver])

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

  // fetch suggestions from server
const fetchSuggestions = async (inputValue) => {
  try {
    const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestion`, {
      params: {
        input: inputValue
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    setSuggestions(data)
  } catch (err) {
    console.error(err)
  }
}

  // handle selecting a suggestion
  const handleSelect = (value) => {
    if (activeField === 'pickup'){
    setpickup(value.displayName) 
    }
    else if (activeField === 'destination'){
      setDestination(value.displayName)
    }
    // setPanelOpen(true)
    // setSuggestions([])
  }

  return (
    <div className='relative h-screen overflow-hidden'>
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
            setActiveField('pickup')
          }}
          value={pickup} onChange={(e)=>{
            const val = e.target.value
            setpickup(val)
            setActiveField('pickup')
            fetchSuggestions(val)
          }} className ='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5' type='text' placeholder='Add a pick up location'/>
          <input onClick={()=>{
            setPanelOpen(true)
            setActiveField('destination')
          }}
          value={destination} onChange={(e)=>{
            const val = e.target.value
            setDestination(val)
            setActiveField('destination')
            fetchSuggestions(val)
          }} className ='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5' type="text" placeholder='Enter your destination' />
        </form>
        <button onClick={()=>{
          findTrip()
        }}  className='bg-black px-4 py-2 rounded-lg mt-3 w-full text-white font-medium'>
          Find a Trip 
        </button>
        </div>
        <div ref={panelRef} className=' bg-white h-0'>
          <LocationSearchPanel
            suggestions={suggestions}
            onSelect={handleSelect}
            setPanelOpen = {setPanelOpen}
          />
        </div>
      </div>
      <div ref={vehiclePanelref} className='fixed w-full z-10 bg-white bottom-0 px-5 py-8 translate-y-full'>
        <VehiclePanel setfare={setfare} setConfirmedRidePanel={setConfirmedRidePanel} setVehiclePanel={setVehiclePanel}/>
    </div>
      <div ref={ConfirmedRidePanelRef} className='fixed w-full z-10 bg-white bottom-0 px-5 py-8 translate-y-full'>
        <ConfirmedRide setConfirmedRidePanel={setConfirmedRidePanel} setVehicleFound={setVehicleFound} setVehiclePanel={setVehiclePanel} />
    </div>
      <div ref={VehicleFoundRef} className='fixed w-full z-10 bg-white bottom-0 px-5 py-8 translate-y-full'>
        <LookingForDriver setVehicleFound={setVehicleFound} setConfirmedRidePanel={setConfirmedRidePanel} />
    </div>
      <div ref={WaitingFordriverRef} className='fixed w-full z-10 bg-white bottom-0 px-5 py-8 translate-y-full'>
        <WaitForDriver setWaitingForDriver={setWaitingForDriver} />
    </div>
  </div>
  )
}

export default Home
