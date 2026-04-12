import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar'
import {
  SIDEBAR_COLLAPSED_WIDTH,
  SIDEBAR_EXPANDED_WIDTH,
} from '../components/sidebarConfig'

export default function AppShell({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(() => {
    if (typeof window === 'undefined') {
      return false
    }

    return window.innerWidth < 1024
  })

  const sidebarWidth = isCollapsed
    ? SIDEBAR_COLLAPSED_WIDTH
    : SIDEBAR_EXPANDED_WIDTH

  return (
    <div className="min-h-screen bg-[var(--fdm-bg)] text-[var(--fdm-text)]">
      <Sidebar onCollapseChange={setIsCollapsed} />

      <main
        className="min-h-screen bg-[radial-gradient(circle_at_top_right,rgba(215,255,0,0.06),transparent_28%),var(--fdm-bg)] transition-[margin] duration-300 ease-out"
        style={{ marginLeft: sidebarWidth }}
      >
        <div className="min-h-screen px-4 py-5 sm:px-6 lg:px-8">
          {children ?? <Outlet />}
        </div>
      </main>
    </div>
  )
}
