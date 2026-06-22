'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const FRAME_COUNT = 0

export default function ScrollHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(0)
  const imagesRef = useRef<HTMLImageElement[]>([])
  const currentFrameRef = useRef(0)
  const [isMobile, setIsMobile] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  // Progress bar
  useEffect(() => {
    const onScroll = () => {
      const progress = window.scrollY / (document.body.scrollHeight - window.innerHeight)
      setScrollProgress(Math.min(1, Math.max(0, progress)))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Canvas scrubber (desktop + frames exist)
  useEffect(() => {
    if (isMobile || FRAME_COUNT === 0) return
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1

    function resize() {
      if (!canvas) return
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = '100%'
      canvas.style.height = '100%'
    }
    resize()

    function drawFrame(img: HTMLImageElement) {
      if (!canvas || !ctx) return
      const cw = canvas.width, ch = canvas.height
      const iw = img.naturalWidth, ih = img.naturalHeight
      const scale = Math.max(cw / iw, ch / ih)
      const dx = (cw - iw * scale) / 2
      const dy = (ch - ih * scale) / 2
      ctx.clearRect(0, 0, cw, ch)
      ctx.drawImage(img, dx, dy, iw * scale, ih * scale)
    }

    const images: HTMLImageElement[] = []
    let loaded = 0
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image()
      img.src = `/frames/frame_${String(i).padStart(4, '0')}.jpg`
      img.onload = () => {
        loaded++
        if (loaded === 1) drawFrame(images[0])
      }
      images.push(img)
    }
    imagesRef.current = images

    function loop() {
      if (!container) return
      const rect = container.getBoundingClientRect()
      const progress = Math.min(1, Math.max(0, -rect.top / (container.offsetHeight - window.innerHeight)))
      const target = Math.round(progress * (FRAME_COUNT - 1))
      if (target !== currentFrameRef.current && images[target]?.complete) {
        currentFrameRef.current = target
        drawFrame(images[target])
      }
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)

    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [isMobile])

  const containerStyle: React.CSSProperties = FRAME_COUNT > 0 && !isMobile
    ? { height: '300vh', position: 'relative' }
    : { position: 'relative', height: '100svh' }

  const innerStyle: React.CSSProperties = FRAME_COUNT > 0 && !isMobile
    ? { position: 'sticky', top: 0, width: '100vw', height: '100svh', overflow: 'hidden' }
    : { width: '100%', height: '100%', overflow: 'hidden' }

  const letters = 'RAPTURE'.split('')

  return (
    <div ref={containerRef} style={containerStyle}>
      {/* Fixed progress bar */}
      <div style={{
        position: 'fixed', top: 0, left: 0, zIndex: 100, height: 2,
        width: `${scrollProgress * 100}%`,
        background: 'linear-gradient(90deg, var(--cold), var(--warm))',
        transition: 'width 0.1s linear',
        pointerEvents: 'none',
      }} />

      <div style={innerStyle}>
        {/* Background */}
        {FRAME_COUNT > 0 && !isMobile ? (
          <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
        ) : (
          <img
            src="/world_harbour.jpg"
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        )}

        {/* Fog overlay */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 60% 60% at 20% 70%, rgba(94,125,147,0.3) 0%, transparent 70%), radial-gradient(ellipse 60% 60% at 80% 60%, rgba(94,125,147,0.2) 0%, transparent 70%)',
          animation: 'drift 26s linear infinite',
        }} />

        {/* Gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'linear-gradient(to top, rgba(10,12,14,0.95) 0%, rgba(10,12,14,0.5) 45%, rgba(10,12,14,0.15) 100%)',
        }} />

        {/* Floating lamp dots */}
        {[
          { left: '18%', top: '62%', delay: '0s' },
          { left: '52%', top: '71%', delay: '1.8s' },
          { left: '78%', top: '58%', delay: '3.2s' },
        ].map((lamp, i) => (
          <div key={i} style={{
            position: 'absolute', left: lamp.left, top: lamp.top,
            width: 6, height: 6, borderRadius: '50%',
            background: 'var(--warm)',
            boxShadow: '0 0 18px 6px rgba(217,138,74,0.5)',
            animation: `flick 5s ease-in-out infinite`,
            animationDelay: lamp.delay,
            pointerEvents: 'none',
          }} />
        ))}

        {/* Overlay text */}
        <div style={{
          position: 'absolute', bottom: '14vh', left: 26, right: 26,
          maxWidth: 540, margin: '0 auto',
        }}>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontFamily: 'var(--sans)', fontSize: 11, letterSpacing: '0.34em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 18 }}
          >
            RUDRAVARAM · INDIA
          </motion.p>

          <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 700, fontSize: 'clamp(72px,22vw,128px)', letterSpacing: '0.06em', lineHeight: 1, display: 'flex', overflow: 'hidden', marginBottom: 16 }}>
            {letters.map((l, i) => (
              <motion.span
                key={i}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 + i * 0.06, ease: [0.25, 0, 0, 1] }}
              >
                {l}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 500, fontSize: 22, color: '#e7dfd2', marginBottom: 12 }}
          >
            A heaven that kills.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            style={{ fontFamily: 'var(--sans)', fontWeight: 300, fontSize: 11.5, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 32 }}
          >
            Telugu · Mass Action Thriller · 2026
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 6 }}
          >
            <div style={{
              width: 1, height: 30,
              background: 'var(--warm)',
              animation: 'pulse-line 2s ease-in-out infinite',
            }} />
            <span style={{ fontFamily: 'var(--sans)', fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--muted)' }}>
              SCROLL
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
