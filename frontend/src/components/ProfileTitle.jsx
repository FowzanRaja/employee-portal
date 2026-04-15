import React, { useRef } from 'react'
import { Pencil, Calendar, MapPin, Building2 } from 'lucide-react'

export default function ProfileTitle({ badge = 'My Profile', title = '', subtitle = '', initials = '', department = '', location = '', joined = '', avatar }) {
  const fileRef = useRef(null)
  const openFile = () => fileRef.current?.click()

  return (
    <section className="overflow-hidden rounded-[28px] border border-[color:var(--fdm-border)] p-0">
      <div className="flex flex-col gap-6 bg-[linear-gradient(135deg,rgba(215,255,0,0.09),rgba(255,255,255,0.02)_38%,rgba(255,255,255,0.01))] px-6 py-6 sm:flex-row sm:items-center sm:gap-8">

        <div className="flex items-center gap-5">
          <div className="relative">
            <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-[28px] bg-[rgba(215,255,0,0.15)] text-[var(--fdm-lime)] shadow-[0_12px_32px_rgba(0,0,0,0.3)]">
              {avatar ? (
                <img src={avatar} alt={title} className="h-full w-full object-cover" />
              ) : (
                <span className="text-3xl font-black tracking-[-0.04em]">{initials}</span>
              )}
            </div>
            <button type="button" onClick={openFile} aria-label="Edit profile picture" className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-xl border border-[color:var(--fdm-border)] bg-[rgba(30,30,30,0.95)] text-[var(--fdm-text-soft)] shadow-[0_4px_12px_rgba(0,0,0,0.4)] transition-all duration-150 hover:border-[rgba(215,255,0,0.4)] hover:bg-[rgba(215,255,0,0.12)] hover:text-[var(--fdm-lime)]">
              <Pencil size={13} />
            </button>
            <input ref={fileRef} type="file" accept="image/*" className="hidden" />
          </div>

          <div className="space-y-3">
            <span className="inline-flex items-center rounded-full border border-[rgba(215,255,0,0.22)] bg-[rgba(215,255,0,0.1)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--fdm-lime)]">
              {badge}
            </span>
            <div className="space-y-2">
              <h1 className="text-4xl font-black tracking-[-0.04em] text-[var(--fdm-text)] sm:text-5xl">{title}</h1>
              {subtitle ? <p className="w-full text-sm text-[var(--fdm-text-soft)] sm:text-base">{subtitle}</p> : null}
              <div className="mt-1 flex flex-wrap items-center gap-3">
                {department ? (
                  <span className="flex items-center gap-1.5 text-sm text-[var(--fdm-text-soft)]">
                    <Building2 size={14} />
                    {department}
                  </span>
                ) : null}
                {location ? (
                  <>
                    <span className="h-1 w-1 rounded-full bg-[var(--fdm-text-muted)]" />
                    <span className="flex items-center gap-1.5 text-sm text-[var(--fdm-text-soft)]">
                      <MapPin size={14} />
                      {location}
                    </span>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div className="ml-auto flex shrink-0 flex-col items-end gap-2">
          <div className="flex items-center gap-2 rounded-2xl border border-[color:var(--fdm-border)] bg-[rgba(255,255,255,0.03)] px-4 py-2">
            <Calendar size={14} className="text-[var(--fdm-text-muted)]" />
            <span className="text-xs text-[var(--fdm-text-soft)]">{joined}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
