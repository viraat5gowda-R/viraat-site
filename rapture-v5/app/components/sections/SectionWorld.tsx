'use client'
import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportConfig } from '@/app/lib/motion'

export default function SectionWorld({ id }: { id: string }) {
  return (
    <section id={id} style={{ minHeight: '100svh', padding: '9vh 26px 12vh', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 540, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 'inherit' }}>
        {/* Ambient glow */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse 60% 40% at 80% 20%, rgba(94,125,147,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 20% 80%, rgba(217,138,74,0.05) 0%, transparent 70%)' }} />

        <motion.div {...fadeUp} whileInView={fadeUp.animate} viewport={viewportConfig} style={{ width: '100%', borderRadius: 18, overflow: 'hidden', border: '1px solid var(--line)', marginBottom: 32, aspectRatio: '16/9' }}>
          <img src="/kgf_aerial.jpg" alt="Rudravaram harbour" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </motion.div>

        <motion.p {...stagger(0.1)} whileInView={stagger(0.1).animate} viewport={viewportConfig} style={{ fontFamily: 'var(--sans)', fontSize: 11.5, letterSpacing: '0.34em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 500, marginBottom: 18 }}>
          THE WORLD
        </motion.p>

        <motion.h2 {...stagger(0.2)} whileInView={stagger(0.2).animate} viewport={viewportConfig} style={{ fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 'clamp(28px,7vw,40px)', lineHeight: 1.04, marginBottom: 20 }}>
          The town the sea keeps judging.
        </motion.h2>

        <motion.p {...stagger(0.3)} whileInView={stagger(0.3).animate} viewport={viewportConfig} style={{ fontSize: 16, color: '#d7d2c9', maxWidth: '42ch', marginBottom: 16, lineHeight: 1.6 }}>
          Rudravaram. A South Indian coastal fishing port where the dawn fish-auction and the night drug route share the same water. The fishing colony lights up warm and honest. The harbour goes cold and quiet after dark.
        </motion.p>

        <motion.p {...stagger(0.4)} whileInView={stagger(0.4).animate} viewport={viewportConfig} style={{ fontSize: 16, color: '#d7d2c9', maxWidth: '42ch', marginBottom: 32, lineHeight: 1.6 }}>
          The sea here is no metaphor. Every family in Rudravaram has buried something they hope the tide never brings back.
        </motion.p>

        <motion.div {...stagger(0.5)} whileInView={stagger(0.5).animate} viewport={viewportConfig}>
          {[
            ['Setting', 'Contemporary coastal South India'],
            ['Register', 'Grounded mass-commercial'],
            ['Palette', 'Warm colony · Cold harbour'],
          ].map(([k, v]) => (
            <div key={k} style={{ borderTop: '1px solid var(--line)', padding: '13px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 13, color: 'var(--muted)' }}>{k}</span>
              <span style={{ fontFamily: 'var(--serif)', fontSize: 19, color: '#efe7da' }}>{v}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
