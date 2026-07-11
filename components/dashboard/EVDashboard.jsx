import { useMemo } from 'react'
import ChartCanvas from '../ChartCanvas'

const GRID = { color: 'rgba(128,128,128,0.08)' }
const COLORS = { uk:'#185FA5', fr:'#3B6D11', india:'#BA7517', nl:'#993C1D' }

const Legend = ({ items }) => (
  <div style={{ display:'flex', gap:'12px', flexWrap:'wrap', marginBottom:'10px' }}>
    {items.map(({ color, label }) => (
      <span key={label} style={{ display:'flex', alignItems:'center', gap:'5px', fontSize:'11px', color:'var(--muted)' }}>
        <span style={{ width:10, height:10, borderRadius:2, background:color, display:'inline-block', flexShrink:0 }} />
        {label}
      </span>
    ))}
  </div>
)

const KPI = ({ label, value, sub }) => (
  <div style={{ background:'var(--rule)', padding:'12px 14px' }}>
    <div style={{ fontSize:'9px', textTransform:'uppercase', letterSpacing:'.1em', color:'var(--muted)', fontWeight:700, marginBottom:'4px' }}>{label}</div>
    <div style={{ fontFamily:'var(--serif)', fontSize:'20px', fontWeight:700, color:'var(--ink)' }}>{value}</div>
    {sub && <div style={{ fontSize:'10px', color:'var(--muted)', marginTop:'2px' }}>{sub}</div>}
  </div>
)

export default function EVDashboard({ tab }) {
  const evShareConfig = useMemo(() => ({
    type: 'doughnut',
    data: {
      labels: ['United Kingdom','France','India','Netherlands'],
      datasets: [{ data:[45,37,5,13], backgroundColor:[COLORS.uk,COLORS.fr,COLORS.india,COLORS.nl], borderWidth:0 }]
    },
    options: { responsive:true, maintainAspectRatio:false, cutout:'65%', plugins:{ legend:{display:false}, tooltip:{callbacks:{label:c=>` ${c.label}: ${c.parsed}%`}} } }
  }), [])

  const evTrendConfig = useMemo(() => ({
    type: 'line',
    data: {
      labels: ['2019','2020','2021','2022','2023'],
      datasets: [
        { label:'United Kingdom', data:[38000,109000,190000,267000,315000], borderColor:COLORS.uk,    tension:0.4, fill:false, pointRadius:4, borderWidth:2 },
        { label:'France',         data:[42000,110000,162000,210000,275000], borderColor:COLORS.fr,    tension:0.4, fill:false, pointRadius:4, borderDash:[5,3] },
        { label:'India',          data:[3900,5200,9400,28000,74000],        borderColor:COLORS.india, tension:0.4, fill:false, pointRadius:4, borderDash:[2,2] },
        { label:'Netherlands',    data:[73000,97000,88000,105000,120000],   borderColor:COLORS.nl,    tension:0.4, fill:false, pointRadius:4, borderDash:[8,4] },
      ]
    },
    options: { responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false},tooltip:{mode:'index',intersect:false}}, scales:{ y:{ticks:{callback:v=>(v/1000).toFixed(0)+'K',font:{size:11}},grid:GRID}, x:{ticks:{font:{size:11}},grid:{display:false}} } }
  }), [])

  const evBrandVolConfig = useMemo(() => ({
    type: 'bar',
    data: {
      labels: ['BYD','Tesla','Volkswagen'],
      datasets: [{ data:[13.2,2.1,1.2], backgroundColor:['#185FA5','#993C1D','#3B6D11'], borderWidth:0, borderRadius:4 }]
    },
    options: { responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false},tooltip:{callbacks:{label:c=>` ${c.parsed.y.toFixed(1)}M units`}}}, scales:{ y:{ticks:{callback:v=>v+'M',font:{size:11}},grid:GRID}, x:{ticks:{font:{size:11}},grid:{display:false}} } }
  }), [])

  const evBrandGrowthConfig = useMemo(() => ({
    type: 'bar',
    data: {
      labels: ['2020','2021','2022','2023'],
      datasets: [
        { label:'BYD',        data:[42,220,180,62], backgroundColor:'#185FA5', borderRadius:3, borderWidth:0 },
        { label:'Tesla',      data:[28,90,40,38],   backgroundColor:'#993C1D', borderRadius:3, borderWidth:0 },
        { label:'Volkswagen', data:[18,55,30,22],   backgroundColor:'#3B6D11', borderRadius:3, borderWidth:0 },
      ]
    },
    options: { responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false},tooltip:{callbacks:{label:c=>` ${c.dataset.label}: ${c.parsed.y}%`}}}, scales:{ y:{ticks:{callback:v=>v+'%',font:{size:11}},grid:GRID}, x:{ticks:{font:{size:11}},grid:{display:false}} } }
  }), [])

  if (tab === 0) return (
    <>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'10px', marginBottom:'18px' }}>
        <KPI label="Total EV units" value="2.84M" sub="2019–2023 cumulative" />
        <KPI label="Fastest growing" value="India" sub="120% CAGR · 4.7% share" />
        <KPI label="Top brand" value="BYD" sub="13M+ units globally" />
        <KPI label="Infra leader" value="Netherlands" sub="Highest charger density" />
      </div>
      <Legend items={[{color:COLORS.uk,label:'United Kingdom'},{color:COLORS.fr,label:'France'},{color:COLORS.india,label:'India'},{color:COLORS.nl,label:'Netherlands'}]} />
      <ChartCanvas config={evShareConfig} height='260px' />
    </>
  )

  if (tab === 1) return (
    <>
      <Legend items={[{color:COLORS.uk,label:'United Kingdom'},{color:COLORS.fr,label:'France'},{color:COLORS.india,label:'India'},{color:COLORS.nl,label:'Netherlands'}]} />
      <ChartCanvas config={evTrendConfig} height='300px' />
      <div style={{ marginTop:'14px', padding:'12px 16px', background:'var(--rule)', fontSize:'13px', color:'var(--muted)', lineHeight:1.65 }}>
        Rising fuel prices in 2021–2022 correlate with accelerated EV adoption across all 4 markets. India's growth velocity exceeds all others from 2022 onward.
      </div>
    </>
  )

  if (tab === 2) return (
    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'24px' }}>
      <div>
        <div style={{ fontSize:'9px', textTransform:'uppercase', letterSpacing:'.1em', color:'var(--muted)', marginBottom:'10px' }}>Cumulative volume (M units)</div>
        <Legend items={[{color:'#185FA5',label:'BYD'},{color:'#993C1D',label:'Tesla'},{color:'#3B6D11',label:'Volkswagen'}]} />
        <ChartCanvas config={evBrandVolConfig} height='240px' />
      </div>
      <div>
        <div style={{ fontSize:'9px', textTransform:'uppercase', letterSpacing:'.1em', color:'var(--muted)', marginBottom:'10px' }}>YoY growth rate (%)</div>
        <Legend items={[{color:'#185FA5',label:'BYD'},{color:'#993C1D',label:'Tesla'},{color:'#3B6D11',label:'Volkswagen'}]} />
        <ChartCanvas config={evBrandGrowthConfig} height='240px' />
      </div>
    </div>
  )

  return null
}