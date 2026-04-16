import { useState } from 'react'
import {
  CalendarCheck,
  Clock,
  ChevronLeft,
  ChevronRight,
  Users,
  BookOpen,
} from 'lucide-react'
import Title from '../components/Title'

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
const FULL_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

function getWeekDates(offset = 0) {
  const today = new Date()
  const monday = new Date(today)
  // compute this week's Monday, then shift by offset weeks
  monday.setDate(today.getDate() - ((today.getDay() + 6) % 7) + offset * 7)
  return Array.from({ length: 5 }, (_, i) => {
    const d = new Date(monday)
    d.setDate(monday.getDate() + i)
    return d
  })
}

function formatDate(date) {
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long' })
}

function ordinal(n) {
  const v = n % 100
  if (v >= 11 && v <= 13) return `${n}th`
  switch (n % 10) {
    case 1:
      return `${n}st`
    case 2:
      return `${n}nd`
    case 3:
      return `${n}rd`
    default:
      return `${n}th`
  }
}

function isToday(date) {
  const t = new Date()
  return (
    date.getDate() === t.getDate() &&
    date.getMonth() === t.getMonth() &&
    date.getFullYear() === t.getFullYear()
  )
}

const INITIAL_SESSIONS = [
  // Monday
  {
    id: 1,
    day: 0,
    startTime: '09:30',
    endTime: '10:00',
    programme: 'Daily stand-up',
    programmeType: 'GraduateProgramme',
    location: '',
    description: 'Short team check-in to review priorities and any blockers for the week.',
  },
  {
    id: 2,
    day: 0,
    startTime: '10:30',
    endTime: '12:00',
    programme: 'Programme onboarding session',
    programmeType: 'GraduateProgramme',
    location: '',
    description: 'Introduction to the week’s objectives, expectations, and key activities.',
  },
  {
    id: 3,
    day: 0,
    startTime: '13:00',
    endTime: '14:00',
    programme: 'HR and compliance review',
    programmeType: 'ReturnerProgramme',
    location: '',
    description: 'Overview of company policies, compliance modules, and required acknowledgements.',
  },
  {
    id: 4,
    day: 0,
    startTime: '15:00',
    endTime: '16:30',
    programme: 'Portal and systems walkthrough',
    programmeType: 'ReturnerProgramme',
    location: '',
    description: 'Guided session covering leave requests, tickets, announcements, and documents.',
  },

  // Tuesday
  {
    id: 5,
    day: 1,
    startTime: '09:30',
    endTime: '10:00',
    programme: 'Daily stand-up',
    programmeType: 'GraduateProgramme',
    location: '',
    description: 'Team update and review of progress from Monday.',
  },
  {
    id: 6,
    day: 1,
    startTime: '10:30',
    endTime: '12:00',
    programme: 'Internal tools training',
    programmeType: 'GraduateProgramme',
    location: '',
    description: 'Hands-on session using the portal, communication platforms, and shared systems.',
  },
  {
    id: 7,
    day: 1,
    startTime: '13:30',
    endTime: '15:00',
    programme: 'Technical refresher workshop',
    programmeType: 'ExForcesProgramme',
    location: '',
    description: 'Refresher session focused on core technical skills and best practices.',
  },
  {
    id: 8,
    day: 1,
    startTime: '15:30',
    endTime: '16:30',
    programme: 'Independent practice',
    programmeType: 'ExForcesProgramme',
    location: '',
    description: 'Time allocated to complete onboarding tasks and system exercises.',
  },

  // Wednesday
  {
    id: 9,
    day: 2,
    startTime: '09:30',
    endTime: '10:00',
    programme: 'Daily stand-up',
    programmeType: 'GraduateProgramme',
    location: '',
    description: 'Morning check-in to review progress and raise any support needs.',
  },
  {
    id: 10,
    day: 2,
    startTime: '10:30',
    endTime: '12:00',
    programme: 'Project simulation session',
    programmeType: 'GraduateProgramme',
    location: '',
    description: 'Practical exercise based on a realistic team or client scenario.',
  },
  {
    id: 11,
    day: 2,
    startTime: '13:00',
    endTime: '14:00',
    programme: 'Manager check-in',
    programmeType: 'ReturnerProgramme',
    location: '',
    description: 'One-to-one or small group session to discuss progress, feedback, and next steps.',
  },
  {
    id: 12,
    day: 2,
    startTime: '14:30',
    endTime: '16:00',
    programme: 'Documentation and policy review',
    programmeType: 'ReturnerProgramme',
    location: '',
    description: 'Time to review key policies, programme notes, and internal guidance.',
  },

  // Thursday
  {
    id: 13,
    day: 3,
    startTime: '09:30',
    endTime: '10:00',
    programme: 'Daily stand-up',
    programmeType: 'GraduateProgramme',
    location: '',
    description: 'Team sync and preparation for the remainder of the week.',
  },
  {
    id: 14,
    day: 3,
    startTime: '10:30',
    endTime: '12:00',
    programme: 'Workflow and delivery session',
    programmeType: 'GraduateProgramme',
    location: '',
    description: 'Session covering team processes, task ownership, and working expectations.',
  },
  {
    id: 15,
    day: 3,
    startTime: '13:30',
    endTime: '15:00',
    programme: 'Collaboration tools workshop',
    programmeType: 'ExForcesProgramme',
    location: '',
    description: 'Practical session using communication and project tracking tools.',
  },
  {
    id: 16,
    day: 3,
    startTime: '15:30',
    endTime: '16:30',
    programme: 'Task completion window',
    programmeType: 'ExForcesProgramme',
    location: '',
    description: 'Time to complete remaining onboarding actions and follow-up tasks.',
  },

  // Friday
  {
    id: 17,
    day: 4,
    startTime: '09:30',
    endTime: '10:00',
    programme: 'Daily stand-up',
    programmeType: 'GraduateProgramme',
    location: '',
    description: 'Final team check-in of the week.',
  },
  {
    id: 18,
    day: 4,
    startTime: '10:30',
    endTime: '12:00',
    programme: 'Weekly review session',
    programmeType: 'GraduateProgramme',
    location: '',
    description: 'Review of learning, completed tasks, and overall progress through the programme.',
  },
  {
    id: 19,
    day: 4,
    startTime: '13:00',
    endTime: '14:00',
    programme: 'Feedback and reflection',
    programmeType: 'ReturnerProgramme',
    location: '',
    description: 'Opportunity to discuss challenges, ask questions, and reflect on the week.',
  },
  {
    id: 20,
    day: 4,
    startTime: '14:30',
    endTime: '15:30',
    programme: 'Next steps briefing',
    programmeType: 'ReturnerProgramme',
    location: '',
    description: 'Overview of upcoming expectations, project readiness, and future sessions.',
  },
  {
    id: 21,
    day: 4,
    startTime: '15:30',
    endTime: '16:30',
    programme: 'Admin and wrap-up',
    programmeType: 'ReturnerProgramme',
    location: '',
    description: 'Final time to complete any outstanding actions before the week ends.',
  },
]

const PROGRAMME_ACCENTS = {
  GraduateProgramme: {
    pill: 'bg-[rgba(215,255,0,0.12)] text-[var(--fdm-lime)] border-[rgba(215,255,0,0.22)]',
    dot: 'bg-[var(--fdm-lime)]',
    icon: 'text-[var(--fdm-lime)] bg-[rgba(215,255,0,0.12)]',
  },
  ReturnerProgramme: {
    pill: 'bg-[rgba(215,255,0,0.12)] text-[var(--fdm-lime)] border-[rgba(215,255,0,0.22)]',
    dot: 'bg-[var(--fdm-lime)]',
    icon: 'text-[var(--fdm-lime)] bg-[rgba(215,255,0,0.12)]',
  },
  ExForcesProgramme: {
    pill: 'bg-[rgba(215,255,0,0.12)] text-[var(--fdm-lime)] border-[rgba(215,255,0,0.22)]',
    dot: 'bg-[var(--fdm-lime)]',
    icon: 'text-[var(--fdm-lime)] bg-[rgba(215,255,0,0.12)]',
  },
}

const CATEGORY_ACCENTS = {
  Standup: { color: 'var(--fdm-lime)' },
  Onboarding: { color: 'var(--fdm-purple)' },
  HR: { color: 'var(--fdm-orange, #FFB547)' },
  Systems: { color: 'var(--fdm-sky, #35C8FF)' },
  Training: { color: 'var(--fdm-blue, #3B82F6)' },
  Practice: { color: 'var(--fdm-cyan, #06B6D4)' },
  Simulation: { color: 'var(--fdm-teal, #14B8A6)' },
  Manager: { color: 'var(--fdm-amber, #F59E0B)' },
  Documentation: { color: 'var(--fdm-fuchsia, #D946EF)' },
  Workflow: { color: 'var(--fdm-emerald, #10B981)' },
  Collaboration: { color: 'var(--fdm-rose, #FB7185)' },
  Tasks: { color: 'var(--fdm-violet, #8B5CF6)' },
  Review: { color: 'var(--fdm-indigo, #6366F1)' },
  Feedback: { color: 'var(--fdm-yellow, #FBBF24)' },
  NextSteps: { color: 'var(--fdm-slate, #64748B)' },
  Admin: { color: 'var(--fdm-gray, #9CA3AF)' },
}

function Surface({ className = '', children }) {
  return (
    <section
      className={[
        'rounded-[28px] border border-[color:var(--fdm-border)] bg-[var(--fdm-surface)] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.24)]',
        className,
      ].join(' ')}
    >
      {children}
    </section>
  )
}

function SessionCard({ session, compact = false }) {
  const accent = PROGRAMME_ACCENTS[session.programmeType] ?? PROGRAMME_ACCENTS.GraduateProgramme

  if (compact) {
    return (
      <div className="group flex items-start gap-3 rounded-[20px] border border-[color:var(--fdm-border)] bg-[rgba(255,255,255,0.03)] p-3 transition-all duration-200 hover:border-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.05)]">
        <span className={`mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full ${accent.dot}`} />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-[var(--fdm-text)]">{session.programme}</p>
          <p className="mt-0.5 text-xs text-[var(--fdm-text-muted)]">
            {session.startTime} → {session.endTime}
          </p>
          <p className="mt-0.5 truncate text-xs text-[var(--fdm-text-soft)]">{session.location}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-start gap-4 rounded-[24px] border border-[color:var(--fdm-border)] bg-[rgba(255,255,255,0.03)] p-4 transition-all duration-200 hover:border-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.05)]">
      <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${accent.icon}`}>
        <BookOpen size={18} strokeWidth={1.8} />
      </span>

      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-base font-semibold text-[var(--fdm-text)]">{session.programme}</p>
          {session.no && (
            <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold ${accent.pill}`}>
              {session.no}
            </span>
          )}
        </div>

        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
          <span className="flex items-center gap-1.5 text-sm text-[var(--fdm-text-soft)]">
            <Clock size={13} className="shrink-0" />
            {session.startTime} → {session.endTime}
          </span>
          {session.location && (
            <span className="text-sm text-[var(--fdm-text-soft)]">{session.location}</span>
          )}
        </div>

        {session.description && (
          <p className="mt-3 text-sm text-[var(--fdm-text-soft)]">{session.description}</p>
        )}
      </div>
    </div>
  )
}

export default function ConsultantsPage() {
  const [selectedDay, setSelectedDay] = useState(() => {
    const todayIdx = new Date().getDay() - 1 
    return todayIdx >= 0 && todayIdx <= 4 ? todayIdx : 0
  })
  const [weekOffset, setWeekOffset] = useState(0)

  const sessionsForDay = INITIAL_SESSIONS.filter((s) => s.day === selectedDay)
  const totalSessions = INITIAL_SESSIONS.length
  const WEEK_DATES = getWeekDates(weekOffset)

  const weekLabel = weekOffset === 0
    ? 'This week'
    : weekOffset === 1
    ? 'Next week'
    : weekOffset === -1
    ? 'Last week'
    : `Week ${weekOffset > 0 ? '+' : ''}${weekOffset}`

  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-6 pb-10">

      <Title
        badge="CONSULTANT"
        title="Schedule"
        subtitle="View your upcoming sessions and weekly schedule."
      />

      <Surface>
        <div className="mb-5 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setWeekOffset((w) => w - 1)}
            className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[color:var(--fdm-border)] bg-[rgba(255,255,255,0.03)] text-[var(--fdm-text-soft)] transition-colors hover:border-[rgba(255,255,255,0.14)] hover:text-[var(--fdm-text)]"
          >
            <ChevronLeft size={17} />
          </button>

          <div className="text-center">
            <p className="text-sm text-[var(--fdm-text-muted)]">
                {weekLabel}
              </p>
            <p className="mt-0.5 text-sm font-semibold text-[var(--fdm-text)]">
              {formatDate(WEEK_DATES[0])} — {formatDate(WEEK_DATES[4])}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setWeekOffset((w) => w + 1)}
            className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[color:var(--fdm-border)] bg-[rgba(255,255,255,0.03)] text-[var(--fdm-text-soft)] transition-colors hover:border-[rgba(255,255,255,0.14)] hover:text-[var(--fdm-text)]"
          >
            <ChevronRight size={17} />
          </button>
        </div>

        <div className="grid grid-cols-5 gap-2">
          {DAYS.map((label, idx) => {
            const date = WEEK_DATES[idx]
            const active = idx === selectedDay
            const today = isToday(date)
            const count = INITIAL_SESSIONS.filter((s) => s.day === idx).length

            return (
              <button
                key={label}
                type="button"
                onClick={() => setSelectedDay(idx)}
                className={[
                  'flex flex-col items-center gap-1 rounded-[22px] border py-3 transition-all duration-200',
                  active
                    ? 'border-[rgba(215,255,0,0.28)] bg-[rgba(215,255,0,0.1)] shadow-[0_8px_24px_rgba(215,255,0,0.08)]'
                    : 'border-[color:var(--fdm-border)] bg-[rgba(255,255,255,0.02)] hover:border-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.04)]',
                ].join(' ')}
              >
                <span className={`text-sm font-semibold ${active ? 'text-[var(--fdm-lime)]' : 'text-[var(--fdm-text-muted)]'}`}>
                  {label}
                </span>
                <span className={`text-lg font-black tracking-[-0.03em] ${active ? 'text-[var(--fdm-text)]' : 'text-[var(--fdm-text-soft)]'}`}>
                  {ordinal(date.getDate())}
                </span>
                {/* removed today dot per design request */}
              </button>
            )
          })}
        </div>
      </Surface>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <Surface>
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-[var(--fdm-text-muted)]">{FULL_DAYS[selectedDay]}</p>
                <h2 className="mt-1 text-2xl font-black tracking-[-0.03em] text-[var(--fdm-text)]">
                  Agenda
                </h2>
              </div>
              {sessionsForDay.length > 0 && (
                <span className="rounded-full border border-[rgba(215,255,0,0.18)] bg-[rgba(215,255,0,0.08)] px-3 py-1 text-xs font-semibold text-[var(--fdm-lime)]">
                  {sessionsForDay.length} Scheduled
                </span>
              )}
            </div>

            {sessionsForDay.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-[24px] border border-dashed border-[rgba(255,255,255,0.08)] py-12 text-center">
                <CalendarCheck size={32} className="mb-3 text-[var(--fdm-text-muted)]" />
                <p className="text-sm font-semibold text-[var(--fdm-text-soft)]">No scheduled items</p>
                <p className="mt-1 text-xs text-[var(--fdm-text-muted)]">Enjoy your free day</p>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {sessionsForDay.map((session) => (
                  <SessionCard key={session.id} session={session} />
                ))}
              </div>
            )}
          </Surface>

          
        </div>

        <Surface>
          <div className="mb-5">
            <p className="text-sm text-[var(--fdm-text-muted)]">Overview</p>
            <h2 className="mt-1 text-2xl font-black tracking-[-0.03em] text-[var(--fdm-text)]">
              Week at a glance
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {DAYS.map((day, idx) => {
              const daySessions = INITIAL_SESSIONS.filter((s) => s.day === idx)
              const active = idx === selectedDay

              return (
                <div key={day}>
                  <button
                    type="button"
                    onClick={() => setSelectedDay(idx)}
                    className={[
                      'mb-2 flex w-full items-center gap-2 text-left',
                    ].join(' ')}
                  >
                    <span className={`text-sm font-semibold ${active ? 'text-[var(--fdm-lime)]' : 'text-[var(--fdm-text-muted)]'}`}>
                      {day}
                    </span>
                    <span className="h-px flex-1 bg-[var(--fdm-border)]" />
                    <span className="text-xs text-[var(--fdm-text-muted)]">{daySessions.length}</span>
                  </button>

                  {daySessions.length > 0 && (
                    <div className="flex flex-col gap-2 pl-0">
                      {daySessions.map((s) => (
                        <SessionCard key={s.id} session={s} compact />
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </Surface>
      </div>
    </section>
  )
}
