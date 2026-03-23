import "./PolicyPage.css";

function PolicyPage() {
  const documents = [
    {
      id: 1,
      title: "Company Handbook",
      updated: "10 Jan 2026",
      size: "704 KB",
      thumbnail: "/images/download (1).jpeg",
      file: "/documents/sample1.pdf"
    },
    {
      id: 2,
      title: "IT Guidelines",
      updated: "28 Jan 2026",
      size: "98 KB",
      thumbnail: "/images/download.jpeg",
      file: "/documents/sample2.pdf"
    },
    {
      id: 3,
      title: "Leave Policy",
      updated: "05 Feb 2026",
      size: "120 KB",
      thumbnail: "/images/download (1).jpeg",
      file: "/documents/sample1.pdf"
    },
    {
      id: 4,
      title: "Code of Conduct",
      updated: "01 Feb 2026",
      size: "300 KB",
      thumbnail: "/images/download.jpeg",
      file: "/documents/sample2.pdf"
    },
    {
      id: 5,
      title: "Remote Work Policy",
      updated: "15 Feb 2026",
      size: "210 KB",
      thumbnail: "/images/download (1).jpeg",
      file: "/documents/sample1.pdf"
    },
    {
      id: 6,
      title: "Health & Safety Policy",
      updated: "20 Feb 2026",
      size: "180 KB",
      thumbnail: "/images/download.jpeg",
      file: "/documents/sample2.pdf"
    },
  ];

  return (
    <div className="documents-page">
      <h1 className="documents-title">Policies</h1>

      <div className="thumb-grid">
        {documents.map((doc) => (
          <div key={doc.id} className="thumb-card">
            <img
              src={doc.thumbnail}
              alt={doc.title}
              className="thumb-image"
            />

            <h3 className="thumb-title">{doc.title}</h3>
            <p className="thumb-date">{doc.updated}</p>
            <p className="thumb-size">{doc.size}</p>

            <button
              className="document-btn"
              onClick={() => window.open(doc.file, "_blank")}
            >
              Open
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PolicyPage;
