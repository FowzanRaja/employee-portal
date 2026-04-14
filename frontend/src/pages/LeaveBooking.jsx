import React, { useState } from 'react'
import Title from '../components/Title'
// Styles inlined to avoid external CSS for this sandbox
const styles = {
  leaveCard: {
    borderRadius: 28,
    border: '1px solid rgba(255,255,255,0.08)',
    background: 'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.025))',
    boxShadow: '0 12px 40px rgba(0,0,0,0.24), 0 0 0 1px rgba(255,255,255,0.015) inset',
    padding: 28
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 16,
    marginBottom: 22
  },
  form: { display: 'flex', flexDirection: 'column', gap: 18 },
  formRow: { display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 16 },
  formGroup: { display: 'flex', flexDirection: 'column', gap: 8 },
  label: { color: '#e7e7e7', fontSize: '0.95rem', fontWeight: 600 },
  inputBase: {
    width: '100%',
    border: '1px solid rgba(255,255,255,0.09)',
    borderRadius: 16,
    background: 'rgba(255,255,255,0.03)',
    color: '#f5f5f5',
    padding: '14px 16px',
    fontSize: '0.96rem',
    outline: 'none'
  },
  selectWrapper: { position: 'relative', display: 'inline-block', width: '100%' },
  chevron: {
    position: 'absolute',
    right: 12,
    top: '50%',
    transform: 'translateY(-50%)',
    pointerEvents: 'none',
    color: '#ffffff',
    fontWeight: 600,
    fontSize: '0.95rem'
  },
  select: {
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    appearance: 'none',
    paddingRight: '2.5rem',
    background: 'rgba(255,255,255,0.03)',
    color: '#f5f5f5',
    width: '100%',
    border: '1px solid rgba(255,255,255,0.09)',
    borderRadius: 16,
    padding: '14px 16px',
    fontSize: '0.96rem'
  },
  summaryBox: {
    padding: '18px 18px',
    borderRadius: 20,
    background: 'rgba(255,255,255,0.035)',
    border: '1px solid rgba(255,255,255,0.06)'
  },
  submitBtn: {
    alignSelf: 'flex-start',
    border: 'none',
    borderRadius: 16,
    padding: '14px 24px',
    background: '#d7ff00',
    color: '#111111',
    fontSize: '0.95rem',
    fontWeight: 800,
    cursor: 'pointer',
    boxShadow: '0 10px 24px rgba(208,255,0,0.18)'
  }
}

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

      <div style={styles.leaveCard}>
        <div style={styles.cardHeader}>
          <div>
            <p className="text-sm text-[var(--fdm-text-muted)]">New request</p>
            <h2>Book time off</h2>
          </div>
        </div>

        <form style={styles.form} className="mt-4" onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label htmlFor="priority" style={styles.label}>Priority</label>
            <div style={styles.selectWrapper}>
              <select id="priority" name="priority" value={formData.priority} onChange={handleChange} required style={styles.select}>
                <option value="" disabled style={{ color: '#9a9a9a' }}>
                  Select priority
                </option>
                <option value="low" style={{ background: 'rgba(0,0,0,0.65)', color: '#f5f5f5' }}>Low</option>
                <option value="medium" style={{ background: 'rgba(0,0,0,0.65)', color: '#f5f5f5' }}>Medium</option>
                <option value="high" style={{ background: 'rgba(0,0,0,0.65)', color: '#f5f5f5' }}>High</option>
              </select>
              <span style={styles.chevron}>▾</span>
            </div>
          </div>

          <div style={styles.formRow}>
            <div style={styles.formGroup}>
              <label htmlFor="startDate" style={styles.label}>Start date</label>
              <input type="date" id="startDate" name="startDate" value={formData.startDate} onChange={handleChange} style={styles.inputBase} />
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="endDate" style={styles.label}>End date</label>
              <input type="date" id="endDate" name="endDate" value={formData.endDate} onChange={handleChange} style={styles.inputBase} />
            </div>
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="reason" style={styles.label}>Reason</label>
            <textarea id="reason" name="reason" rows="5" placeholder="Add a short reason for your request..." value={formData.reason} onChange={handleChange} style={{ ...styles.inputBase, minHeight: 120 }} />
          </div>

          <div style={styles.summaryBox}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginBottom: 8 }}>
              <span style={{ color: '#bdbdbd', fontSize: '0.92rem' }}>Requested duration</span>
              <strong style={{ color: '#d7ff00', fontSize: '1rem' }}>{calculateDays(formData.startDate, formData.endDate)} day(s)</strong>
            </div>
            <p style={{ margin: 0, color: '#9a9a9a', fontSize: '0.9rem', lineHeight: 1.6 }}>Requests are sent to your line manager for review before final approval.</p>
          </div>

          <button type="submit" style={{ ...styles.submitBtn, marginTop: 16 }}>Submit Request</button>
        </form>
      </div>
    </section>
  )
}
