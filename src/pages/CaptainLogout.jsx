import React from 'react'
import { useNavigate } from 'react-router-dom'

const CaptainLogout = () => {
        const navigate = useNavigate()
        const token = localStorage.getItem('token')

        axios.get(`${import.meta.env.VITE_BASE_URL}/captain/logout`,{
                headers : {
                        Authorization : `bearer${token}`
                }
        }).then((response) => {
                if(response.status === 200){
                        localStorage.removeItem('token')
                        navigate('/captain-login')
                }
        })
  return (
    <div>
      
    </div>
  )
}

export default CaptainLogout
