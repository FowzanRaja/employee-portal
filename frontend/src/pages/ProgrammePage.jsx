import ProgrammeCard from '../components/ProgrammeCard'
import Title from '../components/Title'
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
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-6 pb-10">
      <Title badge="TRAINING" title="Programmes" subtitle="Choose a training track to open the programme interface." />

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