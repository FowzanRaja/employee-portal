
import "./PolicyPage.css";
import { FileText, ClipboardList, Folder, File } from "lucide-react";
import { useNavigate } from "react-router-dom";

function PolicyPage() {
  const navigate = useNavigate();
  return (
    <div className="policy-container">
      <h1 className="policy-title">Policies</h1>

      <div className="policy-grid">

        <div className="policy-card">
          <div className="policy-header">
            <FileText size={28} />
            <h2>Contracts</h2>
          </div>

          <p className="policy-desc">Employee agreements and legal documents</p>

          <div className="policy-meta">
            <span>Updated: 12 Feb 2026</span>
            <span>Version: v2.1</span>
          </div>

          <button 
            className="policy-btn"
            onClick={() => navigate("/contracts")}
          >
            View
          </button>
        </div>


        <div className="policy-card">
          <div className="policy-header">
            <ClipboardList size={28} />
            <h2>HR Policies</h2>
          </div>
          
          <p className="policy-desc">Company rules, leave policies and employee guidelines</p>

          <div className="policy-meta">
            <span>Updated: 05 Feb 2026</span>
            <span>Version: v1.4</span>
          </div>

          <button 
            className="policy-btn"
            onClick={() => navigate("/hr-policies")}
          >
            View
          </button>
        </div>


        <div className="policy-card">
          <div className="policy-header">
            <File size={28} />
            <h2>Policy Documents</h2>
          </div>

          <p className="policy-desc">Company policies and regulations</p>

          <div className="policy-meta">
            <span>Updated: 01 Feb 2026</span>
            <span>Version: v3.0</span>
          </div>

          <button 
            className="policy-btn"
            onClick={() => navigate("/policy-documents")}
          >
            View
          </button>
        </div>


        <div className="policy-card">
          <div className="policy-header">
            <Folder size={28} />
            <h2>Other Documents</h2>
          </div>

          <p className="policy-desc">Miscellaneous internal documents</p>

          <div className="policy-meta">
            <span>Updated: 20 Jan 2026</span>
            <span>Version: v1.2</span>
          </div>

          <button 
            className="policy-btn"
            onClick={() => navigate("/other-documents")}
          >
            View
          </button>
        </div>

      </div>
    </div>
  );
}

export default PolicyPage;

