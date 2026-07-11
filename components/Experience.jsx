const EXPERIENCE = [
  {
    period: 'Dec 2025 — Mar 2026',
    location: 'Batu, Indonesia',
    role: 'Executive Assistant',
    org: 'Turnkey Inside · Fintech & Ops',
    points: [
      'Analysed 5 proprietary trading firms across 10+ criteria; ranked recommendation adopted by management for strategic partnership decisions',
      'Built consolidated daily P/L tracking dashboard in Excel aggregating results across multiple traders and platforms',
      'Documented 10+ operational workflows across 6 process areas, standardising daily operations across 4 divisions',
      'Evaluated 5+ vendor proposals; developed 10+ onboarding modules replacing ad-hoc processes',
      'Tracked milestones across 5+ concurrent vendor projects, managing timelines and escalating blockers',
    ],
  },
  {
    period: 'Aug 2024 — May 2025',
    location: 'Surabaya, Indonesia',
    role: 'Laboratory Assistant',
    org: 'ITS · Multimedia & IoT Laboratory',
    points: [
      'Managed lab sessions for 40+ engineering students per semester across embedded systems, IoT, and machine learning',
      'Mentored student cohorts end-to-end from hardware staging to cloud integration',
    ],
  },
  {
    period: 'Feb 2024 — Jun 2024',
    location: 'Jakarta, Indonesia',
    role: 'Intern — Business Development',
    org: 'PT Satkomindo Mediyasa',
    points: [
      'Market & regulatory research for IoT and automation; pilot agreements with 2 major industry partners',
      'Contributed to proposals and presentations resulting in pilot agreements with 2 major industry partners',
      'Built remote IoT monitoring dashboard for 200+ deployed devices across Indonesia',
    ],
  },
]

export default function Experience() {
  return (
    <div id="experience" style={{ padding: '0 24px', borderBottom: '1px solid var(--rule)' }}>

      {/* Section header */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'auto 1fr auto',
        alignItems: 'stretch',
        borderTop: '1px solid var(--ink)',
        borderBottom: '1px solid var(--ink)',
      }}>
        <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(28px,4vw,52px)', fontWeight: 700, letterSpacing: '-.025em', lineHeight: 1, padding: '4px 20px 4px 0', borderRight: '1px solid var(--ink)' }}>
          Experience
        </div>
        <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: '2px', justifyContent: 'flex-end', height: '100%' }}>
          <span style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 500 }}>Professional track record</span>
        </div>
        <div style={{ borderLeft: '1px solid var(--ink)', padding: '0 0 0 20px', fontSize: '12.5px', textTransform: 'uppercase', letterSpacing: '.18em', color: 'var(--muted)', fontWeight: 700, display: 'flex', alignItems: 'center', height: '100%' }}>
          2024 — 2026
        </div>
      </div>

      {/* Zigzag timeline */}
      <div style={{ position: 'relative' }}>

        {/* Centre spine */}
        <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 0, bottom: 0, width: '1px', background: 'var(--ink)' }} />

        {EXPERIENCE.map((exp, i) => {
          const isLeft = i % 2 === 0
          return (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: '1fr 48px 1fr',
              alignItems: 'start',
              padding: '36px 0',
              borderBottom: i < EXPERIENCE.length - 1 ? '1px solid var(--rule)' : 'none',
              position: 'relative',
            }}>

              {/* Content */}
              {isLeft ? (
                <>
                  <div style={{ paddingRight: '36px' }}>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: '18px', fontWeight: 700, lineHeight: 1.1, marginBottom: '3px', letterSpacing: '-.01em', textAlign: 'right' }}>
                      {exp.role}
                    </div>
                    <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '.12em', color: 'var(--burg)', fontWeight: 800, marginBottom: '12px', textAlign: 'right' }}>
                      {exp.org}
                    </div>
                    <ul style={{ listStyle: 'none' }}>
                      {exp.points.map((pt, j) => (
                        <li key={j} style={{ fontSize: '14px', color: 'var(--muted)', fontWeight: 500, padding: '3px 0 3px 12px', position: 'relative', lineHeight: 1.6, textAlign: 'left' }}>
                          <span style={{ position: 'absolute', left: '2px', color: 'var(--burg)', fontWeight: 900 }}>·</span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Node */}
                  <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '4px' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--burg)', border: '2px solid var(--paper)', outline: '1.5px solid var(--burg)', position: 'relative', zIndex: 1 }} />
                  </div>
                  <div style={{ paddingRight: '12px' }}>
                    <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '.18em', color: 'var(--burg)', fontWeight: 900, marginBottom: '8px', textAlign: 'left' }}>
                      {exp.period} · {exp.location}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div style={{ paddingLeft: '12px', textAlign: 'right' }}>
                    <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '.18em', color: 'var(--burg)', fontWeight: 900, marginBottom: '8px' }}>
                      {exp.period} · {exp.location}
                    </div>
                  </div>
                  {/* Node */}
                  <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '4px' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--burg)', border: '2px solid var(--paper)', outline: '1.5px solid var(--burg)', position: 'relative', zIndex: 1 }} />
                  </div>
                  <div style={{ paddingLeft: '36px' }}>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: '18px', fontWeight: 700, lineHeight: 1.1, marginBottom: '3px', letterSpacing: '-.01em', textAlign: 'left' }}>
                      {exp.role}
                    </div>
                    <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '.12em', color: 'var(--burg)', fontWeight: 800, marginBottom: '12px', textAlign: 'left' }}>
                      {exp.org}
                    </div>
                    <ul style={{ listStyle: 'none' }}>
                      {exp.points.map((pt, j) => (
                        <li key={j} style={{ fontSize: '14px', color: 'var(--muted)', fontWeight: 500, padding: '3px 0 3px 12px', position: 'relative', lineHeight: 1.6, textAlign: 'left' }}>
                          <span style={{ position: 'absolute', left: '2px', color: 'var(--burg)', fontWeight: 900 }}>·</span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}