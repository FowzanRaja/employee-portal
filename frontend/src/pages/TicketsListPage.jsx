import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Plus } from 'lucide-react';
import TicketCard from '../components/TicketCard';
import pfp4 from '../assets/pfp images/pfp3.png';

const initialTickets = [
  {
    id: 1,
    title: 'Laptop not working',
    name: 'Ava Thompson',
    profilePic: pfp4,
    priority: 'medium',
    status: 'Closed',
    date: 'March 17 2026',
    content: 'My laptop keeps crashing when I click internal tools.',
  },
  {
    id: 2,
    title: 'Access request',
    name: 'Ava Thompson',
    profilePic: pfp4,
    priority: 'low',
    status: 'Open',
    date: 'March 15 2026',
    content: 'Requesting access to the internal HR system.',
  },
  {
    id: 3,
    title: 'Lost my soul to VP Online',
    name: 'Ava Thompson',
    profilePic: pfp4,
    priority: 'high',
    status: 'In Progress',
    date: 'March 12 2026',
    content: 'Multiplicities in VP Online have come to claim my soul.',
  },
];

export default function TicketsListPage() {
  const [tickets] = useState(initialTickets);

  return (
    <div className="flex h-screen">
      <main className="flex-1 overflow-y-auto" style={{ padding: '3rem 2rem' }}>
        <div style={{ maxWidth: '850px', marginInline: 'auto' }}>

          <h1 className="fdm-section-title" style={{ marginBottom: '1.5rem' }}>
            Tickets
          </h1>

          {/* NAV BAR */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '2rem',
            }}
          >
            {/* BACK BUTTON */}
            <Link
              to="/tickets"
              className="fdm-button fdm-button-secondary"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <ArrowLeft size={18} />
              Back to Tickets
            </Link>

            {/* NEW TICKET BUTTON */}
            <Link
              to="/tickets/new"
              className="fdm-button"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Plus size={18} />
              New Ticket
            </Link>
          </div>

          {/* LIST */}
          <div className="fdm-stack" style={{ gap: '1.5rem' }}>
            {tickets.map((t) => (
              <TicketCard key={t.id} {...t} />
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}