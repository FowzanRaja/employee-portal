export default function AppShell({ children }) {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-slate-900 p-4">Sidebar</aside>
      <main className="flex-1 bg-slate-800 p-6">{children}</main>
    </div>
  )
}
