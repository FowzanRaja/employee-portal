import { Routes, Route, Navigate } from 'react-router-dom'
import NotFound from '../pages/NotFound'
import TestPage from '../pages/TestPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/test" replace />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
