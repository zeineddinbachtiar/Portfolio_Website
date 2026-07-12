import { Fragment } from 'react'

const LEADERSHIP = [
  {
    period: 'Feb 2024 – Feb 2025',
    role: 'Chair, Student Outreach Division',
    org: 'Student Legislative Council (BLM) · ELECTICS Faculty, ITS',
    desc: 'Led 6+ faculty-wide surveys and 10+ focus group discussions engaging 700+ students. Authored 3 formal reports directly adopted to inform faculty policy at institutional level. Managed a division team, coordinating outreach initiatives and structured reporting to the legislative body.',
  },
  {
    period: 'Feb 2023 – Jan 2024',
    role: 'Legislative Council Member',
    org: 'Student Legislative Council (BLM) · ELECTICS Faculty, ITS',
    desc: 'Drafted and reviewed 7 legislative documents representing 1,000+ students. Translated grassroots concerns into formal institutional feedback at monthly plenary sessions.',
  },
]

function Card({ item }) {
  const points = item.desc
    .split('. ')
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => line.replace(/\.$/, ''))

  return (
    <div style={{ maxWidth: '520px', width: '100%', padding: '28px', border: '1px solid var(--rule)', borderRadius: '0px', background: 'transparent' }}>
      <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--ink)', marginBottom: '6px' }}>{item.period}</div>
      <div style={{ fontFamily: 'var(--serif)', fontSize: '20px', fontWeight: 700, lineHeight: 1.15, marginBottom: '6px' }}>{item.role}</div>
      <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '.12em', color: 'var(--burg)', fontWeight: 800, marginBottom: '10px' }}>{item.org}</div>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '10px', textAlign: 'justify' }}>
        {points.map((point, j) => (
          <li key={j} style={{ fontSize: '14px', color: 'var(--muted)', fontWeight: 500, lineHeight: 1.9, paddingLeft: '20px', position: 'relative', textAlign: 'justify' }}>
            <span style={{ position: 'absolute', left: 0, top: '7px', color: 'var(--burg)', fontWeight: 900 }}>•</span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Leadership() {
  return (
    <div id="leadership" style={{ padding: '0 24px', borderBottom: '1px solid var(--rule)' }}>

      {/* Section header */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'auto 1fr auto',
        alignItems: 'stretch',
        borderTop: '1px solid var(--ink)',
        borderBottom: '1px solid var(--ink)',
      }}>
        <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(28px,4vw,52px)', fontWeight: 700, letterSpacing: '-.025em', lineHeight: 1, padding: '4px 20px 4px 0', borderRight: '1px solid var(--ink)' }}>
          Leadership
        </div>
        <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: '2px', justifyContent: 'flex-end', height: '100%' }}>
          <span style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 500 }}>Institutional contribution</span>
        </div>
        <div className="leadership-header-date" style={{ borderLeft: '1px solid var(--ink)', padding: '0 0 0 20px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '.18em', color: 'var(--muted)', fontWeight: 700, display: 'flex', alignItems: 'center', height: '100%' }}>
          2023 — 2025
        </div>
      </div>

      {/* Horizontal timeline (desktop)*/}
      <div className="leadership-zigzag" style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${LEADERSHIP.length}, 1fr)`,
        gridTemplateRows: '272px 28px 248px',
        padding: '56px 0 40px',
      }}>

        {/* Full-width horizontal line with center arrow */}
        <div style={{ gridRow: 2, gridColumn: `1 / span ${LEADERSHIP.length}`, position: 'relative', alignSelf: 'center' }}>
          <div style={{ height: '1px', background: 'var(--ink)', width: '100%' }} />
          <div style={{
            position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
            width: 0, height: 0,
            borderTop: '8px solid transparent',
            borderBottom: '8px solid transparent',
            borderLeft: '12px solid var(--burg)',
            zIndex: 3,
          }} />
        </div>

        {LEADERSHIP.map((item, i) => {
          const above = i % 2 === 0
          const column = LEADERSHIP.length - i
          return (
            <Fragment key={i}>
              {/* Row 1 — content above the line */}
              <div style={{
                gridRow: 1, gridColumn: column,
                display: 'flex', flexDirection: 'column',
                justifyContent: 'flex-end', alignItems: 'center',
                padding: '0 24px',
              }}>
                {above && <Card item={item} />}
              </div>

              {/* Row 2 — dot + connector */}
              <div style={{
                gridRow: 2, gridColumn: column,
                position: 'relative', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{
                  width: '12px', height: '12px', borderRadius: '50%',
                  background: 'var(--burg)', border: '3px solid var(--paper)',
                  outline: '1.5px solid var(--burg)', zIndex: 2,
                }} />
                <div style={{
                  position: 'absolute', left: '50%', transform: 'translateX(-50%)',
                  width: '1px', background: 'var(--rule)',
                  ...(above
                    ? { bottom: '50%', height: '22px' }
                    : { top: '50%', height: '22px' }),
                }} />
              </div>

              {/* Row 3 — content below the line */}
              <div style={{
                gridRow: 3, gridColumn: column,
                display: 'flex', flexDirection: 'column',
                justifyContent: 'flex-start', alignItems: 'center',
                padding: '0 24px',
              }}>
                {!above && <Card item={item} />}
              </div>
            </Fragment>
          )
        })}
      </div>
      {/* Vertical stack (mobile) */}
      <div className="leadership-mobile" style={{ display: 'none', flexDirection: 'column', alignItems: 'center', gap: '20px', padding: '32px 0 40px' }}>
        {LEADERSHIP.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>
    </div>
  )
}