import "./PolicyPage.css";

function ContractsPage() {
  const documents = [
    {
      id: 1,
      title: "Employment Contract",
      updated: "10 Feb 2026",
      size: "704 KB",
      thumbnail: "/images/download (1).jpeg",
    },
    {
      id: 2,
      title: "Internship Agreement",
      updated: "22 Jan 2026",
      size: "98 KB",
      thumbnail: "/images/download.jpeg",
    },
  ];

  return (
    <div className="documents-page">
      <h1 className="documents-title">Contracts</h1>

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

export default ContractsPage;