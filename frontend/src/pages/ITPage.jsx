import TicketTypeCard from '../components/TicketManagementCard'
import { Inbox, Archive } from 'lucide-react';

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
]

export default function ITPage() {
  return (
    <section className="programme-page">
      <header className="programme-page-header">
        <h1 className="programme-page-title">IT Management</h1>
        <p className="programme-page-subtitle">
          Manage support tickets and system issues.
        </p>
      </header>

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
    </section>
  )
}