'use client'
import { useState } from 'react'
import Link from 'next/link'

const PROJECTS = [
  {
    slug: 'ecommerce-delivery-analysis',
    cap: 'E-Commerce Analysis · 2026',
    cat: 'Data Diagnostics · Apr 2026',
    title: 'E-Commerce Delivery & Satisfaction Analysis',
    desc: 'Root cause analysis on 113,000+ order records across 27 states and 71 product categories. Identified structural causes of late deliveries and customer dissatisfaction at granular regional level.',
    metric: 'AL state: 20.88% late rate vs 6.58% national average — 3.2× above baseline.',
    tools: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Power BI', 'DAX'],
    img: '/assets/projects/commerce_1.png',
  },
  {
    slug: 'ev-market-dashboard',
    cap: 'EV Market Dashboard · 2026',
    cat: 'Market Intelligence · Apr 2026',
    title: 'Global EV Market Dashboard Architecture',
    desc: 'End-to-end market analysis spanning 4 sovereign nations (2019–2023). Revealed macro trends including India\'s 120% CAGR velocity despite only 4.7% market share.',
    metric: 'BYD volume dominance: 13M+ units vs Tesla\'s 2M+ — distinct regional competitive dynamics.',
    tools: ['Python', 'Pandas', 'Power BI', 'DAX'],
    img: '/assets/projects/ev_market_1.png',
  },
  {
    slug: 'iot-machine-monitoring',
    cap: 'IoT Monitoring · 2025',
    cat: 'IoT Engineering · Feb–May 2025',
    title: 'Machine Life Monitoring System (Thesis)',
    desc: 'Full-stack IoT system tracking lathe machine lifespan via Hall effect sensors with real-time web dashboard and MongoDB backend. Hardware to deployment.',
    metric: null,
    tools: ['ESP32', 'Next.js', 'React.js', 'Express.js', 'MongoDB'],
    img: '/assets/projects/thesis_1.png',
  },
  {
    slug: 'google-maps-crawler',
    cap: 'Review Crawler · 2024',
    cat: 'Data Automation · Jun–Aug 2024',
    title: 'Google Maps Review Crawler',
    desc: 'Automated crawler collecting 1,000+ reviews from 5 major malls in Surabaya, extracting sentiment patterns and behavioural insights for competitive retail analysis.',
    metric: null,
    tools: ['Python', 'Selenium', 'Pandas', 'ChromeDriver', 'CSV'],
    img: '/assets/projects/google_maps.png',
  },
]

const heroStyle = {
  display: 'block', padding: '20px 20px 20px 0',
  cursor: 'pointer', textDecoration: 'none', color: 'inherit',
  transition: 'background .2s',
}

function handleEnter(e) {
  e.currentTarget.style.background = 'var(--ink)'
  e.currentTarget.querySelectorAll('.pc-title').forEach(el => el.style.color = 'var(--paper)')
  e.currentTarget.querySelectorAll('.pc-desc').forEach(el => el.style.color = '#5A5040')
  e.currentTarget.querySelectorAll('.pc-cat').forEach(el => el.style.color = '#8A7060')
  e.currentTarget.querySelectorAll('.pc-metric').forEach(el => { el.style.color = '#8A6050'; el.style.borderColor = '#3A2820' })
  e.currentTarget.querySelectorAll('.pc-tool').forEach(el => { el.style.borderColor = '#2A2018'; el.style.color = '#5A5040' })
  e.currentTarget.querySelectorAll('.pc-cta').forEach(el => { el.style.background = 'var(--burg)'; el.style.color = 'var(--paper)' })
  e.currentTarget.querySelectorAll('.pc-img').forEach(el => el.style.filter = 'brightness(.5)')
}

function handleLeave(e) {
  e.currentTarget.style.background = 'transparent'
  e.currentTarget.querySelectorAll('.pc-title').forEach(el => el.style.color = 'var(--ink)')
  e.currentTarget.querySelectorAll('.pc-desc').forEach(el => el.style.color = 'var(--muted)')
  e.currentTarget.querySelectorAll('.pc-cat').forEach(el => el.style.color = 'var(--burg)')
  e.currentTarget.querySelectorAll('.pc-metric').forEach(el => { el.style.color = 'var(--burg)'; el.style.borderColor = 'var(--burg)' })
  e.currentTarget.querySelectorAll('.pc-tool').forEach(el => { el.style.borderColor = 'var(--rule)'; el.style.color = 'var(--muted)' })
  e.currentTarget.querySelectorAll('.pc-cta').forEach(el => { el.style.background = 'transparent'; el.style.color = 'var(--burg)' })
  e.currentTarget.querySelectorAll('.pc-img').forEach(el => el.style.filter = 'brightness(1)')
}

export default function Projects() {
  const [mainIdx, setMainIdx] = useState(0)
  const [carouselIdx, setCarouselIdx] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const main = PROJECTS[mainIdx]

  const [slideDir, setSlideDir] = useState(1) // 1 = kanan, -1 = kiri

const [phase, setPhase] = useState('idle') // 'idle' | 'exit' | 'enter'

const goTo = (i) => {
  if (i === carouselIdx) return
  const dir = i > carouselIdx || (carouselIdx === PROJECTS.length - 1 && i === 0) ? 1 : -1
  setSlideDir(dir)
  setPhase('exit')
  setTimeout(() => {
    setCarouselIdx(i)
    setMainIdx(i)
    setPhase('enter')
    setTimeout(() => setPhase('idle'), 250)
  }, 220)
}

  return (
    <div id="projects" style={{ padding: '0 24px', borderBottom: '1px solid var(--rule)' }}>

      {/* Section header */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'auto 1fr auto',
        alignItems: 'stretch',
        borderTop: '1px solid var(--ink)',
        borderBottom: '1px solid var(--ink)',
      }}>
        <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(28px,4vw,52px)', fontWeight: 700, letterSpacing: '-.025em', lineHeight: 1, padding: '4px 20px 4px 0', borderRight: '1px solid var(--ink)' }}>
          Projects
        </div>
        <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: '2px', justifyContent: 'flex-end', height: '100%' }}>
          <span style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 500 }}>Analytical & engineering work</span>
        </div>
        <div className="proj-header-date" style={{ borderLeft: '1px solid var(--ink)', padding: '0 0 0 20px', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '.18em', color: 'var(--muted)', fontWeight: 700, display: 'flex', alignItems: 'center', height: '100%' }}>
          2024 — 2026
        </div>
      </div>

      {/* Desktop — magazine grid */}
      <div className="proj-desktop" style={{ display: 'grid', gridTemplateColumns: '1fr 1px 1fr' }}>
        <Link href={`/projects/${main.slug}`} passHref legacyBehavior>
          <a style={heroStyle} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <div className="pc-img" style={{
              width: '100%', aspectRatio: '16/9', background: '#C4B480',
              marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative', overflow: 'hidden', transition: 'filter .2s',
            }}>
              <img src={main.img} alt={main.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', objectPosition: 'center top' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'var(--ink)', color: 'var(--paper)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '.14em', padding: '5px 10px', fontWeight: 900 }}>
                {main.cap}
              </div>
            </div>
            <div className="pc-cat" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '.18em', color: 'var(--burg)', fontWeight: 900, marginBottom: '5px', transition: 'color .2s' }}>{main.cat}</div>
            <div className="pc-title" style={{ fontFamily: 'var(--serif)', fontSize: '22px', fontWeight: 700, lineHeight: 1.15, color: 'var(--ink)', marginBottom: '6px', transition: 'color .2s' }}>{main.title}</div>
            <p className="pc-desc" style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '10px', fontWeight: 500, textAlign: 'justify', transition: 'color .2s' }}>{main.desc}</p>
            {main.metric && (
              <div className="pc-metric" style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '14px', color: 'var(--burg)', borderLeft: '2px solid var(--burg)', paddingLeft: '8px', marginBottom: '10px', lineHeight: 1.5, transition: 'all .2s' }}>{main.metric}</div>
            )}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '10px' }}>
              {main.tools.map(t => (
                <span key={t} className="pc-tool" style={{ fontSize: '10.5px', border: '1px solid var(--rule)', padding: '4px 10px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em', fontWeight: 700, transition: 'all .2s' }}>{t}</span>
              ))}
            </div>
            <div className="pc-cta" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '.14em', color: 'var(--burg)', padding: '8px 16px', border: '1.5px solid var(--burg)', transition: 'all .2s' }}>
              View full project →
            </div>
          </a>
        </Link>

        <div style={{ background: 'var(--ink)', width: '1px' }} />

        <div style={{ padding: '0 0 0 20px', display: 'flex', flexDirection: 'column', maxHeight: '600px', overflowY: 'auto' }}>
          {PROJECTS.map((p, i) => {
            if (i === mainIdx) return null
            return (
              <div key={p.slug}
                onClick={() => setMainIdx(i)}
                style={{ padding: '14px 0', borderBottom: '1px solid var(--rule)', cursor: 'pointer', transition: 'all .18s', display: 'flex', gap: '12px', alignItems: 'center', justifyContent: 'space-between' }}
                onMouseEnter={e => { e.currentTarget.style.paddingLeft = '6px'; const n = e.currentTarget.querySelector('.sm-num'); if (n) n.style.color = 'var(--burg)' }}
                onMouseLeave={e => { e.currentTarget.style.paddingLeft = '0'; const n = e.currentTarget.querySelector('.sm-num'); if (n) n.style.color = 'rgba(12,10,7,.12)' }}
              >
                <div className="sm-num" style={{ fontFamily: 'var(--serif)', fontSize: '24px', fontWeight: 700, color: 'rgba(12,10,7,.12)', lineHeight: 1, flexShrink: 0, transition: 'color .18s' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div style={{ flex: '1 1 auto', minWidth: 0 }}>
                  <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '.18em', color: 'var(--burg)', fontWeight: 900, marginBottom: '4px' }}>{p.cat}</div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '16px', fontWeight: 700, lineHeight: 1.15, marginBottom: '4px' }}>{p.title}</div>
                  <div style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6, fontWeight: 500 }}>{p.desc}</div>
                </div>
                <div style={{ flex: '0 0 34%', minWidth: '140px', height: '120px', overflow: 'hidden', background: '#E2D9C2', border: '1px solid var(--rule)', flexShrink: 0 }}>
                  <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', objectPosition: 'center top' }} />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Mobile — main card + carousel */}
      <div className="proj-mobile" style={{ display: 'none', flexDirection: 'column' }}>

        {/* Main card */}
        <Link href={`/projects/${main.slug}`} passHref legacyBehavior>
          <a style={{ display: 'block', textDecoration: 'none', color: 'inherit', padding: '16px 0 12px' }}>
            <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', marginBottom: '10px', position: 'relative', background: '#C4B480' }}>
              <img src={main.img} alt={main.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'var(--ink)', color: 'var(--paper)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '.12em', padding: '4px 8px', fontWeight: 900 }}>{main.cap}</div>
            </div>
            <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '.16em', color: 'var(--burg)', fontWeight: 900, marginBottom: '5px' }}>{main.cat}</div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '20px', fontWeight: 700, lineHeight: 1.15, marginBottom: '6px' }}>{main.title}</div>
            <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.65, fontWeight: 400, marginBottom: '10px' }}>{main.desc}</p>
            {main.metric && (
              <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '13px', color: 'var(--burg)', borderLeft: '2px solid var(--burg)', paddingLeft: '8px', marginBottom: '10px', lineHeight: 1.5 }}>{main.metric}</div>
            )}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '10px' }}>
              {main.tools.map(t => (
                <span key={t} style={{ fontSize: '9px', border: '1px solid var(--rule)', padding: '3px 8px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em', fontWeight: 700 }}>{t}</span>
              ))}
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '.12em', color: 'var(--burg)', padding: '7px 14px', border: '1.5px solid var(--burg)' }}>
              View project →
            </div>
          </a>
        </Link>

        {/* Carousel */}
        <div style={{ borderTop: '1px solid var(--rule)', paddingTop: '12px', position: 'relative' }}>

          {/* Arrow kiri */}
          <button
            onClick={() => goTo(carouselIdx === 0 ? PROJECTS.length - 1 : carouselIdx - 1)}
            style={{
              position: 'absolute', left: '-8px', top: '50%', transform: 'translateY(-50%)',
              width: '32px', height: '52px', zIndex: 10,
              background: 'var(--ink)', color: 'var(--paper)', border: 'none', opacity: 0.7,
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '16px', fontFamily: 'var(--sans)',
            }}
          >←</button>
          
          {/* Card tunggal */}
          <div style={{ overflow: 'hidden', position: 'relative' }}>
            <div
              onClick={() => goTo(carouselIdx)}
              style={{
                width: '100%', cursor: 'pointer',
                border: mainIdx === carouselIdx ? '2px solid var(--burg)' : '1px solid var(--rule)',
                transform: phase === 'exit'
                  ? `translateX(${slideDir * -100}%)`   // keluar ke kiri (dir=1) atau kanan (dir=-1)
                  : phase === 'enter'
                  ? `translateX(${slideDir * 100}%)`    // masuk dari kanan (dir=1) atau kiri (dir=-1)
                  : 'translateX(0)',
                opacity: phase === 'idle' ? 1 : 0,
                transition: phase === 'enter' ? 'none' : 'transform .22s ease, opacity .22s ease',
                transition: 'transform .25s ease, opacity .25s ease',
              }}
            >
              <div style={{ width: '100%', height: '120px', overflow: 'hidden', position: 'relative', background: '#C4B480' }}>
                <img
                  src={PROJECTS[carouselIdx].img}
                  alt={PROJECTS[carouselIdx].title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                />
                {mainIdx === carouselIdx && (
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(139,26,26,.15)' }} />
                )}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'var(--ink)', color: 'var(--paper)', fontSize: '8px', textTransform: 'uppercase', letterSpacing: '.1em', padding: '3px 8px', fontWeight: 900 }}>
                  {PROJECTS[carouselIdx].cap}
                </div>
              </div>
              <div style={{ padding: '10px' }}>
                <div style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--burg)', fontWeight: 900, marginBottom: '3px' }}>
                  {PROJECTS[carouselIdx].cat}
                </div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '13px', fontWeight: 700, lineHeight: 1.2, color: mainIdx === carouselIdx ? 'var(--burg)' : 'var(--ink)', marginBottom: '3px' }}>
                  {PROJECTS[carouselIdx].title}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: 400, lineHeight: 1.5 }}>
                  {PROJECTS[carouselIdx].desc}
                </div>
              </div>
            </div>
          </div>

          {/* Dots indicator */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginTop: '10px' }}>
            {PROJECTS.map((_, i) => (
              <div key={i}
                onClick={() => goTo(i)}
                style={{
                  width: i === carouselIdx ? '20px' : '6px', height: '6px',
                  background: i === carouselIdx ? 'var(--burg)' : 'var(--rule)',
                  borderRadius: '3px', cursor: 'pointer', transition: 'all .2s',
                }}
              />
            ))}
          </div>

          {/* Arrow kanan */}
          <button
            onClick={() => goTo(carouselIdx === PROJECTS.length - 1 ? 0 : carouselIdx + 1)}
            style={{
              position: 'absolute', right: '-8px', top: '50%', transform: 'translateY(-50%)',
              width: '32px', height: '52px', zIndex: 10,
              background: 'var(--ink)', color: 'var(--paper)', border: 'none', opacity: 0.7,
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '16px', fontFamily: 'var(--sans)',
            }}
          >→</button>

        </div>



      </div>

    </div>
  )
}