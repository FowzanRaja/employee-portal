import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Inbox, CheckCircle } from 'lucide-react';
import pfp2 from '../assets/pfp images/pfp2.png';

export default function ITCreateAnnouncementPage() {

  const navigate = useNavigate();

  const [firstSubmit, setFirstSubmit] = useState(true);
  const [showTitleError, setShowTitleError] = useState(false);
  const [showContentError, setShowContentError] = useState(false);
  const [hovered, setHovered] = useState(false);

  const [showToast, setShowToast] = useState(false);
  const [timestamp, setTimestamp] = useState('');

  const createAnnouncement = (e) => {
    e.preventDefault();
    setFirstSubmit(false);

    const formData = new FormData(e.target);
    const title = formData.get('title');
    const content = formData.get('content');

    setShowTitleError(!title || title.length === 0);
    setShowContentError(!content || content.length === 0);

    if (title && content) {

      const newAnnouncement = {
        id: Date.now(),
        title,
        content,
        name: 'IT Team',
        profilePic: pfp2,
        date: new Date().toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        }),
      };

      const time = new Date().toLocaleTimeString();

      setTimestamp(time);
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
        navigate('/it', { state: newAnnouncement });
      }, 1500);
    }
  };

  const checkEmpty = (e) => {
    if (firstSubmit) return;

    if (e.target.name === "title") {
      setShowTitleError(!e.target.value || e.target.value.length === 0);
    } 
    else if (e.target.name === "content") {
      setShowContentError(!e.target.value || e.target.value.length === 0);
    }
  };

  return (
    <section className="programme-page">

      {/* TITLE */}
      <h1 className="programme-page-title" style={{ marginBottom: '1.5rem' }}>
        New Announcement
      </h1>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '2rem',
        }}
      >
        <Link
          to="/it"
          className="fdm-nav-btn"
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <ArrowLeft size={18} />
          Back to IT
        </Link>

        {/* My Announcements link removed — IT announcements page removed */}
      </div>

      {/* HR-STYLE FORM */}
      <div className="announcements-section-container">
        <div className="hr-section" id="hr-announcements">

          <h2 className="hr-section-title">Create announcement</h2>
          <hr className="hr-line"/>

          <form
            onSubmit={createAnnouncement}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="transition-all duration-300 ease-in-out p-2 pb-0 gap-2 flex flex-col items-center justify-top h-full"
          >

            <input
              placeholder='Title'
              name="title"
              onChange={checkEmpty}
              className={`bg-[#1a1a1a] rounded-[12px] p-2 w-full border border-[#303030] focus:outline-none
              ${hovered ? "focus:!border-[#d7ff00]" : ""}
              ${hovered && showTitleError ? "!border-red-500 focus:!border-red-400 focus:!ring-red-400" : ""}`}
            />

            <textarea
              placeholder='Content'
              name="content"
              onChange={checkEmpty}
              className={`bg-[#1a1a1a] rounded-[12px] w-full resize-none p-2 border border-[#303030] focus:outline-none
              ${hovered ? "focus:!border-[#d7ff00]" : ""}
              ${hovered && showContentError ? "!border-red-500 focus:!border-red-400 focus:!ring-red-400" : ""}`}
            />

            <p className={`text-red-500 transition-all duration-300 ease-in-out
              ${hovered && (showTitleError || showContentError)
                ? "max-h-10 opacity-100 translate-y-0"
                : "max-h-0 opacity-0 -translate-y-1"}`}>
              Please complete all fields.
            </p>

            <div className="h-1/4 w-full flex flex-col items-center justify-center">
              <button className="announcement-button">
                Publish announcement
              </button>
            </div>

          </form>
        </div>
      </div>

      {/* TOAST */}
      <div
        style={{
          position: 'fixed',
          top: '2rem',
          left: '50%',
          transform: showToast ? 'translate(-50%, 0)' : 'translate(-50%, -20px)',
          opacity: showToast ? 1 : 0,
          background: 'var(--fdm-surface)',
          border: '1px solid var(--fdm-border)',
          padding: '1rem 1.5rem',
          borderRadius: '0.75rem',
          boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
          transition: 'all 0.3s ease',
          textAlign: 'center'
        }}
      >
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'center' }}>
          <CheckCircle size={18} style={{ color: '#84cc16' }} />
          <span style={{ fontWeight: '600' }}>Announcement created</span>
        </div>
        <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>{timestamp}</p>
      </div>

    </section>
  );
}