import AnnouncementCard from '../components/AnnouncementCard';
import Title from '../components/Title'
import Ahmad from '../assets/pfp images/Ahmad.jpeg';
import Alexander from '../assets/pfp images/Alexander.jpeg';
import Sampriti from '../assets/pfp images/Sampriti.jpeg';


const announcements = [
  {
    title: 'Scheduled system maintenance – Thursday evening',
    name: 'IT Support',
    profilePic: Alexander,
    date: 'March 15 2026 · 09:59 AM',
    content:
      'We will be carrying out scheduled maintenance on the employee portal this Thursday from 6:00 PM to 8:00 PM. During this time, some features may be temporarily unavailable. Please ensure any important work is saved in advance.',
  },
  {
    title: 'Updated programme schedule released',
    name: 'Ahmad Ahmadzai',
    profilePic: Ahmad,
    date: 'March 6 2026 · 11:23 AM',
    content:
      'The latest programme schedule has now been updated. Please review your assigned sessions to ensure you are prepared for the upcoming week. Contact your line manager if you notice any discrepancies.',
  },
  {
    title: 'Team check-in session',
    name: 'Sampriti Patro',
    profilePic: Sampriti,
    date: 'March 2 2026 · 04:45 PM',
    content:
      'We will be hosting a team check-in session this Friday at 2 PM. This is a great opportunity to share feedback and discuss any challenges you are facing. Attendance is encouraged.',
  }
];

export default function AnnouncementsPage() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-6 pb-10">
      <Title
        badge="INTERNAL COMMUNICATIONS"
        title="Announcements"
        subtitle="Latest updates and notices from across the organisation."
      />

      <div className="space-y-4">
        {announcements.map((a, index) => (
          <AnnouncementCard
            key={index}
            title={a.title}
            name={a.name}
            profilePic={a.profilePic}
            date={a.date}
            content={a.content}
          />
        ))}
      </div>
    </section>
  )
}
