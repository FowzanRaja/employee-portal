import React from 'react'
import Title from '../components/Title'
import RecentRequests from '../components/RecentRequests'
import BookLeaveForm from '../components/BookLeaveForm'


export default function LeaveBooking() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-6 pb-10">
      <style>{`
/* Styles scoped to the LeaveBooking sandbox to avoid colliding with LeavePage.css */

.leave-card {
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.06),
    rgba(255, 255, 255, 0.025)
  );
  box-shadow:
    0 12px 40px rgba(0, 0, 0, 0.24),
    0 0 0 1px rgba(255, 255, 255, 0.015) inset;
}


.leave-form-group input[type="date"]::-webkit-calendar-picker-indicator {
  filter: invert(1);
}

.leave-form-group input:focus,
.leave-form-group select:focus,
.leave-form-group textarea:focus {
  border-color: rgba(208, 255, 0, 0.45);
  box-shadow: 0 0 0 4px rgba(208, 255, 0, 0.08);
  background: rgba(255, 255, 255, 0.05);
}

.leave-form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.leave-summary-box {
  padding: 18px 18px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.leave-summary-box div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 8px;
}

.leave-summary-box span {
  color: #bdbdbd;
  font-size: 0.92rem;
}

.leave-summary-box strong {
  color: #d7ff00;
  font-size: 1rem;
}

.leave-summary-box p {
  margin: 0;
  color: #9a9a9a;
  font-size: 0.9rem;
  line-height: 1.6;
}

.leave-submit-btn {
  align-self: flex-start;
  border: none;
  border-radius: 16px;
  padding: 14px 24px;
  background: #d7ff00;
  color: #111111;
  font-size: 0.95rem;
  font-weight: 800;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
  box-shadow: 0 10px 24px rgba(208, 255, 0, 0.18);
}

.leave-submit-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 14px 28px rgba(208, 255, 0, 0.22);
}

.leave-submit-btn:active {
  transform: translateY(0);
}
      `}</style>
      <Title
        badge="TIME OFF"
        title="Leave Booking"
        subtitle="Request leave and track the status of your submissions."
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
              <p className="mt-3 text-2xl font-extrabold text-[var(--fdm-text)]">3 days</p>
              <p className="mt-2 text-sm text-[var(--fdm-text-soft)]">Already approved</p>
            </div>
          </div>
        </div>

        <div className="block rounded-2xl border border-[color:var(--fdm-border-strong)] bg-[var(--fdm-surface)] p-5">
          <div className="flex items-start gap-4">
            <div>
              <p className="text-sm text-[var(--fdm-text-muted)]">Remaining</p>
              <p className="mt-3 text-2xl font-extrabold text-[var(--fdm-text)]">22 days</p>
              <p className="mt-2 text-sm text-[var(--fdm-text-soft)]">Including pending review</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <div>
          <BookLeaveForm />
        </div>

        <div>
          <RecentRequests />
        </div>
      </div>

      
    </section>
  )
}
