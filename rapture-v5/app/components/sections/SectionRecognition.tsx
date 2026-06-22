'use client'
import { motion } from 'framer-motion'
import { stagger, viewportConfig } from '@/app/lib/motion'

export default function SectionRecognition({ id }: { id: string }) {
  return (
    <section id={id} style={{ minHeight: '100svh', padding: '9vh 26px 12vh', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(217,138,74,0.05) 0%, transparent 70%)' }} />

      <div style={{ maxWidth: 540, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 'inherit' }}>
        <motion.p {...stagger(0.1)} whileInView={stagger(0.1).animate} viewport={viewportConfig} style={{ fontFamily: 'var(--sans)', fontSize: 11.5, letterSpacing: '0.34em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 500, marginBottom: 18 }}>
          THE RECOGNITION
        </motion.p>

        <motion.h2 {...stagger(0.2)} whileInView={stagger(0.2).animate} viewport={viewportConfig} style={{ fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 'clamp(28px,7vw,40px)', lineHeight: 1.04, marginBottom: 6 }}>
          The system gives him nothing.
        </motion.h2>
        <motion.h2 {...stagger(0.25)} whileInView={stagger(0.25).animate} viewport={viewportConfig} style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontStyle: 'italic', fontSize: 'clamp(22px,5vw,32px)', color: 'var(--warm)', lineHeight: 1.1, marginBottom: 28 }}>
          He no longer needs it.
        </motion.h2>

        <motion.p {...stagger(0.3)} whileInView={stagger(0.3).animate} viewport={viewportConfig} style={{ fontSize: 16, color: '#d7d2c9', maxWidth: '42ch', marginBottom: 16, lineHeight: 1.6 }}>
          RAPTURE ends the only way a story like this can end. Not with a badge. Not with a ceremony. With a uniformed officer standing before the entire force — and choosing to salute the badgeless man who did the work.
        </motion.p>

        <motion.p {...stagger(0.4)} whileInView={stagger(0.4).animate} viewport={viewportConfig} style={{ fontSize: 16, color: '#d7d2c9', maxWidth: '42ch', marginBottom: 36, lineHeight: 1.6 }}>
          And a father, told the truth about an exam hall at last, looking at his son the way he should have been looking all along.
        </motion.p>

        <motion.div {...stagger(0.5)} whileInView={stagger(0.5).animate} viewport={viewportConfig} style={{ borderTop: '1px solid var(--line)', paddingTop: 28, textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 21, color: '#e7dfd2', lineHeight: 1.4, marginBottom: 16 }}>
            The remembered image: a uniform saluting the uncertified man. The father&apos;s eyes finally open. The sea bearing witness.
          </p>
          <p style={{ fontFamily: 'var(--sans)', fontWeight: 300, fontSize: 13, color: 'var(--muted)' }}>
            The last image is the father.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
