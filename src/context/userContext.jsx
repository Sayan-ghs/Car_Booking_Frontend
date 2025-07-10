import React, { createContext, useState } from 'react'


export const UserDataContext = createContext()

const userContext = ({children}) => {
        const [user,setuser] = useState({
                email : '',
                fullname : {
                        firstname : '',
                        lastname : ''
                }
        })

  return (
    <div>
        <UserDataContext value={{user,setuser}}>
                {children}
        </UserDataContext>
    </div>
  )
}

export default userContext
