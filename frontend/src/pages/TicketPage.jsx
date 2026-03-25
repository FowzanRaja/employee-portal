import { useState } from 'react';
import TicketCard from '../components/TicketCard';
import TicketForm from '../components/TicketForm';
import pfp4 from '../assets/pfp images/pfp4.jpg';

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
    content: 'Multiplicities in VP Online have come to claim my soul, but I have no soul to give. Please help.',
  },
];

export default function TicketPage() {
  const [tickets, setTickets] = useState(initialTickets);

  const handleAddTicket = (ticket) => {
  setTickets([
    {
      id: Date.now(),
      status: 'Open', // default status
      ...ticket,
    },
    ...tickets,
  ]);
};

  return (
    <div className="flex h-screen">
      <main
        className="flex-1 overflow-y-auto"
        style={{ padding: '3rem 2rem' }}
      >
        <div
          style={{
            maxWidth: '850px',
            marginInline: 'auto',
          }}
        >
          <h1 className="fdm-section-title" style={{ marginBottom: '2rem' }}>
            Tickets
          </h1>

          {/* FORM */}
          <TicketForm onSubmit={handleAddTicket} />

          {/* LIST */}
          <div className="fdm-stack" style={{ gap: '1.5rem' }}>
            {tickets.map((t) => (
              <TicketCard
                key={t.id}
                title={t.title}
                name={t.name}
                profilePic={t.profilePic}
                priority={t.priority}
                status={t.status}
                date={t.date}
                content={t.content}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

/* 
==================== TODO ====================

1. Toggle Ticket Form Visibility
- Replace always-visible form with a "Create Ticket" button
- When clicked → show TicketForm component
- Consider using useState (e.g. showForm boolean)
- Default state: form hidden, tickets visible

2. Implement Filtering & Sorting System
- Add controls (dropdown/buttons) to sort tickets by:
  a) Date (most recent first)
  b) Priority (high → low)

- Sorting rules:
  • If sorting by date:
    → Newest tickets appear first

  • If sorting by priority:
    → High > Medium > Low

  • Combined logic:
    → Same date → sort by priority (high → low)
    → Same priority → sort by date (newest first)

- Consider:
  • Creating a sort function
  • Using array.sort() with custom comparator
  • Storing current filter in state (e.g. sortType)

===============================================
*/