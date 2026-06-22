'use client'
import { motion } from 'framer-motion'
import { stagger, viewportConfig } from '@/app/lib/motion'

export default function SectionCTA({ id }: { id: string }) {
  return (
    <section id={id} style={{ minHeight: '100svh', padding: '9vh 26px 12vh', background: 'var(--bg)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
      {/* Ambient glow */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse 70% 60% at 50% 55%, rgba(217,138,74,0.07) 0%, transparent 70%)' }} />

      <div style={{ maxWidth: 540, margin: '0 auto', width: '100%', textAlign: 'center' }}>
        <motion.p {...stagger(0.1)} whileInView={stagger(0.1).animate} viewport={viewportConfig}
          style={{ fontFamily: 'var(--sans)', fontSize: 11.5, letterSpacing: '0.34em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 500, marginBottom: 24 }}>
          CONTACT
        </motion.p>

        <motion.h2 {...stagger(0.2)} whileInView={stagger(0.2).animate} viewport={viewportConfig}
          style={{ fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 'clamp(32px,8vw,52px)', lineHeight: 1.04, marginBottom: 12 }}>
          RAPTURE
        </motion.h2>

        <motion.p {...stagger(0.25)} whileInView={stagger(0.25).animate} viewport={viewportConfig}
          style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 'clamp(18px,4vw,24px)', color: 'var(--warm)', marginBottom: 32, lineHeight: 1.3 }}>
          is ready to be made.
        </motion.p>

        <motion.p {...stagger(0.3)} whileInView={stagger(0.3).animate} viewport={viewportConfig}
          style={{ fontSize: 16, color: '#d7d2c9', maxWidth: '38ch', margin: '0 auto 40px', lineHeight: 1.7 }}>
          A grounded mass-commercial thriller. One town. One truth. Human scale. The script is written. The director has a record.
        </motion.p>

        <motion.div {...stagger(0.4)} whileInView={stagger(0.4).animate} viewport={viewportConfig}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          <a
            href="mailto:viraat5gowda@gmail.com?subject=RAPTURE — Producer Inquiry"
            style={{
              fontFamily: 'var(--sans)', fontWeight: 500, fontSize: 12, letterSpacing: '0.24em',
              textTransform: 'uppercase', background: 'var(--warm)', color: '#0a0c0e',
              padding: '16px 36px', borderRadius: 3, textDecoration: 'none', display: 'inline-block',
            }}
          >
            Write to Viraat ↗
          </a>
          <a
            href="https://viraat.pages.dev"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--warm)', textDecoration: 'none', borderBottom: '1px solid rgba(217,138,74,0.4)', paddingBottom: 1 }}
          >
            viraat.pages.dev
          </a>
        </motion.div>

        <motion.div {...stagger(0.55)} whileInView={stagger(0.55).animate} viewport={viewportConfig}
          style={{ marginTop: 64, borderTop: '1px solid var(--line)', paddingTop: 28 }}>
          <p style={{ fontFamily: 'var(--sans)', fontWeight: 300, fontSize: 12, color: 'var(--muted)', letterSpacing: '0.12em' }}>
            © RAPTURE · A film by Viraat · All rights reserved
          </p>
        </motion.div>
      </div>
    </section>
  )
}
