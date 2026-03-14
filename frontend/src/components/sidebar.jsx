// -- Import --
import { useState, useEffect } from 'react';
import {
  Home,
  Plug,
  PlusSquare,
  HelpCircle,
  UserCircle,
  ChevronLeft,
  ChevronRight,
  List,
  Sun,
  Moon,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { useTheme } from '../theme-provider';
import { useLocation } from 'react-router-dom';

// Sidebar navigation items

const navItems = [
  { label: 'Home', icon: <Home size={20} />, href: '#' },
  {
    label: 'New Workflow',
    icon: <PlusSquare size={20} />,
    href: '/Workflow-Main',
  },
  { label: 'Workflows', icon: <List size={20} />, href: '/Workflow-Dashboard' },
  { label: 'Connectors', icon: <Plug size={20} />, href: '/Connectors' },
  { label: 'Help', icon: <HelpCircle size={20} />, href: '#' },
];

// Sidebar layout

export default function SidebarLayout({}) {
  // Sidebar open/close state
  const [isOpen, setIsOpen] = useState(false);
  const [showText, setShowText] = useState(false);
  const { setTheme } = useTheme(); // 3. Get the setTheme function

  // Pathname detection
  let pathname = '';

  try {
    pathname = window.location.pathname;
  } catch {}

  try {
    const location = useLocation();
    pathname = location.pathname;
  } catch {}

  // Text animation
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (isOpen) {
      timeout = setTimeout(() => setShowText(true), 200);
    } else {
      setShowText(false);
    }
    return () => clearTimeout(timeout);
  }, [isOpen]);

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar */}
      <aside
        className={cn(
          'top-0 left-0 z-50 transition-all duration-300 ease-in-out border-r border-border',
          isOpen ? 'w-64 bg-background' : 'w-16 bg-background'
        )}
      >
        <div className="flex flex-col h-full justify-between">
          {/* Top: logo & toggle */}
          <div>
            <div className="flex items-center justify-between px-4 py-4">
              <span className="text-lg font-bold text-primary">
                {isOpen && 'M3Labs'}
              </span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="text-primary hover:bg-primary/10"
              >
                {isOpen ? <ChevronLeft /> : <ChevronRight />}
              </Button>
            </div>

            {/* navigation items */}
            <nav className="flex flex-col space-y-1 px-2 mt-2">
              {navItems.map((item) => (
                // Render each navigation item as a link
                <a
                  key={item.label}
                  href={item.href}
                  // Apply styles based on whether the current path matches the item's href
                  className={cn(
                    'flex items-center w-full gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors',
                    pathname === item.href
                      ? 'bg-muted text-primary' // Highlight if active
                      : 'hover:bg-primary hover:text-primary-foreground text-muted-foreground' // Default/hover styles
                  )}
                >
                  {/* Display the item's icon */}
                  {item.icon}
                  {/* Show the label text only if the sidebar is open */}
                  {showText && item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Bottom: Profile dropdown & Theme Toggle */}
          <div className="p-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={cn(
                    'flex items-center w-full gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer',
                    'hover:bg-primary hover:text-primary-foreground',
                    'text-muted-foreground'
                  )}
                >
                  <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  {showText && <span>Toggle Theme</span>}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="top" align="start" sideOffset={8}>
                <DropdownMenuItem onClick={() => setTheme('light')}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={cn(
                    'flex items-center w-full gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer',
                    'hover:bg-primary hover:text-primary-foreground',
                    'text-muted-foreground'
                  )}
                >
                  <UserCircle size={20} />
                  {showText && 'User Name'}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                align="start"
                sideOffset={8}
                className="w-56"
              >
                <div className="px-3 py-2 text-sm font-medium text-primary">
                  My Account
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/">Log out</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </aside>
    </div>
  );
}