import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const Layout = () => {
    return (
        <div className="flex min-h-screen bg-slate-900 text-slate-100">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Header />
                <main className="flex-1 p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default Layout
