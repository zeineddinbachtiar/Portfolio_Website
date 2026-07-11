import { useMemo } from 'react'
import ChartCanvas from '../ChartCanvas'

const GRID = { color:'rgba(128,128,128,0.08)' }
const STATE_DATA = [
  {code:'AL',rate:20.88},{code:'MA',rate:18.4},{code:'PI',rate:17.2},{code:'BA',rate:14.1},
  {code:'RN',rate:12.8},{code:'CE',rate:11.3},{code:'PB',rate:10.7},{code:'SE',rate:9.4},
  {code:'PA',rate:8.9},{code:'PE',rate:8.2},{code:'AM',rate:7.8},{code:'RO',rate:7.1},
  {code:'GO',rate:6.1},{code:'MT',rate:5.8},{code:'MG',rate:5.4},{code:'RJ',rate:4.9},
  {code:'SP',rate:4.2},{code:'RS',rate:3.8},{code:'SC',rate:3.4},{code:'PR',rate:3.1},
]

const KPI = ({ label, value, sub, danger }) => (
  <div style={{ background:'var(--rule)', padding:'12px 14px' }}>
    <div style={{ fontSize:'9px', textTransform:'uppercase', letterSpacing:'.1em', color:'var(--muted)', fontWeight:700, marginBottom:'4px' }}>{label}</div>
    <div style={{ fontFamily:'var(--serif)', fontSize:'20px', fontWeight:700, color: danger ? '#A32D2D' : 'var(--ink)' }}>{value}</div>
    {sub && <div style={{ fontSize:'10px', color:'var(--muted)', marginTop:'2px' }}>{sub}</div>}
  </div>
)

export default function EcommerceDashboard({ tab }) {
  const overviewConfig = useMemo(() => ({
    type:'bar',
    data:{
      labels:['Bed & Bath','Health & Beauty','Sports','Computers','Furniture','Garden','Toys','Auto'],
      datasets:[
        { label:'On-time', data:[9200,8400,7100,6800,5900,5200,4800,4100], backgroundColor:'#185FA5', borderRadius:3, borderWidth:0 },
        { label:'Late',    data:[620,510,480,390,510,340,290,280],          backgroundColor:'#993C1D', borderRadius:3, borderWidth:0 },
      ]
    },
    options:{ responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false},tooltip:{mode:'index',intersect:false}}, scales:{ y:{ticks:{callback:v=>(v/1000).toFixed(1)+'K',font:{size:11}},grid:GRID}, x:{ticks:{font:{size:11},maxRotation:30},grid:{display:false}} } }
  }), [])

  const satConfig = useMemo(() => ({
    type:'bar',
    data:{
      labels:['On-time','1–2d late','3–5d late','6–7d late','7d+ late'],
      datasets:[{ data:[4.2,3.7,2.9,2.3,1.8], backgroundColor:['#185FA5','#3B6D11','#BA7517','#E24B4A','#A32D2D'], borderWidth:0, borderRadius:4 }]
    },
    options:{ responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false},tooltip:{callbacks:{label:c=>` Score: ${c.parsed.y.toFixed(1)}/5`}}}, scales:{ y:{min:0,max:5,ticks:{callback:v=>v+'/5',font:{size:11}},grid:GRID}, x:{ticks:{font:{size:11},maxRotation:20},grid:{display:false}} } }
  }), [])

  const distConfig = useMemo(() => ({
    type:'bar',
    data:{
      labels:['On-time','Late'],
      datasets:[
        { label:'5 stars', data:[68,12], backgroundColor:'#185FA5', borderWidth:0 },
        { label:'4 stars', data:[18,10], backgroundColor:'#3B6D11', borderWidth:0 },
        { label:'3 stars', data:[6,12],  backgroundColor:'#BA7517', borderWidth:0 },
        { label:'2 stars', data:[3,16],  backgroundColor:'#E24B4A', borderWidth:0 },
        { label:'1 star',  data:[5,50],  backgroundColor:'#A32D2D', borderWidth:0 },
      ]
    },
    options:{ responsive:true, maintainAspectRatio:false, plugins:{legend:{display:true,position:'bottom',labels:{font:{size:11},boxWidth:10,boxHeight:10}},tooltip:{callbacks:{label:c=>` ${c.dataset.label}: ${c.parsed.y}%`}}}, scales:{ x:{stacked:true,ticks:{font:{size:12}},grid:{display:false}}, y:{stacked:true,ticks:{callback:v=>v+'%',font:{size:11}},grid:GRID} } }
  }), [])

  if (tab === 0) return (
    <>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'10px', marginBottom:'18px' }}>
        <KPI label="Total orders" value="113K+" sub="27 states · 71 categories" />
        <KPI label="National late rate" value="6.58%" sub="Baseline across Brazil" />
        <KPI label="Highest risk state" value="AL 20.88%" sub="3.2× national average" danger />
        <KPI label="Satisfaction drop" value="57%" sub="4.2 → 1.8 (7d+ delays)" />
      </div>
      <div style={{ display:'flex', gap:'12px', marginBottom:'10px' }}>
        {[{color:'#185FA5',label:'On-time'},{color:'#993C1D',label:'Late'}].map(({color,label}) => (
          <span key={label} style={{ display:'flex', alignItems:'center', gap:'5px', fontSize:'11px', color:'var(--muted)' }}>
            <span style={{ width:10, height:10, borderRadius:2, background:color, display:'inline-block' }} />{label}
          </span>
        ))}
      </div>
      <ChartCanvas config={overviewConfig} height='260px' />
    </>
  )

  if (tab === 1) return (
    <>
      <div style={{ fontSize:'13px', color:'var(--muted)', marginBottom:'14px' }}>
        Late delivery rate by state — <strong style={{ color:'#A32D2D', fontWeight:500 }}>red = above 6.58% national average</strong>
      </div>
      {STATE_DATA.map(s => {
        const hi = s.rate > 6.58
        const pct = Math.round(s.rate / 22 * 100)
        return (
          <div key={s.code} style={{ display:'flex', alignItems:'center', gap:'10px', padding:'7px 0', borderBottom:'0.5px solid var(--rule)' }}>
            <span style={{ width:'28px', fontSize:'12px', fontWeight:500, color: hi ? '#A32D2D' : 'var(--muted)', flexShrink:0 }}>{s.code}</span>
            <div style={{ flex:1, height:'7px', background:'var(--rule)', borderRadius:'4px', overflow:'hidden' }}>
              <div style={{ width:`${pct}%`, height:'100%', background: hi ? '#E24B4A' : '#888780', borderRadius:'4px' }} />
            </div>
            <span style={{ width:'48px', textAlign:'right', fontSize:'12px', color: hi ? '#A32D2D' : 'var(--muted)', fontWeight: hi ? 500 : 400 }}>{s.rate.toFixed(2)}%</span>
            {hi && <span style={{ fontSize:'10px', background:'#FCEBEB', color:'#A32D2D', padding:'2px 6px', borderRadius:'3px' }}>above avg</span>}
          </div>
        )
      })}
      <div style={{ marginTop:'14px', padding:'12px 16px', background:'var(--rule)', fontSize:'13px', color:'var(--muted)', lineHeight:1.65 }}>
        Northeast Brazil (AL, MA, PI, BA) shows structurally elevated late rates — infrastructure failure, not volume issue.
      </div>
    </>
  )

  if (tab === 2) return (
    <>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'24px' }}>
        <div>
          <div style={{ fontSize:'9px', textTransform:'uppercase', letterSpacing:'.1em', color:'var(--muted)', marginBottom:'10px' }}>Avg review score by delay</div>
          <ChartCanvas config={satConfig} height='240px' />
        </div>
        <div>
          <div style={{ fontSize:'9px', textTransform:'uppercase', letterSpacing:'.1em', color:'var(--muted)', marginBottom:'10px' }}>Score distribution</div>
          <ChartCanvas config={distConfig} height='240px' />
        </div>
      </div>
      <div style={{ marginTop:'14px', padding:'12px 16px', background:'var(--rule)', fontSize:'13px', color:'var(--muted)', lineHeight:1.65 }}>
        On-time orders average 4.2/5 vs 1.8/5 for delays &gt;7 days — a 57% drop. Every additional day of delay reduces review score by ~0.35 points.
      </div>
    </>
  )

  return null
}