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

      <button
        type="button"
        aria-label={`Download ${title}`}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[color:var(--fdm-border)] bg-[rgba(255,255,255,0.04)] text-[var(--fdm-text-soft)] opacity-0 transition-all duration-150 group-hover:opacity-100 hover:border-[rgba(255,255,255,0.18)] hover:text-[var(--fdm-text)]"
      >
        <Download size={15} />
      </button>
    </div>
  )
}

function AvatarUpload({ initials }) {
  const [preview, setPreview] = useState(null)
  const fileRef = useRef(null)

  const handleFile = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => setPreview(reader.result)
    reader.readAsDataURL(file)
  }

  return (
    <div className="relative">
      <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-[28px] bg-[rgba(215,255,0,0.15)] text-[var(--fdm-lime)] shadow-[0_12px_32px_rgba(0,0,0,0.3)]">
        {preview ? (
          <img src={preview} alt="Profile" className="h-full w-full object-cover" />
        ) : (
          <span className="text-3xl font-black tracking-[-0.04em]">{initials}</span>
        )}
      </div>

      <button
        type="button"
        onClick={() => fileRef.current?.click()}
        aria-label="Change profile picture"
        className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-xl border border-[color:var(--fdm-border)] bg-[rgba(30,30,30,0.95)] text-[var(--fdm-text-soft)] shadow-[0_4px_12px_rgba(0,0,0,0.4)] transition-all duration-150 hover:border-[rgba(215,255,0,0.4)] hover:bg-[rgba(215,255,0,0.12)] hover:text-[var(--fdm-lime)]"
      >
        <Pencil size={13} />
      </button>

      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFile}
      />

      <span className="absolute bottom-1 left-1 h-4 w-4 rounded-full border-2 border-[var(--fdm-bg,#171717)] bg-[var(--fdm-lime)]" />
    </div>
  )
}

const initialProfile = {
  name: 'Ava Thompson',
  email: 'ava.thompson@fdmgroup.com',
  phone: '+44 7700 900123',
  address: '12 Canary Wharf, London, E14 5AB',
  department: 'People Operations',
  location: 'London, UK',
}

const documents = [
  {
    icon: FileText,
    title: 'Employment Contract',
    subtitle: 'Full-time permanent — FDM Group Ltd',
    date: 'Signed 14 Jan 2022',
    accent: 'text-[var(--fdm-lime)]',
    accentBg: 'bg-[rgba(215,255,0,0.12)]',
  },
  {
    icon: GraduationCap,
    title: 'AWS Cloud Practitioner',
    subtitle: 'Training certificate — Amazon Web Services',
    date: 'Issued 03 Sep 2023',
    accent: 'text-sky-300',
    accentBg: 'bg-[rgba(125,211,252,0.12)]',
  },
  {
    icon: GraduationCap,
    title: 'Agile & Scrum Foundations',
    subtitle: 'Training certificate — FDM Academy',
    date: 'Issued 22 Mar 2023',
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

      <Surface className="overflow-hidden p-0">
        <div className="flex flex-col gap-6 bg-[linear-gradient(135deg,rgba(215,255,0,0.09),rgba(255,255,255,0.02)_38%,rgba(255,255,255,0.01))] px-6 py-6 sm:flex-row sm:items-center sm:gap-8">
          <AvatarUpload initials={initials} />

          <div className="flex-1 space-y-2">
            <span className="inline-flex items-center rounded-full border border-[rgba(215,255,0,0.22)] bg-[rgba(215,255,0,0.1)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--fdm-lime)]">
              My Profile
            </span>
            <h1 className="text-4xl font-black tracking-[-0.04em] text-[var(--fdm-text)]">
              {profile.name}
            </h1>
            <div className="mt-1 flex flex-wrap items-center gap-3">
              <span className="flex items-center gap-1.5 text-sm text-[var(--fdm-text-soft)]">
                <Building2 size={14} />
                {profile.department}
              </span>
              <span className="h-1 w-1 rounded-full bg-[var(--fdm-text-muted)]" />
              <span className="flex items-center gap-1.5 text-sm text-[var(--fdm-text-soft)]">
                <MapPin size={14} />
                {profile.location}
              </span>
            </div>
          </div>

          <div className="flex shrink-0 flex-col items-end gap-2">
            <div className="flex items-center gap-2 rounded-2xl border border-[rgba(215,255,0,0.18)] bg-[rgba(215,255,0,0.08)] px-4 py-2">
              <BadgeCheck size={16} className="text-[var(--fdm-lime)]" />
              <span className="text-xs font-semibold text-[var(--fdm-lime)]">Verified employee</span>
            </div>
            <div className="flex items-center gap-2 rounded-2xl border border-[color:var(--fdm-border)] bg-[rgba(255,255,255,0.03)] px-4 py-2">
              <Calendar size={14} className="text-[var(--fdm-text-muted)]" />
              <span className="text-xs text-[var(--fdm-text-soft)]">Joined Jan 2022</span>
            </div>
          </div>
        </div>
      </Surface>

      <Surface>
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--fdm-text-muted)]">
              Account details
            </p>
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
          <EditableField icon={MapPin} label="Location" value={profile.location} onSave={updateField('location')} />
        </div>
      </Surface>

      <Surface>
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--fdm-text-muted)]">
              Personal documents
            </p>
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

        <p className="mt-4 text-xs text-[var(--fdm-text-muted)]">
          Documents are managed by HR. Contact People Operations to request additions or amendments.
        </p>
      </Surface>
    </section>
  )
}
