import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../API/auth'


export const Logout=() =>{

    const {Logoutuser} =useAuth();

    localStorage.clear();
    useEffect(() => {
        Logoutuser();
    }, [])
    
     return <Navigate to='/'/>
}