export default function AnnouncementCard({ title, name, date, content }) {
  return (
    <div className="fdm-card">
      <h2 className="fdm-card-title" style={{ marginBottom: '0.5rem' }}>
        {title}
      </h2>
      <p className="fdm-muted" style={{ fontSize: '1rem' }}>
        Posted by: {name}
      </p>
      <p className="fdm-muted" style={{ fontSize: '0.75rem', marginBottom: '1rem' }}>
        {date}
      </p>
      <p className="fdm-body">{content}</p>
    </div>
  );
}
