
export default function AnnouncementCard({ title, name, profilePic, date, content }) {
  return (
    <div className="fdm-card announcement-card">


      {/* to seperate pfp from textual announcement content */}
      <div className="announcement-avatar" aria-hidden="true">
          <img src={profilePic} alt={`${name} profile`} className="announcement-avatar-image" />
      </div>

      {/* holds actual announcement content */}
      <div className="announcement-content">
  
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
    </div>
  );
}
