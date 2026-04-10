import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ArrowLeft, Inbox, Archive } from 'lucide-react'
import TicketCard from '../components/TicketCard'
import pfp1 from '../assets/pfp images/pfp1.png'
import pfp2 from '../assets/pfp images/pfp2.png'
import pfp3 from '../assets/pfp images/pfp3.png'
import { useState } from 'react'

export default function ITViewPage() {
  const { section } = useParams()

  const [tickets, setTickets] = useState([
    {
      id: 1,
      title: 'Laptop not working',
      name: 'Ava Thompson',
      profilePic: pfp3,
      priority: 'medium',
      status: 'Open',
      date: 'March 17 2026',
      content: 'My laptop keeps crashing.',
    },
    {
      id: 2,
      title: 'Access request',
      name: 'Ava Thompson',
      profilePic: pfp3,
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
      profilePic: pfp3,
      priority: 'low',
      status: 'Closed',
      date: 'March 3 2026',
      content: 'Email inbox not updating since yesterday.',
    },
  ])

  // updateTicket()
  const handleStatusChange = (id, newStatus) => {
    setTickets((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, status: newStatus } : t
      )
    )
  }

  // COUNTS for nav buttons
  const openCount = tickets.filter((t) => t.status !== 'Closed').length
  const closedCount = tickets.filter((t) => t.status === 'Closed').length

  // Filter logic
  const filteredTickets =
    section === 'open'
      ? tickets.filter((t) => t.status !== 'Closed')
      : tickets.filter((t) => t.status === 'Closed')

  return (
    <section className="programme-page">

      {/* TITLE */}
      <h1 className="programme-page-title" style={{ marginBottom: '1.5rem' }}>
        {section === 'open' ? 'Open Tickets' : 'Ticket Archive'}
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
        {/* BACK TO IT */}
        <Link
          to="/it"
          className="fdm-button fdm-button-secondary"
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <ArrowLeft size={18} />
          Back to IT
        </Link>

        {/* SWITCH BUTTON WITH COUNTS */}
        {section === 'open' ? (
          <Link
            to="/it/archive"
            className="fdm-button"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <Archive size={18} />
            Ticket Archive ({closedCount})
          </Link>
        ) : (
          <Link
            to="/it/open"
            className="fdm-button"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <Inbox size={18} />
            Open Tickets ({openCount})
          </Link>
        )}
      </div>

      {/* TICKETS */}
      <div className="fdm-stack">
        {filteredTickets.map((t) => (
          <div
            key={t.id}
            className="
              fdm-card-soft
              transition-all duration-200
              hover:-translate-y-1
              hover:ring-1 hover:ring-[var(--fdm-lime-soft)]
              cursor-pointer
            "
          >

            {/* Ticket display */}
            <TicketCard {...t} />

            {/* ADMIN BUTTONS */}
            <div className="mt-4 flex items-center justify-between">

              <p className="text-base text-gray-300 font-semibold tracking-wide">
                Update Status
              </p>

              <div className="flex gap-2">

                {t.status !== 'Open' && (
                  <button
                    onClick={() => handleStatusChange(t.id, 'Open')}
                    className="px-3 py-1 text-sm rounded-lg border border-blue-400/30 text-blue-300 
                               hover:bg-blue-400/10 transition"
                  >
                    Open
                  </button>
                )}

                {t.status !== 'In Progress' && (
                  <button
                    onClick={() => handleStatusChange(t.id, 'In Progress')}
                    className="px-3 py-1 text-sm rounded-lg border border-purple-400/30 text-purple-300 
                               hover:bg-purple-400/10 transition"
                  >
                    In Progress
                  </button>
                )}

                {t.status !== 'Closed' && (
                  <button
                    onClick={() => handleStatusChange(t.id, 'Closed')}
                    className="px-3 py-1 text-sm rounded-lg border border-red-400/30 text-red-300 
                               hover:bg-red-400/10 transition"
                  >
                    Close
                  </button>
                )}

              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}