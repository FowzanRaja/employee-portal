import {
  CalendarDays,
  GraduationCap,
  LayoutDashboard,
  Megaphone,
  ShieldCheck,
  Ticket,
  UserCircle,
  CalendarCheck,
  MessageSquare,
} from 'lucide-react'

import JoelAvatar from '../assets/pfp images/Joel.jpeg'

export const SIDEBAR_EXPANDED_WIDTH = 280
// increased collapsed width to give slightly more room when collapsed
export const SIDEBAR_COLLAPSED_WIDTH = 112

export const exampleUser = {
  name: 'Joel Lima',
  role: 'Consultant',
  avatar: JoelAvatar,
}

export const navItems = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/messages', label: 'Messaging', icon: MessageSquare },
  { to: '/tickets', label: 'Tickets', icon: Ticket },
  { to: '/leave', label: 'Leave Booking', icon: CalendarDays },
  { to: '/announcements', label: 'Announcements', icon: Megaphone },
  { to: '/policies', label: 'Policies', icon: ShieldCheck },
  { to: '/programme', label: 'Programme', icon: GraduationCap },
  { to: '/consultants', label: 'Schedule', icon: CalendarCheck },
]
