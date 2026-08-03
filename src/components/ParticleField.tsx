import { useEffect, useRef } from 'react'

interface ParticleFieldProps {
  accent?: string
  density?: number
  className?: string
}

interface Particle {
  x: number
  y: number
  tx: number
  ty: number
  startX: number
  startY: number
  phase: number
  r: number
}

const REDUCED_MOTION = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function ParticleField({
  accent = '#ffb020',
  density = 0.00011,
  className = '',
}: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouse = useRef({ x: -9999, y: -9999 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    let particles: Particle[] = []
    let raf = 0
    let start = performance.now()
    const settleMs = REDUCED_MOTION() ? 0 : 2200

    function buildParticles() {
      const count = Math.min(180, Math.max(50, Math.floor(width * height * density)))
      const cols = Math.ceil(Math.sqrt(count * (width / height)))
      const rows = Math.ceil(count / cols)
      const cellW = width / cols
      const cellH = height / rows
      const next: Particle[] = []
      let i = 0
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          if (i >= count) break
          const tx = cellW * (col + 0.5) + (Math.random() - 0.5) * cellW * 0.35
          const ty = cellH * (row + 0.5) + (Math.random() - 0.5) * cellH * 0.35
          next.push({
            x: Math.random() * width,
            y: Math.random() * height,
            startX: Math.random() * width,
            startY: Math.random() * height,
            tx,
            ty,
            phase: Math.random() * Math.PI * 2,
            r: 1 + Math.random() * 1.6,
          })
          i++
        }
      }
      particles = next
    }

    function resize() {
      const rect = canvas!.getBoundingClientRect()
      width = rect.width
      height = rect.height
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas!.width = width * dpr
      canvas!.height = height * dpr
      ctx!.scale(dpr, dpr)
      buildParticles()
    }

    function easeOutCubic(t: number) {
      return 1 - Math.pow(1 - t, 3)
    }

    function frame(now: number) {
      ctx!.clearRect(0, 0, width, height)
      const elapsed = now - start
      const t = settleMs === 0 ? 1 : Math.min(1, elapsed / settleMs)
      const eased = easeOutCubic(t)

      for (const p of particles) {
        const settledX = p.startX + (p.tx - p.startX) * eased
        const settledY = p.startY + (p.ty - p.startY) * eased
        const driftX = Math.sin(now * 0.00035 + p.phase) * 6 * eased
        const driftY = Math.cos(now * 0.0003 + p.phase) * 6 * eased
        p.x = settledX + driftX
        p.y = settledY + driftY
      }

      ctx!.strokeStyle = accent
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist2 = dx * dx + dy * dy
          if (dist2 < 120 * 120) {
            const alpha = (1 - Math.sqrt(dist2) / 120) * 0.12 * eased
            if (alpha <= 0) continue
            ctx!.globalAlpha = alpha
            ctx!.lineWidth = 1
            ctx!.beginPath()
            ctx!.moveTo(a.x, a.y)
            ctx!.lineTo(b.x, b.y)
            ctx!.stroke()
          }
        }
      }

      ctx!.globalAlpha = 1
      ctx!.fillStyle = accent
      for (const p of particles) {
        const dx = p.x - mouse.current.x
        const dy = p.y - mouse.current.y
        const d = Math.sqrt(dx * dx + dy * dy)
        const glow = d < 140 ? (1 - d / 140) * 0.5 : 0
        ctx!.globalAlpha = 0.45 + glow
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.r + glow * 1.5, 0, Math.PI * 2)
        ctx!.fill()
      }
      ctx!.globalAlpha = 1

      raf = requestAnimationFrame(frame)
    }

    function onPointerMove(e: PointerEvent) {
      const rect = canvas!.getBoundingClientRect()
      mouse.current.x = e.clientX - rect.left
      mouse.current.y = e.clientY - rect.top
    }
    function onPointerLeave() {
      mouse.current.x = -9999
      mouse.current.y = -9999
    }

    resize()
    start = performance.now()
    raf = requestAnimationFrame(frame)

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerleave', onPointerLeave)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerleave', onPointerLeave)
    }
  }, [accent, density])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}
