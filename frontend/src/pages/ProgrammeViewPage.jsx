import { useEffect, useMemo, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import fdmLogo from '../assets/fdmLogo.png'

const PROGRAMME_CONTENT = {
  returns: {
    title: 'Returns Programme',
    sections: [
      {
        title: 'Introduction',
        content:
          'Welcome to the Returns programme.',
      },
      {
        title: 'Safety',
        content:
          'Safety guidance placeholder.',
      },
      {
        title: 'Tools',
        content:
          'Tools overview placeholder.',
      },
      {
        title: 'Tasks',
        content:
          'Tasks placeholder.',
      },
    ],
  },
  graduates: {
    title: 'Graduates Programme',
    sections: [
      {
        title: 'Introduction',
        content:
          'Welcome to the Graduates programme.',
      },
      {
        title: 'Safety',
        content:
          'Safety guidance placeholder.',
      },
      {
        title: 'Tools',
        content:
          'Tools overview placeholder.',
      },
      {
        title: 'Tasks',
        content:
          'Tasks placeholder.',
      },
    ],
  },
  xforces: {
    title: 'Xforces Programme',
    sections: [
      {
        title: 'Introduction',
        content:
          'Welcome to the Xforces programme.',
      },
      {
        title: 'Safety',
        content:
          'Safety guidance placeholder.',
      },
      {
        title: 'Tools',
        content:
          'Tools overview placeholder.',
      },
      {
        title: 'Tasks',
        content:
          'Tasks placeholder.',
      },
    ],
  },
}

export default function ProgrammeViewPage() {
  const { programmeId = '' } = useParams()
  const navigate = useNavigate()
  const programme = useMemo(() => PROGRAMME_CONTENT[programmeId], [programmeId])

  const [activeSectionIndex, setActiveSectionIndex] = useState(0)
  const [sectionInput, setSectionInput] = useState('1')

  useEffect(() => {
    setActiveSectionIndex(0)
    setSectionInput('1')
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

  const handleSectionInputKeyDown = (event) => {
    if (event.key !== 'Enter') {
      return
    }

    const requestedSection = Number.parseInt(sectionInput, 10)
    if (Number.isNaN(requestedSection)) {
      setSectionInput(String(activeSectionIndex + 1))
      return
    }

    const nextIndex = requestedSection - 1
    if (nextIndex < 0 || nextIndex >= sections.length) {
      setSectionInput(String(activeSectionIndex + 1))
      return
    }

    goToSection(nextIndex)
  }

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
          <p className="programme-main-description">{activeSection.content}</p>

          <nav className="programme-bottom-nav" aria-label="Programme section navigation">
            <button
              type="button"
              className="programme-nav-button"
              onClick={() => goToSection(activeSectionIndex - 1)}
              disabled={activeSectionIndex === 0}
            >
              Back
            </button>

            <label className="programme-section-input-wrap" htmlFor="section-jump-input">
              Section
              <input
                id="section-jump-input"
                className="programme-section-input"
                type="text"
                inputMode="numeric"
                value={sectionInput}
                onChange={(event) => setSectionInput(event.target.value)}
                onKeyDown={handleSectionInputKeyDown}
                aria-label="Jump to section number"
              />
            </label>

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