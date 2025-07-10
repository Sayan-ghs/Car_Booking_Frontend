import React, { useState,useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/userContext';
import axios from 'axios';

const UserLogin = () => {
  const [email, setemail] = useState('');
  const [password, setpasswrod] = useState('');
  const [UserData, setUserData] = useState('');

  const {user,setuser} = useContext(UserDataContext)
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      email : email,
      password : password
    }
  try {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);
    console.log("Login response:", response);

    if (response.status === 201) {
      const data = response.data;
      setuser(data.user);
      localStorage.setItem('token', data.token);
      navigate('/home');
    }
  } catch (err) {
    console.error("Login failed:", err.response?.data || err.message);
  }
    setemail('');
    setpasswrod('');
  };

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-10' src='https://download.logo.wine/logo/Uber/Uber-Logo.wine.png' />
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
            New here?
            <Link to='/signup' className='text-blue-600'>
              {' '}
              Create New Account{' '}
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to='/captain-login'
          className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
        >
          Sign as a Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
