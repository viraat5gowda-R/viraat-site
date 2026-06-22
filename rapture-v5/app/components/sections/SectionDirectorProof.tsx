'use client'
import { motion } from 'framer-motion'
import { stagger, viewportConfig } from '@/app/lib/motion'

const photos = [
  { src: '/director_onset_1.jpg', caption: 'ON SET · HASTHI (DIRECTOR)' },
  { src: '/director_kgf.jpg', caption: 'ON SET · KGF CHAPTER 2' },
  { src: '/kgf_aerial.jpg', caption: 'KGF CHAPTER 2 · SCALE' },
  { src: '/director_onset_2.jpg', caption: 'HASTHI · IN PRODUCTION' },
]

export default function SectionDirectorProof({ id }: { id: string }) {
  return (
    <section id={id} style={{ minHeight: '100svh', padding: '9vh 26px 12vh', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 540, margin: '0 auto' }}>
        <motion.p {...stagger(0.1)} whileInView={stagger(0.1).animate} viewport={viewportConfig} style={{ fontFamily: 'var(--sans)', fontSize: 11.5, letterSpacing: '0.34em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 500, marginBottom: 18 }}>
          THE EVIDENCE
        </motion.p>
        <motion.h2 {...stagger(0.2)} whileInView={stagger(0.2).animate} viewport={viewportConfig} style={{ fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 'clamp(28px,7vw,40px)', lineHeight: 1.04, marginBottom: 12 }}>
          Not a claim. A record.
        </motion.h2>
        <motion.p {...stagger(0.25)} whileInView={stagger(0.25).animate} viewport={viewportConfig} style={{ fontSize: 15, color: '#d7d2c9', marginBottom: 28, lineHeight: 1.6 }}>
          Before RAPTURE is made, here is what Viraat has already done.
        </motion.p>

        <motion.div {...stagger(0.3)} whileInView={stagger(0.3).animate} viewport={viewportConfig} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12, marginBottom: 28 }}>
          {photos.map((p) => (
            <div key={p.src}>
              <div style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid var(--line)', aspectRatio: '4/3', background: '#0e1215' }}>
                <img src={p.src} alt={p.caption} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <p style={{ fontFamily: 'var(--sans)', fontSize: 10, color: 'var(--muted)', letterSpacing: '0.16em', textTransform: 'uppercase', marginTop: 6 }}>{p.caption}</p>
            </div>
          ))}
        </motion.div>

        <motion.div {...stagger(0.4)} whileInView={stagger(0.4).animate} viewport={viewportConfig} style={{ borderTop: '1px solid var(--line)', paddingTop: 20, marginBottom: 28 }}>
          {[['Confirmed credits', 'KGF Ch. 2 · Hasthi (Dir.)'], ['IMDb verified', 'nm18569819']].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '11px 0', borderBottom: '1px solid var(--line)' }}>
              <span style={{ fontSize: 13, color: 'var(--muted)' }}>{k}</span>
              <span style={{ fontFamily: 'var(--serif)', fontSize: 17, color: '#efe7da' }}>{v}</span>
            </div>
          ))}
        </motion.div>

        <motion.div {...stagger(0.5)} whileInView={stagger(0.5).animate} viewport={viewportConfig} style={{ textAlign: 'center', background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(217,138,74,0.07) 0%, transparent 70%)', padding: '24px 0', borderRadius: 14 }}>
          <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 20, color: '#efe7da', marginBottom: 6 }}>The Hasthi showreel.</p>
          <p style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 20 }}>3 minutes. Directed. Edited. Graded.</p>
          <a
            href="https://youtu.be/WHEOOzDfoSQ"
            target="_blank"
            rel="noopener"
            style={{ fontFamily: 'var(--sans)', fontWeight: 500, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', border: '1px solid var(--warm)', color: 'var(--warm)', padding: '12px 24px', borderRadius: 3, textDecoration: 'none', display: 'inline-block' }}
          >
            Watch on YouTube ↗
          </a>
        </motion.div>
      </div>
    </section>
  )
}
