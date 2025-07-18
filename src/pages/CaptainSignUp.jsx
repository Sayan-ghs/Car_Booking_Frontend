import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios'

const CaptainSignUp = () => {

  const navigate = useNavigate()
    const [email, setemail] = useState('');
    const [password, setpasswrod] = useState('');
    const [firstname, setfirstname] = useState('');
    const [lastname,setlastname] = useState('')
    const [userData , setUserData] = useState('')
      
    const [name, setName] = useState('');
    const [vehicleColor, setVehicleColor] = useState('');
    const [vehiclePlate, setVehiclePlate] = useState('');
    const [vehicleCapacity, setVehicleCapacity] = useState('');
    const [vehicleType, setVehicleType] = useState('');

    const {captain , setCaptain} = React.useContext(CaptainDataContext)
  
    const submitHandler = async (e) =>{
      e.preventDefault()

      const captainData ={
        fullname: {
          firstname: firstname,
          lastname: lastname
        },
        email: email,
        password: password,
        name: name,
        vehicle: {
          color: vehicleColor,
          plate: vehiclePlate,
          capacity: vehicleCapacity,
          vehicleType: vehicleType
        }
      }

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`,captainData)

      if(response.status === 201){
        const data = response.data
        setCaptain(data.captain)
        localStorage.setItem('token',data.token)
        console.log(response.data)
        navigate('/captain-home')
      }
  
      setemail('')
      setfirstname('')
      setlastname('')
      setpasswrod('')
      setName('')
      setVehicleCapacity('')
      setVehicleColor('')
      setVehicleType('')
      setVehiclePlate('')
    }
  return (
          <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <Link to='/'><img className='w-16 mb-10' src='https://freelogopng.com/images/all_img/1659761425uber-driver-logo-png.png' /></Link>
        <form onSubmit={
          (e)=>{
            submitHandler(e)
          }
        }>
          <h3 className='text-lg font-medium mb-2'> Enter our Captain's Fullname </h3>
          <div className='flex gap-4 mb-6'>
            <input value={firstname} onChange={(e)=>{
              setfirstname(e.target.value)
            }} required type='text' placeholder='firstname' className='bg-[#eeeeee] rounded px-2 py-2 border w-1/2 text-lg placeholder:text-base'/>
            <input value={lastname} onChange={(e)=>{
              setlastname(e.target.value)
            }}required type='text' placeholder='lasttname' className='bg-[#eeeeee] rounded px-2 py-2 border w-1/2 text-lg placeholder:text-base'/>
          </div>
          <h3 className='text-lg font-medium mb-2'> Enter our Captain's Email</h3>
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className='bg-[#eeeeee] mb-6 rounded px-2 py-2 border w-full text-lg placeholder:text-base'
            required
            type='email'
            placeholder='email@example.com'
          />
          <h3 className='text-lg font-medium mb-2'>Enter our Captain's password</h3>
          <input
            value={password}
            onChange={(e) => setpasswrod(e.target.value)}
            className='mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-base'
            required
            type='password'
            placeholder='password'
          />
          <h3 className='text-lg font-medium mb-2'>Enter Captain's Vehicle Information</h3>
          <div className="mb-4">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='bg-[#eeeeee] mb-2 rounded px-2 py-2 border w-full text-lg placeholder:text-base'
              required
              type='text'
              placeholder='Vehicle Name'
            />
          </div>
          <div className="flex gap-4 mb-4">
            <input
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              className='bg-[#eeeeee] rounded px-2 py-2 border w-1/2 text-lg placeholder:text-base'
              required
              type='text'
              placeholder='Vehicle Color'
            />
            <input
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              className='bg-[#eeeeee] rounded px-2 py-2 border w-1/2 text-lg placeholder:text-base'
              required
              type='text'
              placeholder='License Plate Number'
            />
          </div>
          <div className="flex gap-4 mb-6">
            <select
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className='bg-[#eeeeee] rounded px-2 py-2 border w-1/2 text-lg'
              required
            >
              <option value="">Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="motor">Motor</option>
            </select>
            <input
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              className='bg-[#eeeeee] rounded px-2 py-2 border w-1/2 text-lg placeholder:text-base'
              required
              type='number'
              placeholder='Seating Capacity'
            />
          </div>
          <button className='bg-[#111] text-white font-semibold mb-5 rounded px-4 py-2 border w-full text-lg'>
            Create Account
          </button>
          <p className='text-center'>
            All ready have a account ?
            <Link to='/captain-login' className='text-blue-600'>
              {' '}
              Login Here{' '}
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className='text-[6px] mt-6 leading-tight'>
          This site is protected by reCaptcha and the <span className='underline text-bold'>sayanghosh Privacy Policy</span> and <span className='underline text-bold '>Terms of Service apply</span>
        </p>
      </div>
    </div>
  )
}

export default CaptainSignUp
