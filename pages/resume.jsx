import { useState } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'

const FILTERS = [
  { key: 'ops', label: 'Business Ops',             color: '#8B1A1A' },
  { key: 'odp', label: 'ODP / Management Trainee', color: '#B07A1F' },
  { key: 'biz', label: 'Business / Data',           color: '#185FA5' },
  { key: 'dev', label: 'Software Developer',       color: '#2F6F4E' },
]

function Badge({ type, activeFilter }) {
  if (activeFilter !== type) return null
  const c = { ops:'#8B1A1A', odp:'#B07A1F', biz:'#185FA5', dev:'#2F6F4E' }[type]
  const l = { ops:'Ops', odp:'ODP/MT', biz:'Business/Data', dev:'Developer' }[type]
  return (
    <span style={{ display:'inline-flex', alignItems:'center', gap:'4px', fontSize:'9px', fontWeight:900, textTransform:'uppercase', letterSpacing:'.12em', padding:'4px 10px', background:c, color:'#fff', marginLeft:'4px' }}>
      <span style={{ width:'6px', height:'6px', borderRadius:'1px', background:'#fff', flexShrink:0 }} />{l}
    </span>
  )
}

function RItem({ f, ops, odp, biz, dev, role, org, date, points, tags }) {
  const rel = !f || { ops, odp, biz, dev }[f]
  return (
    <div style={{ padding:'20px 0', borderBottom:'1px solid var(--rule)', position:'relative' }}>
      <div style={{ float:'right', display:'flex', gap:'4px', marginLeft:'12px', marginBottom:'6px' }}>
        {ops && <Badge type="ops" activeFilter={f} />}
        {odp && <Badge type="odp" activeFilter={f} />}
        {biz && <Badge type="biz" activeFilter={f} />}
        {dev && <Badge type="dev" activeFilter={f} />}
      </div>
      <div style={{ fontFamily:'var(--serif)', fontSize:'22px', fontWeight:700, lineHeight:1.15, marginBottom:'2px' }}>{role}</div>
      <div style={{ fontSize:'12px', textTransform:'uppercase', letterSpacing:'.12em', color:'var(--burg)', fontWeight:900, marginBottom:'4px' }}>{org}</div>
      {date && <div style={{ fontSize:'13.5px', color:'var(--muted)', fontWeight:500, marginBottom:'10px' }}>{date}</div>}
      <ul style={{ listStyle:'none' }}>
        {points.map((p,i) => (
          <li key={i} style={{ fontSize:'14px', color:'var(--muted)', fontWeight:500, padding:'3px 0 3px 13px', position:'relative', lineHeight:1.75 }}>
            <span style={{ position:'absolute', left:'2px', color:'var(--burg)', fontWeight:900 }}>·</span>{p}
          </li>
        ))}
      </ul>
      {tags && (
        <div style={{ display:'flex', flexWrap:'wrap', gap:'4px', marginTop:'10px' }}>
          {tags.map(t => <span key={t} style={{ fontSize:'10px', fontWeight:800, textTransform:'uppercase', letterSpacing:'.1em', padding:'2px 8px', border:'1px solid var(--rule)', color:'var(--muted)' }}>{t}</span>)}
        </div>
      )}
    </div>
  )
}

function SecHead({ title }) {
  return <div style={{ fontSize:'11px', textTransform:'uppercase', letterSpacing:'.2em', color:'var(--burg)', fontWeight:900, borderBottom:'2px solid var(--ink)', paddingBottom:'7px' }}>{title}</div>
}

const TECH_CHIPS = {
  data: [
    { name:'Python',     svg:<svg viewBox="0 0 20 20" fill="none"><path d="M9.9 2C7.2 2 7.4 3.1 7.4 3.1V5h5.1v.6H5.7S3 5.3 3 8c0 2.7 1.5 2.6 1.5 2.6h.9V8.5S5.3 7 6.8 7h4.3s1.4.02 1.4-1.3V3.5S12.7 2 9.9 2z" fill="#3776AB"/><path d="M10.1 18c2.7 0 2.5-1.1 2.5-1.1V15H7.5v-.6h6.8s2.7.3 2.7-2.4c0-2.7-1.5-2.6-1.5-2.6h-.9v2.1S14.7 13 13.2 13H8.9s-1.4-.02-1.4 1.3v2.2S7.3 18 10.1 18z" fill="#FFD43B"/></svg> },
    { name:'SQL',        svg:<svg viewBox="0 0 20 20" fill="none"><ellipse cx="10" cy="5.5" rx="6" ry="2.5" fill="#336791"/><path d="M4 5.5v3c0 1.38 2.69 2.5 6 2.5s6-1.12 6-2.5v-3c0 1.38-2.69 2.5-6 2.5S4 6.88 4 5.5z" fill="#336791"/><path d="M4 8.5v3c0 1.38 2.69 2.5 6 2.5s6-1.12 6-2.5v-3c0 1.38-2.69 2.5-6 2.5S4 9.88 4 8.5z" fill="#0064a5"/></svg> },
    { name:'Pandas',     svg:<svg viewBox="0 0 20 20" fill="none"><rect x="4" y="3" width="3" height="14" rx="1.5" fill="#130754"/><rect x="8.5" y="3" width="3" height="14" rx="1.5" fill="#FFCA00"/><rect x="13" y="3" width="3" height="14" rx="1.5" fill="#130754"/></svg> },
    { name:'Power BI',   svg:<svg viewBox="0 0 20 20" fill="none"><rect x="3" y="10" width="3" height="7" rx="1" fill="#F2C811"/><rect x="8" y="6" width="3" height="11" rx="1" fill="#F2C811"/><rect x="13" y="3" width="3" height="14" rx="1" fill="#F2C811"/></svg> },
    { name:'Excel',      svg:<svg viewBox="0 0 20 20" fill="none"><rect x="2" y="2" width="16" height="16" rx="2" fill="#217346"/><path d="M11 10l2.5-4h-1.8L10 8.5 8.3 6H6.5L9 10l-2.6 4h1.8L10 11.5l1.8 2.5h1.8L11 10z" fill="white"/></svg> },
    { name:'DAX',        svg:<svg viewBox="0 0 20 20" fill="none"><rect x="2" y="2" width="16" height="16" rx="2" fill="#F2C811"/><text x="3.5" y="14" fontFamily="monospace" fontSize="8" fontWeight="bold" fill="#1A1917">DAX</text></svg> },
    { name:'Data Cleaning', svg:<svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7" stroke="#11557c" strokeWidth="1.5"/><path d="M4 14 Q7 6 10 10 Q13 14 16 6" stroke="#11557c" strokeWidth="1.5" fill="none"/></svg> },
    { name:'Data Viz',   svg:<svg viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="14" height="14" rx="2" fill="#4c72b0" fillOpacity="0.15"/><path d="M5 15 Q8 5 10 10 Q12 15 15 5" stroke="#4c72b0" strokeWidth="1.5" fill="none"/><circle cx="10" cy="10" r="1.5" fill="#4c72b0"/></svg> },
    { name:'ETL Pipelines', svg:<svg viewBox="0 0 20 20" fill="none"><rect x="2" y="3" width="16" height="3" rx="1" fill="#8B1A1A"/><rect x="2" y="8.5" width="11" height="3" rx="1" fill="#B07A1F"/><rect x="2" y="14" width="14" height="3" rx="1" fill="#185FA5"/></svg> },
  ],
  tech: [
    { name:'REST API',   svg:<svg viewBox="0 0 20 20" fill="none"><rect x="2" y="6" width="7" height="4" rx="1" fill="none" stroke="#6E6454" strokeWidth="1.2"/><rect x="11" y="10" width="7" height="4" rx="1" fill="none" stroke="#6E6454" strokeWidth="1.2"/><path d="M9 8h3" stroke="#6E6454" strokeWidth="1.2" strokeLinecap="round"/><path d="M11 7l1.5 1L11 9" stroke="#6E6454" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/></svg> },
    { name:'Git',        svg:<svg viewBox="0 0 20 20" fill="none"><path d="M18.3 9.2l-7.5-7.5a1.1 1.1 0 00-1.5 0L7.5 3.5l2 2A1.3 1.3 0 0111 7.2v4.5a1.3 1.3 0 11-1 1.3 1.3 1.3 0 011-1.3V8.5L9 6.5v7.3a1.3 1.3 0 11-1 0V6l-1.7-1.7a1.1 1.1 0 000 1.5L1.7 10.8a1.1 1.1 0 001.5 1.5l7.5 7.5a1.1 1.1 0 001.5 0l6.1-6.1a1.1 1.1 0 000-1.5z" fill="#F05032"/></svg> },
    { name:'Docker',     svg:<svg viewBox="0 0 20 20" fill="none"><rect x="2" y="9" width="3" height="2.5" rx="0.5" fill="#2396ED"/><rect x="6" y="9" width="3" height="2.5" rx="0.5" fill="#2396ED"/><rect x="10" y="9" width="3" height="2.5" rx="0.5" fill="#2396ED"/><rect x="6" y="5.5" width="3" height="2.5" rx="0.5" fill="#2396ED"/><rect x="10" y="5.5" width="3" height="2.5" rx="0.5" fill="#2396ED"/><path d="M2.5 13.5c0 0 1 2 4.5 2h6c3.5 0 4.5-3 4.5-3H2.5z" fill="#2396ED"/></svg> },
    { name:'Next.js',    svg:<svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" fill="#0C0A07"/><path d="M7 13.5V6.5l7 9" stroke="white" strokeWidth="1.5" strokeLinecap="round"/><path d="M13 6.5v4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg> },
    { name:'React.js',   svg:<svg viewBox="0 0 20 20" fill="none"><ellipse cx="10" cy="10" rx="8" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" fill="none"/><ellipse cx="10" cy="10" rx="8" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 10 10)"/><ellipse cx="10" cy="10" rx="8" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 10 10)"/><circle cx="10" cy="10" r="1.5" fill="#61DAFB"/></svg> },
    { name:'Express.js', svg:<svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" fill="#0C0A07"/><text x="5" y="13" fontFamily="sans-serif" fontSize="7" fontWeight="900" fill="white">EX</text></svg> },
    { name:'MongoDB',    svg:<svg viewBox="0 0 20 20" fill="none"><path d="M10 2C7 2 5.5 5 5.5 8c0 3 1 4.5 3 5.5V17l1.5.5V13.5c2-1 3-2.5 3-5.5C13 5 11.5 2 10 2z" fill="#4DB33D"/></svg> },
    { name:'Postman',    svg:<svg viewBox="0 0 20 20" fill="none"><rect x="2" y="3" width="16" height="14" rx="1.5" fill="#FF6C37"/><circle cx="10" cy="10" r="4" fill="white"/></svg> },
    { name:'Vercel',     svg:<svg viewBox="0 0 20 20" fill="none"><path d="M10 2l8 5-3 11H5L2 7z" fill="#0C0A07"/><path d="M10 2l8 5-8 4.5-8-4.5z" fill="#3A3A3A"/></svg> },
  ],
  tools: [
    { name:'Google Workspace', svg:<svg viewBox="0 0 20 20" fill="none"><rect x="2" y="3" width="7" height="6" fill="#EA4335"/><rect x="11" y="3" width="7" height="6" fill="#34A853"/><rect x="2" y="11" width="7" height="6" fill="#4285F4"/><rect x="11" y="11" width="7" height="6" fill="#FBBC05"/></svg> },
    { name:'Lark',    svg:<svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" fill="#00A3FF"/><text x="6" y="13.5" fontFamily="sans-serif" fontSize="8" fontWeight="900" fill="white">L</text></svg> },
    { name:'Figma',   svg:<svg viewBox="0 0 20 20" fill="none"><circle cx="6.5" cy="6.5" r="3" fill="#0ACF83"/><circle cx="13.5" cy="6.5" r="3" fill="#A259FF"/><circle cx="6.5" cy="13.5" r="3" fill="#F24E1E"/><circle cx="13.5" cy="13.5" r="3" fill="#1ABCFE"/></svg> },
    { name:'Draw.io', svg:<svg viewBox="0 0 20 20" fill="none"><rect x="2" y="2" width="16" height="16" rx="2" fill="#F2A33C"/><circle cx="6.5" cy="6.5" r="1.5" fill="white"/><circle cx="13.5" cy="6.5" r="1.5" fill="white"/><circle cx="6.5" cy="13.5" r="1.5" fill="white"/><circle cx="13.5" cy="13.5" r="1.5" fill="white"/><path d="M6.5 6.5h7M6.5 6.5v7M13.5 6.5v7M6.5 13.5h7" stroke="white" strokeWidth="1"/></svg> },
    { name:'Canva',   svg:<svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" fill="#00C4CC"/><path d="M6 13l4-7 4 7H6z" fill="white"/></svg> },
    { name:'Gather',  svg:<svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" fill="#FF6B6B"/><circle cx="7" cy="9" r="1.2" fill="white"/><circle cx="13" cy="9" r="1.2" fill="white"/><path d="M7 13c1 1 5 1 6 0" stroke="white" strokeWidth="1.3" strokeLinecap="round" fill="none"/></svg> },
    { name:'Cloudflare', svg:<svg viewBox="0 0 20 20" fill="none"><path d="M10 2l8 5-3 11H5L2 7z" fill="#F38020"/></svg> },
  ]
}

function TechGrid({ chips }) {
  return (
    <div style={{ display:'flex', flexWrap:'wrap', gap:'6px' }}>
      {chips.map(chip => (
        <div key={chip.name} style={{ display:'flex', alignItems:'center', gap:'6px', border:'1px solid var(--rule)', padding:'4px 8px 4px 5px', transition:'all .15s', cursor:'default' }}
          onMouseEnter={e => { e.currentTarget.style.background='var(--ink)'; e.currentTarget.style.borderColor='var(--ink)'; e.currentTarget.querySelector('span').style.color='var(--paper)' }}
          onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.borderColor='var(--rule)'; e.currentTarget.querySelector('span').style.color='var(--muted)' }}
        >
          <div style={{ width:'16px', height:'16px', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>{chip.svg}</div>
          <span style={{ fontSize:'10px', fontWeight:800, color:'var(--muted)', letterSpacing:'.04em', whiteSpace:'nowrap', transition:'color .15s' }}>{chip.name}</span>
        </div>
      ))}
    </div>
  )
}

export default function Resume() {
  const [filter, setFilter] = useState(null)
  const [dlActive, setDlActive] = useState('general')
  const [mobileTab, setMobileTab] = useState(0)

  const toggle = (key) => setFilter(f => f === key ? null : key)

  const downloadCV = (variant) => {
    setDlActive(variant)
    const map = {
      general: '/assets/CV/CV_Zeineddin_Ahmad_Bachtiar_-_General.pdf',
      ops:     '/assets/CV/CV_Zeineddin_Ahmad_Bachtiar_-_Business_Ops.pdf',
      odp:     '/assets/CV/CV_Zeineddin_Ahmad_Bachtiar_-_ODP_MT.pdf',
      data:    '/assets/CV/CV_Zeineddin_Ahmad_Bachtiar_-_Business_Data.pdf',
      dev:     '/assets/CV/CV_Zeineddin_Ahmad_Bachtiar_-_Software_Developer.pdf',
    }
    const a = document.createElement('a')
    a.href = map[variant]; a.download = map[variant].split('/').pop()
    document.body.appendChild(a); a.click(); document.body.removeChild(a)
  }

  const DlBtn = ({ label, variant, last }) => (
    <button onClick={() => downloadCV(variant)} style={{
      display:'flex', alignItems:'center', gap:'7px',
      padding:'9px 18px', fontSize:'11px', textTransform:'uppercase',
      letterSpacing:'.1em', fontWeight:900, cursor:'pointer',
      border:'1px solid var(--ink)', borderRight: last ? '1px solid var(--ink)' : 'none',
      fontFamily:'var(--sans)', transition:'all .18s',
      color: dlActive===variant ? 'var(--paper)' : 'var(--ink)',
      background: dlActive===variant ? 'var(--ink)' : 'transparent',
    }}
      onMouseEnter={e => { e.currentTarget.style.background='var(--ink)'; e.currentTarget.style.color='var(--paper)' }}
      onMouseLeave={e => { if(dlActive!==variant){ e.currentTarget.style.background='transparent'; e.currentTarget.style.color='var(--ink)' }}}
    >
      ↓ {label}
    </button>
  )

  const skCell = (label, content, ops, odp, biz, dev, right, last) => {
    const rel = !filter || { ops, odp, biz, dev }[filter]
    return (
      <div className="resume-skcell" style={{
        padding: right ? '14px 0 14px 20px' : '14px 20px 14px 0',
        borderBottom: last ? 'none' : '1px solid var(--rule)',
        borderRight: right ? 'none' : '1px solid var(--rule)',
        position:'relative'
      }}>
        {filter && ops && <Badge type="ops" activeFilter={filter} />}
        {filter && odp && <Badge type="odp" activeFilter={filter} />}
        {filter && biz && <Badge type="biz" activeFilter={filter} />}
        {filter && dev && <Badge type="dev" activeFilter={filter} />}
        <div style={{ fontSize:'10px', textTransform:'uppercase', letterSpacing:'.16em', color:'var(--burg)', fontWeight:900, marginBottom:'7px' }}>{label}</div>
        {content}
      </div>
    )
  }

  const sortByFilter = (items) => {
    if (!filter) return items
    return [...items].sort((a,b) => (b[filter] ? 1 : 0) - (a[filter] ? 1 : 0))
  }

  const SIDEBAR = [
    { label:'Contact', items:['zeineddinbachtiar@gmail.com','linkedin.com/in/zeineddin-ahmad-bachtiar','+62 812 3386 2025','Surabaya, Indonesia'] },
    { label:'Education', items:[<><strong>ITS Surabaya</strong></>, 'B.Eng Computer Engineering', 'Aug 2021 – Aug 2025', 'GPA 3.34 / 4.00'] },
    { label:'Languages', items:['Indonesian — Native','English — Professional'] },
  ]

  const KEY_NUMBERS = [
    { value:'3.34', label:'GPA / 4.00', accent:true },
    { value:'3', label:'Work Experiences' },
    { value:'17', label:'Certifications' },
    { value:'4', label:'Projects' },
  ]

  const sidebarSectionsDesktop = [
    ...SIDEBAR,
    { label:'Key Numbers', items: KEY_NUMBERS.map((kn,i) => <span key={i}><strong>{kn.value}</strong> {kn.label}</span>) },
  ]

  return (
    <>
      <Head><title>Resume — Zeineddin Ahmad Bachtiar</title></Head>
      <Navbar />

      {/* PAGE HEADER */}
      <div className="resume-header" style={{ borderBottom:'3px solid var(--ink)', padding:'0 28px', marginTop:'52px' }}>
        <div className="resume-toprow" style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'8px 0', borderBottom:'1px solid var(--rule)', fontSize:'11px', textTransform:'uppercase', letterSpacing:'.14em', color:'var(--muted)', fontWeight:700 }}>
          <span>Zeineddin Ahmad Bachtiar · Curriculum Vitae · Q2 2026</span>
          <div className="resume-dlbtns" style={{ display:'flex' }}>
            <DlBtn label="General CV"     variant="general" />
            <DlBtn label="Business Ops"   variant="ops" />
            <DlBtn label="ODP / MT"       variant="odp" />
            <DlBtn label="Business / Data" variant="data" />
            <DlBtn label="Software Dev"   variant="dev" last />
          </div>
        </div>

        <div className="resume-titlerow" style={{ padding:'20px 0 0', display:'flex', justifyContent:'space-between', alignItems:'flex-end' }}>
          <div style={{ fontFamily:'var(--serif)', fontSize:'clamp(36px,5vw,60px)', fontWeight:700, lineHeight:.88, letterSpacing:'-.03em' }}>
            Curriculum<br /><em style={{ fontStyle:'italic', color:'var(--burg)' }}>Vitae.</em>
          </div>
          <div className="resume-eduinfo" style={{ fontFamily:'var(--serif)', fontStyle:'italic', fontSize:'14px', color:'var(--muted)', textAlign:'right', paddingBottom:'4px', lineHeight:1.5 }}>
            Computer Engineering<br />Institut Teknologi Sepuluh Nopember · 2025
          </div>
        </div>

        {/* Filter bar */}
        <div className="resume-filterbar" style={{ display:'flex', alignItems:'center', marginTop:'18px', borderTop:'1px solid var(--rule)', padding:'10px 0' }}>
          <span className="resume-filterlabel" style={{ fontSize:'11px', textTransform:'uppercase', letterSpacing:'.18em', color:'var(--muted)', fontWeight:900, paddingRight:'20px', borderRight:'1px solid var(--rule)', marginRight:'16px' }}>
            Highlight Relevance
          </span>
          {FILTERS.map(fc => {
            const on = filter === fc.key
            return (
              <button key={fc.key} className="resume-filterbtn" onClick={() => toggle(fc.key)} style={{
                display:'flex', alignItems:'center', gap:'6px', marginRight:'10px',
                fontSize:'11px', fontWeight:700, textTransform:'uppercase', letterSpacing:'.1em',
                padding:'6px 14px', border:'1px solid', cursor:'pointer',
                fontFamily:'var(--sans)', transition:'all .15s',
                borderColor: on ? 'transparent' : 'var(--rule)',
                background: on ? fc.color : 'transparent',
                color: on ? '#fff' : 'var(--muted)',
              }}>
                <span style={{ width:'8px', height:'8px', borderRadius:'1px', background: on ? '#fff' : fc.color, flexShrink:0 }} />
                {fc.label}
              </button>
            )
          })}
        </div>

        {/* Key Numbers strip — mobile only */}
        <div className="resume-keynumbers-mobile" style={{ display:'none', gridTemplateColumns:'1fr 1fr', border:'1px solid var(--ink)', marginTop:'16px' }}>
          {KEY_NUMBERS.map((kn,i) => (
            <div key={i} style={{
              padding:'12px 14px',
              borderRight: i % 2 === 0 ? '1px solid var(--rule)' : 'none',
              borderBottom: i < 2 ? '1px solid var(--rule)' : 'none',
            }}>
              <div style={{ fontFamily:'var(--serif)', fontSize:'22px', fontWeight:700, color: kn.accent ? 'var(--burg)' : 'var(--ink)', lineHeight:1 }}>{kn.value}</div>
              <div style={{ fontSize:'9px', textTransform:'uppercase', letterSpacing:'.1em', color:'var(--muted)', fontWeight:700, marginTop:'4px' }}>{kn.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* BODY */}
      <div className="resume-body" style={{ display:'grid', gridTemplateColumns:'220px 1fr' }}>

        {/* SIDEBAR */}
        <div className="resume-sidebar" style={{ padding:'28px 22px 28px 28px', borderRight:'1px solid var(--rule)', position:'sticky', top:'52px', height:'calc(100vh - 52px)', overflowY:'auto' }}>
          {sidebarSectionsDesktop.map((sec,i) => (
            <div key={i} style={{ marginBottom:'24px' }}>
              <div style={{ fontSize:'11px', textTransform:'uppercase', letterSpacing:'.18em', color:'var(--burg)', fontWeight:900, borderBottom:'1px solid var(--rule)', paddingBottom:'5px', marginBottom:'10px' }}>{sec.label}</div>
              {sec.items.map((item,j) => <div key={j} style={{ fontSize:'14.5px', color:'var(--muted)', fontWeight:500, padding:'3px 0', lineHeight:1.55 }}>{item}</div>)}
            </div>
          ))}
        </div>

        {/* MAIN */}
        <div className="resume-main" style={{ padding:'28px 32px' }}>

          {/* Experience */}
          <div style={{ marginBottom:'36px' }}>
            <SecHead title="Work Experience" />
            {(() => {
              const experience = [
                {
                  ops: true, odp: true, biz: true, dev: false,
                  role: 'Executive Assistant', org: 'Turnkey Inside · Financial Technology & Operations', date: 'Dec 2025 – Mar 2026 · Batu, Indonesia',
                  points: ['Analysed 5 proprietary trading firms across 10+ criteria — payout rules, drawdown limits, penalty structures — producing ranked recommendation adopted by management','Built consolidated daily P/L tracking dashboard in Excel aggregating results across multiple traders and platforms','Documented 10+ operational workflows across 6 process areas, standardising operations across 4 divisions','Evaluated 5+ vendor proposals on scope, cost, and feasibility; developed 10+ onboarding modules','Tracked milestones across 5+ concurrent vendor projects, managing timelines and escalating blockers'],
                  tags: ['Business Ops','ODP / MT','Data Analysis','Excel']
                },
                {
                  ops: true, odp: true, biz: false, dev: true,
                  role: 'Laboratory Assistant', org: 'ITS · Multimedia & Internet of Things Laboratory', date: 'Aug 2024 – May 2025 · Surabaya, Indonesia',
                  points: ['Managed formal lab sessions for 40+ engineering students per semester across embedded systems, IoT, and machine learning','Mentored student cohorts end-to-end from hardware staging to cloud integration, ensuring full cohort completion'],
                  tags: ['Coordination','Teaching']
                },
                {
                  ops: true, odp: true, biz: true, dev: false,
                  role: 'Intern — Business Development', org: 'PT Satkomindo Mediyasa', date: 'Feb 2024 – Jun 2024 · Jakarta, Indonesia',
                  points: ['Produced market and regulatory research across IoT and industrial automation, delivering benchmarks that shaped strategy for 2+ client engagements','Contributed to business proposals and presentations that resulted in pilot agreements with 2 major industry partners','Built a remote monitoring dashboard for 200+ deployed IoT devices, reducing dependency on manual on-site checks'],
                  tags: ['Business Dev','Market Research','Dashboard']
                }
              ]
              return sortByFilter(experience).map((it, idx) => (
                <RItem key={idx} f={filter} {...it} />
              ))
            })()}
          </div>

          {/* Projects */}
          <div style={{ marginBottom:'36px' }}>
            <SecHead title="Projects" />
            {(() => {
              const projects = [
                {
                  ops: false, odp: true, biz: true, dev: false,
                  role: 'E-Commerce Delivery & Satisfaction Analysis', org: 'Personal Project · Apr 2026', date: '',
                  points: ['Root cause analysis on 113K+ orders across 27 states and 71 categories — isolated Northeast Brazil (AL: 20.88% late rate vs 6.58% national avg)','Applied correlation analysis: on-time orders averaged 4.2/5 vs 1.8/5 for delays over 7 days — 57% drop','Delivered 5 structured business recommendations including regional warehouse expansion and automated seller scorecards'],
                  tags: ['Python','Pandas','Power BI','DAX','Business Rec.']
                },
                {
                  ops: false, odp: false, biz: true, dev: false,
                  role: 'Global EV Market Dashboard Architecture', org: 'Personal Project · Apr 2026', date: '',
                  points: ["End-to-end EV market analysis across 4 countries (2019–2023), revealing India's 120% CAGR despite 4.7% market share","Identified BYD's volume dominance (13M+ units vs Tesla's 2M+) and positive correlation between fuel prices and EV adoption"],
                  tags: ['Python','Pandas','Power BI','DAX']
                },
                {
                  ops: false, odp: false, biz: true, dev: true,
                  role: 'IoT Machine Life Monitoring System', org: 'Thesis Project · Feb – May 2025', date: '',
                  points: ['Designed and built a real-time IoT data pipeline monitoring lathe machine lifespan via revolution-counting sensors','Full-stack: ESP32 hardware → Express.js backend → MongoDB → Next.js dashboard'],
                  tags: ['ESP32','Next.js','MongoDB','React']
                },
                {
                  ops: false, odp: false, biz: true, dev: true,
                  role: 'Google Maps Review Crawler', org: 'Personal Project · Jun – Aug 2024', date: '',
                  points: ['Automated review collection from 5 major malls in Surabaya using Selenium and ChromeDriver','Extracted 1,000+ customer reviews and structured the data for sentiment and behavioural analysis','Supported retail intelligence workflows by turning raw review data into a reusable dataset'],
                  tags: ['Python','Selenium','Pandas','Automation']
                }
              ]
              return sortByFilter(projects).map((it, idx) => (
                <RItem key={idx} f={filter} {...it} />
              ))
            })()}
          </div>

          {/* Skills */}
          <div style={{ marginBottom:'36px' }}>
            <SecHead title="Core Competencies" />
            <div className="resume-skills-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', borderTop:'1px solid var(--rule)' }}>
              {skCell('Business & Operations',
                <div style={{ fontSize:'13.5px', color:'var(--muted)', fontWeight:500, lineHeight:1.75 }}>Process Mapping, SOP Development, Workflow Documentation, Business Process Analysis, Requirements Gathering, SDLC, Cross-functional Coordination, Stakeholder Management, Vendor Evaluation</div>,
                true, true, false, false, false, false)}
              {skCell('Data & Analytics', <TechGrid chips={TECH_CHIPS.data} />, false, true, true, false, true, false)}
              {skCell('Technical', <TechGrid chips={TECH_CHIPS.tech} />, false, false, true, true, false, true)}
              {skCell('Tools & Collaboration', <TechGrid chips={TECH_CHIPS.tools} />, true, false, false, false, true, true)}
            </div>
          </div>

          {/* Certifications */}
          <div style={{ marginBottom:'36px' }}>
            <SecHead title="Certifications" />
            {(() => {
              const certs = [
                { name:'Career Essentials in Business Analysis',   issuer:'Microsoft / LinkedIn', year:'Jun 2026', ops:false, odp:false, biz:true, dev:false },
                { name:'Career Essentials in Data Analysis',       issuer:'Microsoft / LinkedIn', year:'Jun 2026', ops:false, odp:false, biz:true, dev:false },
                { name:'Career Essentials in Generative AI',       issuer:'Microsoft / LinkedIn', year:'Jun 2026', ops:false, odp:false, biz:true, dev:false },
                { name:'Career Essentials in Project Management',  issuer:'Microsoft / LinkedIn', year:'Jun 2026', ops:false, odp:false, biz:true, dev:false },
                { name:'Career Essentials in Software Development', issuer:'Microsoft / LinkedIn', year:'Jun 2026', ops:false, odp:false, biz:true, dev:true },
                { name:'Generative AI Professional Certificate',   issuer:'Snowflake',           year:'Jun 2026', ops:false, odp:false, biz:true, dev:false },
                { name:'Java Foundations Professional Certificate', issuer:'JetBrains',           year:'Jun 2026', ops:false, odp:false, biz:true, dev:true },
                { name:'Machine Learning Statistical Foundations', issuer:'Wolfram Research',    year:'Jun 2026', ops:false, odp:false, biz:true, dev:true },
                { name:'Machine Learning with Python',             issuer:'Anaconda',            year:'Jun 2026', ops:false, odp:false, biz:true, dev:true },
                { name:'Statistics Foundations',                   issuer:'Wolfram Research',    year:'Jun 2026', ops:false, odp:false, biz:true, dev:true },
                { name:'Data Fundamentals',                       issuer:'IBM',                 year:'Apr 2026', ops:true,  odp:true,  biz:true, dev:false },
                { name:'Pandas',                                  issuer:'Kaggle',              year:'Oct 2025', ops:false, odp:false, biz:true, dev:true },
                { name:'Intro to Data Analytics',                 issuer:'RevoU',               year:'Aug 2025', ops:true,  odp:true,  biz:true, dev:false },
                { name:'Advanced SQL',                            issuer:'Kaggle',              year:'Jul 2025', ops:false, odp:false, biz:true, dev:true },
                { name:'Python',                                  issuer:'Kaggle',              year:'Jul 2025', ops:false, odp:true,  biz:true, dev:true },
              ]
              return sortByFilter(certs).map((c,i) => {
                return (
                  <div key={i} style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', padding:'10px 0', borderBottom:'1px solid var(--rule)' }}>
                    <span style={{ fontSize:'14.5px', fontWeight:600 }}>{c.name}</span>
                    <div style={{ display:'flex', alignItems:'baseline', gap:'10px' }}>
                      {filter==='ops' && c.ops && <Badge type="ops" activeFilter={filter} />}
                      {filter==='odp' && c.odp && <Badge type="odp" activeFilter={filter} />}
                      {filter==='biz' && c.biz && <Badge type="biz" activeFilter={filter} />}
                      {filter==='dev' && c.dev && <Badge type="dev" activeFilter={filter} />}
                      <span style={{ fontSize:'10px', textTransform:'uppercase', letterSpacing:'.1em', color:'var(--burg)', fontWeight:900 }}>{c.issuer}</span>
                      <span style={{ fontSize:'12px', color:'var(--muted)', fontWeight:500 }}>{c.year}</span>
                    </div>
                  </div>
                )
              })
            })()}
          </div>

          {/* Leadership */}
          <div>
            <SecHead title="Leadership & Institutional" />
            <RItem f={filter} ops odp biz={false} role="Chair, Student Outreach Division" org="Student Legislative Council (BLM) · ELECTICS Faculty, ITS" date="Feb 2024 – Feb 2025 · Surabaya"
              points={['Led 6+ faculty-wide surveys and 10+ focus group discussions engaging 700+ students','Synthesised findings into 3 formal reports directly adopted to inform faculty policy','Managed division team, coordinating outreach and structured reporting to legislative body']}
              tags={['Leadership','Stakeholder Mgmt']} />
            <RItem f={filter} ops odp biz={false} role="Legislative Council Member" org="Student Legislative Council (BLM) · ELECTICS Faculty, ITS" date="Feb 2023 – Jan 2024 · Surabaya"
              points={['Drafted and reviewed 7 legislative documents representing 1,000+ students','Translated grassroots concerns into formal institutional feedback at monthly plenary sessions']}
              tags={['Documentation','Institutional']} />
          </div>

          {/* Contact / Education / Languages — mobile only, segmented toggle */}
          <div className="resume-contact-tabs-mobile" style={{ display:'none', marginTop:'8px' }}>
            <div style={{ display:'flex', border:'1px solid var(--ink)' }}>
              {SIDEBAR.map((sec,i) => (
                <button key={i} onClick={() => setMobileTab(i)} style={{
                  flex:1, textAlign:'center', padding:'10px 4px',
                  fontSize:'10px', fontFamily:'var(--sans)', fontWeight:900,
                  textTransform:'uppercase', letterSpacing:'.08em', cursor:'pointer',
                  border:'none', borderLeft: i > 0 ? '1px solid var(--rule)' : 'none',
                  background: mobileTab === i ? 'var(--ink)' : 'transparent',
                  color: mobileTab === i ? 'var(--paper)' : 'var(--muted)',
                }}>
                  {sec.label}
                </button>
              ))}
            </div>
            <div style={{ border:'1px solid var(--ink)', borderTop:'none', padding:'16px' }}>
              {SIDEBAR[mobileTab].items.map((item,j) => (
                <div key={j} style={{ fontSize:'14.5px', color:'var(--muted)', fontWeight:500, padding:'3px 0', lineHeight:1.55 }}>{item}</div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}