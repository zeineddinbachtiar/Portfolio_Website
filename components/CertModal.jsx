import { useEffect } from 'react'

export default function CertModal({ cert, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  if (!cert) return null

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 500,
        background: 'rgba(12,10,7,.75)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '32px 24px',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: '#fff', width: '100%', maxWidth: '720px',
          maxHeight: '90vh', display: 'flex', flexDirection: 'column',
          boxShadow: '0 8px 48px rgba(0,0,0,.3)',
          animation: 'certIn .18s ease',
        }}
      >
        <style>{`@keyframes certIn { from { transform:translateY(10px);opacity:0 } to { transform:translateY(0);opacity:1 } }`}</style>

        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 16px', height: '44px',
          borderBottom: '1px solid var(--rule)', background: '#FAFAF8', flexShrink: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="1" width="10" height="14" rx="1" stroke="var(--ink)" strokeWidth="1.2"/>
              <path d="M5 5h6M5 8h6M5 11h4" stroke="var(--ink)" strokeWidth="1" strokeLinecap="round"/>
            </svg>
            <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--ink)' }}>{cert.name}</span>
            <span style={{ fontSize: '11px', color: 'var(--muted)' }}>· {cert.issuer}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <a
              href={cert.file || '#'}
              download={cert.file ? cert.file.split('/').pop() : undefined}
              style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                padding: '5px 14px', fontSize: '11px', fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: '.08em',
                background: 'var(--ink)', color: 'var(--paper)',
                cursor: 'pointer', border: 'none', fontFamily: 'var(--sans)',
                transition: 'background .15s', textDecoration: 'none',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--burg)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--ink)'}
            >
              ↓ Download
            </a>
            <button onClick={onClose} style={{
              width: '30px', height: '30px', display: 'flex', alignItems: 'center',
              justifyContent: 'center', background: 'none', border: 'none',
              cursor: 'pointer', fontSize: '18px', color: 'var(--muted)',
              transition: 'color .15s', fontFamily: 'var(--sans)',
            }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--ink)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
            >✕</button>
          </div>
        </div>

        {/* Body — cert preview */}
        <div style={{
          flex: 1, overflowY: 'auto', background: '#888',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '24px', minHeight: '400px',
        }}>
          {cert.file ? (
            cert.file.toLowerCase().endsWith('.pdf')
              ? <iframe src={cert.file} style={{ width: '100%', height: '520px', border: 'none' }} />
              : <img src={cert.file} alt={cert.name} style={{ maxWidth: '100%', maxHeight: '520px', objectFit: 'contain', boxShadow: '0 2px 16px rgba(0,0,0,.3)' }} />
          ) : (
            /* Placeholder — styled certificate card */
            <div style={{
              background: 'var(--paper)', width: '100%', maxWidth: '560px',
              padding: '48px 52px', boxShadow: '0 2px 16px rgba(0,0,0,.25)',
              position: 'relative', overflow: 'hidden',
            }}>
              {/* decorative corner lines */}
              <div style={{ position: 'absolute', top: 12, left: 12, width: 28, height: 28, borderTop: '2px solid var(--burg)', borderLeft: '2px solid var(--burg)' }} />
              <div style={{ position: 'absolute', top: 12, right: 12, width: 28, height: 28, borderTop: '2px solid var(--burg)', borderRight: '2px solid var(--burg)' }} />
              <div style={{ position: 'absolute', bottom: 12, left: 12, width: 28, height: 28, borderBottom: '2px solid var(--burg)', borderLeft: '2px solid var(--burg)' }} />
              <div style={{ position: 'absolute', bottom: 12, right: 12, width: 28, height: 28, borderBottom: '2px solid var(--burg)', borderRight: '2px solid var(--burg)' }} />

              <div style={{ textAlign: 'center', borderBottom: '1px solid var(--rule)', paddingBottom: '20px', marginBottom: '24px' }}>
                <div style={{ fontSize: '8px', textTransform: 'uppercase', letterSpacing: '.22em', color: 'var(--muted)', fontWeight: 900, marginBottom: '8px' }}>
                  Certificate of Completion
                </div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '11px', color: 'var(--muted)', fontStyle: 'italic' }}>
                  This is to certify that
                </div>
              </div>

              <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '28px', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-.02em', marginBottom: '6px' }}>
                  Zeineddin Ahmad Bachtiar
                </div>
                <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '12px', color: 'var(--muted)' }}>
                  has successfully completed
                </div>
              </div>

              <div style={{ textAlign: 'center', background: 'var(--ink)', color: 'var(--paper)', padding: '14px 24px', marginBottom: '24px' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '20px', fontWeight: 700, letterSpacing: '-.01em' }}>
                  {cert.name}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                  <div style={{ fontSize: '7.5px', textTransform: 'uppercase', letterSpacing: '.16em', color: 'var(--muted)', fontWeight: 900, marginBottom: '4px' }}>Issued by</div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '14px', fontWeight: 700, color: 'var(--ink)' }}>{cert.issuer}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '7.5px', textTransform: 'uppercase', letterSpacing: '.16em', color: 'var(--muted)', fontWeight: 900, marginBottom: '4px' }}>Date</div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '14px', fontWeight: 700, color: 'var(--ink)' }}>{cert.year}</div>
                </div>
              </div>

              <div style={{ textAlign: 'center', marginTop: '28px', fontSize: '9px', color: 'var(--muted)', fontStyle: 'italic' }}>
                * Upload file sertifikat ke /public/certs/ untuk menampilkan dokumen asli
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={{
          padding: '8px 16px', borderTop: '1px solid var(--rule)',
          background: '#FAFAF8', display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexShrink: 0,
        }}>
          <span style={{ fontSize: '11px', color: 'var(--muted)' }}>{cert.issuer} · {cert.year}</span>
          <button onClick={onClose} style={{
            padding: '5px 14px', fontSize: '11px', fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '.08em',
            background: 'transparent', color: 'var(--ink)',
            border: '1px solid var(--rule)', cursor: 'pointer',
            fontFamily: 'var(--sans)', transition: 'all .15s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.color = 'var(--paper)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ink)' }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}