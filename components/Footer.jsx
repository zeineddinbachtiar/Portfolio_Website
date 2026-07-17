import Image from 'next/image'

const CONTACTS = [
  { label: 'Email',    value: 'zeineddinbachtiar@gmail.com ↗', href: 'mailto:zeineddinbachtiar@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/zeineddin-ahmad-bachtiar ↗', href: 'https://linkedin.com/in/zeineddin-ahmad-bachtiar' },
  { label: 'GitHub',   value: 'github.com/zeineddinbachtiar ↗', href: 'https://github.com/zeineddinbachtiar' },
  { label: 'Phone',    value: '+62 812 3386 2025', href: 'tel:+6281233862025' },
]

export default function Footer() {
  return (
    <footer id="contact">

      {/* 3-column: text | photo | contacts */}
      <div className="footer-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1.3fr 1px 1fr 1px 1.1fr',
        borderTop: '3px solid var(--ink)',
        padding: '0 24px',
      }}>

        {/* Left — headline */}
        <div className="footer-text" style={{ padding: '40px 32px 40px 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(32px,5vw,56px)',
            fontWeight: 700, lineHeight: 1.0,
            letterSpacing: '-.025em', marginBottom: '14px',
          }}>
            Let&apos;s build<br />
            <em style={{ fontStyle: 'italic', color: 'var(--burg)' }}>structured</em><br />
            solutions.
          </div>
          <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.6, maxWidth: '360px', fontWeight: 500, textAlign: 'justify' }}>
            <span style={{ fontSize: '16px', fontWeight: 600 }}>Open to full-time roles,</span>{' '}
            ODP/Management Trainee programs, Business/Data Analytics, Software Development, and Operations positions across Indonesia and regionally.
          </p>
        </div>

        <div className="footer-divider" style={{ background: 'var(--ink)', width: '1px' }} />

        {/* Middle — photo */}
        <div className="footer-photo" style={{ padding: '32px 24px', display: 'flex', flexDirection: 'column' }}>
          <div style={{
            flex: 1, background: '#C8B888', minHeight: '260px',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            position: 'relative', overflow: 'hidden',
          }}>
            <Image
              src="/assets/pic_contact.jpg"
              alt="Zeineddin Ahmad Bachtiar"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
        </div>

        <div className="footer-divider" style={{ background: 'var(--ink)', width: '1px' }} />

        {/* Right — contacts */}
        <div className="footer-contacts" style={{ padding: '40px 0 40px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          {CONTACTS.map((c, i) => (
            <a key={i} href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '14px 0',
                borderBottom: i < CONTACTS.length - 1 ? '1px solid var(--rule)' : 'none',
                cursor: 'pointer', transition: 'all .2s', color: 'var(--ink)',
                textDecoration: 'none',
              }}
              onMouseEnter={e => { e.currentTarget.style.paddingLeft = '8px'; e.currentTarget.querySelector('.lbl').style.color = 'var(--burg)' }}
              onMouseLeave={e => { e.currentTarget.style.paddingLeft = '0'; e.currentTarget.querySelector('.lbl').style.color = 'var(--ink)' }}
            >
              <span className="lbl" style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '.12em', fontWeight: 800, transition: 'color .2s' }}>{c.label}</span>
              <span style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 500 }}>{c.value}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Small print */}
      <div className="footer-legal" style={{
        borderTop: '1px solid var(--rule)', padding: '10px 24px',
        display: 'flex', justifyContent: 'space-between',
        fontSize: '8.5px', color: 'var(--muted)',
        textTransform: 'uppercase', letterSpacing: '.1em', fontWeight: 600,
      }}>
        <span>Zeineddin Ahmad Bachtiar · Surabaya, Indonesia</span>
        <span>Portfolio · Edition Q2 2026</span>
        <span>Computer Engineering · ITS</span>
      </div>
    </footer>
  )
}