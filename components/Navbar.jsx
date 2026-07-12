import { useEffect, useState } from 'react'

const LINKS = [
  { label: 'Home',       href: '#home'        },
  { label: 'Experience', href: '#experience'  },
  { label: 'Projects',   href: '#projects'    },
  { label: 'Skills',     href: '#skills'      },
  { label: 'Leadership', href: '#leadership'  },
  { label: 'Contact',    href: '#contact'     },
]

const NAVBAR_HEIGHT = 52

function smoothScrollTo(targetY, duration = 500) {
  const startY = window.pageYOffset
  const diff = targetY - startY
  let startTime = null
  function step(currentTime) {
    if (startTime === null) startTime = currentTime
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const ease = progress < 0.5
      ? 2 * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 2) / 2
    window.scrollTo(0, startY + diff * ease)
    if (elapsed < duration) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // Close menu on scroll
  useEffect(() => {
    if (menuOpen) {
      const close = () => setMenuOpen(false)
      window.addEventListener('scroll', close, { passive: true })
      return () => window.removeEventListener('scroll', close)
    }
  }, [menuOpen])

  const handleAnchorClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    if (typeof window !== 'undefined' && window.location.pathname !== '/') {
      window.location.href = '/' + href
      return
    }
    const target = document.querySelector(href)
    if (!target) return
    const top = Math.max(0, target.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT)
    smoothScrollTo(top, 500)
  }

  const linkStyle = {
    fontSize: '10.5px', fontWeight: 700,
    textTransform: 'uppercase', letterSpacing: '.14em',
    color: '#5A5040', padding: '0 18px',
    display: 'flex', alignItems: 'center',
    borderLeft: '1px solid #1A1810',
    transition: 'all .15s', cursor: 'pointer',
  }

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: `${NAVBAR_HEIGHT}px`, background: 'var(--ink)',
        display: 'flex', alignItems: 'stretch', justifyContent: 'flex-end',
        borderBottom: '3px solid var(--burg)',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.4)' : 'none',
        transition: 'box-shadow 0.2s',
        fontFamily: 'var(--sans)',
      }}>

        {isMobile ? (
          /* Mobile — nama kiri, hamburger kanan */
          <>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', padding: '0 18px' }}>
              <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.14em', color: 'var(--paper)' }}>
                Zeineddin Ahmad Bachtiar
              </span>
            </div>
            <button
              onClick={() => setMenuOpen(o => !o)}
              style={{
                width: `${NAVBAR_HEIGHT}px`, height: `${NAVBAR_HEIGHT}px`,
                background: 'none', border: 'none', cursor: 'pointer',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '5px',
                borderLeft: '1px solid #1A1810', flexShrink: 0,
              }}
            >
              {menuOpen ? (
                <span style={{ color: 'var(--paper)', fontSize: '18px', lineHeight: 1 }}>✕</span>
              ) : (
                <>
                  <>
                  <span style={{ display: 'block', width: '18px', height: '1.5px', background: 'var(--paper)' }} />
                  <span style={{ display: 'block', width: '18px', height: '1.5px', background: 'var(--paper)' }} />
                  <span style={{ display: 'block', width: '18px', height: '1.5px', background: 'var(--paper)' }} />
</>
                </>
              )}
            </button>
          </>
        ) : (
          /* Desktop — links normal */
          <div style={{ display: 'flex' }}>
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} style={linkStyle}
                onClick={(e) => handleAnchorClick(e, l.href)}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--paper)'; e.currentTarget.style.background = '#1A1810' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#5A5040'; e.currentTarget.style.background = 'transparent' }}
              >
                {l.label}
              </a>
            ))}
            <a href="/resume" style={{
              ...linkStyle,
              color: 'var(--paper)',
              borderLeft: '1px solid var(--burg)',
              background: 'var(--burg)',
              padding: '0 20px',
            }}
              onMouseEnter={e => e.currentTarget.style.background = '#6E1414'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--burg)'}
            >
              Resume ↗
            </a>
          </div>
        )}
      </nav>

      {/* Mobile dropdown menu */}
      {isMobile && (
        <div style={{
          position: 'fixed', top: `${NAVBAR_HEIGHT}px`, left: 0, right: 0, zIndex: 99,
          background: 'var(--ink)', borderBottom: '3px solid var(--burg)',
          fontFamily: 'var(--sans)',
          maxHeight: menuOpen ? '400px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
        }}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}
              onClick={(e) => handleAnchorClick(e, l.href)}
              style={{
                display: 'flex', alignItems: 'center',
                padding: '14px 20px', fontSize: '11px', fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: '.14em',
                color: '#5A5040', borderBottom: '1px solid #1A1810',
                cursor: 'pointer', transition: 'color .15s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--paper)'}
              onMouseLeave={e => e.currentTarget.style.color = '#5A5040'}
            >
              {l.label}
            </a>
          ))}
          <a href="/resume" style={{
            display: 'flex', alignItems: 'center',
            padding: '14px 20px', fontSize: '11px', fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '.14em',
            color: 'var(--paper)', background: 'var(--burg)', cursor: 'pointer',
          }}>
            Resume ↗
          </a>
        </div>
      )}
    </>
  )
}