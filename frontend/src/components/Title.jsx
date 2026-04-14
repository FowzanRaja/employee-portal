import React from 'react'

export default function Title({ badge = 'FDM Staff Portal', title = '', subtitle = '' }) {
  return (
    <section className="overflow-hidden rounded-[28px] border border-[color:var(--fdm-border)] p-0">
      <div className="flex flex-col gap-6 bg-[linear-gradient(135deg,rgba(215,255,0,0.09),rgba(255,255,255,0.02)_38%,rgba(255,255,255,0.01))] px-6 py-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-3 flex-1">
          <span className="inline-flex items-center rounded-full border border-[rgba(215,255,0,0.22)] bg-[rgba(215,255,0,0.1)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--fdm-lime)]">
            {badge}
          </span>
          <div className="space-y-2">
            <h1 className="text-4xl font-black tracking-[-0.04em] text-[var(--fdm-text)] sm:text-5xl">{title}</h1>
            {subtitle ? (
              <p className="w-full text-sm text-[var(--fdm-text-soft)] sm:text-base">{subtitle}</p>
            ) : null}
          </div>
        </div>

        {/* placeholder for optional controls */}
      </div>
    </section>
  )
}
