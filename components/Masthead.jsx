export default function Masthead() {
  return (
    <header id="home" style={{
      background: 'var(--paper)',
      borderBottom: '3px solid var(--ink)',
      overflow: 'hidden',
      marginTop: '52px',
    }}>

      {/* Top metadata strip */}
      <div className="mstrip" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1px 1fr 1px 1fr 1px 1fr',
        borderBottom: '1px solid var(--ink)',
      }}>
        <div style={{ padding: '5px 12px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '.14em', color: 'var(--muted)', fontWeight: 700, display: 'flex', alignItems: 'center' }}>
          Surabaya, ID · Q2 2026
        </div>
        <div style={{ background: 'var(--ink)', width: '1px' }} />
        <div style={{ padding: '5px 12px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '.14em', color: 'var(--muted)', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          Computer Engineering · ITS Surabaya
        </div>
        <div style={{ background: 'var(--ink)', width: '1px' }} />
        <div style={{ padding: '5px 12px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '.14em', color: 'var(--muted)', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ background: 'var(--burg)', color: '#F5EAEA', padding: '2px 10px', fontSize: '9.5px', letterSpacing: '.1em' }}>Open to Opportunities</span>
        </div>
        <div style={{ background: 'var(--ink)', width: '1px' }} />
        <div style={{ padding: '5px 12px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '.14em', color: 'var(--muted)', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          Business Ops & Data Analytics
        </div>
      </div>

      {/* Nameplate overlapping photo */}
      <div className="masthead-overlap" style={{ position: 'relative', borderBottom: '1px solid var(--rule)', height: 'clamp(360px,32vw,560px)', overflow: 'hidden' }}>

        <div className="masthead-textblock" style={{ position: 'relative', zIndex: 2, maxWidth: '58%', height: '100%', padding: '26px 24px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '.22em', color: 'var(--burg)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ display: 'block', width: '16px', height: '1px', background: 'var(--burg)' }} />
            Portfolio — Edition Q2 2026
          </div>

          <div style={{ fontFamily: 'var(--serif)', fontWeight: 700, lineHeight: .86, letterSpacing: '-.03em' }}>
            <span style={{ fontSize: 'clamp(38px,7vw,185px)', display: 'block', color: 'var(--burg)', textTransform: 'uppercase' }}>Zeineddin</span>
            <span className="masthead-name-line2" style={{ fontSize: 'clamp(34px,6vw,158px)', display: 'block', fontStyle: 'italic', textAlign: 'right' }}>
              Ahmad Bachtiar
            </span>
          </div>

          <div style={{ fontFamily: 'var(--serif)', fontSize: '22px', fontWeight: 700, lineHeight: 1.3, marginTop: '18px', maxWidth: '400px' }}>
            Bridging data architecture and <em style={{ fontStyle: 'italic', color: 'var(--burg)' }}>operational excellence.</em>
          </div>

          <p style={{ fontSize: '16px', fontWeight: 500, color: 'var(--muted)', lineHeight: 1.7, maxWidth: '500px', marginTop: '10px', textAlign: 'justify' }}>
            Computer Engineering graduate from ITS with hands-on experience across data analysis, software development, and business process design — comfortable moving between technical build and structured business work.
          </p>

          <div className="masthead-btns" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '18px' }}>
            <a href="/resume" style={{ padding: '10px 18px', fontSize: '10.5px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '.14em', background: 'var(--ink)', color: 'var(--paper)', display: 'inline-flex', alignItems: 'center', gap: '8px', transition: 'background .18s', cursor: 'pointer' }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--burg)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--ink)'}
            >
              Download CV <span>→</span>
            </a>
            <a href="https://github.com/zeineddinbachtiar" target="_blank" rel="noopener noreferrer" style={{ padding: '10px 18px', fontSize: '10.5px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '.14em', background: 'transparent', color: 'var(--ink)', border: '1.5px solid var(--ink)', display: 'inline-flex', alignItems: 'center', gap: '8px', transition: 'all .18s', cursor: 'pointer' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.color = 'var(--paper)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ink)' }}
            >
              GitHub <span>→</span>
            </a>
          </div>
        </div>

        <div className="masthead-photo" style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '54%', zIndex: 1, overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(12,10,7,.05) 2px,rgba(12,10,7,.05) 3px)', pointerEvents: 'none', zIndex: 1 }} />
          <img
            src="/assets/pic_masthead.jpg"
            alt="Zeineddin Ahmad Bachtiar"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', filter: 'grayscale(1) contrast(1.05)' }}
          />
        </div>
      </div>

      {/* Data box — stats + status, asymmetric */}
      <div className="masthead-databox" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
        {[
          { n: '3.34', l: 'GPA / 4.00' },
          { n: '3',    l: 'Work Experiences' },
          { n: '17',   l: 'Certifications' },
          { n: '4',    l: 'Projects' },
        ].map((stat, i) => (
          <div key={i} className="masthead-stat" style={{ padding: '16px 18px', borderRight: i < 3 ? '1px solid var(--rule)' : 'none', borderBottom: '1px solid var(--rule)' }}>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '26px', fontWeight: 700, color: i === 0 ? 'var(--burg)' : 'var(--ink)', lineHeight: 1 }}>{stat.n}</div>
            <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--muted)', fontWeight: 700, marginTop: '4px' }}>{stat.l}</div>
          </div>
        ))}

        <div className="masthead-stat" style={{ padding: '16px 18px', borderRight: '1px solid var(--rule)' }}>
          <div style={{ fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '.14em', color: 'var(--burg)', marginBottom: '4px' }}>Education</div>
          <div style={{ fontFamily: 'var(--serif)', fontSize: '14px', fontWeight: 700 }}>Institut Teknologi Sepuluh Nopember</div>
          <div style={{ fontSize: '14px', color: 'var(--muted)', marginTop: '2px', fontWeight: 500 }}>B.Eng Computer Engineering · 2025</div>
        </div>

        <div className="masthead-stat" style={{ padding: '16px 18px', borderRight: '1px solid var(--rule)' }}>
          <div style={{ fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '.14em', color: 'var(--burg)', marginBottom: '4px' }}>Based In</div>
          <div style={{ fontFamily: 'var(--serif)', fontSize: '14px', fontWeight: 700 }}>Surabaya, Indonesia</div>
          <div style={{ fontSize: '14px', color: 'var(--muted)', marginTop: '2px', fontWeight: 500 }}>+62 812 3386 2025</div>
        </div>

        <div className="masthead-status" style={{ gridColumn: 'span 2', background: 'var(--ink)', color: 'var(--paper)', padding: '16px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '.1em' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#97C459', display: 'inline-block', flexShrink: 0 }} />
            Open to Opportunities
          </span>
          <div style={{ fontSize: '13px', color: 'var(--rule)', marginTop: '6px', lineHeight: 1.6 }}>
            ODP / Management Trainee · Business & Data Analytics · Software Developer · Operations
          </div>
        </div>
      </div>
    </header>
  )
}