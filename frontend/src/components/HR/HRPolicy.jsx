import { Link } from 'react-router-dom';
import { ArrowLeft} from 'lucide-react';
import { useState } from 'react';

export default function HRPolicies() {
    const [firstSubmit, setFirstSubmit] = useState(true);
    const [file,setFile] = useState(null);
    const [title, setTitle] = useState("");
    const [version, setVersion] = useState("");
    const [showTitleError, setShowTitleError] = useState(false);
    const [showVersionError, setShowVersionError] = useState(false);
    const [showFileError, setShowFileError] = useState(false);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        if (!firstSubmit){setShowTitleError(!e.target.value || e.target.value.length === 0);}
    }

    const handleVersionChange = (e) => {
        setVersion(e.target.value);
        if (!firstSubmit){setShowVersionError(!e.target.value || e.target.value.length === 0);}
    }

    const handleFile = (e) => {
        setFile(e.target.files[0]);
        if (!firstSubmit){setShowFileError(!e.target.files[0]);}
    }

    const handlePublish = (e) => {
        e.preventDefault();
        setFirstSubmit(false);

        setShowTitleError(!title || title.length === 0);
        setShowVersionError(!version || version.length === 0);
        setShowFileError(!file);

        let canSubmit = (!(!title || title.length === 0) && !(!version || version.length === 0) && file);
        if (canSubmit) {
            createAnnouncement(title,version);
        }
    }

    const createAnnouncement = (title, version) => {
        setDocuments(prev => [
        ...prev,
        {
            id: prev.length + 1,
            policyId: `PD-00${prev.length + 1}`,
            title,
            version,
            createdAt: new Date().toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
            }),
            thumbnail: "/images/download (1).jpeg"
        }
        ]);
    }

    const modify = (id) => {

    }
    
    const [documents,setDocuments] = useState([
        {
            id: 1,
            policyId: "PD-001",
            title: "Company Handbook",
            createdAt: "10 Jan 2026",
            version: "v1.0",
            thumbnail: "/images/download (1).jpeg",
        },
        {
            id: 2,
            policyId: "PD-002",
            title: "IT Guidelines",
            createdAt: "28 Jan 2026",
            version: "v2.1",
            thumbnail: "/images/download.jpeg",
        },
        {
            id: 3,
            policyId: "PD-003",
            title: "Leave Policy",
            createdAt: "05 Feb 2026",
            version: "v1.3",
            thumbnail: "/images/download (1).jpeg",
        },
        {
            id: 4,
            policyId: "PD-004",
            title: "Code of Conduct",
            createdAt: "01 Feb 2026",
            version: "v3.0",
            thumbnail: "/images/download.jpeg",
        },
        {
            id: 5,
            policyId: "PD-005",
            title: "Remote Work Policy",
            createdAt: "20 Feb 2026",
            version: "v2.0",
            thumbnail: "/images/download (1).jpeg",
        },
        {
            id: 6,
            policyId: "PD-006",
            title: "Health & Safety Policy",
            createdAt: "29 Feb 2026",
            version: "v2.2",
            thumbnail: "/images/download.jpeg",
        },
    ]);

    return(
        <div className="HR-policy-page-container">
            <div className="flex flex-row items-center justify-between w-full">
                <header className="programme-page-header">
                    <h1 className="programme-page-title">Policies</h1>
                    <p className="programme-page-subtitle">  Publish new or modify existing policy documents. </p>
                </header>
                <Link
                    to="/hr"
                    className="fdm-nav-btn"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', height: 'fit-content', justifyContent: 'center' }}
                >
                    <ArrowLeft size={18} />
                    Back to HR Dashboard
                </Link>
            </div>

            <div className="HR-policy-cards-container">
                <div className="hr-section HR-policy-card" id="existing-docs">
                    <h2 className="hr-section-title"> Modify existing documents </h2>
                    <hr className="hr-line"/>
                          <div className="thumb-grid-HR">
                            {documents.map((doc) => (
                            <div key={doc.id} className="thumb-card-HR">
                                <img
                                src={doc.thumbnail}
                                alt={doc.title}
                                className="thumb-image"
                                />

                                <h3 className="thumb-title">{doc.title}</h3>
                                <p className="thumb-date">Created at: {doc.createdAt}</p>
                                <p className="thumb-size">Version: {doc.version}</p>
                                <p className="thumb-id">ID: {doc.policyId}</p>

                                <button onClick={() => modify(doc.id)} className="document-btn">
                                Modify
                                </button>
                            </div>
                            ))}
                        </div>
                </div>

                <div className="hr-section HR-policy-card" id="new-docs">
                    <h2 className="hr-section-title"> Publish new document </h2>
                    <hr className="hr-line"/>
                    <div className="new-doc-container" onMouseLeave={() => document.activeElement.blur()}> 
                        <input  autoComplete="off" className={`${!firstSubmit && showTitleError ? "policy-inputs-error": "policy-inputs"}`} type="text" name="title" placeholder='Title' onChange={handleTitleChange}/>
                        <input  autoComplete="off" className={`${!firstSubmit && showVersionError ? "policy-inputs-error" : "policy-inputs"}`} type="text" name="version" placeholder='Version  -  e.g. v1.2'onChange={handleVersionChange}/>
                        <div className="file-btn-container">
                            <button className={`${!firstSubmit && showFileError ? "fdm-nav-btn-error": "fdm-nav-btn"}`} id="file-btn">  
                                <label id="upload-label"> Upload document <input  className="hidden" type="file" onChange={handleFile} placeholder='Upload file' accept=".pdf,.docx,.doc,.txt"/> </label>
                            </button>
                            <p className={`text-[var(--fdm-text-muted)] transition-all duration-300 ease-in-out ${file ? "max-h-10 opacity-100 translate-y-0":"max-h-0 opacity-0 -translate-y-1"}`}> File uploaded: {file ? file.name : ""} </p>
                        </div>
                        <p className={`text-red-500 transition-all duration-300 ease-in-out ${showFileError || showTitleError || showVersionError ? "max-h-10 opacity-100 translate-y-0":"max-h-0 opacity-0 -translate-y-1"}`}> Please complete all fields.</p>

                        <div className="mt-2 h-1/4 w-full flex flex-col items-center justify-center"> <button className="announcement-button" onClick={handlePublish}> Publish announcement </button> </div>
                    </div>

                </div>
                
            </div>
        </div>
    )
}