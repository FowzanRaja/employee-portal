import { useState } from 'react'
import {
  CalendarCheck,
  MapPin,
  Clock,
  ChevronLeft,
  ChevronRight,
  Users,
  BookOpen,
} from 'lucide-react'
import Title from '../components/Title'

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
const FULL_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

const WEEK_DATES = (() => {
  const today = new Date()
  const monday = new Date(today)
  monday.setDate(today.getDate() - ((today.getDay() + 6) % 7))
  return Array.from({ length: 5 }, (_, i) => {
    const d = new Date(monday)
    d.setDate(monday.getDate() + i)
    return d
  })
})()

function formatDate(date) {
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
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
  {
    id: 1,
    day: 0, 
    startTime: '09:00',
    endTime: '10:30',
    programme: 'Graduates Programme',
    programmeType: 'GraduateProgramme',
    location: 'Room 4B, London',
    no: 'GR-01',
  },
  {
    id: 2,
    day: 0, 
    startTime: '13:00',
    endTime: '14:30',
    programme: 'Returns Programme',
    programmeType: 'ReturnerProgramme',
    location: 'Room 2A, London',
    no: 'RT-03',
  },
  {
    id: 3,
    day: 1, 
    startTime: '10:00',
    endTime: '12:00',
    programme: 'Xforces Programme',
    programmeType: 'ExForcesProgramme',
    location: 'Online (Teams)',
    no: 'XF-02',
  },
  {
    id: 4,
    day: 2, 
    startTime: '09:30',
    endTime: '11:00',
    programme: 'Graduates Programme',
    programmeType: 'GraduateProgramme',
    location: 'Room 4B, London',
    no: 'GR-02',
  },
  {
    id: 5,
    day: 3, 
    startTime: '14:00',
    endTime: '15:30',
    programme: 'Returns Programme',
    programmeType: 'ReturnerProgramme',
    location: 'Room 1C, Manchester',
    no: 'RT-04',
  },
  {
    id: 6,
    day: 4, 
    startTime: '11:00',
    endTime: '12:30',
    programme: 'Xforces Programme',
    programmeType: 'ExForcesProgramme',
    location: 'Online (Teams)',
    no: 'XF-03',
  },
]

const PROGRAMME_ACCENTS = {
  GraduateProgramme: {
    pill: 'bg-[rgba(215,255,0,0.12)] text-[var(--fdm-lime)] border-[rgba(215,255,0,0.22)]',
    dot: 'bg-[var(--fdm-lime)]',
    icon: 'text-[var(--fdm-lime)] bg-[rgba(215,255,0,0.12)]',
  },
  ReturnerProgramme: {
    pill: 'bg-[rgba(53,200,255,0.12)] text-sky-300 border-[rgba(53,200,255,0.22)]',
    dot: 'bg-sky-300',
    icon: 'text-sky-300 bg-[rgba(53,200,255,0.12)]',
  },
  ExForcesProgramme: {
    pill: 'bg-[rgba(159,87,255,0.12)] text-[var(--fdm-purple)] border-[rgba(159,87,255,0.22)]',
    dot: 'bg-[var(--fdm-purple)]',
    icon: 'text-[var(--fdm-purple)] bg-[rgba(159,87,255,0.12)]',
  },
}

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
          <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold ${accent.pill}`}>
            {session.no}
          </span>
        </div>

        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
          <span className="flex items-center gap-1.5 text-sm text-[var(--fdm-text-soft)]">
            <Clock size={13} className="shrink-0" />
            {session.startTime} → {session.endTime}
          </span>
          <span className="flex items-center gap-1.5 text-sm text-[var(--fdm-text-soft)]">
            <MapPin size={13} className="shrink-0" />
            {session.location}
          </span>
        </div>
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
        subtitle="View your assigned programme sessions for the week. Sessions are managed by your Line Manager."
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
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--fdm-text-muted)]">
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
                <span className={`text-xs font-semibold uppercase tracking-[0.14em] ${active ? 'text-[var(--fdm-lime)]' : 'text-[var(--fdm-text-muted)]'}`}>
                  {label}
                </span>
                <span className={`text-lg font-black tracking-[-0.03em] ${active ? 'text-[var(--fdm-text)]' : 'text-[var(--fdm-text-soft)]'}`}>
                  {date.getDate()}
                </span>
                {today && (
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--fdm-lime)]" />
                )}
                {count > 0 && !today && (
                  <span className={`text-xs font-semibold ${active ? 'text-[var(--fdm-lime)]' : 'text-[var(--fdm-text-muted)]'}`}>
                    {count}
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </Surface>

      <div className="grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">

        <Surface>
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
                <p className="text-sm text-[var(--fdm-text-muted)]">{FULL_DAYS[selectedDay]}</p>
              <h2 className="mt-1 text-2xl font-black tracking-[-0.03em] text-[var(--fdm-text)]">
                Sessions
              </h2>
            </div>
            {sessionsForDay.length > 0 && (
              <span className="rounded-full border border-[rgba(215,255,0,0.18)] bg-[rgba(215,255,0,0.08)] px-3 py-1 text-xs font-semibold text-[var(--fdm-lime)]">
                {sessionsForDay.length} session{sessionsForDay.length !== 1 ? 's' : ''}
              </span>
            )}
          </div>

          {sessionsForDay.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-[24px] border border-dashed border-[rgba(255,255,255,0.08)] py-12 text-center">
              <CalendarCheck size={32} className="mb-3 text-[var(--fdm-text-muted)]" />
              <p className="text-sm font-semibold text-[var(--fdm-text-soft)]">No sessions scheduled</p>
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
                    <span className={`text-xs font-semibold uppercase tracking-[0.16em] ${active ? 'text-[var(--fdm-lime)]' : 'text-[var(--fdm-text-muted)]'}`}>
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

      <Surface>
        <p className="mb-4 text-sm text-[var(--fdm-text-muted)]">Programme key</p>
        <div className="flex flex-wrap gap-4">
          {Object.entries(PROGRAMME_ACCENTS).map(([type, accent]) => {
            const label = type
              .replace('Programme', ' Programme')
              .replace('Returner', 'Returns')
              .replace('ExForces', 'Xforces')
              .replace('Graduate', 'Graduates')
            return (
              <div key={type} className="flex items-center gap-2">
                <span className={`h-2.5 w-2.5 rounded-full ${accent.dot}`} />
                <span className="text-sm text-[var(--fdm-text-soft)]">{label}</span>
              </div>
            )
          })}
        </div>
      </Surface>
    </section>
  )
}
