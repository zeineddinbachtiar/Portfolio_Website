import { useEffect, useState } from 'react'

const LINKS = [
  { label: 'Home',       href: '#home'        },
  { label: 'Experience', href: '#experience'  },
  { label: 'Projects',   href: '#projects'    },
  { label: 'Skills',     href: '#skills'      },
  { label: 'Leadership', href: '#leadership'  },
  { label: 'Contact',    href: '#contact'     },
]

const NAVBAR_HEIGHT = 52 // px — must match nav height below

// Custom smooth scroll — bypasses OS "reduce motion" settings
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

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleAnchorClick = (e, href) => {
    e.preventDefault()
    
    // Jika tidak di halaman home, navigate ke home dengan hash anchor
    if (typeof window !== 'undefined' && window.location.pathname !== '/') {
      window.location.href = '/' + href  // /#home, /#experience, dll
      return
    }
    
    // Jika di halaman home, smooth scroll ke section
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
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: `${NAVBAR_HEIGHT}px`, background: 'var(--ink)',
      display: 'flex', alignItems: 'stretch', justifyContent: 'flex-end',
      borderBottom: '3px solid var(--burg)',
      boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.4)' : 'none',
      transition: 'box-shadow 0.2s',
      fontFamily: 'var(--sans)',
    }}>
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
    </nav>
  )
}