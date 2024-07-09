import React, { useContext } from 'react'
import {useLocation,Navigate} from 'react-router-dom'
import {AuthContext } from '../contexts/AuthProvider'
import LoadingSpinner from '../components/LoadingSpinner';

function PrivateRouter({children}) {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return (
            <LoadingSpinner/>
        )
        if(user){
            return children ;
        }
    }
  return (
    <Navigate to='signup' state={{from:location}} replace></Navigate>
  )
}

export default PrivateRouter