import React, { createContext, useContext, useState } from 'react'

export const CaptainDataContext = createContext()

const CaptainContext = ({children}) => {
        
        const [Captain , setCaptain] = useState(null)
        const [isLoading , setLoading] = useState(null)
        const [error, setError] = useState(null)

        const updateCaptain = (captainData) =>{
          setCaptain(captainData)
        }

        const value = {
          Captain,
          setCaptain,
          isLoading,
          setLoading,
          error,
          setError,
          updateCaptain
        }
  return (
    <div>
      <CaptainDataContext.Provider value={value}>
        {children}
      </CaptainDataContext.Provider>
    </div>
  )
}

export default CaptainContext
