export default function TicketCard({ title, priority, status, date, content }) {
  return (
    <div className="fdm-card">

      {/* HEADER */}
      <div className="flex justify-between items-start">
        <h2 className="fdm-card-title" style={{ marginBottom: '0.5rem' }}>
          {title}
        </h2>

        {/* BADGES */}
        <div className="flex gap-2">

          {/* PRIORITY */}
          <span
            className={`px-2 py-1 text-xs font-semibold rounded ${
              priority === 'high'
                ? 'bg-red-500/20 text-red-300'
                : priority === 'medium'
                ? 'bg-yellow-500/20 text-yellow-300'
                : 'bg-green-500/20 text-green-300'
            }`}
          >
            P: {priority.charAt(0).toUpperCase() + priority.slice(1)}
          </span>

          {/* STATUS */}
          <span
            className={`px-2 py-1 text-xs font-semibold rounded ${
              status === 'Open'
                ? 'bg-blue-500/20 text-blue-300'
                : status === 'In Progress'
                ? 'bg-purple-500/20 text-purple-300'
                : 'bg-gray-500/20 text-gray-300'
            }`}
          >
            S: {(status || 'Open')}
          </span>

        </div>
      </div>

      {/* DATE */}
      <p
        className="fdm-muted"
        style={{ fontSize: '0.75rem', marginBottom: '1rem' }}
      >
        {date}
      </p>

      {/* CONTENT */}
      <p className="fdm-body">{content}</p>
    </div>
  );
}