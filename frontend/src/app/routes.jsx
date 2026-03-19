import { Navigate, Route, Routes } from 'react-router-dom'
import AppShell from './AppShell'
import AnnouncementsPage from '../pages/AnnouncementsPage'
import ConsultantsPage from '../pages/ConsultantsPage'
import DashboardPage from '../pages/DashboardPage'
import LeavePage from '../pages/LeavePage'
import LoginPage from '../pages/LoginPage'
import MessagesPage from '../pages/MessagesPage'
import NotFound from '../pages/NotFound'
import PolicyPage from '../pages/PolicyPage'
import TicketPage from '../pages/TicketPage'
import ContractsPage from "../pages/ContractsPage";
import SchedulePage from "../pages/SchedulePage";
import PolicyDocumentsPage from "../pages/PolicyDocumentsPage";
import OtherDocumentsPage from "../pages/OtherDocumentsPage";

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
        <Route path="contracts" element={<ContractsPage />} />
        <Route path="schedule" element={<SchedulePage />} />
        <Route path="policy-documents" element={<PolicyDocumentsPage />} />
        <Route path="other-documents" element={<OtherDocumentsPage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
