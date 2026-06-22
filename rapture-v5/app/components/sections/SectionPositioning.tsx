'use client'
import { motion } from 'framer-motion'
import { stagger, viewportConfig } from '@/app/lib/motion'

const principles = [
  { n: '01', title: 'The protagonist is the moral engine', apply: "Arjun's values drive the investigation, not just his action" },
  { n: '02', title: 'Investigation over revenge', apply: 'The engine is truth-finding, not payback' },
  { n: '03', title: 'The villain is embedded, not imported', apply: 'The most trusted man in the town is the source of its rot' },
  { n: '04', title: 'Competence recognised late, not performed early', apply: 'You trust Arjun before you admire him' },
  { n: '05', title: 'Emotional clarity at the end', apply: 'The salute. The father. No badge. Unambiguous.' },
  { n: '06', title: 'Budget discipline as a storytelling strength', apply: 'One town. One truth. Human scale.' },
]

export default function SectionPositioning({ id }: { id: string }) {
  return (
    <section id={id} style={{ minHeight: '100svh', padding: '9vh 26px 12vh', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 540, margin: '0 auto' }}>
        <motion.p {...stagger(0.1)} whileInView={stagger(0.1).animate} viewport={viewportConfig} style={{ fontFamily: 'var(--sans)', fontSize: 11.5, letterSpacing: '0.34em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 500, marginBottom: 18 }}>
          WHY THIS WORKS
        </motion.p>
        <motion.h2 {...stagger(0.2)} whileInView={stagger(0.2).animate} viewport={viewportConfig} style={{ fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 'clamp(28px,7vw,40px)', lineHeight: 1.04, marginBottom: 16 }}>
          The principles that make grounded thrillers land.
        </motion.h2>
        <motion.p {...stagger(0.25)} whileInView={stagger(0.25).animate} viewport={viewportConfig} style={{ fontSize: 15, color: '#d7d2c9', marginBottom: 32, lineHeight: 1.6 }}>
          The best commercial thrillers of the last five years share six structural principles. RAPTURE is built on all six.
        </motion.p>

        {principles.map((p, i) => (
          <motion.div
            key={p.n}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.8, delay: 0.1 * i, ease: [0.25, 0, 0, 1] }}
            style={{ borderTop: '1px solid var(--line)', padding: '16px 0', display: 'flex', gap: 16, alignItems: 'flex-start' }}
          >
            <span style={{ fontFamily: 'var(--sans)', fontSize: 10, color: 'var(--warm)', letterSpacing: '0.2em', flexShrink: 0, paddingTop: 4 }}>{p.n}</span>
            <div>
              <p style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 20, color: '#efe7da', marginBottom: 4, lineHeight: 1.3 }}>{p.title}</p>
              <p style={{ fontFamily: 'var(--sans)', fontWeight: 300, fontSize: 14, color: 'var(--muted)', lineHeight: 1.5 }}>{p.apply}</p>
            </div>
          </motion.div>
        ))}

        <motion.div {...stagger(0.7)} whileInView={stagger(0.7).animate} viewport={viewportConfig} style={{ marginTop: 8 }}>
          {[['Genre Lane', 'Grounded mass-commercial'], ['Target register', 'Mass + Multiplex + OTT'], ['Budget tier', 'Mid-range theatrical']].map(([k, v]) => (
            <div key={k} style={{ borderTop: '1px solid var(--line)', padding: '13px 0', display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 13, color: 'var(--muted)' }}>{k}</span>
              <span style={{ fontFamily: 'var(--serif)', fontSize: 19, color: '#efe7da' }}>{v}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
