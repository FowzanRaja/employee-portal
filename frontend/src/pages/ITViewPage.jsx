import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ArrowLeft, Inbox, Archive } from 'lucide-react'
import TicketCard from '../components/TicketCard'
import Title from '../components/Title'
import SampritiPic from '../assets/pfp images/Sampriti.jpeg'
import JoelPic from '../assets/pfp images/Joel.jpeg'
import FowzanPic from '../assets/pfp images/Fowzan.jpeg'
import AhmadPic from '../assets/pfp images/Ahmad.jpeg'
import SuhanPic from '../assets/pfp images/Suhan.png'
import AlexanderPic from '../assets/pfp images/Alexander.jpeg'
import { useState } from 'react'

export default function ITViewPage() {
  const { section } = useParams()

  const [tickets, setTickets] = useState([
    {
      id: 1,
      title: 'Laptop not working',
      name: 'Sampriti Patro',
      profilePic: SampritiPic,
      priority: 'medium',
      status: 'Open',
      date: 'March 17 2026',
      timestamp: '10:24 AM',
      content: "My laptop keeps crashing.",
    },
    {
      id: 2,
      title: 'Access request',
      name: 'Joel Lima',
      profilePic: JoelPic,
      priority: 'low',
      status: 'Closed',
      date: 'March 15 2026',
      timestamp: '9:05 AM',
      content: 'Requesting HR access.',
    },
    {
      id: 3,
      title: 'Access issues',
      name: 'Fowzan Raja',
      profilePic: FowzanPic,
      priority: 'medium',
      status: 'In Progress',
      date: 'March 6 2026',
      timestamp: '1:42 PM',
      content: 'Unable to access internal tools on my laptop.',
    },
    {
      id: 4,
      title: 'VPN not connecting',
      name: 'Ahmad Ahmadzai',
      profilePic: AhmadPic,
      priority: 'high',
      status: 'Closed',
      date: 'March 5 2026',
      timestamp: '4:10 PM',
      content: 'VPN connection fails when working remotely.',
    },
    {
      id: 5,
      title: 'Email sync issues',
      name: 'Suhan Erbil',
      profilePic: SuhanPic,
      priority: 'low',
      status: 'Closed',
      date: 'March 3 2026',
      timestamp: '8:50 AM',
      content: 'Email inbox not updating since yesterday.',
    },
    {
      id: 6,
      title: 'Software license',
      name: 'Alexander Michael-Iacovou',
      profilePic: AlexanderPic,
      priority: 'low',
      status: 'Open',
      date: 'March 2 2026',
      timestamp: '11:30 AM',
      content: 'Requesting license for new design tool.',
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

      <Title
        badge="IT"
        title={section === 'open' ? 'Open Tickets' : 'Ticket Archive'}
        subtitle={
          section === 'open'
            ? 'Manage active support requests awaiting action.'
            : 'Browse resolved and closed tickets for reference.'
        }
      />

      {/* NAV BAR */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '1rem',
          marginBottom: '2rem',
        }}
      >
        {/* BACK TO IT */}
        <Link
          to="/it"
          className="fdm-nav-btn"
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <ArrowLeft size={18} />
          Back to IT
        </Link>

        {/* SWITCH BUTTON WITH COUNTS */}
        {section === 'open' ? (
          <Link
            to="/it/archive"
            className="fdm-nav-btn"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <Archive size={18} />
            Ticket Archive ({closedCount})
          </Link>
        ) : (
          <Link
            to="/it/open"
            className="fdm-nav-btn"
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