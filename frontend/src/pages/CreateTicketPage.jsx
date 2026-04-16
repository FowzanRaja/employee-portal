import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Inbox } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import TicketForm from '../components/TicketForm';
import Title from '../components/Title'

export default function CreateTicketPage() {

  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);
  const [timestamp, setTimestamp] = useState('');

  const handleAddTicket = (ticket) => {
    const time = new Date().toLocaleTimeString();

    setTimestamp(time);
    setShowToast(true);

    // wait --> hide + redirect
    setTimeout(() => {
      setShowToast(false);
      navigate('/tickets/list');
    }, 1500);
  };

  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-6 pb-10">
      <Title badge="IT Support" title="Create Ticket" subtitle="Submit a support request." />

      {/* NAV BAR */}
      <div className="flex items-center justify-between">
        <Link
          to="/tickets"
          className="fdm-nav-btn"
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderRadius: '12px', background: '#262626', border: '1px solid var(--fdm-border-strong)' }}
        >
          <ArrowLeft size={18} />
          Back to Tickets
        </Link>

        <Link
          to="/tickets/list"
          className="fdm-nav-btn"
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderRadius: '12px', background: '#262626', border: '1px solid var(--fdm-border-strong)' }}
        >
          <Inbox size={18} />
          My Tickets
        </Link>
      </div>

      {/* FORM */}
      <TicketForm onSubmit={handleAddTicket} />

      {/* TOAST */}
      <div
        style={{
          position: 'fixed',
          top: '2rem',
          left: '50%',

          // animation
          transform: showToast
            ? 'translate(-50%, 0)'
            : 'translate(-50%, -20px)',
          opacity: showToast ? 1 : 0,
          pointerEvents: showToast ? 'auto' : 'none',

          // styling
          background: 'var(--fdm-surface)',
          border: '1px solid var(--fdm-border)',
          padding: '1rem 1.5rem',
          borderRadius: '0.75rem',
          boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
          zIndex: 1000,
          textAlign: 'center',
          minWidth: '250px',

          transition: 'all 0.3s ease',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <CheckCircle size={18} color="#84cc16" />
            <span style={{ fontWeight: '600' }}>Ticket created</span>
        </div>
        <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>
          {timestamp}
        </p>
      </div>
    </section>
  );
}