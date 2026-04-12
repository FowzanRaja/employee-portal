import {
  ArrowUpRight,
  BadgeCheck,
  CalendarClock,
  Clock3,
  FileText,
  Megaphone,
  MessageSquare,
  Ticket,
} from 'lucide-react'

const stats = [
  {
    label: 'Open tickets',
    value: '18',
    detail: '5 awaiting response',
    accent: 'text-[var(--fdm-lime)]',
    icon: Ticket,
  },
  {
    label: 'Pending approvals',
    value: '6',
    detail: 'Leave and access requests',
    accent: 'text-sky-300',
    icon: BadgeCheck,
  },
  {
    label: 'Unread updates',
    value: '12',
    detail: 'Policies and announcements',
    accent: 'text-orange-300',
    icon: Megaphone,
  },
  {
    label: 'Messages today',
    value: '24',
    detail: 'Across team channels',
    accent: 'text-emerald-300',
    icon: MessageSquare,
  },
]

const highlights = [
  {
    title: 'System access review',
    owner: 'Security Operations',
    status: 'Due today',
  },
  {
    title: 'New starter onboarding pack',
    owner: 'People Team',
    status: 'Ready to publish',
  },
  {
    title: 'Quarterly compliance update',
    owner: 'Risk and Policy',
    status: 'In review',
  },
]

const activity = [
  'Annual leave request approved for Priya Shah.',
  'Facilities notice posted for Thursday maintenance window.',
  'Laptop refresh ticket reassigned to IT Support queue.',
  'Expense policy update published for contractor travel.',
]

const schedule = [
  {
    time: '09:30',
    title: 'Operations stand-up',
    detail: 'Delivery, support and people ops sync',
  },
  {
    time: '11:00',
    title: 'Leave review window',
    detail: 'Manager approvals for this week',
  },
  {
    time: '14:00',
    title: 'Policy rollout checkpoint',
    detail: 'Review comms and acknowledgement rate',
  },
  {
    time: '16:15',
    title: 'End-of-day support sweep',
    detail: 'Triage priority tickets before close',
  },
]

function Surface({ className = '', children }) {
  return (
    <section
      className={[
        'rounded-[28px] border border-[color:var(--fdm-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.24)]',
        className,
      ].join(' ')}
    >
      {children}
    </section>
  )
}

export default function Dashboard() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-6 pb-10">
      <Surface className="overflow-hidden p-0">
        <div className="flex flex-col gap-6 bg-[linear-gradient(135deg,rgba(215,255,0,0.09),rgba(255,255,255,0.02)_38%,rgba(255,255,255,0.01))] px-6 py-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <span className="inline-flex items-center rounded-full border border-[rgba(215,255,0,0.22)] bg-[rgba(215,255,0,0.1)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--fdm-lime)]">
              FDM Staff Portal
            </span>
            <div className="space-y-2">
              <h1 className="text-4xl font-black tracking-[-0.04em] text-[var(--fdm-text)] sm:text-5xl">
                Dashboard
              </h1>
              <p className="max-w-2xl text-sm text-[var(--fdm-text-soft)] sm:text-base">
                Welcome back. This prototype view gives you a quick pulse on tickets,
                announcements, approvals and staff activity across the portal.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-2xl bg-[var(--fdm-lime)] px-4 py-3 text-sm font-semibold text-[var(--fdm-text-dark)] shadow-[0_14px_32px_rgba(215,255,0,0.14)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Review updates
              <ArrowUpRight size={16} />
            </button>
            <div className="rounded-2xl border border-[color:var(--fdm-border)] bg-[rgba(255,255,255,0.04)] px-4 py-3 text-sm text-[var(--fdm-text-soft)]">
              Next checkpoint in 45 minutes
            </div>
          </div>
        </div>
      </Surface>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon

          return (
            <Surface key={stat.label} className="flex min-h-[170px] flex-col justify-between">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-[var(--fdm-text-muted)]">{stat.label}</p>
                  <p className="mt-3 text-4xl font-black tracking-[-0.04em] text-[var(--fdm-text)]">
                    {stat.value}
                  </p>
                </div>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(255,255,255,0.04)] text-[var(--fdm-text-soft)]">
                  <Icon size={20} />
                </span>
              </div>

              <div className="flex items-center justify-between gap-3 pt-6">
                <p className="text-sm text-[var(--fdm-text-soft)]">{stat.detail}</p>
                <span className={["text-xs font-semibold uppercase tracking-[0.16em]", stat.accent].join(' ')}>
                  Live
                </span>
              </div>
            </Surface>
          )
        })}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.45fr_0.95fr]">
        <Surface>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-[var(--fdm-text-muted)]">
                Operations Snapshot
              </p>
              <h2 className="mt-2 text-2xl font-black tracking-[-0.03em] text-[var(--fdm-text)]">
                Today at a glance
              </h2>
            </div>
            <span className="rounded-full border border-[rgba(215,255,0,0.18)] bg-[rgba(215,255,0,0.08)] px-3 py-1 text-xs font-semibold text-[var(--fdm-lime)]">
              87% completion
            </span>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-[24px] border border-[color:var(--fdm-border)] bg-[rgba(255,255,255,0.03)] p-4"
              >
                <p className="text-base font-semibold text-[var(--fdm-text)]">{item.title}</p>
                <p className="mt-2 text-sm text-[var(--fdm-text-muted)]">{item.owner}</p>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--fdm-lime)]">
                  {item.status}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[24px] border border-[color:var(--fdm-border)] bg-[rgba(0,0,0,0.14)] p-4">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(215,255,0,0.12)] text-[var(--fdm-lime)]">
                <CalendarClock size={20} />
              </span>
              <div>
                <p className="text-sm font-semibold text-[var(--fdm-text)]">Priority block</p>
                <p className="text-sm text-[var(--fdm-text-muted)]">
                  Keep the midday leave review and policy checkpoint visible for testing layout density.
                </p>
              </div>
            </div>
          </div>
        </Surface>

        <Surface>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-[var(--fdm-text-muted)]">
                Recent activity
              </p>
              <h2 className="mt-2 text-2xl font-black tracking-[-0.03em] text-[var(--fdm-text)]">
                Staff feed
              </h2>
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--fdm-lime)]">
              Updated now
            </span>
          </div>

          <div className="mt-6 space-y-3">
            {activity.map((entry) => (
              <div
                key={entry}
                className="rounded-[22px] border border-[color:var(--fdm-border)] bg-[rgba(255,255,255,0.03)] px-4 py-4"
              >
                <p className="text-sm text-[var(--fdm-text-soft)]">{entry}</p>
              </div>
            ))}
          </div>
        </Surface>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Surface>
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-[var(--fdm-text-muted)]">
                Schedule
              </p>
              <h2 className="mt-2 text-2xl font-black tracking-[-0.03em] text-[var(--fdm-text)]">
                Daily rhythm
              </h2>
            </div>
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(255,255,255,0.04)] text-[var(--fdm-text-soft)]">
              <Clock3 size={20} />
            </span>
          </div>

          <div className="mt-6 space-y-3">
            {schedule.map((item) => (
              <div
                key={item.time + item.title}
                className="grid gap-3 rounded-[24px] border border-[color:var(--fdm-border)] bg-[rgba(255,255,255,0.03)] p-4 md:grid-cols-[90px_1fr] md:items-center"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--fdm-lime)]">
                  {item.time}
                </div>
                <div>
                  <p className="text-base font-semibold text-[var(--fdm-text)]">{item.title}</p>
                  <p className="mt-1 text-sm text-[var(--fdm-text-muted)]">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </Surface>

        <Surface>
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[var(--fdm-text-muted)]">
              Reference panel
            </p>
            <h2 className="mt-2 text-2xl font-black tracking-[-0.03em] text-[var(--fdm-text)]">
              Portal notes
            </h2>
          </div>

          <div className="mt-6 space-y-4">
            <div className="rounded-[24px] border border-[color:var(--fdm-border)] bg-[rgba(255,255,255,0.03)] p-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[rgba(215,255,0,0.12)] text-[var(--fdm-lime)]">
                  <FileText size={18} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[var(--fdm-text)]">Policy acknowledgements</p>
                  <p className="text-sm text-[var(--fdm-text-muted)]">92% of staff completed the latest read receipt.</p>
                </div>
              </div>
            </div>

            <div className="rounded-[24px] border border-[color:var(--fdm-border)] bg-[rgba(255,255,255,0.03)] p-4">
              <p className="text-sm text-[var(--fdm-text-soft)]">
                This panel intentionally adds extra content height so you can test the fixed sidebar,
                spacing rhythm and scroll behaviour in the shell.
              </p>
            </div>
          </div>
        </Surface>
      </div>
    </section>
  )
}
