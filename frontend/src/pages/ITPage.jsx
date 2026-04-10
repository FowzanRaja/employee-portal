import TicketTypeCard from '../components/TicketManagementCard'
import { Inbox, Archive, Megaphone, PlusCircle } from 'lucide-react';

const IT_SECTIONS = [
  {
    to: '/it/open',
    title: 'Open Tickets',
    description: 'View and manage active support tickets.',
    icon: Inbox,
    buttonText: 'View Tickets',
  },
  {
    to: '/it/archive',
    title: 'Ticket Archive',
    description: 'View resolved and closed tickets.',
    icon: Archive,
    buttonText: 'View Archive',
  },
];

const ANNOUNCEMENT_SECTIONS = [
  {
    to: '/it/announcements',
    title: 'My Announcements',
    description: 'View your announcements.',
    icon: Megaphone,
    buttonText: 'View Announcements',
  },
  {
    to: '/it/announcements/new',
    title: 'Create Announcement',
    description: 'Publish an announcement.',
    icon: PlusCircle,
    buttonText: 'Create New Announcement',
  },
];

export default function ITPage() {
  return (
    <section className="programme-page">
      
      {/* MAIN HEADER */}
      <header className="programme-page-header">
        <h1 className="programme-page-title">IT Management</h1>
        <p className="programme-page-subtitle">
          Manage support tickets and system issues.
        </p>
      </header>

      {/* TICKETS SECTION */}
      <div className="programme-grid">
        {IT_SECTIONS.map((section) => (
          <TicketTypeCard
            key={section.to}
            title={section.title}
            description={section.description}
            to={section.to}
            icon={section.icon}
            buttonText={section.buttonText}
          />
        ))}
      </div>

      {/* ANNOUNCEMENTS HEADER */}
      <header
        className="programme-page-header"
        style={{ marginTop: '3rem' }}
      >
        <h2 className="programme-page-title">IT Announcements</h2>
        <p className="programme-page-subtitle">
          Manage and create internal announcements.
        </p>
      </header>

      {/* ANNOUNCEMENTS GRID */}
      <div className="programme-grid">
        {ANNOUNCEMENT_SECTIONS.map((section) => (
          <TicketTypeCard
            key={section.to}
            title={section.title}
            description={section.description}
            to={section.to}
            icon={section.icon}
            buttonText={section.buttonText}
          />
        ))}
      </div>

    </section>
  )
}