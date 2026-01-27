import React from 'react'
import { HiBell } from 'react-icons/hi'

const Header = () => {
    return (
        <header className="flex items-center justify-between px-6 py-4 border-b border-slate-700 bg-slate-800">
            <div className="flex items-center gap-4">
                <h1 className="text-2xl font-semibold">Dashboard Overview</h1>
            </div>

            <div className="flex items-center gap-4">
                <HiBell className="w-6 h-6 text-slate-300" />
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-pink-500 to-indigo-500 flex items-center justify-center text-sm font-medium">
                    AH
                </div>
            </div>
        </header>
    )
}

export default Header
