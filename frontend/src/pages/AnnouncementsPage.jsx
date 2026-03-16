import SidebarLayout from '../components/sidebar';
import AnnouncementCard from '../components/AnnouncementCard';

const announcements = [
  {
    title: 'Test 1',
    name: 'HR Department',
    date: 'March 15 2026',
    content:
      'Testing the announcement card component. This is a sample announcement to demonstrate the layout and styling of the announcement cards on the Announcements page. The content can be of varying length and will adjust accordingly.',
  },
  {
    title: 'Test 2',
    name: 'Larry Barry',
    date: 'March 6 2026',
    content:
      'Join us at brunch this Wednesday at 12pm to celebrate sucessfully finishing the FDM portal. ',
  },
  {
    title: 'Test 3',
    name: 'Dr Farry Marry',
    date: 'March 2, 2026',
    content:
      'Testing whether this announcement will show up at the bottom or the top of the page.',
  }
];

export default function AnnouncementsPage() {
  return (
    <div className="flex h-screen">
      <SidebarLayout />

      <main
        className="flex-1 overflow-y-auto"
        style={{ padding: '3rem 2rem' }}
      >
        <div
          style={{
            maxWidth: '850px',
            marginInline: 'auto',
          }}
        >
          <h1 className="fdm-section-title" style={{ marginBottom: '2rem' }}>
            Announcements
          </h1>

          <div className="fdm-stack" style={{ gap: '1.5rem' }}>
            {announcements.map((a, index) => (
              <AnnouncementCard
                key={index}
                title={a.title}
                name={a.name}
                date={a.date}
                content={a.content}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
