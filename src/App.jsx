

import Sidebar from './components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import DashboardOverview from './pages/DashboardOverview'
import Appointments from './pages/Appointments'
import CallLogs from './pages/CallLogs'
import Settings from './pages/Settings'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<DashboardOverview />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/call-logs" element={<CallLogs />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
