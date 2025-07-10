import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import {UserDataContext} from '../context/userContext';

const UserSignup = () => {

  const [email, setemail] = useState('');
  const [password, setpasswrod] = useState('');
  const [firstname, setfirstname] = useState('');
  const [lastname,setlastname] = useState('')
  const [userData , setUserData] = useState('')

  const navigate = useNavigate()

  const {user , setuser} = React.useContext(UserDataContext)

  const submitHandler = async (e) =>{
    e.preventDefault()

    const newUser = {
      fullname :{
        firstname : firstname,
        lastname : lastname
      },
      email : email,
      password : password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser)
    
    if(response.status == 201){
      const data = response.data
      setuser(data.user)
      localStorage.setItem('token',data.toke)
      navigate('/home')
    }
    setemail('')
    setfirstname('')
    setlastname('')
    setpasswrod('')
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-10' src='https://download.logo.wine/logo/Uber/Uber-Logo.wine.png' />
        <form onSubmit={
          (e)=>{
            submitHandler(e)
          }
        }>
          <h3 className='text-lg font-medium mb-2'> Enter your Fullname </h3>
          <div className='flex gap-4 mb-6'>
            <input value={firstname} onChange={(e)=>{
              setfirstname(e.target.value)
            }} required type='text' placeholder='firstname' className='bg-[#eeeeee] rounded px-2 py-2 border w-1/2 text-lg placeholder:text-base'/>
            <input value={lastname} onChange={(e)=>{
              setlastname(e.target.value)
            }}required type='text' placeholder='lasttname' className='bg-[#eeeeee] rounded px-2 py-2 border w-1/2 text-lg placeholder:text-base'/>
          </div>
          <h3 className='text-lg font-medium mb-2'> Enter your Email</h3>
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className='bg-[#eeeeee] mb-6 rounded px-2 py-2 border w-full text-lg placeholder:text-base'
            required
            type='email'
            placeholder='email@example.com'
          />
          <h3 className='text-lg font-medium mb-2'>Enter your password</h3>
          <input
            value={password}
            onChange={(e) => setpasswrod(e.target.value)}
            className='mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-base'
            required
            type='password'
            placeholder='password'
          />
          <button className='bg-[#111] text-white font-semibold mb-5 rounded px-4 py-2 border w-full text-lg'>
            Create Account
          </button>
          <p className='text-center'>
            All ready have a account ?
            <Link to='/login' className='text-blue-600'>
              {' '}
              Login Here{' '}
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className='text-[6px] leading-tight'>
          This site is protected by reCaptcha and the <span className='underline text-bold'>sayanghosh Privacy Policy</span> and <span className='underline text-bold '>Terms of Service apply</span>
        </p>
      </div>
    </div>
  )
}

export default UserSignup
