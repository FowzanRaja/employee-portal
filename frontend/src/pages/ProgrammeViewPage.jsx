import { useEffect, useMemo, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import fdmLogo from '../assets/fdmLogo.png'

const PROGRAMME_CONTENT = {
  returns: {
    title: 'Returners Programme',
    sections: [
      {
        title: 'Introduction',
        content: [
          'Welcome to the Returners Programme.',
          'This programme is designed for consultants rejoining the organisation after a career break or internal transition. It provides a structured way to reconnect with internal systems, expectations, and day-to-day workflows.',
          'You will be guided through the core tools, policies, and responsibilities needed to resume work effectively. By the end of the programme, you should feel comfortable navigating the portal, communicating with your team, and completing essential internal processes.',
          'You are expected to actively participate, attend all scheduled sessions, and engage with the materials provided throughout the programme.',
        ],
      },
      {
        title: 'Safety',
        content: [
          'All consultants are expected to follow company health, safety, and data security requirements at all times.',
          'This includes maintaining a safe working environment, whether office-based or remote, and ensuring that all company systems are accessed securely.',
          'Key expectations include:',
          { type: 'list', items: [
            'following IT security protocols when accessing internal systems',
            'protecting confidential company and client information',
            'using approved devices and secure networks',
            'reporting any incidents, risks, or concerns immediately',
          ]},
          'Completion of all mandatory compliance and safety requirements is required before being assigned to active project work.',
        ],
      },
      {
        title: 'Tools',
        content: [
          'During the programme, you will be introduced to the core tools used across the organisation.',
          'These tools support communication, task management, documentation, and internal processes. Familiarity with these systems is essential for effective collaboration and project delivery.',
          'Key tools include:',
          { type: 'list', items: [
            'the internal staff portal for requests, announcements, and policies',
            'the ticketing system for IT support and issue tracking',
            'communication platforms for team collaboration',
            'documentation systems for accessing company resources',
          ]},
          'You are expected to practise using these tools and become confident navigating them independently.',
        ],
      },
      {
        title: 'Tasks',
        content: [
          'Throughout the programme, you will complete a series of structured onboarding tasks.',
          'These tasks are designed to reinforce learning, ensure compliance, and prepare you for project environments.',
          'Typical tasks include:',
          { type: 'list', items: [
            'completing onboarding and compliance modules',
            'reviewing key company policies and documentation',
            'submitting test requests to understand internal workflows',
            'participating in training exercises and simulations',
          ]},
          'All tasks should be completed within the expected timeframe. Progress may be reviewed by your line manager to ensure you are ready to transition into project delivery work.',
        ],
      },
    ],
  },
  graduates: {
    title: 'Graduates Programme',
    sections: [
      {
        title: 'Introduction',
        content: [
          'Welcome to the Graduate Programme.',
          'This programme is designed to support new graduates starting their consultancy journey. It provides a structured introduction to the organisation, its systems, and the expectations of working in a professional environment.',
          'You will be guided through core tools, key processes, and essential skills needed to begin contributing to project work. The programme combines training, practical exercises, and real-world scenarios to build confidence and capability.',
          'You are expected to engage fully with all sessions, ask questions, and take ownership of your learning throughout the programme.',
        ],
      },
      {
        title: 'Safety',
        content: [
          'All consultants are required to follow company health, safety, and data security requirements at all times.',
          'As a new graduate, it is important to understand how to work safely and responsibly within both office and remote environments.',
          'Key expectations include:',
          { type: 'list', items: [
            'following IT security protocols when accessing company systems',
            'protecting confidential company and client data',
            'using approved devices and secure networks',
            'reporting any incidents or concerns immediately',
          ]},
          'Completion of all mandatory compliance training is required before progressing into client-facing or project work.',
        ],
      },
      {
        title: 'Tools',
        content: [
          'During the programme, you will be introduced to the core tools used across the organisation.',
          'These tools are essential for communication, collaboration, and completing day-to-day tasks as a consultant.',
          'Key tools include:',
          { type: 'list', items: [
            'the internal staff portal for submitting requests and accessing policies',
            'the ticketing system for reporting technical issues',
            'communication platforms for working with teams',
            'documentation systems for accessing training and resources',
          ]},
          'You are expected to become confident using these tools, as they will be used regularly in your role.',
        ],
      },
      {
        title: 'Tasks',
        content: [
          'Throughout the programme, you will complete structured onboarding and learning tasks.',
          'These tasks are designed to help you apply what you learn and build the skills required for project work.',
          'Typical tasks include:',
          { type: 'list', items: [
            'completing onboarding and compliance modules',
            'reviewing key policies and internal documentation',
            'participating in training exercises and workshops',
            'completing practical assignments or simulations',
          ]},
          'All tasks should be completed within the given timeframe.',
          'Your progress will be monitored and reviewed to ensure you are ready to move into project delivery.',
        ],
      },
    ],
  },
  xforces: {
    title: 'Ex-Forces Programme',
    sections: [
      {
        title: 'Introduction',
        content: [
          'Welcome to the Ex-Forces Programme.',
          'This programme is designed to support consultants transitioning from military service into a professional consulting environment. It provides a structured introduction to company systems, workplace expectations, and day-to-day processes.',
          'The programme builds on your existing skills and experience, helping you apply them in a corporate setting. You will be guided through key tools, communication methods, and workflows used across the organisation.',
          'You are expected to engage fully with the programme, actively participate in sessions, and apply your experience to new working environments.',
        ],
      },
      {
        title: 'Safety',
        content: [
          'All consultants are required to follow company health, safety, and data security requirements at all times.',
          'While many safety principles may already be familiar, it is important to understand how they apply within a corporate and client-based environment.',
          'Key expectations include:',
          { type: 'list', items: [
            'following IT security protocols when accessing company systems',
            'protecting confidential company and client information',
            'using approved devices and secure networks',
            'reporting any incidents, risks, or concerns immediately',
          ]},
          'Completion of all mandatory compliance requirements is essential before starting project-based work.',
        ],
      },
      {
        title: 'Tools',
        content: [
          'During the programme, you will be introduced to the core tools used across the organisation.',
          'These tools support communication, coordination, and delivery of work within teams and across projects.',
          'Key tools include:',
          { type: 'list', items: [
            'the internal staff portal for requests, announcements, and policies',
            'the ticketing system for reporting issues and tracking support requests',
            'communication platforms for team collaboration',
            'documentation systems for accessing company resources',
          ]},
          'You are expected to become confident using these tools, as they are essential for working effectively within a consulting environment.',
        ],
      },
      {
        title: 'Tasks',
        content: [
          'Throughout the programme, you will complete structured onboarding and transition tasks.',
          'These tasks are designed to help you adapt your existing skills to a corporate environment and prepare for project work.',
          'Typical tasks include:',
          { type: 'list', items: [
            'completing onboarding and compliance modules',
            'reviewing key company policies and expectations',
            'participating in training sessions and practical exercises',
            'completing tasks that simulate real project scenarios',
          ]},
          'All tasks should be completed within the expected timeframe. Progress will be reviewed to ensure you are ready to transition into project delivery roles.',
        ],
      },
    ],
  },
}

export default function ProgrammeViewPage() {
  const { programmeId = '' } = useParams()
  const navigate = useNavigate()
  const programme = useMemo(() => PROGRAMME_CONTENT[programmeId], [programmeId])

  const [activeSectionIndex, setActiveSectionIndex] = useState(0)

  useEffect(() => {
    setActiveSectionIndex(0)
  }, [programmeId])

  if (!programme) {
    return (
      <section className="programme-page">
        <div className="programme-view-fallback">
          <h1 className="programme-page-title">Programme Not Found</h1>
          <p className="programme-page-subtitle">
            The selected programme does not exist.
          </p>
          <Link className="programme-card-button" to="/programme">
            Back To Programmes
          </Link>
        </div>
      </section>
    )
  }

  const sections = programme.sections
  const activeSection = sections[activeSectionIndex]

  const goToSection = (nextIndex) => {
    if (nextIndex < 0 || nextIndex >= sections.length) {
      return
    }

    setActiveSectionIndex(nextIndex)
    setSectionInput(String(nextIndex + 1))
  }

  // page indicator replaces editable section input

  return (
    <section className="programme-page">
      <header className="programme-view-header">
        <button
          type="button"
          className="programme-view-back-button"
          onClick={() => navigate('/programme')}
          aria-label="Back to programmes"
        >
          ← Back To Programmes
        </button>
        <h1 className="programme-page-title">{programme.title}</h1>
        <img src ={fdmLogo} alt="FDM Logo" className="programme-view-logo" />
      </header>

      <div className="programme-view-layout">
        <main className="programme-main-content" aria-live="polite">
          <h2 className="programme-main-title">{activeSection.title}</h2>
          {Array.isArray(activeSection.content) ? (
            activeSection.content.map((para, i) => {
              if (typeof para === 'string') {
                return (
                  <p key={i} className="programme-main-description">{para}</p>
                )
              }

              if (para && para.type === 'list' && Array.isArray(para.items)) {
                return (
                  <ul key={i} className="programme-main-description list-disc list-inside">
                    {para.items.map((it, idx) => (
                      <li key={idx} className="mt-1">{it}</li>
                    ))}
                  </ul>
                )
              }

              return null
            })
          ) : (
            <p className="programme-main-description">{activeSection.content}</p>
          )}

          <nav className="programme-bottom-nav" aria-label="Programme section navigation">
            <button
              type="button"
              className="programme-nav-button"
              onClick={() => goToSection(activeSectionIndex - 1)}
              disabled={activeSectionIndex === 0}
            >
              Back
            </button>

            <div className="programme-section-input-wrap" aria-hidden="true">
              <span className="programme-section-input">Page {activeSectionIndex + 1} of {sections.length}</span>
            </div>

            <button
              type="button"
              className="programme-nav-button"
              onClick={() => goToSection(activeSectionIndex + 1)}
              disabled={activeSectionIndex === sections.length - 1}
            >
              Next
            </button>
          </nav>
        </main>

        <aside className="programme-side-nav" aria-label="Programme sections">
          {sections.map((section, index) => (
            <button
              key={section.title}
              type="button"
              className={`programme-side-nav-item ${
                index === activeSectionIndex ? 'programme-side-nav-item-active' : ''
              }`}
              onClick={() => goToSection(index)}
            >
              {section.title}
            </button>
          ))}
        </aside>
      </div>
    </section>
  )
}