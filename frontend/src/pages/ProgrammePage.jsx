import ProgrammeCard from '../components/ProgrammeCard'
import { 
    IterationCw,
    Medal,
    BookText,
} from 'lucide-react';

const PROGRAMMES = [
  {
    slug: 'returns',
    title: 'Returns',
    description:
      'For returners...',
    icon: IterationCw,
  },
  {
    slug: 'graduates',
    title: 'Graduates',
    description:
      'For recent graduates...',
    icon: BookText,
  },
  {
    slug: 'xforces',
    title: 'Xforces',
    description:
      'For ex-forces consultants...',
    icon: Medal,
  },
]

export default function ProgrammePage() {
  return (
    <section className="programme-page">
      <header className="programme-page-header">
        <h1 className="programme-page-title">Programmes</h1>
        <p className="programme-page-subtitle">
          Choose a training track to open the programme interface.
        </p>
      </header>

      <div className="programme-grid" role="list">
        {PROGRAMMES.map((programme) => (
          <ProgrammeCard
            key={programme.slug}
            title={programme.title}
            description={programme.description}
            slug={programme.slug}
            icon={programme.icon}
          />
        ))}
      </div>
    </section>
  )
}