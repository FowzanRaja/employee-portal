import { Link } from 'react-router-dom'
import Title from '../components/Title'
import {
  CalendarCheck,
  MessageSquare,
  Ticket,
  Megaphone,
  ChevronRight,
} from 'lucide-react'

function DashboardCard({ to, title, count, description, Icon }) {
  return (
    <Link
      to={to}
      className="group block rounded-2xl border border-[color:var(--fdm-border-strong)] bg-[var(--fdm-surface)] p-5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-[var(--fdm-text-muted)]">{title}</p>
          <p className="mt-3 text-2xl font-extrabold text-[var(--fdm-text)]">{count}</p>
          <p className="mt-2 text-sm text-[var(--fdm-text-soft)] font-normal">{description}</p>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--fdm-surface-2)] text-[var(--fdm-text-soft)] group-hover:bg-[rgba(215,255,0,0.16)]">
          <Icon size={20} />
        </div>
      </div>
    </Link>
  )
}

function StatusBadge({ status }) {
  const map = {
    Approved: 'bg-[rgba(56,189,248,0.08)] text-sky-300 border border-[rgba(56,189,248,0.06)]',
    Pending: 'bg-[rgba(234,179,8,0.06)] text-[var(--fdm-lime)] border border-[rgba(215,255,0,0.06)]',
    Rejected: 'bg-[rgba(239,68,68,0.06)] text-rose-400 border border-[rgba(239,68,68,0.06)]',
    Open: 'bg-[rgba(34,197,94,0.06)] text-emerald-300 border border-[rgba(34,197,94,0.06)]',
    Closed: 'bg-[rgba(148,163,184,0.04)] text-[var(--fdm-text-soft)] border border-[rgba(148,163,184,0.04)]',
  }

  return (
    <span className={[
      'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold',
      map[status] ?? 'bg-[rgba(255,255,255,0.02)]',
    ].join(' ')}>
      {status}
    </span>
  )
}

function ActivityItem({ title, date, status, typeIcon: Icon }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-[color:var(--fdm-border)] bg-[rgba(255,255,255,0.03)] p-3">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgba(255,255,255,0.02)] text-[var(--fdm-text-soft)]">
          <Icon size={16} />
        </div>
        <div>
          <p className="text-sm font-semibold text-[var(--fdm-text)]">{title}</p>
          <p className="mt-1 text-xs text-[var(--fdm-text-muted)]">{date}</p>
        </div>
      </div>
      <StatusBadge status={status} />
    </div>
  )
}

function AnnouncementItem({ text, time }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-[color:var(--fdm-border)] bg-[rgba(255,255,255,0.03)] px-4 py-3">
      <p className="text-sm text-[var(--fdm-text-soft)]">{text}</p>
      {time ? <span className="text-xs text-[var(--fdm-text-muted)]">{time}</span> : null}
    </div>
  )
}

export default function DashboardPage() {
  const actions = [
    {
      title: 'Messages',
      count: '1 unread',
      description: 'Check your conversations',
      to: '/messages',
      icon: MessageSquare,
    },
    {
      title: 'Tickets',
      count: '3 open',
      description: 'View or create support tickets',
      to: '/tickets',
      icon: Ticket,
    },
    {
      title: 'Leave Requests',
      count: '2 pending',
      description: 'Manage your leave requests',
      to: '/leave',
      icon: CalendarCheck,
    },
    {
      title: 'Announcements',
      count: '2 new',
      description: 'View latest updates',
      to: '/announcements',
      icon: Megaphone,
    },
  ]

  const myActivity = [
    { title: 'Laptop issue', date: 'Apr 9', status: 'Open', icon: Ticket },
    { title: 'Compassionate leave', date: 'Apr 1', status: 'Pending', icon: CalendarCheck },
    { title: 'Annual Leave', date: 'Mar 2 — Mar 6', status: 'Approved', icon: CalendarCheck },
  ]

  const announcements = [
    { text: 'Office maintenance: network outage tonight', time: '2h ago' },
    { text: 'HR: New policy on hybrid working', time: '1d ago' },
    { text: 'IT: Password expiry reminder', time: '3d ago' },
  ]

  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-6 pb-10">
      <Title
        badge="FDM Staff Portal"
        title="Dashboard"
        subtitle="Welcome back, Joel. Quick links to messages, tickets, leave, and announcements."
      />

      {/* Action cards grid */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        {actions.map((a) => (
          <DashboardCard key={a.title} to={a.to} title={a.title} count={a.count} description={a.description} Icon={a.icon} />
        ))}
      </div>

      {/* Two-column area: My Activity (left) & Latest Announcements (right) */}
      <div className="grid gap-6 lg:grid-cols-[1.45fr_0.95fr]">
        <section className="rounded-[28px] border border-[color:var(--fdm-border-strong)] bg-[var(--fdm-surface)] p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-[var(--fdm-text-muted)]">My Activity</p>
              <h2 className="mt-3 text-2xl font-black tracking-[-0.03em] text-[var(--fdm-text)]">Recent actions</h2>
            </div>
            <Link to="/activity" className="text-sm inline-flex items-center gap-2 group">
              <span className="text-[var(--fdm-text-soft)] group-hover:text-[var(--fdm-lime)]">View all</span>
              <ChevronRight size={14} className="text-[var(--fdm-text-soft)] group-hover:text-[var(--fdm-lime)]" />
            </Link>
          </div>

          <div className="mt-4 space-y-3">
            {myActivity.map((it) => (
              <ActivityItem key={it.title + it.date} title={it.title} date={it.date} status={it.status} typeIcon={it.icon} />
            ))}
          </div>
        </section>

        <section className="rounded-[28px] border border-[color:var(--fdm-border-strong)] bg-[var(--fdm-surface)] p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-[var(--fdm-text-muted)]">Information</p>
              <h2 className="mt-3 text-2xl font-black tracking-[-0.03em] text-[var(--fdm-text)]">Latest Announcements</h2>
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--fdm-lime)]">Updated now</span>
          </div>

          <div className="mt-4 space-y-3">
            {announcements.map((a, i) => (
              <AnnouncementItem key={i} text={a.text} time={a.time} />
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}