import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon'
import { useScroll } from '@/components/ui/use-scroll'
import { createPortal } from 'react-dom'
import { User } from 'lucide-react'

export function EmployeeNavbar({ userEmail, onLogout }) {
  const [open, setOpen] = React.useState(false)
  const scrolled = useScroll(10)
  const location = useLocation()
  const navigate = useNavigate()

  const employeeNavLinks = [
    { to: '/employees', label: 'Dashboard' },
    { to: '/employees/profile', label: 'Profile' },
    { to: '/employees/reports', label: 'Reports' },
    { to: '/employees/analytics', label: 'Analytics' },
  ]

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleLogout = () => {
    if (onLogout) {
      onLogout()
    }
    navigate('/')
  }

  return (
    <header
      className={cn('sticky top-0 z-50 w-full border-b border-transparent', {
        'bg-black/95 supports-[backdrop-filter]:bg-black/50 border-border backdrop-blur-lg text-white':
          scrolled,
        'bg-black text-white': !scrolled,
      })}
    >
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4">
        <Link to="/employees" className="hover:bg-white/10 rounded-md p-2 transition-colors">
          <img
            src="https://cdn.glitch.global/2a1e26d9-ab9f-4d0d-922f-a475d812e321/image-removebg-preview%20(2).png?1734947722146"
            alt="Amigos Logo"
            className="h-8 w-auto"
          />
        </Link>
        <div className="hidden items-center gap-2 md:flex">
          {employeeNavLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                buttonVariants({ variant: 'ghost' }),
                'text-white hover:bg-white/10',
                location.pathname === link.to && 'bg-white/20 text-white'
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/" className={cn(buttonVariants({ variant: 'ghost' }), 'text-white hover:bg-white/10')}>
            Home
          </Link>
          {userEmail && (
            <div className="flex items-center gap-2 px-3 py-2 text-white">
              <User className="w-4 h-4" />
              <span className="text-sm">{userEmail}</span>
            </div>
          )}
          <Button variant="outline" onClick={handleLogout} className="border-white/20 text-white hover:bg-white/10">
            Logout
          </Button>
        </div>
        <Button
          size="icon"
          variant="outline"
          onClick={() => setOpen(!open)}
          className="md:hidden border-white/20 text-white hover:bg-white/10"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <MenuToggleIcon open={open} className="size-5" duration={300} />
        </Button>
      </nav>
      <MobileMenu open={open} className="flex flex-col justify-between gap-2">
        <div className="grid gap-y-2">
          {employeeNavLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={cn(
                buttonVariants({
                  variant: 'ghost',
                  className: 'justify-start text-white hover:bg-white/10',
                }),
                location.pathname === link.to && 'bg-white/20 text-white'
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className={buttonVariants({
              variant: 'ghost',
              className: 'justify-start text-white hover:bg-white/10',
            })}
          >
            Home
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          {userEmail && (
            <div className="flex items-center gap-2 px-3 py-2 text-white">
              <User className="w-4 h-4" />
              <span className="text-sm">{userEmail}</span>
            </div>
          )}
          <Button
            variant="outline"
            className="w-full bg-transparent border-white/20 text-white hover:bg-white/10"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </MobileMenu>
    </header>
  )
}

function MobileMenu({ open, children, className, ...props }) {
  if (!open || typeof window === 'undefined') return null

  return createPortal(
    <div
      id="mobile-menu"
      className={cn(
        'bg-black/95 supports-[backdrop-filter]:bg-black/50 backdrop-blur-lg text-white',
        'fixed top-16 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-y md:hidden',
      )}
    >
      <div
        data-slot={open ? 'open' : 'closed'}
        className={cn(
          'data-[slot=open]:animate-in data-[slot=open]:zoom-in-97 ease-out',
          'size-full p-4',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </div>,
    document.body,
  )
}

