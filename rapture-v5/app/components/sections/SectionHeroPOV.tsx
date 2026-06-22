'use client'
import { motion } from 'framer-motion'
import { stagger, viewportConfig } from '@/app/lib/motion'

const arc = [
  { stage: 'Ashamed', note: 'Hides his goodness as weakness' },
  { stage: 'Armoured', note: 'Deflects with comedy' },
  { stage: 'Exposed', note: 'The system strips him bare' },
  { stage: 'Seen', note: 'No badge required' },
]

const territory = [
  ['Underdog who knows he\'s the best', 'Man who genuinely believes he failed'],
  ['Comedy as charm', 'Comedy as armour over shame'],
  ['Recognition early', 'Recognition denied until the last frame'],
  ['Wins by action', 'Wins by understanding'],
]

export default function SectionHeroPOV({ id }: { id: string }) {
  return (
    <section id={id} style={{ minHeight: '100svh', padding: '9vh 26px 12vh', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(217,138,74,0.06) 0%, transparent 70%)' }} />

      <div style={{ maxWidth: 540, margin: '0 auto' }}>
        <motion.p {...stagger(0.1)} whileInView={stagger(0.1).animate} viewport={viewportConfig} style={{ fontFamily: 'var(--sans)', fontSize: 11.5, letterSpacing: '0.34em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 500, marginBottom: 18 }}>
          FOR THE ACTOR
        </motion.p>
        <motion.h2 {...stagger(0.2)} whileInView={stagger(0.2).animate} viewport={viewportConfig} style={{ fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 'clamp(28px,7vw,40px)', lineHeight: 1.04, marginBottom: 28 }}>
          What Arjun has never been asked of you before.
        </motion.h2>

        {/* Block 1 */}
        <motion.p {...stagger(0.3)} whileInView={stagger(0.3).animate} viewport={viewportConfig} style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 22, color: '#efe7da', lineHeight: 1.3, marginBottom: 40 }}>
          Every character you have played, the hall already knew you were the best man in the room. Arjun is the first time they will see you believe you failed — and hide it with the exact comedy they already love you for. Same energy. New gear.
        </motion.p>

        {/* Block 2 - Arc */}
        <motion.div {...stagger(0.4)} whileInView={stagger(0.4).animate} viewport={viewportConfig} style={{ marginBottom: 40 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 0, position: 'relative' }}>
            <div style={{ position: 'absolute', top: 8, left: '12.5%', right: '12.5%', height: 1, background: 'var(--warm)', opacity: 0.4 }} />
            {arc.map((a, i) => (
              <div key={a.stage} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, position: 'relative' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--warm)', zIndex: 1 }} />
                <span style={{ fontFamily: 'var(--sans)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', textAlign: 'center' }}>{a.stage}</span>
                <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 14, color: '#d7d2c9', textAlign: 'center', lineHeight: 1.3 }}>{a.note}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Block 3 - Territory */}
        <motion.div {...stagger(0.5)} whileInView={stagger(0.5).animate} viewport={viewportConfig} style={{ marginBottom: 36 }}>
          <p style={{ fontFamily: 'var(--sans)', fontWeight: 500, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16 }}>WHAT THIS ADDS</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
            <span style={{ fontFamily: 'var(--sans)', fontSize: 12, color: 'var(--muted)', paddingBottom: 10 }}>What you have played</span>
            <span style={{ fontFamily: 'var(--sans)', fontSize: 12, color: 'var(--warm)', paddingBottom: 10 }}>What Arjun gives</span>
            {territory.map(([left, right], i) => (
              <>
                <div key={`l${i}`} style={{ borderTop: '1px solid var(--line)', padding: '11px 8px 11px 0', fontSize: 14, color: '#d7d2c9', lineHeight: 1.4 }}>{left}</div>
                <div key={`r${i}`} style={{ borderTop: '1px solid var(--line)', padding: '11px 0 11px 8px', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 17, color: '#efe7da', lineHeight: 1.4 }}>{right}</div>
              </>
            ))}
          </div>
        </motion.div>

        {/* Block 4 */}
        <motion.div {...stagger(0.6)} whileInView={stagger(0.6).animate} viewport={viewportConfig} style={{ textAlign: 'center', paddingTop: 28, borderTop: '1px solid var(--line)' }}>
          <p style={{ fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 24, lineHeight: 1.3, color: 'var(--ink)', marginBottom: 12 }}>
            The remembered image: a uniformed officer standing before the entire force — saluting the badgeless man.
          </p>
          <p style={{ fontFamily: 'var(--sans)', fontWeight: 300, fontSize: 14, color: 'var(--muted)' }}>
            Mass whistle. Father&apos;s eyes. No badge by choice.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
