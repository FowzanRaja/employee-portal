import AnnouncementCard from '../components/AnnouncementCard';
import Title from '../components/Title'
import pfp1 from '../assets/pfp images/pfp1.png';
import pfp2 from '../assets/pfp images/pfp2.png';
import pfp3 from '../assets/pfp images/pfp3.png';


const announcements = [
  {
    title: 'Test 1',
    name: 'HR Department',
    profilePic: pfp3,
    date: 'March 15 2026',
    content:
      'Testing the announcement card component. This is a sample announcement to demonstrate the layout and styling of the announcement cards on the Announcements page. The content can be of varying length and will adjust accordingly.',
  },
  {
    title: 'Test 2',
    name: 'Larry Barry',
    profilePic: pfp1,
    date: 'March 6 2026',
    content:
      'Join us at brunch this Wednesday at 12pm to celebrate sucessfully finishing the FDM portal. ',
  },
  {
    title: 'Test 3',
    name: 'Dr Farry Marry',
    profilePic: pfp2,
    date: 'March 2, 2026',
    content:
      'Testing whether this announcement will show up at the bottom or the top of the page.',
  }
];

export default function AnnouncementsPage() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-6 pb-10">
      <Title
        badge="FDM Staff Portal"
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
