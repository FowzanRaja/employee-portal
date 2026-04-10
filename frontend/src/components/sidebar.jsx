import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  UserCircle,
} from 'lucide-react'
import {
  SIDEBAR_EXPANDED_WIDTH,
  SIDEBAR_COLLAPSED_WIDTH,
  exampleUser,
  navItems,
} from './sidebarConfig'

function SidebarNavItem({ item, isCollapsed }) {
  const Icon = item.icon

  return (
    <NavLink
      to={item.to}
      end={item.to === '/'}
      aria-label={item.label}
      title={isCollapsed ? item.label : undefined}
      className={({ isActive }) =>
        [
          'group flex items-center rounded-2xl border text-sm font-medium transition-all duration-200 ease-out',
          isCollapsed ? 'justify-center px-0 py-3' : 'gap-3 px-4 py-3',
          isActive
            ? 'border-[color:var(--fdm-border-strong)] bg-[rgba(215,255,0,0.12)] text-[var(--fdm-text)] shadow-[0_14px_28px_rgba(0,0,0,0.22)]'
            : 'border-transparent text-[var(--fdm-text-soft)] hover:border-[color:var(--fdm-border)] hover:bg-[rgba(255,255,255,0.04)] hover:text-[var(--fdm-text)]',
        ].join(' ')
      }
    >
      {({ isActive }) => (
        <>
          <span
            className={[
              'flex h-10 w-10 items-center justify-center rounded-2xl transition-colors duration-200',
              isActive
                ? 'bg-[rgba(215,255,0,0.16)] text-[var(--fdm-lime)]'
                : 'bg-[rgba(255,255,255,0.04)] text-[var(--fdm-text-soft)] group-hover:text-[var(--fdm-text)]',
            ].join(' ')}
          >
            <Icon size={18} strokeWidth={2.2} />
          </span>

          <span
            className={[
              'overflow-hidden whitespace-nowrap transition-all duration-200 ease-out',
              isCollapsed ? 'max-w-0 -translate-x-2 opacity-0' : 'max-w-[160px] translate-x-0 opacity-100',
            ].join(' ')}
          >
            {item.label}
          </span>
        </>
      )}
    </NavLink>
  )
}

export default function Sidebar({
  user = exampleUser,
  items = navItems,
  onCollapseChange,
}) {
  const navigate = useNavigate()

  const [isCollapsed, setIsCollapsed] = useState(() => {
    if (typeof window === 'undefined') {
      return false
    }

    return window.innerWidth < 1024
  })

  useEffect(() => {
    onCollapseChange?.(isCollapsed)
  }, [isCollapsed, onCollapseChange])

  return (
    <aside
      className="fixed inset-y-0 left-0 z-40 flex h-screen flex-col border-r border-[color:var(--fdm-border)] bg-[linear-gradient(180deg,rgba(32,32,32,0.96),rgba(23,23,23,0.99))] px-3 py-4 shadow-[0_22px_48px_rgba(0,0,0,0.34)] backdrop-blur-xl transition-[width] duration-300 ease-out"
      style={{ width: isCollapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_EXPANDED_WIDTH }}
    >
      <div className={['mb-8 flex', isCollapsed ? 'flex-col items-center gap-3' : 'items-center justify-between gap-3 px-1'].join(' ')}>
        <div
          className={[
            'flex min-w-0 items-center rounded-[24px] border border-[color:var(--fdm-border)] bg-[rgba(255,255,255,0.03)] transition-all duration-300 ease-out',
            isCollapsed ? 'justify-center p-3' : 'gap-3 px-4 py-3',
          ].join(' ')}
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--fdm-lime)] text-sm font-black tracking-[0.16em] text-[var(--fdm-text-dark)] shadow-[0_12px_28px_rgba(215,255,0,0.18)]">
            FDM
          </span>

          <div
            className={[
              'min-w-0 overflow-hidden whitespace-nowrap transition-all duration-200 ease-out',
              isCollapsed ? 'max-w-0 opacity-0' : 'max-w-[150px] opacity-100',
            ].join(' ')}
          >
            <p className="text-sm font-semibold text-[var(--fdm-text)]">Employee Portal</p>
            <p className="text-xs text-[var(--fdm-text-muted)]">Staff workspace</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsCollapsed((current) => !current)}
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[color:var(--fdm-border)] bg-[rgba(255,255,255,0.03)] text-[var(--fdm-text-soft)] transition-colors duration-200 hover:border-[color:var(--fdm-border-strong)] hover:bg-[rgba(255,255,255,0.07)] hover:text-[var(--fdm-text)]"
        >
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      <div className="flex flex-1 flex-col overflow-hidden">
        <nav aria-label="Primary navigation" className="flex flex-col gap-2 px-1">
          {items.map((item) => (
            <SidebarNavItem key={item.to} item={item} isCollapsed={isCollapsed} />
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-4 border-t border-[color:var(--fdm-border)] px-1 pt-4">
          <SidebarNavItem
            item={{
              to: '/messages',
              label: 'Messaging',
              icon: MessageSquare,
            }}
            isCollapsed={isCollapsed}
          />

          <NavLink
            to="/profile"
            title={isCollapsed ? `${user.name} — ${user.role}` : undefined}
            aria-label="View my profile"
            className={({ isActive }) =>
              [
                'rounded-[26px] border transition-all duration-200 ease-out cursor-pointer',
                isCollapsed ? 'px-3 py-4' : 'px-4 py-4',
                isActive
                  ? 'border-[rgba(215,255,0,0.28)] bg-[rgba(215,255,0,0.08)] shadow-[0_16px_36px_rgba(0,0,0,0.24)]'
                  : 'border-[color:var(--fdm-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] shadow-[0_16px_36px_rgba(0,0,0,0.24)] hover:border-[rgba(215,255,0,0.2)] hover:bg-[rgba(215,255,0,0.04)]',
              ].join(' ')
            }
          >
            <div className={['flex items-center', isCollapsed ? 'justify-center' : 'gap-3'].join(' ')}>
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[rgba(215,255,0,0.12)] text-[var(--fdm-lime)]">
                <UserCircle size={26} />
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[var(--fdm-surface)] bg-[var(--fdm-lime)]" />
              </div>

              <div
                className={[
                  'min-w-0 overflow-hidden whitespace-nowrap transition-all duration-200 ease-out',
                  isCollapsed ? 'max-w-0 opacity-0' : 'max-w-[150px] opacity-100',
                ].join(' ')}
              >
                <p className="truncate text-sm font-semibold text-[var(--fdm-text)]">{user.name}</p>
                <p className="truncate text-xs text-[var(--fdm-text-muted)]">{user.role}</p>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </aside>
  )
}
