import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft, Plus } from 'lucide-react';
import TicketCard from '../components/TicketCard';
import JoelPic from '../assets/pfp images/Joel.jpeg';
import Title from '../components/Title'

const initialTickets = [
  {
    id: 1,
    title: 'Schedule page loads but shows no sessions',
    name: 'Joel Lima',
    profilePic: JoelPic,
    priority: 'low',
    status: 'Open',
    date: 'Apr 14 2026',
    timestamp: '09:59 AM',
    content:
      'The schedule page is opening correctly, but it is not displaying any sessions for me. I am expected to have sessions scheduled this week, but nothing is appearing. I have refreshed the page and logged out/in, but the issue is still there.',
  },
  {
    id: 2,
    title: 'Laptop not working when accessing internal systems',
    name: 'Joel Lima',
    profilePic: JoelPic,
    priority: 'high',
    status: 'Closed',
    date: 'Apr 12 2026',
    timestamp: '02:11 PM',
    content:
      'My laptop is not functioning properly when I try to access internal systems. It becomes unresponsive and prevents me from completing my work. I have restarted the device, but the issue persists and I am unable to continue working.',
  },
  {
    id: 3,
    title: 'Unable to access programme page (possible outage)',
    name: 'Joel Lima',
    profilePic: JoelPic,
    priority: 'medium',
    status: 'Closed',
    date: 'Apr 11 2026',
    timestamp: '08:47 AM',
    content:
      'I am currently unable to access the programme page as it is not loading properly. I have checked with a few colleagues and they are experiencing the same issue, so it may be a wider system problem. This is affecting our ability to prepare for upcoming sessions.',
  },
];

export default function TicketsListPage() {
  const location = useLocation();
  const newTicket = location.state?.newTicket;

  const [tickets, setTickets] = useState(initialTickets);

  // inject new ticket from navigation
  useEffect(() => {
    if (newTicket) {
      setTickets((prev) => {
        const exists = prev.some((t) => t.id === newTicket.id);
        return exists ? prev : [newTicket, ...prev];
      });
    }
  }, [newTicket]);

  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-6 pb-10">
      <Title badge="IT Support" title="View Tickets" subtitle="Browse your submitted support requests." />

      {/* NAV BAR */}
      <div className="flex items-center justify-between">
        <Link
          to="/tickets"
          className="fdm-nav-btn"
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderRadius: '12px', background: '#262626' }}
        >
          <ArrowLeft size={18} />
          Back to Tickets
        </Link>

        <Link
          to="/tickets/new"
          className="fdm-nav-btn"
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderRadius: '12px', background: '#262626' }}
        >
          <Plus size={18} />
          New Ticket
        </Link>
      </div>

      <div className="fdm-stack" style={{ gap: '1.5rem' }}>
        {tickets.map((t) => (
          <TicketCard key={t.id} {...t} />
        ))}
      </div>
    </section>
  );
}