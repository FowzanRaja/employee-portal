import React, { useState, useEffect } from 'react'
import CustomSelect from './CustomSelect'
import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/flatpickr.min.css'
import { CheckCircle } from 'lucide-react'
// Override flatpickr styles to match form (#2D2D2D)
const flatpickrOverrides = `
.flatpickr-calendar {
  background: #2D2D2D !important;
  border: 1px solid var(--fdm-border) !important;
  color: #e5e7eb !important;
}
.flatpickr-months, .flatpickr-weekdays, .flatpickr-weekday {
  background: transparent !important;
  color: #e5e7eb !important;
}
.flatpickr-weekday { color: #9ca3af !important; }
.flatpickr-day {
  background: transparent !important;
  color: #e5e7eb !important;
  border-radius: 6px !important;
}
.flatpickr-day:hover { background: #333333 !important; }
.flatpickr-day.selected, .flatpickr-day.startRange, .flatpickr-day.endRange {
  background: rgba(215,255,0,0.12) !important;
  color: #e5e7eb !important;
  border: 1px solid rgba(215,255,0,0.35) !important;
  box-shadow: none !important;
}
.flatpickr-day:focus {
  outline: none !important;
  box-shadow: none !important;
}
.flatpickr-months .flatpickr-prev-month, .flatpickr-months .flatpickr-next-month { color: #ffffff !important; }
.flatpickr-months .flatpickr-prev-month svg, .flatpickr-months .flatpickr-next-month svg { fill: #ffffff !important; stroke: #ffffff !important; }
.flatpickr-current-month { color: #e5e7eb !important; }
`;

export default function BookLeaveForm() {
  const [leaveType, setLeaveType] = useState('annual')
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [reason, setReason] = useState('')

  const computeDurationDays = () => {
    if (!startDate || !endDate) return 0
    const s = new Date(startDate)
    const e = new Date(endDate)
    // normalize to local midnight to avoid timezone shifts
    s.setHours(0, 0, 0, 0)
    e.setHours(0, 0, 0, 0)
    if (isNaN(s) || isNaN(e)) return 0
    const msPerDay = 24 * 60 * 60 * 1000
    const diff = Math.floor((e - s) / msPerDay) + 1
    return diff > 0 ? diff : 0
  }

  useEffect(() => {
    if (!startDate) return
    if (!endDate) return
    const s = new Date(startDate)
    const e = new Date(endDate)
    // normalize to local midnight for comparison
    s.setHours(0, 0, 0, 0)
    e.setHours(0, 0, 0, 0)
    if (s > e) {
      setEndDate(new Date(startDate))
    }
  }, [startDate])

  const canSubmit = () => {
    if (!startDate) return false
    if (!endDate) return false
    if (!reason || reason.trim().length === 0) return false
    if (computeDurationDays() <= 0) return false
    return true
  }

  const [showToast, setShowToast] = useState(false)
  const [timestamp, setTimestamp] = useState('')

  const handleSubmit = () => {
    if (!canSubmit()) return
    const now = new Date()
    const timeStr = now.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })

    // placeholder submit action (could call API)
    console.log('Leave Request Submitted', { leaveType, startDate, endDate, reason })

    setTimestamp(timeStr)
    setShowToast(true)

    setTimeout(() => {
      setShowToast(false)
    }, 1500)

    // reset form
    setLeaveType('annual')
    setStartDate(null)
    setEndDate(null)
    setReason('')
  }

  return (
    <>
    <section className="rounded-2xl border border-[color:var(--fdm-border-strong)] bg-[var(--fdm-surface)] p-5">
      <style>{flatpickrOverrides}</style>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-[var(--fdm-text-muted)]">Form</p>
          <h3 className="mt-2 text-2xl font-black text-[var(--fdm-text)]">Book leave</h3>
        </div>
      </div>

      <div className="mt-4 space-y-4 leave-form-group">
        <CustomSelect
          label="Leave type"
          options={[
            { value: 'annual', label: 'Annual Leave' },
            { value: 'sick', label: 'Sick Leave' },
            { value: 'maternity', label: 'Maternity Leave' },
            { value: 'compassionate', label: 'Compassionate Leave' },
            { value: 'unpaid', label: 'Unpaid Leave' },
            { value: 'religious', label: 'Religious Observance' },
          ]}
          value={leaveType}
          onChange={(v) => setLeaveType(v)}
          shape="rect"
        />

        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2">
          <div>
            <label className="text-sm text-[var(--fdm-text-muted)] mb-2 block">Start date</label>
              <div className="relative">
                <Flatpickr
                  value={startDate || null}
                  onChange={(dates) => setStartDate(dates[0] ? dates[0] : null)}
                  options={{ dateFormat: 'd-m-Y', minDate: 'today' }}
                  className="w-full rounded-lg border border-[color:var(--fdm-border)] bg-[#2D2D2D] px-3 py-2 text-sm text-[var(--fdm-text)]"
                />
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
              </div>
          </div>

          <div>
            <label className="text-sm text-[var(--fdm-text-muted)] mb-2 block">End date</label>
            <div className="relative">
              <Flatpickr
                value={endDate || null}
                onChange={(dates) => {
                  const picked = dates[0] ? dates[0] : null
                  if (!picked) {
                    setEndDate(null)
                    return
                  }
                  if (startDate) {
                    const s = new Date(startDate)
                    const p = new Date(picked)
                    s.setHours(0, 0, 0, 0)
                    p.setHours(0, 0, 0, 0)
                    if (p < s) {
                      setEndDate(new Date(startDate))
                      return
                    }
                  }
                  setEndDate(picked)
                }}
                options={{ dateFormat: 'd-m-Y', minDate: startDate || 'today' }}
                className="w-full rounded-lg border border-[color:var(--fdm-border)] bg-[#2D2D2D] px-3 py-2 text-sm text-[var(--fdm-text)]"
              />
              <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div>
          <label className="text-sm text-[var(--fdm-text-muted)] mb-2 block">Reason</label>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            rows={4}
            className="w-full rounded-lg border border-[color:var(--fdm-border)] bg-[#2D2D2D] px-3 py-2 text-sm text-[var(--fdm-text)] resize-vertical"
          />
        </div>

        {/* Requested Duration Panel */}
        <div className="mt-4">
          <div className="w-full bg-[var(--fdm-surface)] border border-[color:var(--fdm-border)] rounded-2xl p-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-[var(--fdm-text)]">Requested duration</p>
              <p className="text-xs text-[var(--fdm-text-muted)] mt-1">Requests are sent to HR for review before final approval.</p>
            </div>
            <div className="text-lg font-semibold text-[color:var(--fdm-lime)]">{computeDurationDays()} day(s)</div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-4 flex justify-start">
          <button
            type="button"
            className={"fdm-btn fdm-btn-primary" + (!canSubmit() ? ' opacity-60 cursor-not-allowed' : '')}
            onClick={handleSubmit}
            disabled={!canSubmit()}
          >
            Submit Request
          </button>
        </div>
      </div>
    </section>

    
    {/* TOAST */}
    <div
      style={{
        position: 'fixed',
        top: '2rem',
        left: '50%',
        transform: showToast ? 'translate(-50%, 0)' : 'translate(-50%, -20px)',
        opacity: showToast ? 1 : 0,
        background: 'var(--fdm-surface)',
        border: '1px solid var(--fdm-border)',
        padding: '1rem 1.5rem',
        borderRadius: '0.75rem',
        boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
        transition: 'all 0.3s ease',
        textAlign: 'center',
        zIndex: 60,
      }}
    >
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'center' }}>
        <CheckCircle size={18} style={{ color: '#84cc16' }} />
        <span style={{ fontWeight: '600' }}>Leave request submitted</span>
      </div>
      <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>{timestamp}</p>
    </div>
    </>
  )
}
