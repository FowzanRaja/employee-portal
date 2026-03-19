import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from '../pages/Login/LoginPage'
import DashboardPage from '../pages/Dashboard/DashboardPage'
import NotFound from '../pages/NotFound'
import PolicyPage from "../pages/PolicyPage";
import ContractsPage from "../pages/ContractsPage";
import SchedulePage from "../pages/SchedulePage";
import PolicyDocumentsPage from "../pages/PolicyDocumentsPage";
import OtherDocumentsPage from "../pages/OtherDocumentsPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/policies" element={<PolicyPage />} />
      <Route path="/contracts" element={<ContractsPage />} />
      <Route path="/schedule" element={<SchedulePage />} />
      <Route path="/policy-documents" element={<PolicyDocumentsPage />} />
      <Route path="/other-documents" element={<OtherDocumentsPage />} />
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
