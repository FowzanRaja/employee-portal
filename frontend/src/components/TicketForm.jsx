import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import pfp3 from '../assets/pfp images/pfp3.png';

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
      <form onSubmit={handleSubmit} className="mb-8">
        <input
          type="text"
          placeholder="Title"
          className="w-full mb-2 p-2 rounded-lg"
          style={{ border: '1px solid var(--fdm-border)', background: 'var(--fdm-surface-2)', color: 'var(--fdm-text)' }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Description"
          className="w-full mb-2 p-2 rounded-lg"
          style={{ border: '1px solid var(--fdm-border)', background: 'var(--fdm-surface-2)', color: 'var(--fdm-text)' }}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <select
          className="w-full mb-4 p-2 rounded-lg"
          style={{ border: '1px solid var(--fdm-border)', background: 'var(--fdm-surface-2)', color: 'var(--fdm-text)' }}
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="" disabled>
            Select priority
          </option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <div className="flex justify-center mt-4">
          <button type="submit" className="announcement-button" style={{ border: '1px solid var(--fdm-border-strong)' }}>
            Submit Ticket
          </button>
        </div>
      </form>

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