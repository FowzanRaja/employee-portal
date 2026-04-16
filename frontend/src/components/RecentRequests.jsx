import React, { useState } from 'react'

function StatusBadge({ status }) {
  const map = {
    Approved: 'bg-[rgba(34,197,94,0.12)] text-emerald-300 border border-[rgba(34,197,94,0.06)]',
    Pending: 'bg-[rgba(234,179,8,0.06)] text-[var(--fdm-lime)] border border-[rgba(215,255,0,0.06)]',
    Rejected: 'bg-[rgba(239,68,68,0.06)] text-rose-400 border border-[rgba(239,68,68,0.06)]',
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

export default function RecentRequests() {
  const initial = [
    // Most recent first: Pending, Rejected, Approved (oldest)
    {
      id: 1,
      title: 'Sick Leave',
      dates: '14-04-2026 → 14-04-2026',
      duration: '1 day(s)',
      reason: 'Medical appointment',
      description: 'Need to take time off to attend a medical appointment during the day.',
      status: 'Pending',
    },
    {
      id: 2,
      title: 'Annual Leave',
      dates: '02-04-2026 → 03-04-2026',
      duration: '2 day(s)',
      reason: 'Personal commitment',
      description: 'Need time off to deal with a personal matter that requires my attention during these dates.',
      status: 'Rejected',
    },
    {
      id: 3,
      title: 'Annual Leave',
      dates: '22-03-2026 → 24-03-2026',
      duration: '3 day(s)',
      reason: 'Family trip',
      description: 'Taking a short break to travel with family and spend time away. Planned in advance and fits within my available leave balance.',
      status: 'Approved',
    },
  ]

  const [requests] = useState(initial)

  return (
    <section className="rounded-2xl border border-[color:var(--fdm-border-strong)] bg-[var(--fdm-surface)] p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-[var(--fdm-text-muted)]">History</p>
          <h3 className="mt-2 text-2xl font-black text-[var(--fdm-text)]">Recent requests</h3>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center rounded-full bg-[rgba(255,255,255,0.02)] px-3 py-1 text-xs font-semibold text-[var(--fdm-text-soft)]">
            {requests.length} item{requests.length !== 1 ? 's' : ''}
          </span>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        {requests.map((r) => (
          <div
            key={r.id}
            className="flex items-start justify-between gap-4 rounded-xl border border-[color:var(--fdm-border)] bg-[rgba(255,255,255,0.02)] p-4 hover:shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition"
          >
            <div className="min-w-0">
              <p className="text-base font-semibold text-[var(--fdm-text)]">{r.title}</p>
              <p className="mt-1 text-xs text-[var(--fdm-text-muted)]">{r.dates}</p>

              <div className="mt-2 flex flex-wrap gap-3 text-sm text-[var(--fdm-text-soft)]">
                <span>{r.duration}</span>
                <span>•</span>
                <span className="truncate">{r.reason}</span>
              </div>

              {r.description && (
                <p className="mt-2 text-sm text-[var(--fdm-text-muted)]">{r.description}</p>
              )}
            </div>

            <div className="flex items-center gap-3">
              <StatusBadge status={r.status} />
            </div>
          </div>
        ))}

        {requests.length === 0 && (
          <p className="text-sm text-[var(--fdm-text-muted)]">No recent requests.</p>
        )}
      </div>
    </section>
  )
}
