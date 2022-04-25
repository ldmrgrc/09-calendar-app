import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { LoginScreen } from '../auth/LoginScreen'
import { RegisterScreen } from '../auth/RegisterScreen'
import { CalendarScreen } from '../calendar/CalendarScreen'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<CalendarScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
            
    )
}
