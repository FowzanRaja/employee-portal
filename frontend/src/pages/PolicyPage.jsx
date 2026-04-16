import "./PolicyPage.css";
import Title from '../components/Title'

function PolicyPage() {
  const documents = [
    {
      id: 1,
      policyId: "PD-001",
      title: "Company Handbook",
      createdAt: "January 10 2026 · 09:08 AM",
      lastModified: "N/A",
      version: "v1.0",
      thumbnail: "/images/Handbook.png",
      file: "/documents/CompanyHandbook.pdf"
    },
    {
      id: 2,
      policyId: "PD-002",
      title: "IT Guidelines",
      createdAt: "January 28 2026 · 11:23 AM",
      lastModified: "March 2 2026 · 09:14 AM",
      version: "v2.1",
      thumbnail: "/images/IT.png",
      file: "/documents/ITAcceptableUsePolicy.pdf"
    },
    {
      id: 3,
      policyId: "PD-003",
      title: "Leave Policy",
      createdAt: "February 5 2026 · 02:21 PM",
      lastModified: "February 6 2026 · 01:18 PM",
      version: "v1.3",
      thumbnail: "/images/Leave.png",
      file: "/documents/LeavePolicy.pdf"
    },
    {
      id: 4,
      policyId: "PD-004",
      title: "Code of Conduct",
      createdAt: "February 1 2026 · 08:41 AM",
      lastModified: "March 10 2026 · 08:25 AM",
      version: "v3.0",
      thumbnail: "/images/Conduct.png",
      file: "/documents/CodeOfConduct.pdf"
    },
    {
      id: 5,
      policyId: "PD-005",
      title: "Remote Work Policy",
      createdAt: "February 20 2026 · 05:39 PM",
      lastModified: "February 21 2026 · 12:16 PM",
      version: "v2.0",
      thumbnail: "/images/Remote.png",
      file: "/documents/RemoteWorkPolicy.pdf"
    },
    {
      id: 6,
      policyId: "PD-006",
      title: "Health & Safety Policy",
      createdAt: "February 29 2026 · 10:01 AM",
      lastModified: "March 3 2026 · 02:06 PM",
      version: "v2.2",
      thumbnail: "/images/Health.png",
      file: "/documents/HealthAndSafetyPolicy.pdf"
    },
  ];

  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-6 pb-10">
      <Title badge="DOCUMENTS" title="Policies" subtitle="Access company policies and official documents." />

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
