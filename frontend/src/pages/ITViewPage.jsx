import { useParams, useNavigate } from 'react-router-dom'
import TicketCard from '../components/TicketCard'
import pfp1 from '../assets/pfp images/pfp1.jpg'
import pfp2 from '../assets/pfp images/pfp2.jpg'
import pfp4 from '../assets/pfp images/pfp4.jpg'
import { useState } from 'react'

export default function ITViewPage() {
  const { section } = useParams()
  const navigate = useNavigate()
  const [tickets, setTickets] = useState([
    {
      id: 1,
      title: 'Laptop not working',
      name: 'Ava Thompson',
      profilePic: pfp4,
      priority: 'medium',
      status: 'Open',
      date: 'March 17 2026',
      content: 'My laptop keeps crashing.',
    },
    {
      id: 2,
      title: 'Access request',
      name: 'Ava Thompson',
      profilePic: pfp4,
      priority: 'low',
      status: 'Closed',
      date: 'March 15 2026',
      content: 'Requesting HR access.',
    },
    {
      id: 3,
      title: 'Access issues',
      name: 'Larry Barry',
      profilePic: pfp1,
      priority: 'medium',
      status: 'In Progress',
      date: 'March 6 2026',
      content: 'Unable to access internal tools on my laptop.',
    },
    {
      id: 4,
      title: 'VPN not connecting',
      name: 'Dr Farry Marry',
      profilePic: pfp2,
      priority: 'high',
      status: 'Closed',
      date: 'March 5 2026',
      content: 'VPN connection fails when working remotely.',
    },
    {
      id: 5,
      title: 'Email sync issues',
      name: 'Ava Thompson',
      profilePic: pfp4,
      priority: 'low',
      status: 'Closed',
      date: 'March 3 2026',
      content: 'Email inbox not updating since yesterday.',
    },
  ])

  // UML: updateTicket()
  const handleStatusChange = (id, newStatus) => {
    setTickets((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, status: newStatus } : t
      )
    )
  }

  // Filter logic
  const filteredTickets =
    section === 'open'
      ? tickets.filter((t) => t.status !== 'Closed')
      : tickets.filter((t) => t.status === 'Closed')

  return (
    <section className="programme-page">

      {/* HEADER */}
      <header className="programme-view-header">
        <button
          className="programme-view-back-button"
          onClick={() => navigate('/it')}
        >
          ← Back
        </button>
        <h1 className="programme-page-title">
          {section === 'open' ? 'Open Tickets' : 'Ticket Archive'}
        </h1>
      </header>

      {/* TICKETS */}
      <div className="fdm-stack">
        {filteredTickets.map((t) => (
          <TicketCard
            key={t.id}
            id={t.id}
            title={t.title}
            name={t.name}
            profilePic={t.profilePic}
            priority={t.priority}
            status={t.status}
            date={t.date}
            content={t.content}
            onStatusChange={handleStatusChange}
            isAdmin={true}
          />
        ))}
      </div>
    </section>
  )
}