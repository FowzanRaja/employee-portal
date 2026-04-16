import TicketTypeCard from '../components/TicketManagementCard'
import { Inbox, Archive, PlusCircle } from 'lucide-react';
import Title from '../components/Title'

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
  {
    to: '/it/announcements/new',
    title: 'Create Announcement',
    description: 'Publish an internal announcement.',
    icon: PlusCircle,
    buttonText: 'Create New Announcement',
  },
];

export default function ITPage() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-6 pb-10">
      <Title badge="IT" title="IT Management" subtitle="View, manage, and resolve support tickets, and publish system announcements." />

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