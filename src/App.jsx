import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainSignUp from './pages/CaptainSignUp'
import CaptainLogin from './pages/Captainlogin'
import { UserDataContext } from './context/userContext'
import Start from './pages/start'
import Home from './pages/Home'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectedWrapper from './pages/CaptainProtectedWrapper'
import Riding from './pages/Riding'

const App = () => {

  const ans = useContext(UserDataContext)
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/signup' element={<UserSignup />} />
        <Route path='/captain-signup' element={<CaptainSignUp />} />
        <Route path='/captain-login' element={<CaptainLogin />} />
        <Route path='/riding' element={<Riding/>} />
        <Route path='/home' element={
          <UserProtectedWrapper>
              <Home/>
          </UserProtectedWrapper>
          }/>

          <Route path='/users/logout' element={
            <UserProtectedWrapper>
              <UserLogout />
            </UserProtectedWrapper>
          }/>

          <Route path='/captain-home' element={
            <CaptainProtectedWrapper>
              <CaptainHome />
            </CaptainProtectedWrapper>
          }/>
      </Routes>
    </div>
  )
}

export default App
