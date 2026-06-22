'use client'
import { motion } from 'framer-motion'
import { stagger, viewportConfig } from '@/app/lib/motion'

export default function SectionInterval({ id }: { id: string }) {
  return (
    <section id={id} style={{ minHeight: '100svh', padding: '9vh 26px 12vh', background: 'var(--bg)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
      {/* Background image */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <img
          src="/lamp_water.jpg"
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          onError={(e) => { (e.target as HTMLImageElement).src = '/world_harbour_dark.jpg' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,12,14,0.76)' }} />
      </div>

      <div style={{ maxWidth: 460, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <motion.p {...stagger(0.1)} whileInView={stagger(0.1).animate} viewport={viewportConfig} style={{ fontFamily: 'var(--sans)', fontSize: 11.5, letterSpacing: '0.34em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 500, marginBottom: 28 }}>
          THE INTERVAL
        </motion.p>

        <motion.h2 {...stagger(0.2)} whileInView={stagger(0.2).animate} viewport={viewportConfig} style={{ fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 'clamp(26px,7vw,44px)', lineHeight: 1.1, marginBottom: 6 }}>
          In the fourteen minutes RAPTURE gives you,
        </motion.h2>
        <motion.h2 {...stagger(0.3)} whileInView={stagger(0.3).animate} viewport={viewportConfig} style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontStyle: 'italic', fontSize: 'clamp(26px,7vw,44px)', color: 'var(--warm)', lineHeight: 1.1, marginBottom: 28 }}>
          what would you choose to see?
        </motion.h2>

        <motion.div {...stagger(0.4)} whileInView={stagger(0.4).animate} viewport={viewportConfig} style={{ width: 40, height: 1, background: 'var(--warm)', margin: '0 auto 24px' }} />

        <motion.p {...stagger(0.5)} whileInView={stagger(0.5).animate} viewport={viewportConfig} style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontStyle: 'italic', fontSize: 20, color: '#e7dfd2', lineHeight: 1.5, marginBottom: 24 }}>
          The man who could finally see Arjun<br />is the man erasing everything he loves.
        </motion.p>

        <motion.p {...stagger(0.6)} whileInView={stagger(0.6).animate} viewport={viewportConfig} style={{ fontFamily: 'var(--sans)', fontWeight: 300, fontSize: 14, color: 'var(--muted)' }}>
          What happens next is told only in the room.
        </motion.p>
      </div>
    </section>
  )
}
