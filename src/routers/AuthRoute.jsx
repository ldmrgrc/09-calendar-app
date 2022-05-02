import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen'
import { RegisterScreen } from '../components/auth/RegisterScreen'

export const AuthRoute = () => {
  return (
    <Routes>
        <Route path="auth/login" element={<LoginScreen />} />
        <Route path="auth/register" element={<RegisterScreen />} />
    </Routes>
  )
}
