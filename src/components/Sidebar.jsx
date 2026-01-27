import React from 'react'
import { NavLink } from 'react-router-dom'
import { HiOutlineChartSquareBar, HiOutlineCalendar, HiOutlineClipboardList, HiOutlineCog } from 'react-icons/hi'

const Sidebar = () => {
    const linkClass = ({ isActive }) =>
        isActive
            ? 'flex items-center gap-3 px-4 py-3 rounded bg-slate-700 text-white'
            : 'flex items-center gap-3 px-4 py-3 rounded text-slate-300 hover:bg-slate-800 hover:text-white'

    return (
        <aside className="w-64 bg-gradient-to-b from-slate-800 to-slate-900 p-4">
            <div className="mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-400 rounded flex items-center justify-center">⚡</div>
                <div>
                    <div className="text-sm font-semibold">Agent Panel</div>
                    <div className="text-xs text-slate-400">Welcome</div>
                </div>
            </div>

            <nav className="space-y-2">
                <NavLink to="/" end className={linkClass}>
                    <HiOutlineChartSquareBar className="w-5 h-5" />
                    <span>Dashboard Overview</span>
                </NavLink>

                <NavLink to="/call-logs" className={linkClass}>
                    <HiOutlineClipboardList className="w-5 h-5" />
                    <span>Call Logs</span>
                </NavLink>

                <NavLink to="/appointments" className={linkClass}>
                    <HiOutlineCalendar className="w-5 h-5" />
                    <span>Appointments</span>
                </NavLink>

                <NavLink to="/settings" className={linkClass}>
                    <HiOutlineCog className="w-5 h-5" />
                    <span>Settings</span>
                </NavLink>
            </nav>

            <div className="mt-8 text-sm text-slate-400">Log Out</div>
        </aside>
    )
}

export default Sidebar