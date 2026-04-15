import "./PolicyPage.css";
import Title from '../components/Title'

function PolicyPage() {
  const documents = [
    {
      id: 1,
      policyId: "PD-001",
      title: "Company Handbook",
      createdAt: "10 Jan 2026 · 09:00 AM",
      lastModified: "N/A",
      version: "v1.0",
      thumbnail: "/images/download (1).jpeg",
      file: "/documents/sample1.pdf"
    },
    {
      id: 2,
      policyId: "PD-002",
      title: "IT Guidelines",
      createdAt: "28 Jan 2026 · 11:23 AM",
      lastModified: "02 Mar 2026 · 09:15 AM",
      version: "v2.1",
      thumbnail: "/images/download.jpeg",
      file: "/documents/sample2.pdf"
    },
    {
      id: 3,
      policyId: "PD-003",
      title: "Leave Policy",
      createdAt: "05 Feb 2026 · 02:15 PM",
      lastModified: "06 Feb 2026 · 01:00 PM",
      version: "v1.3",
      thumbnail: "/images/download (1).jpeg",
      file: "/documents/sample1.pdf"
    },
    {
      id: 4,
      policyId: "PD-004",
      title: "Code of Conduct",
      createdAt: "01 Feb 2026 · 08:40 AM",
      lastModified: "10 Mar 2026 · 08:40 AM",
      version: "v3.0",
      thumbnail: "/images/download.jpeg",
      file: "/documents/sample2.pdf"
    },
    {
      id: 5,
      policyId: "PD-005",
      title: "Remote Work Policy",
      createdAt: "20 Feb 2026 · 05:30 PM",
      lastModified: "21 Feb 2026 · 12:00 PM",
      version: "v2.0",
      thumbnail: "/images/download (1).jpeg",
      file: "/documents/sample1.pdf"
    },
    {
      id: 6,
      policyId: "PD-006",
      title: "Health & Safety Policy",
      createdAt: "29 Feb 2026 · 10:05 AM",
      lastModified: "03 Mar 2026 · 02:30 PM",
      version: "v2.2",
      thumbnail: "/images/download.jpeg",
      file: "/documents/sample2.pdf"
    },
  ];

  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-6 pb-10">
      <Title badge="DOCUMENTS" title="Policies" subtitle="Company policies and documents" />

      <div className="thumb-grid">
        {documents.map((doc) => (
          <div key={doc.id} className="thumb-card">
            <img src={doc.thumbnail} alt={doc.title} className="thumb-image" />

            <h3 className="thumb-title">{doc.title}</h3>
            <p className="thumb-date">Created at: {doc.createdAt}</p>
            <p className="thumb-date">Last modified: {doc.lastModified}</p>
            <p className="thumb-size">Version: {doc.version ? doc.version.replace(/^v/i, '') : ''}</p>

            <a href={doc.file} download className="document-btn">Download</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PolicyPage;
