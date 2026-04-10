import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft, Plus } from 'lucide-react';
import AnnouncementCard from '../components/AnnouncementCard';
import pfp2 from '../assets/pfp images/pfp2.png';

const initialAnnouncements = [
  {
    id: 1,
    title: 'System Maintenance',
    name: 'IT Team',
    profilePic: pfp2,
    date: '10 April 2026',
    content: 'System will be down tonight from 10PM.',
  },
  {
    id: 2,
    title: 'New Feature Released',
    name: 'IT Team',
    profilePic: pfp2,
    date: '8 April 2026',
    content: 'We have launched the new dashboard.',
  },
  {
    id: 3,
    title: 'Security Update',
    name: 'IT Security',
    profilePic: pfp2,
    date: '5 April 2026',
    content: 'All staff must reset their passwords by Friday.',
  },
];

export default function ITAnnouncementsPage() {
  const location = useLocation();
  const [announcements, setAnnouncements] = useState(initialAnnouncements);

  // Prevent duplicates when coming from create page
  useEffect(() => {
    if (location.state && location.state.id) {
      setAnnouncements((prev) => {
        const exists = prev.some(a => a.id === location.state.id);
        if (exists) return prev;
        return [location.state, ...prev];
      });
    }
  }, [location.state]);

  return (
    <section className="programme-page">

      {/* TITLE */}
      <h1
        className="programme-page-title"
        style={{ marginBottom: '1.5rem' }}
      >
        My Announcements
      </h1>

      {/* NAV */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
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

        {/* NEW ANNOUNCEMENT */}
        <Link
          to="/it/announcements/new"
          className="fdm-nav-btn"
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <Plus size={18} />
          New Announcement
        </Link>
      </div>

      {/* LIST */}
      <div className="fdm-stack" style={{ gap: '1.5rem' }}>
        {announcements.map((a) => (
          <AnnouncementCard key={a.id} {...a} />
        ))}
      </div>

    </section>
  );
}