'use client'
import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportConfig } from '@/app/lib/motion'

export default function SectionDrug({ id }: { id: string }) {
  return (
    <section id={id} style={{ minHeight: '100svh', padding: '9vh 26px 12vh', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 540, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 'inherit' }}>

        {/* Decorative 14 watermark */}
        <div style={{ position: 'absolute', right: -20, top: '20%', fontFamily: 'var(--serif)', fontWeight: 700, fontSize: 'clamp(96px,26vw,180px)', opacity: 0.09, color: 'var(--warm)', lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>
          14
        </div>

        <motion.div {...fadeUp} whileInView={fadeUp.animate} viewport={viewportConfig} style={{ width: '100%', borderRadius: 18, overflow: 'hidden', border: '1px solid var(--line)', marginBottom: 32, aspectRatio: '16/9' }}>
          <img src="/kgf_aerial.jpg" alt="" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 60%', display: 'block', filter: 'brightness(0.45) saturate(0.6)' }} />
        </motion.div>

        <motion.p {...stagger(0.1)} whileInView={stagger(0.1).animate} viewport={viewportConfig} style={{ fontFamily: 'var(--sans)', fontSize: 11.5, letterSpacing: '0.34em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 500, marginBottom: 18 }}>
          THE DRUG
        </motion.p>

        <motion.p {...stagger(0.2)} whileInView={stagger(0.2).animate} viewport={viewportConfig} style={{ fontFamily: 'var(--serif)', fontWeight: 700, fontStyle: 'italic', fontSize: 'clamp(48px,13vw,88px)', color: 'var(--warm)', lineHeight: 1, marginBottom: 12 }}>
          14 minutes.
        </motion.p>

        <motion.p {...stagger(0.3)} whileInView={stagger(0.3).animate} viewport={viewportConfig} style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 24, color: '#e7dfd2', marginBottom: 24 }}>
          False heaven. Then the sea takes you.
        </motion.p>

        <motion.p {...stagger(0.4)} whileInView={stagger(0.4).animate} viewport={viewportConfig} style={{ fontSize: 16, color: '#d7d2c9', maxWidth: '42ch', marginBottom: 16, lineHeight: 1.6 }}>
          RAPTURE is synthetic. Precise. Engineered to feel like everything you were promised and never given. Fourteen minutes of euphoria. Then near-certain death.
        </motion.p>

        <motion.p {...stagger(0.5)} whileInView={stagger(0.5).animate} viewport={viewportConfig} style={{ fontSize: 16, color: '#d7d2c9', maxWidth: '42ch', lineHeight: 1.6 }}>
          It has no known cure. The town&apos;s young are disappearing into it. Someone in Rudravaram is running it. Someone the town trusts completely.
        </motion.p>
      </div>
    </section>
  )
}
