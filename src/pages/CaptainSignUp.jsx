import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CaptainSignUp = () => {
    const [email, setemail] = useState('');
    const [password, setpasswrod] = useState('');
    const [firstname, setfirstname] = useState('');
    const [lasttname,setlastname] = useState('')
    const [userData , setUserData] = useState('')
  
    const submitHandler = (e) =>{
      e.preventDefault()
  
      setUserData({
        fullname :{
          firstname : firstname,
          lasttname : lasttname
        },
        email : email,
        password : password
      })
  
      setemail('')
      setfirstname('')
      setlastname('')
      setpasswrod('')
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
            <input value={lasttname} onChange={(e)=>{
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
          <button className='bg-[#111] text-white font-semibold mb-5 rounded px-4 py-2 border w-full text-lg'>
            Login
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
        <p className='text-[6px] leading-tight'>
          This site is protected by reCaptcha and the <span className='underline text-bold'>sayanghosh Privacy Policy</span> and <span className='underline text-bold '>Terms of Service apply</span>
        </p>
      </div>
    </div>
  )
}

export default CaptainSignUp
