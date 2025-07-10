import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Captainlogin = () => {
  const [email, setemail] = useState('');
  const [password, setpasswrod] = useState('');
  const [CaptainData, setCaptainData] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      email: email,
      password: password,
    });
    console.log(email, password);
    setemail('');
    setpasswrod('');
  };

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-10' src='https://freelogopng.com/images/all_img/1659761425uber-driver-logo-png.png' />
        <form onSubmit={submitHandler}>
          <h3 className='text-lg font-medium mb-2'>What's your Email</h3>
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded px-2 py-2 border w-full text-lg placeholder:text-base'
            required
            type='email'
            placeholder='email@example.com'
          />
          <h3 className='text-xl font-medium mb-2'>Enter your password</h3>
          <input
            value={password}
            onChange={(e) => setpasswrod(e.target.value)}
            className='mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            required
            type='password'
            placeholder='password'
          />
          <button className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg'>
            Login
          </button>
          <p className='text-center'>
            join a fleet? 
            <Link to='/captain-signup' className='text-blue-600'>
             {'  '} Register as a Captain
              {' '}
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to='/login'
          className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
        >
          Sign as a User
        </Link>
      </div>
    </div>
  );
};


export default Captainlogin
