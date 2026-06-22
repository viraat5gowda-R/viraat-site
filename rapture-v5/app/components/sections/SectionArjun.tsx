'use client'
import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportConfig } from '@/app/lib/motion'

export default function SectionArjun({ id }: { id: string }) {
  return (
    <section id={id} style={{ minHeight: '100svh', padding: '9vh 26px 12vh', background: 'var(--bg)', position: 'relative' }}>
      <div style={{ maxWidth: 540, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 'inherit' }}>

        <motion.div {...fadeUp} whileInView={fadeUp.animate} viewport={viewportConfig} style={{ width: '100%', borderRadius: 18, overflow: 'hidden', border: '1px solid var(--line)', marginBottom: 28, aspectRatio: '3/4', maxWidth: 320, background: 'linear-gradient(135deg, rgba(217,138,74,0.1), rgba(10,12,14,0.9))' }}>
          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 15, color: 'rgba(217,138,74,0.5)', letterSpacing: '0.08em' }}>Image coming soon</span>
          </div>
        </motion.div>

        <motion.span {...stagger(0.1)} whileInView={stagger(0.1).animate} viewport={viewportConfig} style={{ fontSize: 12, color: '#cfc9bf', border: '1px solid var(--line)', padding: '5px 10px', borderRadius: 999, display: 'inline-block', marginBottom: 16 }}>
          ARJUN
        </motion.span>

        <motion.p {...stagger(0.15)} whileInView={stagger(0.15).animate} viewport={viewportConfig} style={{ fontFamily: 'var(--sans)', fontSize: 11.5, letterSpacing: '0.34em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 500, marginBottom: 14 }}>
          THE MAN THE TOWN NEVER RECORDS
        </motion.p>

        <motion.h2 {...stagger(0.2)} whileInView={stagger(0.2).animate} viewport={viewportConfig} style={{ fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 'clamp(28px,7vw,40px)', lineHeight: 1.04, marginBottom: 6 }}>
          Four marks short of a badge.
        </motion.h2>
        <motion.h2 {...stagger(0.25)} whileInView={stagger(0.25).animate} viewport={viewportConfig} style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontStyle: 'italic', fontSize: 'clamp(22px,5vw,32px)', color: 'var(--warm)', lineHeight: 1.1, marginBottom: 24 }}>
          Exactly what the town needed.
        </motion.h2>

        <motion.p {...stagger(0.3)} whileInView={stagger(0.3).animate} viewport={viewportConfig} style={{ fontSize: 16, color: '#d7d2c9', maxWidth: '42ch', marginBottom: 16, lineHeight: 1.6 }}>
          He failed the police exam. Everyone in Rudravaram believes this. What no one knows: he stopped mid-examination to carry a collapsing stranger out. He was four marks short because he chose a stranger over his own future. He never told anyone. Not even his father.
        </motion.p>

        <motion.p {...stagger(0.4)} whileInView={stagger(0.4).animate} viewport={viewportConfig} style={{ fontSize: 16, color: '#d7d2c9', maxWidth: '42ch', marginBottom: 28, lineHeight: 1.6 }}>
          He does the police&apos;s work without the uniform, without credit, without record. His father calls him a man who couldn&apos;t crack it. He says nothing.
        </motion.p>

        <motion.p {...stagger(0.5)} whileInView={stagger(0.5).animate} viewport={viewportConfig} style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 21, lineHeight: 1.34, color: '#e7dfd2', marginBottom: 28 }}>
          The most qualified man in the room has never been certified to enter it.
        </motion.p>

        <motion.div {...stagger(0.6)} whileInView={stagger(0.6).animate} viewport={viewportConfig} style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {['Weaponised Nobody', 'Wire', 'Uncertified', 'Seen at last'].map(pill => (
            <span key={pill} style={{ fontSize: 12, color: '#cfc9bf', border: '1px solid var(--line)', padding: '7px 12px', borderRadius: 999 }}>{pill}</span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
