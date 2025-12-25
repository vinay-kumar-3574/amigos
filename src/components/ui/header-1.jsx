import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon'
import { useScroll } from '@/components/ui/use-scroll'
import { createPortal } from 'react-dom'
import { User, LogOut } from 'lucide-react'

export function Header({ navLinks, onOpenLogin, onOpenRegister, onOpenEmployeeLogin, isLoggedIn, userEmail, userName, onLogout }) {
  const [open, setOpen] = React.useState(false)
  const scrolled = useScroll(10)
  const location = useLocation()

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

  return (
    <header
      className={cn('sticky top-0 z-50 w-full border-b border-transparent', {
        'bg-black/95 supports-[backdrop-filter]:bg-black/50 border-border backdrop-blur-lg text-white':
          scrolled,
        'bg-black text-white': !scrolled,
      })}
    >
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4">
        <Link to="/" className="hover:bg-white/10 rounded-md p-2 transition-colors">
          <img
            src="https://cdn.glitch.global/2a1e26d9-ab9f-4d0d-922f-a475d812e321/image-removebg-preview%20(2).png?1734947722146"
            alt="Amigos Logo"
            className="h-8 w-auto"
          />
        </Link>
        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
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
          <Link to="#contact" className={cn(buttonVariants({ variant: 'ghost' }), 'text-white hover:bg-white/10')}>
            Contact
          </Link>
          {isLoggedIn ? (
            <>
              <div className="flex items-center gap-2 px-3 py-2 text-white">
                <User className="w-4 h-4" />
                <span className="text-sm">{userName || userEmail?.split('@')[0]}</span>
              </div>
              {userEmail?.endsWith('@vishnu.edu.in') && (
                <Link to="/employees/profile" className={cn(buttonVariants({ variant: 'ghost' }), 'text-white hover:bg-white/10')}>
                  Profile
                </Link>
              )}
              <Button variant="outline" onClick={onLogout} className="border-white/20 text-white hover:bg-white/10">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" onClick={onOpenLogin} className="border-white/20 text-white hover:bg-white/10">
                Sign In
              </Button>
              <Button variant="outline" onClick={onOpenEmployeeLogin} className="border-white/20 text-white hover:bg-white/10">
                Sign In as Employee
              </Button>
              <Button onClick={onOpenRegister} className="bg-white text-black hover:bg-white/90">
                Register
              </Button>
            </>
          )}
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
          {navLinks.map((link) => (
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
            to="#contact"
            onClick={() => setOpen(false)}
            className={buttonVariants({
              variant: 'ghost',
              className: 'justify-start text-white hover:bg-white/10',
            })}
          >
            Contact
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          {isLoggedIn ? (
            <>
              <div className="flex items-center gap-2 px-3 py-2 text-white mb-2">
                <User className="w-4 h-4" />
                <span className="text-sm">{userName || userEmail?.split('@')[0]}</span>
              </div>
              {userEmail?.endsWith('@vishnu.edu.in') && (
                <Link
                  to="/employees/profile"
                  onClick={() => setOpen(false)}
                  className={buttonVariants({
                    variant: 'ghost',
                    className: 'justify-start text-white hover:bg-white/10',
                  })}
                >
                  Profile
                </Link>
              )}
              <Button
                variant="outline"
                className="w-full bg-transparent border-white/20 text-white hover:bg-white/10"
                onClick={() => {
                  setOpen(false)
                  onLogout()
                }}
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="outline"
                className="w-full bg-transparent border-white/20 text-white hover:bg-white/10"
                onClick={() => {
                  setOpen(false)
                  onOpenLogin()
                }}
              >
                Sign In
              </Button>
              <Button
                variant="outline"
                className="w-full bg-transparent border-white/20 text-white hover:bg-white/10"
                onClick={() => {
                  setOpen(false)
                  onOpenEmployeeLogin()
                }}
              >
                Sign In as Employee
              </Button>
              <Button
                className="w-full bg-white text-black hover:bg-white/90"
                onClick={() => {
                  setOpen(false)
                  onOpenRegister()
                }}
              >
                Register
              </Button>
            </>
          )}
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

