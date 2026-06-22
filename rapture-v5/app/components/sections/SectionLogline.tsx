'use client'
import { motion } from 'framer-motion'
import { stagger, viewportConfig } from '@/app/lib/motion'

export default function SectionLogline({ id }: { id: string }) {
  return (
    <section id={id} style={{ minHeight: '100svh', padding: '9vh 26px 12vh', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 540, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 'inherit' }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'linear-gradient(135deg, rgba(217,138,74,0.03) 0%, rgba(94,125,147,0.03) 100%)' }} />

        <motion.p {...stagger(0.1)} whileInView={stagger(0.1).animate} viewport={viewportConfig} style={{ fontFamily: 'var(--sans)', fontSize: 11.5, letterSpacing: '0.34em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 500, marginBottom: 24 }}>
          THE STORY
        </motion.p>

        <motion.h2 {...stagger(0.2)} whileInView={stagger(0.2).animate} viewport={viewportConfig} style={{ fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 'clamp(24px,6vw,36px)', lineHeight: 1.1, marginBottom: 24, color: 'var(--ink)' }}>
          A man who gave up his badge to save a stranger discovers the poison beneath the town&apos;s most trusted face.
        </motion.h2>

        <motion.p {...stagger(0.3)} whileInView={stagger(0.3).animate} viewport={viewportConfig} style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 20, lineHeight: 1.4, color: '#d7d2c9', borderLeft: '2px solid var(--warm)', paddingLeft: 20 }}>
          In Rudravaram, the certified are dangerous.<br />The uncertified are necessary.
        </motion.p>
      </div>
    </section>
  )
}
