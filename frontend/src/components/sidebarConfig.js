import {
  CalendarDays,
  GraduationCap,
  LayoutDashboard,
  Megaphone,
  ShieldCheck,
  Ticket,
  UserCircle,
  CalendarCheck,
} from 'lucide-react'

export const SIDEBAR_EXPANDED_WIDTH = 280
export const SIDEBAR_COLLAPSED_WIDTH = 92

export const exampleUser = {
  name: 'Ava Thompson',
  role: 'People Operations',
}

export const navItems = [
  {
    to: '/',
    label: 'Dashboard',
    icon: LayoutDashboard,
  },
  {
    to: '/tickets',
    label: 'Tickets',
    icon: Ticket,
  },
  {
    to: '/policies',
    label: 'Policies',
    icon: ShieldCheck,
  },
  {
    to: '/leave',
    label: 'Leave Booking',
    icon: CalendarDays,
  },
  {
    to: '/announcements',
    label: 'Announcements',
    icon: Megaphone,
  },
  {
    to: '/programme',
    label: 'Programme',
    icon: GraduationCap,
  },
]
