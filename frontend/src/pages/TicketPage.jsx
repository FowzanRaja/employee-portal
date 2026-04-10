import TicketTypeCard from '../components/TicketManagementCard'
import { Inbox, PlusCircle } from 'lucide-react';

const TICKET_SECTIONS = [
  {
    to: '/tickets/list',
    title: 'My Tickets',
    description: 'View and manage submitted tickets.',
    icon: Inbox,
    buttonText: 'View Tickets',
  },
  {
    to: '/tickets/new',
    title: 'Create Ticket',
    description: 'Submit a new support request.',
    icon: PlusCircle,
    buttonText: 'Create New Ticket',
  },
]

export default function TicketsPage() {
  return (
    <section className="programme-page">
      <header className="programme-page-header">
        <h1 className="programme-page-title">Ticket Management</h1>
        <p className="programme-page-subtitle">
          Manage and create support tickets.
        </p>
      </header>

      <div className="programme-grid">
        {TICKET_SECTIONS.map((section) => (
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