import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import pfp3 from '../assets/pfp images/pfp3.png';
import CustomSelect from './CustomSelect';

export default function TicketForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [priority, setPriority] = useState('');

  const [showToast, setShowToast] = useState(false);
  const [timestamp, setTimestamp] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content || !priority) {
      alert('Please fill all fields');
      return;
    }

    const newTicket = {
      id: Date.now(),
      title,
      name: 'Ava Thompson',
      profilePic: pfp3,
      priority,
      status: 'Open',
      date: new Date().toLocaleDateString(),
      content,
    };

    if (onSubmit) {
      onSubmit(newTicket);
    }

    const time = new Date().toLocaleTimeString();
    setTimestamp(time);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
      navigate('/tickets/list', { state: { newTicket } });
    }, 1500);

    // reset form
    setTitle('');
    setContent('');
    setPriority('');
  };

  return (
    <>
      <section className="rounded-2xl border border-[color:var(--fdm-border-strong)] bg-[var(--fdm-surface)] p-5 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-[var(--fdm-text-muted)]">Form</p>
            <h3 className="mt-2 text-2xl font-black text-[var(--fdm-text)]">Create ticket</h3>
          </div>
        </div>

        <div className="mt-4 space-y-4">
          <div>
            <label className="text-sm text-[var(--fdm-text-muted)] mb-2 block">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-lg border border-[color:var(--fdm-border)] bg-[#2D2D2D] px-3 py-2 text-sm text-[var(--fdm-text)]"
            />
          </div>

          <div>
            <label className="text-sm text-[var(--fdm-text-muted)] mb-2 block">Description</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={5}
              className="w-full rounded-lg border border-[color:var(--fdm-border)] bg-[#2D2D2D] px-3 py-2 text-sm text-[var(--fdm-text)] resize-vertical"
            />
          </div>

          <div>
            <CustomSelect
              label="Priority"
              options={[
                { value: 'low', label: 'Low' },
                { value: 'medium', label: 'Medium' },
                { value: 'high', label: 'High' },
              ]}
              value={priority}
              onChange={(v) => setPriority(v)}
            />
          </div>

          <div className="mt-4 flex justify-start">
            <button type="button" onClick={handleSubmit} className="fdm-btn fdm-btn-primary">
              Submit Ticket
            </button>
          </div>
        </div>
      </section>

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
          <span style={{ fontWeight: '600' }}>Ticket created</span>
        </div>
        <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>{timestamp}</p>
      </div>
    </>
  );
}