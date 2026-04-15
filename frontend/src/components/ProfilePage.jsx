import { useState, useRef } from 'react'
import {
  User,
  Mail,
  Phone,
  MapPin,
  Building2,
  Pencil,
  Check,
  X,
  FileText,
  GraduationCap,
  Lock,
  CircleCheck,
  Calendar,
} from 'lucide-react'
import './ProfilePage.css'

const initialProfile = {
  name: 'Ava Thompson',
  email: 'ava.thompson@fdmgroup.com',
  phone: '+44 7700 900123',
  address: '12 Baker Street, London, W1U 6TJ',
  location: 'London, UK',
  role: 'People Operations',
  department: 'People Operations',
  startDate: 'Jan 2024',
}

const documents = [
  {
    id: 1,
    title: 'Employment Contract',
    subtitle: 'Full-time permanent — FDM Group Ltd',
    date: 'Signed 14 Jan 2024',
    icon: FileText,
  },
  {
    id: 2,
    title: 'AWS Cloud Practitioner',
    subtitle: 'Training certificate — Amazon Web Services',
    date: 'Issued 03 Sep 2024',
    icon: GraduationCap,
  },
  {
    id: 3,
    title: 'Agile & Scrum Foundations',
    subtitle: 'Training certificate — FDM Academy',
    date: 'Issued 22 Mar 2024',
    icon: GraduationCap,
  },
]

function EditableRow({ icon: Icon, label, value, fieldKey, onSave }) {
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(value)
  const inputRef = useRef(null)

  const handleEdit = () => {
    setDraft(value)
    setEditing(true)
    setTimeout(() => inputRef.current?.focus(), 50)
  }

  const handleSave = () => {
    onSave(fieldKey, draft)
    setEditing(false)
  }

  const handleCancel = () => {
    setDraft(value)
    setEditing(false)
  }

  return (
    <div className={`pf-row${editing ? ' pf-row--editing' : ''}`}>
      <div className="pf-row-icon">
        <Icon size={16} />
      </div>
      <div className="pf-row-body">
        <span className="pf-row-label">{label}</span>
        {editing ? (
          <input
            ref={inputRef}
            className="pf-row-input"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSave()
              if (e.key === 'Escape') handleCancel()
            }}
          />
        ) : (
          <span className="pf-row-value">{value}</span>
        )}
      </div>
      <div className="pf-row-aside">
        {editing ? (
          <div className="pf-row-edit-actions">
            <button className="pf-action-btn pf-action-btn--confirm" onClick={handleSave} title="Save">
              <Check size={13} />
            </button>
            <button className="pf-action-btn pf-action-btn--cancel" onClick={handleCancel} title="Cancel">
              <X size={13} />
            </button>
          </div>
        ) : (
          <button className="pf-pencil-btn" onClick={handleEdit} title={`Edit ${label}`}>
            <Pencil size={13} />
          </button>
        )}
      </div>
    </div>
  )
}

function ReadOnlyRow({ icon: Icon, label, value }) {
  return (
    <div className="pf-row pf-row--readonly">
      <div className="pf-row-icon">
        <Icon size={16} />
      </div>
      <div className="pf-row-body">
        <span className="pf-row-label">{label}</span>
        <span className="pf-row-value">{value}</span>
      </div>
      <div className="pf-row-aside">
        <span className="pf-lock-badge">
          <Lock size={11} />
          HR only
        </span>
      </div>
    </div>
  )
}

export default function ProfilePage() {
  const [profile, setProfile] = useState(initialProfile)
  const [avatarUrl, setAvatarUrl] = useState(null)
  const fileInputRef = useRef(null)

  const handleSave = (key, value) => {
    setProfile((prev) => ({ ...prev, [key]: value }))
  }

  const initials = profile.name
    .split(' ')
    .map((n) => n[0])
    .join('')

  return (
    <div className="pf-page">
      <div className="pf-container">

        <section className="pf-hero">
          <div className="pf-hero-left">
            <div className="pf-avatar-wrap">
              <div className="pf-avatar">
                {avatarUrl ? (
                  <img src={avatarUrl} alt="Profile" className="pf-avatar-img" />
                ) : (
                  <span className="pf-avatar-initials">{initials}</span>
                )}
              </div>
              <button
                className="pf-avatar-edit-btn"
                onClick={() => fileInputRef.current?.click()}
                title="Change profile picture"
              >
                <Pencil size={12} />
              </button>
              <span className="pf-avatar-status" />
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="pf-avatar-file-input"
                onChange={(e) => {
                  const file = e.target.files?.[0]
                  if (file) setAvatarUrl(URL.createObjectURL(file))
                }}
              />
            </div>

            <div className="pf-hero-text">
              <span className="pf-eyebrow">My Profile</span>
              <h1 className="pf-hero-name">{profile.name}</h1>
              <div className="pf-hero-sub">
                <span>
                  <Building2 size={13} className="pf-sub-icon" />
                  {profile.role}
                </span>
                <span className="pf-hero-dot">•</span>
                <span>
                  <MapPin size={13} className="pf-sub-icon" />
                  {profile.location}
                </span>
              </div>
            </div>
          </div>

          <div className="pf-hero-right">
            <div className="pf-verified-badge">
              <CircleCheck size={15} />
              Verified employee
            </div>
            <div className="pf-joined-badge">
              <Calendar size={13} />
              Joined {profile.startDate}
            </div>
          </div>
        </section>

        <section className="pf-section">
          <div className="pf-section-header">
            <div>
              <p
                className="pf-section-kicker"
                style={{ textTransform: 'none', letterSpacing: 'normal', fontSize: '0.85rem', color: 'var(--fdm-text-muted)', margin: '0 0 5px' }}
              >
                Account details
              </p>
              <h2 className="pf-section-title">Personal information</h2>
            </div>
            <p className="pf-section-hint">Hover any editable field and click the pencil to update</p>
          </div>

          <div className="pf-rows-card">
            <ReadOnlyRow icon={User} label="Full name" value={profile.name} />
            <ReadOnlyRow icon={Mail} label="Email" value={profile.email} />
            <EditableRow icon={Phone} label="Phone" value={profile.phone} fieldKey="phone" onSave={handleSave} />
            <EditableRow icon={MapPin} label="Address" value={profile.address} fieldKey="address" onSave={handleSave} />
            <EditableRow icon={MapPin} label="Location" value={profile.location} fieldKey="location" onSave={handleSave} />
            <ReadOnlyRow icon={Building2} label="Department" value={profile.department} />
          </div>
        </section>

        <section className="pf-section">
          <div className="pf-section-header">
            <div>
              <p
                className="pf-section-kicker"
                style={{ textTransform: 'none', letterSpacing: 'normal', fontSize: '0.85rem', color: 'var(--fdm-text-muted)', margin: '0 0 5px' }}
              >
                Personal documents
              </p>
              <h2 className="pf-section-title">My documents</h2>
            </div>
            <span className="pf-doc-count-badge">{documents.length} files</span>
          </div>

          <div className="pf-rows-card">
            {documents.map((doc, i) => {
              const Icon = doc.icon
              return (
                <div
                  key={doc.id}
                  className={`pf-doc-row${i < documents.length - 1 ? ' pf-doc-row--bordered' : ''}`}
                >
                  <div className="pf-doc-icon">
                    <Icon size={18} />
                  </div>
                  <div className="pf-doc-body">
                    <p className="pf-doc-title">{doc.title}</p>
                    <p className="pf-doc-subtitle">{doc.subtitle}</p>
                    <p className="pf-doc-date">{doc.date}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <p className="pf-doc-note">
            Documents are managed by HR. Contact People Operations to request additions or amendments.
          </p>
        </section>

      </div>
    </div>
  )
}
