import "./PolicyPage.css";

function SchedulePage() {
  const documents = [
    {
      id: 1,
      title: "Weekly Shift Schedule",
      updated: "05 Feb 2026",
      size: "512 KB",
      thumbnail: "/images/download (1).jpeg",
    },
    {
      id: 2,
      title: "Holiday Schedule",
      updated: "18 Jan 2026",
      size: "120 KB",
      thumbnail: "/images/download.jpeg",
    },
  ];

  return (
    <div className="documents-page">
      <h1 className="documents-title">Schedule</h1>

      <div className="thumb-grid">
        {documents.map((doc) => (
          <div key={doc.id} className="thumb-card">
            <img src={doc.thumbnail} alt={doc.title} className="thumb-image" />
            <h3 className="thumb-title">{doc.title}</h3>
            <p className="thumb-date">{doc.updated}</p>
            <p className="thumb-size">{doc.size}</p>
            <button className="document-btn">View</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SchedulePage;