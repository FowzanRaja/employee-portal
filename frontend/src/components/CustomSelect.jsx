import React, { useState, useRef, useEffect } from 'react'

export default function CustomSelect({ label, options = [], value, onChange }) {
  const normalized = options.map((o) => (typeof o === 'string' ? { value: o, label: o } : o))

  const [open, setOpen] = useState(false)
  const wrapperRef = useRef(null)

  useEffect(() => {
    function handleClick(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) setOpen(false)
    }
    function handleKey(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('mousedown', handleClick)
    window.addEventListener('keydown', handleKey)
    return () => {
      window.removeEventListener('mousedown', handleClick)
      window.removeEventListener('keydown', handleKey)
    }
  }, [])

  const selected = normalized.find((o) => o.value === value) || null

  function handleSelect(v) {
    onChange?.(v)
    setOpen(false)
  }

  return (
    <div className="relative" ref={wrapperRef}>
      {label ? (
        <label className="block text-sm text-[var(--fdm-text-muted)] mb-2">
          {label}
        </label>
      ) : null}

      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((s) => !s)}
        className="w-full flex items-center justify-between gap-3 rounded-2xl bg-[#2D2D2D] border border-[color:var(--fdm-border)] px-3 py-2 text-sm text-[var(--fdm-text)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.45)] transition"
      >
        <span className="truncate">
          {selected ? selected.label : <span className="text-[var(--fdm-text-soft)]">Select...</span>}
        </span>

        <svg
          className={`h-4 w-4 text-[var(--fdm-text-soft)] transform transition-transform duration-150 ${open ? 'rotate-180' : 'rotate-0'}`}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path d="M6 8L10 12L14 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div
        className={`absolute left-0 z-50 mt-2 w-full origin-top-right rounded-lg border border-[color:var(--fdm-border)] bg-[#2D2D2D] shadow-lg transform transition-all duration-150 ease-out ${open ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}
        role="listbox"
        tabIndex={-1}
      >
        <div className="max-h-60 overflow-auto py-1">
          {normalized.map((opt) => {
            const isSelected = String(opt.value) === String(value)
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => handleSelect(opt.value)}
                className={[
                  'w-full text-left px-3 py-2 text-sm text-gray-200 flex items-center justify-between gap-3 rounded-md',
                  'bg-[#2D2D2D]',
                  'hover:bg-[#333333]',
                  isSelected ? 'bg-[rgba(215,255,0,0.08)] font-semibold text-white' : '',
                ].join(' ')}
              >
                <span className="truncate">{opt.label}</span>
                {isSelected ? (
                  <svg className="h-4 w-4 text-[var(--fdm-lime)]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M5 10l3 3 7-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : null}
              </button>
            )
          })}
          {normalized.length === 0 && (
            <div className="px-3 py-2 text-sm text-[var(--fdm-text-muted)]">No options</div>
          )}
        </div>
      </div>
    </div>
  )
}
