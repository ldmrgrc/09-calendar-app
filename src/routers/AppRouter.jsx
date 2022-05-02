import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { startChecking } from '../actions/auth'
import { CalendarScreen } from '../components/calendar/CalendarScreen'

import { Loading } from '../components/ui/Loading'
import { AuthRoute } from './AuthRoute'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {

    const dispatch = useDispatch()
    const { checking, uid } = useSelector(state => state.auth)

    useEffect(() => {

        dispatch(startChecking())

    }, [dispatch])

    if (checking) {
        return <Loading />
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/*"
                    element={
                        <PublicRoute uid={!!uid}>
                            <AuthRoute />
                        </PublicRoute>
                    }
                />

                <Route
                    path="/"
                    element={
                        <PrivateRoute uid={!!uid}>
                            <CalendarScreen />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </BrowserRouter>

    )
}
