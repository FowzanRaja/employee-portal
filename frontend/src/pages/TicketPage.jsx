import TicketTypeCard from '../components/TicketManagementCard'
import { Inbox, PlusCircle } from 'lucide-react';
import Title from '../components/Title'

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

export default function TicketPage() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-6 pb-10">
      <Title
        badge="IT Support"
        title="Ticket Management"
        subtitle="Submit, track, and manage your support requests."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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