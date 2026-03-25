export default function TicketCard({ title, name, profilePic, priority, status, date, content }) {
  return (
    <div className="fdm-card announcement-card">

      {/* AVATAR */}
      <div className="announcement-avatar" aria-hidden="true">
        <img
          src={profilePic || "/default-avatar.png"}
          alt={`${name || "User"} profile`}
          className="announcement-avatar-image"
        />
      </div>

      {/* CONTENT */}
      <div className="announcement-content">

        {/* TITLE + BADGES */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          
          <h2 className="fdm-card-title" style={{ marginBottom: '0.5rem' }}>
            {title}
          </h2>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            
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
              {priority.charAt(0).toUpperCase() + priority.slice(1)}
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
              {status || 'Open'}
            </span>

          </div>
        </div>

        {/* AUTHOR */}
        <p className="fdm-muted" style={{ fontSize: '1rem' }}>
          Created by: {name}
        </p>

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
    </div>
  );
}