import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

function AuthProvider({children}) {
    const [user,setUser] = useState(null);
    
    const authInfo = {

    }

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;