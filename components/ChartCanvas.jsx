import { useEffect, useRef } from 'react'

export default function ChartCanvas({ config, height = '260px' }) {
  const canvasRef = useRef(null)
  const chartRef = useRef(null)

  useEffect(() => {
    let active = true
    const canvas = canvasRef.current
    if (!canvas) return

    import('chart.js').then(({ Chart, registerables }) => {
      if (!active) return
      Chart.register(...registerables)
      if (chartRef.current) {
        chartRef.current.destroy()
      }
      chartRef.current = new Chart(canvas, config)
    })

    return () => {
      active = false
      if (chartRef.current) {
        chartRef.current.destroy()
        chartRef.current = null
      }
    }
  }, [config])

  return (
    <div style={{ height }}>
      <canvas ref={canvasRef} />
    </div>
  )
}
