import { useState } from 'react'
import CertModal from './CertModal'

const TECH_CHIPS = [
  { name: 'Python', svg: <svg viewBox="0 0 20 20" fill="none"><path d="M9.9 2C7.2 2 7.4 3.1 7.4 3.1V5h5.1v.6H5.7S3 5.3 3 8c0 2.7 1.5 2.6 1.5 2.6h.9V8.5S5.3 7 6.8 7h4.3s1.4.02 1.4-1.3V3.5S12.7 2 9.9 2z" fill="#3776AB"/><path d="M10.1 18c2.7 0 2.5-1.1 2.5-1.1V15H7.5v-.6h6.8s2.7.3 2.7-2.4c0-2.7-1.5-2.6-1.5-2.6h-.9v2.1S14.7 13 13.2 13H8.9s-1.4-.02-1.4 1.3v2.2S7.3 18 10.1 18z" fill="#FFD43B"/></svg> },
  { name: 'SQL', svg: <svg viewBox="0 0 20 20" fill="none"><ellipse cx="10" cy="5.5" rx="6" ry="2.5" fill="#336791"/><path d="M4 5.5v3c0 1.38 2.69 2.5 6 2.5s6-1.12 6-2.5v-3c0 1.38-2.69 2.5-6 2.5S4 6.88 4 5.5z" fill="#336791"/><path d="M4 8.5v3c0 1.38 2.69 2.5 6 2.5s6-1.12 6-2.5v-3c0 1.38-2.69 2.5-6 2.5S4 9.88 4 8.5z" fill="#0064a5"/><path d="M4 11.5v3c0 1.38 2.69 2.5 6 2.5s6-1.12 6-2.5v-3c0 1.38-2.69 2.5-6 2.5S4 12.88 4 11.5z" fill="#336791"/></svg> },
  { name: 'Pandas', svg: <svg viewBox="0 0 20 20" fill="none"><rect x="4" y="3" width="3" height="14" rx="1.5" fill="#130754"/><rect x="8.5" y="3" width="3" height="14" rx="1.5" fill="#FFCA00"/><rect x="13" y="3" width="3" height="14" rx="1.5" fill="#130754"/></svg> },
  { name: 'Power BI', svg: <svg viewBox="0 0 20 20" fill="none"><rect x="3" y="10" width="3" height="7" rx="1" fill="#F2C811"/><rect x="8" y="6" width="3" height="11" rx="1" fill="#F2C811"/><rect x="13" y="3" width="3" height="14" rx="1" fill="#F2C811"/></svg> },
  { name: 'Excel', svg: <svg viewBox="0 0 20 20" fill="none"><rect x="2" y="2" width="16" height="16" rx="2" fill="#217346"/><path d="M11 10l2.5-4h-1.8L10 8.5 8.3 6H6.5L9 10l-2.6 4h1.8L10 11.5l1.8 2.5h1.8L11 10z" fill="white"/></svg> },
  { name: 'DAX', svg: <svg viewBox="0 0 20 20" fill="none"><rect x="2" y="2" width="16" height="16" rx="2" fill="#F2C811"/><text x="4" y="14" fontFamily="monospace" fontSize="8" fontWeight="bold" fill="#1A1917">DAX</text></svg> },
  { name: 'Matplotlib', svg: <svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7" stroke="#11557c" strokeWidth="1.5"/><path d="M4 14 Q7 6 10 10 Q13 14 16 6" stroke="#11557c" strokeWidth="1.5" fill="none"/></svg> },
  { name: 'Seaborn', svg: <svg viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="14" height="14" rx="2" fill="#4c72b0" fillOpacity="0.15"/><path d="M5 15 Q8 5 10 10 Q12 15 15 5" stroke="#4c72b0" strokeWidth="1.5" fill="none"/><circle cx="10" cy="10" r="1.5" fill="#4c72b0"/></svg> },
  { name: 'Git', svg: <svg viewBox="0 0 20 20" fill="none"><path d="M18.3 9.2l-7.5-7.5a1.1 1.1 0 00-1.5 0L7.5 3.5l2 2A1.3 1.3 0 0111 7.2v4.5a1.3 1.3 0 11-1 1.3 1.3 1.3 0 011-1.3V8.5L9 6.5v7.3a1.3 1.3 0 11-1 0V6l-1.7-1.7a1.1 1.1 0 000 1.5L1.7 10.8a1.1 1.1 0 001.5 1.5l7.5 7.5a1.1 1.1 0 001.5 0l6.1-6.1a1.1 1.1 0 000-1.5z" fill="#F05032"/></svg> },
  { name: 'Docker', svg: <svg viewBox="0 0 20 20" fill="none"><rect x="2" y="9" width="3" height="2.5" rx="0.5" fill="#2396ED"/><rect x="6" y="9" width="3" height="2.5" rx="0.5" fill="#2396ED"/><rect x="10" y="9" width="3" height="2.5" rx="0.5" fill="#2396ED"/><rect x="6" y="5.5" width="3" height="2.5" rx="0.5" fill="#2396ED"/><rect x="10" y="5.5" width="3" height="2.5" rx="0.5" fill="#2396ED"/><path d="M2.5 13.5c0 0 1 2 4.5 2h6c3.5 0 4.5-3 4.5-3H2.5z" fill="#2396ED"/></svg> },
  { name: 'Next.js', svg: <svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" fill="#1A1917"/><path d="M7 13.5V6.5l7 9" stroke="white" strokeWidth="1.5" strokeLinecap="round"/><path d="M13 6.5v4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg> },
  { name: 'React', svg: <svg viewBox="0 0 20 20" fill="none"><ellipse cx="10" cy="10" rx="8" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" fill="none"/><ellipse cx="10" cy="10" rx="8" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 10 10)"/><ellipse cx="10" cy="10" rx="8" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 10 10)"/><circle cx="10" cy="10" r="1.5" fill="#61DAFB"/></svg> },
  { name: 'MongoDB', svg: <svg viewBox="0 0 20 20" fill="none"><path d="M10 2C7 2 5.5 5 5.5 8c0 3 1 4.5 3 5.5V17l1.5.5V13.5c2-1 3-2.5 3-5.5C13 5 11.5 2 10 2z" fill="#4DB33D"/></svg> },
  { name: 'REST API', svg: <svg viewBox="0 0 20 20" fill="none"><rect x="2" y="6" width="7" height="4" rx="1" fill="none" stroke="#6E6454" strokeWidth="1.2"/><rect x="11" y="10" width="7" height="4" rx="1" fill="none" stroke="#6E6454" strokeWidth="1.2"/><path d="M9 8h3" stroke="#6E6454" strokeWidth="1.2" strokeLinecap="round"/><path d="M11 7l1.5 1L11 9" stroke="#6E6454" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { name: 'PyTorch', svg: <svg viewBox="0 0 20 20" fill="none"><path d="M10 2.5C6.9 2.5 4.5 5 4.5 8c0 1.5.6 2.9 1.5 3.9L4.5 13.5A7.5 7.5 0 0010 17.5c4.1 0 7.5-3.4 7.5-7.5S14.1 2.5 10 2.5zm0 2.5a1 1 0 110 2 1 1 0 010-2z" fill="#EE4C2C"/></svg> },
  { name: 'Jupyter', svg: <svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" fill="#F37626"/><circle cx="10" cy="5" r="1.5" fill="white"/><circle cx="14" cy="13" r="1.5" fill="white"/><circle cx="6" cy="13" r="1.5" fill="white"/></svg> },
  { name: 'Snowflake', svg: <svg viewBox="0 0 20 20" fill="none"><path d="M10 2v16M2 10h16M4.5 4.5l11 11M15.5 4.5l-11 11" stroke="#29B5E8" strokeWidth="1.5" strokeLinecap="round"/></svg> },
  { name: 'Generative AI', svg: <svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7" stroke="#9B59B6" strokeWidth="1.5"/><path d="M7 10h6M10 7v6" stroke="#9B59B6" strokeWidth="1.5" strokeLinecap="round"/><circle cx="10" cy="10" r="2" fill="#9B59B6" fillOpacity=".3"/></svg> },
  { name: 'Java', svg: <svg viewBox="0 0 20 20" fill="none"><path d="M7.5 13.5S6 13 6 11.5c0-1 .5-1.5 1-2s1-1 1-2c0-1.5-1.5-2-1.5-2s1.5.5 1.5 2c0 1-.5 1.5-1 2s-1 1-1 2c0 1.5 1.5 2 1.5 2zm2.5 0s-1.5-.5-1.5-2c0-1 .5-1.5 1-2s1-1 1-2c0-1.5-1.5-2-1.5-2s1.5.5 1.5 2c0 1-.5 1.5-1 2s-1 1-1 2c0 1.5 1.5 2 1.5 2z" fill="#E76F00"/><path d="M6 16h8" stroke="#5382A1" strokeWidth="1.5" strokeLinecap="round"/><path d="M7.5 14.5s-.5.5-1.5.5h7c-1 0-1.5-.5-1.5-.5" stroke="#5382A1" strokeWidth="1" strokeLinecap="round"/></svg> },
  { name: 'JavaScript', svg: <svg viewBox="0 0 20 20" fill="none"><rect x="2" y="2" width="16" height="16" rx="2" fill="#F7DF1E"/><path d="M7.5 14.5c.3.5.7.9 1.5.9.8 0 1.3-.4 1.3-1.3V9.5h1.5v4.6c0 1.8-1 2.4-2.7 2.4-1.4 0-2.2-.7-2.6-1.6l1-.4zm4.5-1c.4.6 1 1 1.8 1 .8 0 1.2-.4 1.2-.9 0-.6-.5-.8-1.3-1.2l-.4-.2c-1.3-.6-2.2-1.3-2.2-2.7 0-1.3 1-2.3 2.6-2.3 1.1 0 1.9.4 2.5 1.4l-1 .7c-.3-.5-.6-.7-1.1-.7-.5 0-.8.3-.8.7 0 .5.3.7 1.1 1l.4.2c1.5.7 2.4 1.3 2.4 2.8 0 1.6-1.3 2.4-2.9 2.4-1.6 0-2.7-.8-3.2-1.8l1.2-.7-.3.6z" fill="#1A1917"/></svg> },
]

const TOOL_CHIPS = [
  { name: 'Google Workspace', svg: <svg viewBox="0 0 20 20" fill="none"><path d="M4 4h6v6H4V4Z" fill="#4285F4"/><path d="M10 4h6v6h-6V4Z" fill="#34A853"/><path d="M4 10h6v6H4v-6Z" fill="#FBBC05"/><path d="M10 10h6v6h-6v-6Z" fill="#EA4335"/></svg> },
  { name: 'Lark', svg: <svg viewBox="0 0 20 20" fill="none"><path d="M3.2 6.5c0-1.1.9-2 2-2h4.4c1.3 0 2.5.8 3 2l2 4c.4 1.2.1 2.6-1 3.4l-4 3c-.6.4-1.4.4-2 .1L4 11.2c-1-.6-1-2-.8-3.3V6.5Z" fill="#2A72FF"/><path d="M6.3 4.2c.3-.3.7-.5 1.2-.5h2.7c.9 0 1.7.6 2 1.4l.7 1.7c.2.6.1 1.3-.3 1.8l-1.5 1.3c-.5.4-1.2.6-1.9.6H8.4c-.5 0-1-.4-1-1V5.8c0-.2.1-.4.2-.6Z" fill="#00D6C0"/><path d="M10.3 6.3c.5-.6 1.3-1 2.1-1h1.4c.8 0 1.4.6 1.4 1.4v.8c0 .7-.6 1.3-1.4 1.3h-1c-.5 0-.9-.3-1.2-.7l-.7-1.1c-.2-.4-.5-.7-.8-.7H9.2Z" fill="#fff" opacity=".8"/></svg> },
  { name: 'Figma', svg: <svg viewBox="0 0 20 20" fill="none"><circle cx="7" cy="7" r="3" fill="#F24E1E"/><rect x="7" y="4" width="3" height="6" rx="1.5" fill="#A259FF"/><rect x="7" y="10" width="3" height="6" rx="1.5" fill="#FF7262"/><circle cx="13" cy="13" r="3" fill="#1ABCFE"/></svg> },
  { name: 'Draw.io', svg: <svg viewBox="0 0 20 20" fill="none"><polygon points="4,4 16,4 16,16 4,16" fill="#FF7B00"/><path d="M6 7.5h8v1H6v-1Zm0 3h8v1H6v-1ZM6 13h5v1H6v-1Z" fill="#fff"/></svg> },
  { name: 'Canva', svg: <svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" fill="#00C4CC"/><path d="M7.3 8.8c.7-1.4 2.3-2 4.1-1.5.9.2 1.7.9 1.7 1.9 0 1.2-.9 1.9-1.7 1.9-.8 0-1.5-.5-1.8-1.2-.2-.5-.5-.8-1-.8-.4 0-.7.2-.7.6 0 .6.5 1 1.3 1 .9 0 1.8-.6 2.1-1.7.1-.3.1-.7.1-1.1 0-.8-.4-1.5-1.1-1.8-.8-.4-1.8-.3-2.5.4-.6.6-.9 1.4-.9 2.3 0 .4.1.8.3 1.1Z" fill="#fff"/></svg> },
  { name: 'Gather', svg: <svg viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="14" height="14" rx="3" fill="#6B5BFF"/><path d="M7.5 6.5h5v7h-5v-7Z" fill="#fff"/><path d="M9 8.5h1v4H9v-4Z" fill="#6B5BFF"/><path d="M10.5 8.5h1v4h-1v-4Z" fill="#6B5BFF"/></svg> },
  { name: 'Postman', svg: <svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" fill="#FF6C37"/><path d="M6 10.5L10 13l4-2.5V7.5L10 5 6 7.5v3Z" fill="#fff"/></svg> },
  { name: 'Vercel', svg: <svg viewBox="0 0 20 20" fill="none"><path d="M4 15h12L10 5 4 15Z" fill="#000"/></svg> },
  { name: 'Cloudflare', svg: <svg viewBox="0 0 20 20" fill="none"><path d="M5 12a3 3 0 013-3h1a1 1 0 010 2H8a1 1 0 00-1 1 1 1 0 001 1h6a2 2 0 100-4 2.5 2.5 0 10-2.4-3.5 3 3 0 10-5.6 2H8a3 3 0 00-3 3Z" fill="#F38020"/></svg> },
]

const CERTS = [
  { name: 'Career Essentials in Business Analysis',   issuer: 'Microsoft / LinkedIn', year: 'Jun 2026', file: '/certs/CertificateOfCompletion_Career Essentials in Business Analysis by Microsoft and LinkedIn.pdf' },
  { name: 'Career Essentials in Data Analysis',       issuer: 'Microsoft / LinkedIn', year: 'Jun 2026', file: '/certs/CertificateOfCompletion_Career Essentials in Data Analysis by Microsoft and LinkedIn.pdf' },
  { name: 'Career Essentials in Generative AI',       issuer: 'Microsoft / LinkedIn', year: 'Jun 2026', file: '/certs/CertificateOfCompletion_Career Essentials in Generative AI by Microsoft and LinkedIn.pdf' },
  { name: 'Career Essentials in Project Management',  issuer: 'Microsoft / LinkedIn', year: 'Jun 2026', file: '/certs/CertificateOfCompletion_Career Essentials in Project Management by Microsoft and LinkedIn.pdf' },
  { name: 'Career Essentials in Software Development', issuer: 'Microsoft / LinkedIn', year: 'Jun 2026', file: '/certs/CertificateOfCompletion_Career Essentials in Software Development by Microsoft and LinkedIn.pdf' },
  { name: 'Generative AI Professional Certificate',   issuer: 'Snowflake',           year: 'Jun 2026', file: '/certs/CertificateOfCompletion_Generative AI Professional Certificate by Snowflake.pdf' },
  { name: 'Java Foundations Professional Certificate', issuer: 'JetBrains',           year: 'Jun 2026', file: '/certs/CertificateOfCompletion_Java Foundations Professional Certificate by JetBrains.pdf' },
  { name: 'Machine Learning Statistical Foundations', issuer: 'Wolfram Research',    year: 'Jun 2026', file: '/certs/CertificateOfCompletion_Machine Learning Statistical Foundations Professional Certificate by Wolfram Research.pdf' },
  { name: 'Machine Learning with Python',             issuer: 'Anaconda',            year: 'Jun 2026', file: '/certs/CertificateOfCompletion_Machine Learning with Python Professional Certificate by Anaconda.pdf' },
  { name: 'Statistics Foundations',                   issuer: 'Wolfram Research',    year: 'Jun 2026', file: '/certs/CertificateOfCompletion_Statistics Foundations Professional Certificate by Wolfram Research.pdf' },
  { name: 'Data Fundamentals',                        issuer: 'IBM',                 year: 'Apr 2026', file: '/certs/Zeineddin A. Bachtiar - Data Fundamentals IBM.pdf' },
  { name: 'Pandas',                                   issuer: 'Kaggle',              year: 'Oct 2025', file: '/certs/pandas.pdf' },
  { name: 'Python',                                   issuer: 'Kaggle',              year: 'Jul 2025', file: '/certs/python.pdf' },
  { name: 'Advanced SQL',                             issuer: 'Kaggle',              year: 'Jul 2025', file: '/certs/advanced-sql.pdf' },
]

export default function Skills() {
  const [activeCert, setActiveCert] = useState(null)

  return (
    <div id="skills" style={{ padding: '0 24px', borderBottom: '1px solid var(--rule)' }}>

      {/* Section header */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'auto 1fr auto',
        alignItems: 'stretch',
        borderTop: '1px solid var(--ink)',
        borderBottom: '1px solid var(--ink)',
      }}>
        <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(28px,4vw,52px)', fontWeight: 700, letterSpacing: '-.025em', lineHeight: 1, padding: '4px 20px 4px 0', borderRight: '1px solid var(--ink)' }}>
          Skills
        </div>
        <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: '2px', justifyContent: 'flex-end', height: '100%' }}>
          <span style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 500 }}>Competencies & certifications</span>
        </div>
        <div className="skills-header-date" style={{ borderLeft: '1px solid var(--ink)', padding: '0 0 0 20px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '.18em', color: 'var(--muted)', fontWeight: 700, display: 'flex', alignItems: 'center', height: '100%' }}>
          2024 — 2026
        </div>
      </div>

      {/* Two columns */}
      <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1px 1fr', borderBottom: '1px solid var(--rule)' }}>

        {/* Left — skills */}
        <div className="skills-left" style={{ padding: '24px 24px 24px 0' }}>

          <div style={{ marginBottom: '20px' }}>
            <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '.18em', color: 'var(--burg)', fontWeight: 900, borderBottom: '1px solid var(--rule)', paddingBottom: '5px', marginBottom: '10px' }}>
              Business & Operations
            </div>
            <p style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 500, lineHeight: 1.8, textAlign: 'justify' }}>
              Process Mapping · SOP Development · Workflow Documentation · Requirements Gathering · Vendor Evaluation · Cross-functional Coordination · Stakeholder Management
            </p>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '.18em', color: 'var(--burg)', fontWeight: 900, borderBottom: '1px solid var(--rule)', paddingBottom: '5px', marginBottom: '10px' }}>
              Data & Technical
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {TECH_CHIPS.map((chip) => (
                <div key={chip.name} style={{
                  display: 'flex', alignItems: 'center', gap: '6px',
                  border: '1px solid var(--rule)', padding: '4px 8px 4px 5px',
                  background: 'transparent', transition: 'all .15s', cursor: 'default',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.borderColor = 'var(--ink)'; e.currentTarget.querySelector('.tech-name').style.color = 'var(--paper)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'var(--rule)'; e.currentTarget.querySelector('.tech-name').style.color = 'var(--muted)' }}
                >
                  <div style={{ width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {chip.svg}
                  </div>
                  <span className="tech-name" style={{ fontSize: '11px', fontWeight: 700, color: 'var(--muted)', letterSpacing: '.06em', textTransform: 'uppercase', whiteSpace: 'nowrap', transition: 'color .15s' }}>
                    {chip.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '.18em', color: 'var(--burg)', fontWeight: 900, borderBottom: '1px solid var(--rule)', paddingBottom: '5px', marginBottom: '10px' }}>
              Tools & Collaboration
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {TOOL_CHIPS.map((chip) => (
                <div key={chip.name} style={{
                  display: 'flex', alignItems: 'center', gap: '6px',
                  border: '1px solid var(--rule)', padding: '5px 10px',
                  background: 'transparent', transition: 'all .15s', cursor: 'default',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.borderColor = 'var(--ink)'; e.currentTarget.querySelector('.tool-name').style.color = 'var(--paper)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'var(--rule)'; e.currentTarget.querySelector('.tool-name').style.color = 'var(--muted)' }}
                >
                  <div style={{ width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {chip.svg}
                  </div>
                  <span className="tool-name" style={{ fontSize: '11px', fontWeight: 700, color: 'var(--muted)', letterSpacing: '.06em', textTransform: 'uppercase', whiteSpace: 'nowrap', transition: 'color .15s' }}>
                    {chip.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="skills-divider" style={{ background: 'var(--rule)', width: '1px' }} />

        {/* Right — certifications */}
        <div className="skills-certs" style={{ padding: '24px 0 24px 24px' }}>
          <div style={{ fontSize: '11px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '.2em', color: 'var(--burg)', borderBottom: '2px solid var(--ink)', paddingBottom: '6px', marginBottom: '0' }}>
            Certifications
          </div>
          <div style={{ maxHeight: '290px', overflowY: 'auto', paddingRight: '6px', marginTop: '8px' }}>
            {CERTS.map((cert, i) => (
              <div key={i}
                onClick={() => setActiveCert(cert)}
                style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                  padding: '12px 0', borderBottom: i < CERTS.length - 1 ? '1px solid var(--rule)' : 'none',
                  cursor: 'pointer', transition: 'opacity .15s',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '.7'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)' }}>{cert.name}</div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--burg)', fontWeight: 800, display: 'block' }}>{cert.issuer}</span>
                  <span style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 300 }}>{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      <CertModal cert={activeCert} onClose={() => setActiveCert(null)} />
    </div>
  )
}