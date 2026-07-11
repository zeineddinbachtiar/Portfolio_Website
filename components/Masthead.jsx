export default function Masthead() {
  return (
    <header style={{
      background: 'var(--paper)',
      borderBottom: '3px solid var(--ink)',
      overflow: 'hidden',
      marginTop: '52px',
    }}>

      {/* Top metadata strip */}
      <div style={{
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

      {/* Giant nameplate */}
      <div style={{ padding: '18px 24px 16px', borderBottom: '1px solid var(--rule)' }}>
        <div style={{ fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '.22em', color: 'var(--burg)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ display: 'block', width: '16px', height: '1px', background: 'var(--burg)' }} />
          Portfolio — Edition Q2 2026
        </div>
        <div style={{ fontFamily: 'var(--serif)', fontWeight: 700, lineHeight: .84, letterSpacing: '-.04em' }}>
          <span style={{ fontSize: 'clamp(56px,9vw,104px)', display: 'block', color: 'var(--burg)' }}>ZEINEDDIN</span>
          <span style={{ fontSize: 'clamp(56px,9vw,104px)', display: 'block', color: 'var(--ink)', fontStyle: 'italic', paddingLeft: 'clamp(12px,2vw,28px)' }}>Ahmad Bachtiar.</span>
        </div>
      </div>

      {/* 4-zone hero */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '2.6fr 1px 1.2fr 1px 1.1fr 1px 1fr',
        minHeight: '320px',
      }}>

        {/* Zone 1 — summary */}
        <div style={{ padding: '24px 24px 24px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '.18em', color: 'var(--burg)', marginBottom: '12px', borderBottom: '1px solid var(--rule)', paddingBottom: '6px' }}>
              The Core Thesis
            </div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '23px', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-.02em', marginBottom: '4px' }}>
              Bridging data architecture
            </div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '23px', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-.02em', fontStyle: 'italic', color: 'var(--burg)', marginBottom: '14px' }}>
              and operational excellence.
            </div>
            <p style={{ fontSize: '14px', fontWeight: 500, color: 'var(--muted)', lineHeight: 1.75, maxWidth: '420px', textAlign: 'justify' }}>
              Computer Engineering graduate from ITS with hands-on experience across data analysis, software development, and business process design — comfortable moving between technical build and structured business work. Open to ODP / MT, Business and Data Analyst, Operations, and Software Developer roles.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '20px', paddingLeft: '24px' }}>
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

        <div style={{ background: 'var(--ink)', width: '1px' }} />

        {/* Zone 2 — photo */}
        <div style={{ background: '#C8B888', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(12,10,7,.05) 2px,rgba(12,10,7,.05) 3px)', pointerEvents: 'none' }} />
            <img
              src="/assets/pic_masthead.jpg"
              alt="Zeineddin Ahmad Bachtiar"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', position: 'relative', zIndex: 1 }}
            />
          </div>
          <div style={{ background: 'var(--ink)', color: 'var(--paper)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '.16em', padding: '5px 12px', fontWeight: 900 }}>
            Zeineddin Ahmad Bachtiar · 2025
          </div>
        </div>

        <div style={{ background: 'var(--ink)', width: '1px' }} />

        {/* Zone 3 — stats */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
        {[
            { n: '3.34', l: 'GPA / 4.00',       s: 'Institut Teknologi Sepuluh Nopember' },
            { n: '3',    l: 'Work Experiences', s: 'Ops · Dev · Research'               },
            { n: '17',   l: 'Certifications',   s: 'Microsoft · Snowflake · IBM'       },
            { n: '4',    l: 'Projects',         s: 'Data · IoT · Automation'            },
        ].map((stat, i) => (
            <div key={i} style={{
            flex: 1, padding: '0 18px',
            borderBottom: i < 3 ? '1px solid var(--rule)' : 'none',
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            minHeight: '78px',
            }}>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '28px', fontWeight: 700, lineHeight: 1, color: 'var(--ink)' }}>{stat.n}</div>
            <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '.18em', color: 'var(--muted)', fontWeight: 800, marginTop: '3px' }}>{stat.l}</div>
            <div style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 400, marginTop: '1px' }}>{stat.s}</div>
            </div>
        ))}
        </div>

        <div style={{ background: 'var(--ink)', width: '1px' }} />

        {/* Zone 4 — status */}
        <div style={{ display: 'flex', flexDirection: 'column', padding: '20px 18px', gap: 0 }}>
          {[
            { label: 'Status', lines: ['Open to full-time roles', 'ODP · Management Trainee', 'Business and Data Analytics', 'Software Developer'] },
            { label: 'Education', lines: ['Institut Teknologi Sepuluh Nopember', 'B.Eng Computer Engineering', 'Aug 2021 – Aug 2025'] },
            { label: 'Based In', lines: ['Surabaya, Indonesia', '+62 812 3386 2025'] },
          ].map((block, i, arr) => (
            <div key={i} style={{ paddingBottom: '18px', marginBottom: '18px', borderBottom: i < arr.length - 1 ? '1px solid var(--rule)' : 'none' }}>
              <div style={{ fontSize: '12px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '.2em', color: 'var(--burg)', marginBottom: '8px', borderBottom: '1px solid var(--rule)', paddingBottom: '5px' }}>
                {block.label}
              </div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: '14px', fontWeight: 400, lineHeight: 1.5, color: 'var(--ink)' }}>
                {block.lines[0]}
                {block.lines.slice(1).map((line, j) => (
                  <span key={j} style={{ display: 'block', fontFamily: 'var(--sans)', fontSize: '13px', fontWeight: 400, color: 'var(--muted)', marginTop: '1px' }}>{line}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </header>
  )
}