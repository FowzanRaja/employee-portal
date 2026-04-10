import { Navigate, Route, Routes } from 'react-router-dom'
import AppShell from './AppShell'
import AnnouncementsPage from '../pages/AnnouncementsPage'
import ConsultantsPage from '../pages/ConsultantsPage'
import DashboardPage from '../pages/DashboardPage'
import LeavePage from '../pages/LeavePage'
import LoginPage from '../pages/LoginPage'
import MessagesPage from '../pages/MessagesPage/MessagesPage'
import NotFound from '../pages/NotFound'
import PolicyPage from '../pages/PolicyPage'
import ProgrammePage from '../pages/ProgrammePage'
import ProgrammeViewPage from '../pages/ProgrammeViewPage'
import ProfilePage from '../pages/ProfilePage'
import TicketPage from '../pages/TicketPage'
import HRPage from '../pages/HRPage'
import ITPage from '../pages/ITPage'
import ITViewPage from '../pages/ITViewPage'
import HRNewPage from '../pages/HRNEwPage'
import HRLeavePage from '../pages/HRLeavePage'
import HRPolicyPage from '../pages/HRPolicyPage'
import HRAnnouncementPage from '../pages/HRAnnouncementsPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/test" element={<Navigate to="/" replace />} />
      <Route path="/ticket" element={<Navigate to="/tickets" replace />} />

      <Route path="/" element={<AppShell />}>
        <Route index element={<DashboardPage />} />
        <Route path="dashboard" element={<Navigate to="/" replace />} />
        <Route path="tickets" element={<TicketPage />} />
        <Route path="policies" element={<PolicyPage />} />
        <Route path="leave" element={<LeavePage />} />
        <Route path="announcements" element={<AnnouncementsPage />} />
        <Route path="messages" element={<MessagesPage />} />
        <Route path="consultants" element={<ConsultantsPage />} />
        <Route path="programme" element={<ProgrammePage />} />
        <Route path="programme/:programmeId" element={<ProgrammeViewPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="/leave-booking" element={<LeavePage />} />
        <Route path="hr" element={<HRPage />} />
        <Route path="hrnew" element={<HRNewPage />} />
        <Route path="hrnew/leave" element={<HRLeavePage />} />
        <Route path="hrnew/announcements" element={<HRAnnouncementPage />} />
        <Route path="hrnew/policy" element={<HRPolicyPage />} />
        <Route path="it" element={<ITPage />} />
        <Route path="it/:section" element={<ITViewPage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
