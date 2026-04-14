import React, { useState } from 'react'
import Title from '../components/Title'
import './LeaveBooking.css'

export default function LeaveBooking() {
  const [formData, setFormData] = useState({ priority: '', startDate: '', endDate: '', reason: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((p) => ({ ...p, [name]: value }))
  }

  const calculateDays = (start, end) => {
    if (!start || !end) return 0
    const s = new Date(start)
    const e = new Date(end)
    if (e < s) return 0
    return Math.floor((e.getTime() - s.getTime()) / (1000 * 60 * 60 * 24)) + 1
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { priority, startDate, endDate, reason } = formData
    if (!priority || !startDate || !endDate || !reason.trim()) {
      alert('Please fill all fields')
      return
    }
    if (new Date(endDate) < new Date(startDate)) {
      alert('End date cannot be earlier than start date')
      return
    }

    alert(`Request submitted (${calculateDays(startDate, endDate)} day(s))`)
    setFormData({ priority: '', startDate: '', endDate: '', reason: '' })
  }

  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-6 pb-10">
      <Title
        badge="TIME OFF"
        title="Leave Booking"
        subtitle="Request annual leave, sick leave, or remote working days and track the status of your recent submissions."
      />

      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        <div className="block rounded-2xl border border-[color:var(--fdm-border-strong)] bg-[var(--fdm-surface)] p-5">
          <div className="flex items-start gap-4">
            <div>
              <p className="text-sm text-[var(--fdm-text-muted)]">Annual allowance</p>
              <p className="mt-3 text-2xl font-extrabold text-[var(--fdm-text)]">25 days</p>
              <p className="mt-2 text-sm text-[var(--fdm-text-soft)]">Allocated for this year</p>
            </div>
          </div>
        </div>

        <div className="block rounded-2xl border border-[color:var(--fdm-border-strong)] bg-[var(--fdm-surface)] p-5">
          <div className="flex items-start gap-4">
            <div>
              <p className="text-sm text-[var(--fdm-text-muted)]">Used</p>
              <p className="mt-3 text-2xl font-extrabold text-[var(--fdm-text)]">8 days</p>
              <p className="mt-2 text-sm text-[var(--fdm-text-soft)]">Already approved</p>
            </div>
          </div>
        </div>

        <div className="block rounded-2xl border border-[color:var(--fdm-border-strong)] bg-[var(--fdm-surface)] p-5">
          <div className="flex items-start gap-4">
            <div>
              <p className="text-sm text-[var(--fdm-text-muted)]">Remaining</p>
              <p className="mt-3 text-2xl font-extrabold text-[var(--fdm-text)]">15 days</p>
              <p className="mt-2 text-sm text-[var(--fdm-text-soft)]">Including pending review</p>
            </div>
          </div>
        </div>
      </div>

      <div className="leave-card leave-form-card">
        <div className="leave-card-header">
          <div>
            <p className="text-sm text-[var(--fdm-text-muted)]">New request</p>
            <h2>Book time off</h2>
          </div>
        </div>

        <form className="leave-form mt-4" onSubmit={handleSubmit}>
          <div className="leave-form-group">
            <label htmlFor="priority">Priority</label>
            <div className="select-wrapper">
              <select id="priority" name="priority" value={formData.priority} onChange={handleChange} required>
                <option value="" disabled>
                  Select priority
                </option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>

          <div className="leave-form-row">
            <div className="leave-form-group">
              <label htmlFor="startDate">Start date</label>
              <input type="date" id="startDate" name="startDate" value={formData.startDate} onChange={handleChange} />
            </div>

            <div className="leave-form-group">
              <label htmlFor="endDate">End date</label>
              <input type="date" id="endDate" name="endDate" value={formData.endDate} onChange={handleChange} />
            </div>
          </div>

          <div className="leave-form-group">
            <label htmlFor="reason">Reason</label>
            <textarea id="reason" name="reason" rows="5" placeholder="Add a short reason for your request..." value={formData.reason} onChange={handleChange} />
          </div>

          <div className="leave-summary-box">
            <div>
              <span>Requested duration</span>
              <strong>{calculateDays(formData.startDate, formData.endDate)} day(s)</strong>
            </div>
            <p>Requests are sent to your line manager for review before final approval.</p>
          </div>

          <button type="submit" className="leave-submit-btn mt-4">Submit Request</button>
        </form>
      </div>
    </section>
  )
}
