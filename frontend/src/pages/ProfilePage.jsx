import { useState, useRef } from 'react'
import {
  Pencil,
  Check,
  X,
  Lock,
  Phone,
  MapPin,
  Mail,
  User,
  Building2,
  FileText,
  GraduationCap,
  Download,
  Calendar,
  BadgeCheck,
} from 'lucide-react'

function Surface({ className = '', children }) {
  return (
    <section
      className={[
        'rounded-[28px] border border-[color:var(--fdm-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.24)]',
        className,
      ].join(' ')}
    >
      {children}
    </section>
  )
}

function EditableField({ icon: Icon, label, value, locked, onSave }) {
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(value)
  const inputRef = useRef(null)

  const handleEdit = () => {
    if (locked) return
    setEditing(true)
    setTimeout(() => inputRef.current?.focus(), 0)
  }

  const handleSave = () => {
    onSave(draft)
    setEditing(false)
  }

  const handleCancel = () => {
    setDraft(value)
    setEditing(false)
  }

  return (
    <div className="flex items-center gap-4 rounded-[20px] border border-[color:var(--fdm-border)] bg-[rgba(255,255,255,0.03)] px-5 py-4 transition-colors duration-200 hover:border-[rgba(255,255,255,0.12)]">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[rgba(255,255,255,0.05)] text-[var(--fdm-text-soft)]">
        <Icon size={17} strokeWidth={2.1} />
      </span>

      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--fdm-text-muted)]">
          {label}
        </p>

        {editing ? (
          <input
            ref={inputRef}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSave()
              if (e.key === 'Escape') handleCancel()
            }}
            className="w-full border-b border-[var(--fdm-lime)] bg-transparent text-sm font-medium text-[var(--fdm-text)] outline-none"
          />
        ) : (
          <p className="truncate text-sm font-medium text-[var(--fdm-text)]">{value}</p>
        )}
      </div>

      <div className="flex shrink-0 items-center gap-2">
        {locked ? (
          <span className="flex items-center gap-1.5 rounded-full border border-[rgba(255,255,255,0.08)] px-3 py-1 text-xs text-[var(--fdm-text-muted)]">
            <Lock size={11} />
            HR only
          </span>
        ) : editing ? (
          <>
            <button
              type="button"
              onClick={handleSave}
              aria-label="Save"
              className="flex h-8 w-8 items-center justify-center rounded-xl bg-[rgba(215,255,0,0.15)] text-[var(--fdm-lime)] transition-colors hover:bg-[rgba(215,255,0,0.25)]"
            >
              <Check size={14} />
            </button>
            <button
              type="button"
              onClick={handleCancel}
              aria-label="Cancel"
              className="flex h-8 w-8 items-center justify-center rounded-xl bg-[rgba(255,255,255,0.05)] text-[var(--fdm-text-soft)] transition-colors hover:bg-[rgba(255,255,255,0.1)]"
            >
              <X size={14} />
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={handleEdit}
            aria-label={`Edit ${label}`}
            className="flex h-8 w-8 items-center justify-center rounded-xl border border-[color:var(--fdm-border)] bg-[rgba(255,255,255,0.05)] text-[var(--fdm-text-muted)] transition-all duration-150 hover:border-[rgba(255,255,255,0.18)] hover:bg-[rgba(255,255,255,0.1)] hover:text-[var(--fdm-text)]"
          >
            <Pencil size={13} />
          </button>
        )}
      </div>
    </div>
  )
}

function DocumentCard({ icon: Icon, title, subtitle, date, accent = 'text-[var(--fdm-lime)]', accentBg = 'bg-[rgba(215,255,0,0.12)]' }) {
  return (
    <div className="group flex items-center gap-4 rounded-[22px] border border-[color:var(--fdm-border)] bg-[rgba(255,255,255,0.03)] px-5 py-4 transition-all duration-200 hover:border-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.05)]">
      <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${accentBg} ${accent}`}>
        <Icon size={20} strokeWidth={1.8} />
      </span>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-[var(--fdm-text)]">{title}</p>
        <p className="mt-0.5 text-xs text-[var(--fdm-text-muted)]">{subtitle}</p>
        <p className="mt-1 text-xs text-[var(--fdm-text-soft)]">{date}</p>
      </div>

      {/* download link - opens file download */}
      <a
        href={typeof title === 'string' ? `/documents/${title.replace(/\s+/g, '_').toLowerCase()}.pdf` : '#'}
        download
        aria-label={`Download ${title}`}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[color:var(--fdm-border)] bg-[rgba(255,255,255,0.04)] text-[var(--fdm-text-soft)] opacity-0 transition-all duration-150 group-hover:opacity-100 hover:border-[rgba(215,255,0,0.18)] hover:text-[var(--fdm-lime)]"
      >
        <Download size={15} />
      </a>
    </div>
  )
}

import ProfileTitle from '../components/ProfileTitle'
import JoelAvatar from '../assets/pfp images/Joel.jpeg'

const initialProfile = {
  name: 'Joel Lima',
  email: 'joel.lima@fdmgroup.com',
  phone: '+44 7700 900123',
  address: '22 Willow Lane, London, N1 7GU',
  department: 'Consultant',
  location: 'London, UK',
}

const documents = [
  {
    icon: FileText,
    title: 'Employment Contract',
    subtitle: 'Full-time permanent — FDM Group Ltd',
    date: 'Signed 14 Jan 2022',
    file: '/documents/sample1.pdf',
    accent: 'text-[var(--fdm-lime)]',
    accentBg: 'bg-[rgba(215,255,0,0.12)]',
  },
  {
    icon: GraduationCap,
    title: 'AWS Cloud Practitioner',
    subtitle: 'Training certificate — Amazon Web Services',
    date: 'Issued 03 Sep 2023',
    file: '/documents/sample2.pdf',
    accent: 'text-sky-300',
    accentBg: 'bg-[rgba(125,211,252,0.12)]',
  },
  {
    icon: GraduationCap,
    title: 'Agile & Scrum Foundations',
    subtitle: 'Training certificate — FDM Academy',
    date: 'Issued 22 Mar 2023',
    file: '/documents/sample3.pdf',
    accent: 'text-emerald-300',
    accentBg: 'bg-[rgba(110,231,183,0.12)]',
  },
]

export default function ProfilePage() {
  const [profile, setProfile] = useState(initialProfile)

  const updateField = (key) => (val) =>
    setProfile((prev) => ({ ...prev, [key]: val }))

  const initials = profile.name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col gap-6 pb-10">

      <ProfileTitle
        badge="My Profile"
        title={profile.name}
        subtitle={''}
        initials={initials}
        department={profile.department}
        location={profile.location}
        joined={'Joined Jan 2022'}
        avatar={JoelAvatar}
      />

      <Surface>
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-[var(--fdm-text-muted)]">Account details</p>
            <h2 className="mt-1 text-2xl font-black tracking-[-0.03em] text-[var(--fdm-text)]">
              Personal information
            </h2>
          </div>
          <p className="max-w-xs text-right text-xs text-[var(--fdm-text-muted)]">
            Click the pencil icon on any editable field to update
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {/* the HR-only locked fields */}
          <EditableField icon={User}      label="Full name"  value={profile.name}       locked />
          <EditableField icon={Mail}      label="Email"      value={profile.email}      locked />
          <EditableField icon={Building2} label="Department" value={profile.department} locked />

          {/* the editable fields */}
          <EditableField icon={Phone}  label="Phone"    value={profile.phone}    onSave={updateField('phone')} />
          <EditableField icon={MapPin} label="Address"  value={profile.address}  onSave={updateField('address')} />
        </div>
      </Surface>

      <Surface>
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-[var(--fdm-text-muted)]">Personal documents</p>
            <h2 className="mt-1 text-2xl font-black tracking-[-0.03em] text-[var(--fdm-text)]">
              My documents
            </h2>
          </div>
          <span className="rounded-full border border-[rgba(215,255,0,0.18)] bg-[rgba(215,255,0,0.08)] px-3 py-1 text-xs font-semibold text-[var(--fdm-lime)]">
            {documents.length} files
          </span>
        </div>

        <div className="flex flex-col gap-3">
          {documents.map((doc) => (
            <DocumentCard key={doc.title} {...doc} />
          ))}
        </div>

        
      </Surface>
    </section>
  )
}
