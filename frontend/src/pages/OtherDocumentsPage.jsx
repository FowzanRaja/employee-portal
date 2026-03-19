import "./PolicyPage.css";

function OtherDocumentsPage() {
  const documents = [
    {
      id: 1,
      title: "Company Handbook",
      updated: "10 Jan 2026",
      size: "704 KB",
      thumbnail: "/images/download (1).jpeg",
    },
    {
      id: 2,
      title: "IT Guidelines",
      updated: "28 Jan 2026",
      size: "98 KB",
      thumbnail: "/images/download.jpeg",
    },
  ];

  return (
    <div className="documents-page">
      <h1 className="documents-title">Other Documents</h1>

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

export default OtherDocumentsPage;