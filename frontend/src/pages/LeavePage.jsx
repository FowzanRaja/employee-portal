import React, { useState } from "react";
import "./LeavePage.css";
import Title from "../components/Title";

const initialRequests = [
  {
    id: 1,
    type: "Annual Leave",
    startDate: "22-03-2026",
    endDate: "24-03-2026",
    days: 3,
    status: "Approved",
    note: "Family trip",
  },
  {
    id: 2,
    type: "Sick Leave",
    startDate: "03-04-2026",
    endDate: "03-04-2026",
    days: 1,
    status: "Pending",
    note: "Medical appointment",
  },
  {
    id: 3,
    type: "Remote Working",
    startDate: "10-04-2026",
    endDate: "10-04-2026",
    days: 1,
    status: "Rejected",
    note: "Requested during restricted period",
  },
];

export default function LeavePage() {
  const [formData, setFormData] = useState({
    leaveType: "Annual Leave",
    startDate: "",
    endDate: "",
    reason: "",
  });

  const [requests, setRequests] = useState(initialRequests);

  const leaveStats = {
    total: 25,
    used: 8,
    pending: 2,
  };

  const remainingDays = leaveStats.total - leaveStats.used - leaveStats.pending;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculateDays = (start, end) => {
    if (!start || !end) return 0;

    const startDate = new Date(start);
    const endDate = new Date(end);

    if (endDate < startDate) return 0;

    const timeDiff = endDate.getTime() - startDate.getTime();
    return Math.floor(timeDiff / (1000 * 60 * 60 * 24)) + 1;
  };

  const handleDeleteRequest = (id) => {
    setRequests((prev) => prev.filter((request) => request.id !== id));
  };  

  const handleClearHistory = () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to clear the request history?"
    );

    if (!isConfirmed) return;

    setRequests([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { leaveType, startDate, endDate, reason } = formData;

    if (!startDate || !endDate || !reason.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    if (new Date(endDate) < new Date(startDate)) {
      alert("End date cannot be earlier than start date.");
      return;
    }

    const newRequest = {
      id: requests.length + 1,
      type: leaveType,
      startDate,
      endDate,
      days: calculateDays(startDate, endDate),
      status: "Pending",
      note: reason,
    };

    setRequests((prev) => [newRequest, ...prev]);

    setFormData({
      leaveType: "Annual Leave",
      startDate: "",
      endDate: "",
      reason: "",
    });
  };

  return (
    <>
        <Title
          badge="TIME OFF"
          title="Leave Booking"
          subtitle="Request annual leave, sick leave, or remote working days and track the status of your recent submissions."
        />

        <section className="leave-stats">
          <div className="leave-stat-card">
            <span className="leave-stat-label">Annual allowance</span>
            <h3>{leaveStats.total} days</h3>
            <p>Allocated for this year</p>
          </div>

          <div className="leave-stat-card">
            <span className="leave-stat-label">Used</span>
            <h3>{leaveStats.used} days</h3>
            <p>Already approved</p>
          </div>

          <div className="leave-stat-card leave-stat-card--accent">
            <span className="leave-stat-label">Remaining</span>
            <h3>{remainingDays} days</h3>
            <p>Including pending review</p>
          </div>
        </section>

        <section className="leave-main-grid">
          <div className="leave-card leave-form-card">
            <div className="leave-card-header">
              <div>
                <p className="leave-card-kicker">NEW REQUEST</p>
                <h2>Book time off</h2>
              </div>
              <span className="leave-badge leave-badge--lime">Live form</span>
            </div>

            <form className="leave-form" onSubmit={handleSubmit}>
              <div className="leave-form-group">
                <label htmlFor="leaveType">Leave type</label>
                <select
                  id="leaveType"
                  name="leaveType"
                  value={formData.leaveType}
                  onChange={handleChange}
                >
                  <option value="Annual Leave">Annual Leave</option>
                  <option value="Sick Leave">Sick Leave</option>
                  <option value="Remote Working">Remote Working</option>
                  <option value="Unpaid Leave">Unpaid Leave</option>
                </select>
              </div>

              <div className="leave-form-row">
                <div className="leave-form-group">
                  <label htmlFor="startDate">Start date</label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                  />
                </div>

                <div className="leave-form-group">
                  <label htmlFor="endDate">End date</label>
                  <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="leave-form-group">
                <label htmlFor="reason">Reason</label>
                <textarea
                  id="reason"
                  name="reason"
                  rows="5"
                  placeholder="Add a short reason for your request..."
                  value={formData.reason}
                  onChange={handleChange}
                />
              </div>

              <div className="leave-summary-box">
                <div>
                  <span>Requested duration</span>
                  <strong>
                    {calculateDays(formData.startDate, formData.endDate)} day(s)
                  </strong>
                </div>
                <p>
                  Requests are sent to your line manager for review before final
                  approval.
                </p>
              </div>

              <button type="submit" className="leave-submit-btn">
                Submit Request
              </button>
            </form>
          </div>

          <div className="leave-side-column">
            <div className="leave-card leave-info-card">
              <div className="leave-card-header">
                <div>
                  <p className="leave-card-kicker">REQUEST FLOW</p>
                  <h2>Approval overview</h2>
                </div>
                <span className="leave-badge">Updated now</span>
              </div>

              <div className="leave-timeline">
                <div className="leave-timeline-item">
                  <span className="leave-timeline-dot"></span>
                  <div>
                    <h4>Request submitted</h4>
                    <p>Your form is logged in the portal instantly.</p>
                  </div>
                </div>

                <div className="leave-timeline-item">
                  <span className="leave-timeline-dot"></span>
                  <div>
                    <h4>Manager review</h4>
                    <p>Your line manager checks dates and team availability.</p>
                  </div>
                </div>

                <div className="leave-timeline-item">
                  <span className="leave-timeline-dot"></span>
                  <div>
                    <h4>Status update</h4>
                    <p>You will see Approved, Pending, or Rejected below.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="leave-card leave-requests-card">
              <div className="leave-card-header">
                <div>
                  <p className="leave-card-kicker">HISTORY</p>
                  <h2>Recent requests</h2>
                </div>
                <div className="leave-history-header-actions">
                  <span className="leave-badge">{requests.length} items</span>

                  <button
                    type="button"
                    className="leave-clear-btn"
                    onClick={handleClearHistory}
                  >
                    Clear history
                  </button>
                </div>
              </div>

              <div className="leave-request-list">
                {requests.map((request) => (
                  <div className="leave-request-item" key={request.id}>
                    <div className="leave-request-top">
                      <div>
                        <h4>{request.type}</h4>
                        <p>
                          {request.startDate} → {request.endDate}
                        </p>
                      </div>

                      <div className="leave-request-actions">
                        <span
                          className={`leave-status ${
                            request.status === "Approved"
                              ? "leave-status-approved"
                              : request.status === "Pending"
                              ? "leave-status-pending"
                              : "leave-status-rejected"
                          }`}
                        >
                          {request.status}
                        </span>

                        <button
                          type="button"
                          className="leave-delete-btn"
                          onClick={() => handleDeleteRequest(request.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>

                    <div className="leave-request-meta">
                      <span>{request.days} day(s)</span>
                      <span>{request.note}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
    </>
  );
}