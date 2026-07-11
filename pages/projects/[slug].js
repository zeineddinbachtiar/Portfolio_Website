import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Navbar from '../../components/Navbar'

const DASHBOARD_MAP = {
  'ev-market-dashboard':         dynamic(() => import('../../components/dashboard/EVDashboard'),         { ssr:false }),
  'ecommerce-delivery-analysis': dynamic(() => import('../../components/dashboard/EcommerceDashboard'),  { ssr:false }),
}

const DASHBOARD_TABS = {
  'ev-market-dashboard':         ['Executive Summary', 'Sales Trend', 'Brand Performance'],
  'ecommerce-delivery-analysis': ['Overview', 'Regional Risk', 'Satisfaction'],
}

const PROJECTS = [
  {
    slug: 'ecommerce-delivery-analysis',
    cat: 'Data Diagnostics',
    date: 'Apr 2026',
    title: 'E-Commerce Delivery & Satisfaction Analysis',
    github: 'https://github.com/zeineddinbachtiar/ecommerce-delivery-analysis',
    overview: 'A full diagnostic study on an e-commerce platform\'s logistics and customer satisfaction data. The goal was to move beyond surface-level metrics and identify the root structural causes of late deliveries — pinpointing whether the problem was volume-driven, infrastructure-driven, or seller-driven.',
    tools: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Power BI', 'DAX'],
    metric: 'AL state: 20.88% late rate vs 6.58% national average — 3.2× above baseline.',
    images: ['/assets/projects/commerce_1.png', '/assets/projects/commerce_2.png'],
    sections: [
      { heading: 'Problem Statement', body: 'The platform was experiencing elevated customer dissatisfaction scores without a clear understanding of which operational factors were most responsible. Late deliveries were known to be correlated, but the regional and categorical distribution had not been studied systematically.' },
      { heading: 'Methodology', body: 'End-to-end EDA on 113,000+ order records spanning 27 Brazilian states and 71 product categories. Correlation analysis quantified the satisfaction impact of delays — on-time orders averaged 4.2/5 vs 1.8/5 for delays over 7 days.' },
      { heading: 'Key Findings', body: 'Northeast Brazil emerged as the primary operational risk zone. AL state recorded a 20.88% late delivery rate — more than 3× the national average of 6.58%. Determined to be infrastructure failure, not a volume issue.' },
      { heading: 'Recommendations', body: '5 structured recommendations: regional warehouse expansion targeting <10% late rate, automated seller performance scorecards, proactive notifications for at-risk orders, heavy-item SLAs, and monthly regional latency dashboards.' },
    ],
  },
  {
    slug: 'ev-market-dashboard',
    cat: 'Market Intelligence',
    date: 'Apr 2026',
    title: 'Global EV Market Dashboard Architecture',
    github: 'https://github.com/zeineddinbachtiar/EV_Market_Dashboard',
    overview: 'A market intelligence project studying EV adoption trends across France, India, Netherlands, and the United Kingdom from 2019 to 2023. The objective was to surface macro growth patterns, identify dominant players, and understand how external factors like fuel prices correlate with adoption velocity.',
    tools: ['Python', 'Pandas', 'Power BI', 'DAX'],
    metric: 'BYD volume dominance: 13M+ units vs Tesla\'s 2M+. India fastest-growing at 120% CAGR.',
    images: ['/assets/projects/ev_market_1.png', '/assets/projects/ev_market_02.png'],
    sections: [
      { heading: 'Scope & Data', body: 'Dataset covered EV unit sales, market share, and fuel price indices across 4 countries over 5 years. Python and Pandas were used for cleaning and transformation; Power BI with DAX for the final interactive dashboard.' },
      { heading: 'Key Findings', body: 'India emerged as the fastest-growing EV market with a 120% CAGR — despite holding only 4.7% total market share. BYD demonstrated clear volume dominance at 13M+ cumulative units versus Tesla\'s 2M+.' },
      { heading: 'Dashboard Architecture', body: 'The Power BI dashboard was structured across 3 pages: Global Overview with market size and CAGR comparison; Brand Benchmarking with BYD vs Tesla vs VW; and Macro Correlation with fuel price index overlaid against adoption curves.' },
    ],
  },
  {
    slug: 'iot-machine-monitoring',
    cat: 'IoT Engineering',
    date: 'Feb – May 2025',
    title: 'IoT Machine Life Monitoring System (Thesis)',
    github: 'https://github.com/zeineddinbachtiar',
    overview: 'Final thesis project — a full-stack IoT system designed to monitor the operational lifespan of industrial lathe machines. The system counts shaft revolutions via Hall effect sensors on an ESP32, transmits data via MQTT, stores it in MongoDB, and visualises real-time and historical data on a Next.js web dashboard.',
    tools: ['ESP32', 'Next.js', 'React.js', 'Express.js', 'MongoDB'],
    metric: null,
    images: ['/assets/projects/thesis_1.png', '/assets/projects/thesis_2.jpg'],
    sections: [
      { heading: 'System Architecture', body: 'Hardware layer: ESP32 microcontroller + Hall effect sensor attached to the lathe shaft. Communication: MQTT protocol over WiFi. Backend: Express.js REST API connected to MongoDB Atlas. Frontend: Next.js + React.js dashboard with live chart updates via polling.' },
      { heading: 'Technical Challenges', body: 'Key challenges included debouncing sensor noise at high RPM, handling MQTT packet loss without data gaps, and designing a MongoDB schema efficient for time-series queries.' },
      { heading: 'Outcome', body: 'The system successfully tracked live machine revolutions and projected remaining useful life based on manufacturer-specified rotation thresholds — replacing the previous manual logbook system.' },
    ],
  },
  {
    slug: 'google-maps-crawler',
    cat: 'Data Automation',
    date: 'Jun – Aug 2024',
    title: 'Google Maps Review Crawler',
    github: 'https://github.com/zeineddinbachtiar',
    overview: 'A data collection and analysis pipeline built to extract Google Maps reviews from 5 major malls in Surabaya, enabling competitive sentiment analysis and behavioural insight extraction.',
    tools: ['Python', 'Selenium', 'Pandas', 'ChromeDriver', 'CSV'],
    metric: null,
    images: ['/assets/projects/google_maps.png', '/assets/projects/google_maps_2.png'],
    sections: [
      { heading: 'How It Works', body: 'Selenium + ChromeDriver automates browser interaction to scroll and load Google Maps review panels, extracting reviewer name, rating, date, and review text. Pandas handles cleaning, deduplication, and basic NLP preprocessing.' },
      { heading: 'Findings', body: 'Across 1,000+ reviews from 5 malls, parking availability and cleanliness were the top positive sentiment drivers; queue length and staff responsiveness were the primary negative drivers.' },
    ],
  },
]

const tabStyle = (active) => ({
  padding: '7px 16px', fontSize: '12px', fontWeight: active ? 700 : 400,
  fontFamily: 'var(--sans)', border: '1px solid',
  borderColor: active ? 'var(--ink)' : 'var(--rule)',
  background: active ? 'var(--ink)' : 'transparent',
  color: active ? 'var(--paper)' : 'var(--muted)',
  cursor: 'pointer', transition: 'all .15s', letterSpacing: '.06em',
})

export async function getStaticPaths() {
  return {
    paths: PROJECTS.map(p => ({ params: { slug: p.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const project = PROJECTS.find(p => p.slug === params.slug) || null
  return { props: { project } }
}

export default function ProjectPage({ project }) {
  const [tab, setTab] = useState(0)

  if (!project) return null

  const Dashboard = DASHBOARD_MAP[project.slug]
  const tabs = DASHBOARD_TABS[project.slug]

  const prevIdx = PROJECTS.findIndex(p => p.slug === project.slug) - 1
  const nextIdx = PROJECTS.findIndex(p => p.slug === project.slug) + 1
  const prev = PROJECTS[prevIdx]
  const next = PROJECTS[nextIdx]

  const screenshots = project.images && project.images.length > 0 ? project.images : [null, null]

  return (
    <>
      <Head>
        <title>{project.title} — Zeinedzin Ahmad Bachtiar</title>
      </Head>
      <Navbar />

      <div style={{ marginTop: '52px', fontFamily: 'var(--sans)' }}>

        {/* Breadcrumb */}
        <div style={{ padding: '8px 24px', borderBottom: '1px solid var(--rule)', fontSize: '12.5px', color: 'var(--muted)', display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Link href="/#projects" style={{ color: 'var(--muted)' }}>← All projects</Link>
          <span>/</span>
          <span style={{ color: 'var(--ink)', fontWeight: 500 }}>{project.title}</span>
        </div>

        {/* Hero */}
        <header style={{ padding: '0 24px', borderBottom: '3px solid var(--ink)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 200px', gap: '48px', alignItems: 'end', padding: '32px 0 28px' }}>
            <div>
              <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '.18em', color: 'var(--burg)', fontWeight: 900, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ display: 'block', width: '16px', height: '1px', background: 'var(--burg)' }} />
                {project.cat} · {project.date}
              </div>
              <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(24px,3.5vw,44px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-.02em', marginBottom: '16px' }}>
                {project.title}
              </h1>
              <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.75, fontWeight: 500, maxWidth: '560px', borderTop: '1px solid var(--rule)', paddingTop: '14px', textAlign: 'justify' }}>
                {project.overview}
              </p>
            </div>
            <div>
              <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '.12em', color: 'var(--burg)', fontWeight: 900, borderBottom: '1px solid var(--rule)', paddingBottom: '6px', marginBottom: '0' }}>Stack</div>
              {project.tools.map(t => (
                <div key={t} style={{ padding: '8px 0', borderBottom: '1px solid var(--rule)', fontSize: '13px', fontWeight: 500 }}>{t}</div>
              ))}
              <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
                display: 'block', textAlign: 'center', background: 'var(--ink)', color: 'var(--paper)',
                padding: '12px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '.1em',
                fontWeight: 900, marginTop: '14px', transition: 'background .18s',
              }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--burg)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--ink)'}
              >
                View on GitHub →
              </a>
            </div>
          </div>
        </header>

        {/* Screenshots placeholder */}
        <div style={{ padding: '24px', borderBottom: '1px solid var(--rule)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {screenshots.map((src, idx) => (
            <div key={idx} style={{ aspectRatio: '16/9', background: '#C4B480', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
              {src ? (
                <img src={src} alt={`${project.title} screenshot ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', objectPosition: 'center top' }} />
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
                  <div style={{ width: '22px', height: '22px', border: '1.5px solid #8A7A50', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', color: '#8A7A50' }}>+</div>
                  <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '.12em', color: '#8A7A50', fontWeight: 700 }}>Screenshot {idx + 1}</div>
                </div>
              )}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(12,10,7,.85)', color: 'var(--paper)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '.1em', padding: '6px 10px', fontWeight: 900 }}>
                {project.title} · {project.date}
              </div>
            </div>
          ))}
        </div>

        {/* Content sections */}
        <div style={{ padding: '0 24px', borderBottom: '1px solid var(--rule)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            {project.sections.map((sec, i) => (
              <div key={i} style={{
                padding: i % 2 === 0 ? '24px 32px 24px 0' : '24px 0 24px 32px',
                borderRight: i % 2 === 0 ? '1px solid var(--rule)' : 'none',
                borderBottom: i < project.sections.length - 2 ? '1px solid var(--rule)' : 'none',
              }}>
                <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '.18em', color: 'var(--burg)', fontWeight: 900, marginBottom: '10px' }}>{sec.heading}</div>
                <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.8, fontWeight: 500, textAlign: 'justify' }}>{sec.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key metric */}
        {project.metric && (
          <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--rule)' }}>
            <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '18px', color: 'var(--burg)', borderLeft: '3px solid var(--burg)', paddingLeft: '18px', lineHeight: 1.5 }}>
              {project.metric}
            </div>
          </div>
        )}

        {/* Interactive dashboard */}
        {Dashboard && (
          <div style={{ padding: '28px 24px', borderBottom: '1px solid var(--rule)' }}>
            <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '.18em', color: 'var(--burg)', fontWeight: 900, marginBottom: '18px' }}>Interactive Dashboard</div>
            <div style={{ display: 'flex', gap: '6px', marginBottom: '20px' }}>
              {tabs.map((t, i) => (
                <button key={t} style={tabStyle(tab === i)} onClick={() => setTab(i)}>{t}</button>
              ))}
            </div>
            <Dashboard tab={tab} />
          </div>
        )}

        {/* Prev / Next */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: '2px solid var(--ink)' }}>
          <div style={{ padding: '20px 24px', cursor: prev ? 'pointer' : 'default', opacity: prev ? 1 : .3 }}
            onClick={() => prev && (window.location.href = `/projects/${prev.slug}`)}
            onMouseEnter={e => prev && (e.currentTarget.style.background = 'var(--rule)')}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '.14em', color: 'var(--burg)', fontWeight: 900, marginBottom: '5px' }}>← Previous</div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '15px', fontWeight: 700 }}>{prev?.title || '—'}</div>
          </div>
          <div style={{ padding: '20px 24px', borderLeft: '1px solid var(--rule)', textAlign: 'right', cursor: next ? 'pointer' : 'default', opacity: next ? 1 : .3 }}
            onClick={() => next && (window.location.href = `/projects/${next.slug}`)}
            onMouseEnter={e => next && (e.currentTarget.style.background = 'var(--rule)')}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '.14em', color: 'var(--burg)', fontWeight: 900, marginBottom: '5px' }}>Next →</div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '14px', fontWeight: 700 }}>{next?.title || '—'}</div>
          </div>
        </div>

      </div>
    </>
  )
}