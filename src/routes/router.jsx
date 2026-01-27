import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layout/Layout'
import DashboardOverview from '../pages/DashboardOverview'
import Appointments from '../pages/Appointments'
import CallLogs from '../pages/CallLogs'
import Settings from '../pages/Settings'
import NotFound from '../pages/NotFound'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <DashboardOverview /> },
            { path: 'appointments', element: <Appointments /> },
            { path: 'call-logs', element: <CallLogs /> },
            { path: 'settings', element: <Settings /> },
            { path: '*', element: <NotFound /> },
        ],
    },
])

export default router
