import { Routes, Route, Navigate } from 'react-router-dom'
import NotFound from '../pages/NotFound'
import TestPage from '../pages/TestPage'
import DashboardPage from '../pages/DashboardPage'
import AnnouncementsPage from '../pages/AnnouncementsPage'
import ConsultantsPage from '../pages/ConsultantsPage'
import LoginPage from '../pages/LoginPage'
import TicketPage from '../pages/TicketPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/test" replace />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/announcements" element={<AnnouncementsPage />} />
      <Route path="/consultants" element={<ConsultantsPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/ticket" element={<TicketPage />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
