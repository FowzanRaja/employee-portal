import React, { useState } from 'react'

export default function BookLeaveForm() {
  const [leaveType, setLeaveType] = useState('Annual Leave')

  return (
    <section className="rounded-2xl border border-[color:var(--fdm-border-strong)] bg-[var(--fdm-surface)] p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-[var(--fdm-text-muted)]">FORM</p>
          <h3 className="mt-2 text-2xl font-black text-[var(--fdm-text)]">Book leave</h3>
        </div>
      </div>

      <div className="mt-4">
        <label className="text-sm text-[var(--fdm-text-muted)] mb-2 block">Leave type</label>
        <select
          value={leaveType}
          onChange={(e) => setLeaveType(e.target.value)}
          className="w-full rounded-lg border border-[color:var(--fdm-border)] bg-[rgba(255,255,255,0.02)] px-3 py-2 text-sm text-[var(--fdm-text)]"
        >
          <option>Annual Leave</option>
          <option>Sick Leave</option>
          <option>Remote Working</option>
        </select>
      </div>
    </section>
  )
}
