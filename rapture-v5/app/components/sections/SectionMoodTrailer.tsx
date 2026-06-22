'use client'
import { motion } from 'framer-motion'
import { stagger, viewportConfig } from '@/app/lib/motion'

const clips = [
  { label: 'Hasthi — Director\'s Showreel', sub: '3 min · Directed · Edited · Graded', url: 'https://youtu.be/WHEOOzDfoSQ', tag: 'SHOWREEL' },
  { label: 'Hasthi — Short #1', sub: 'Behind the work', url: 'https://youtube.com/shorts/hGWE9aoK6qY', tag: 'SHORT' },
  { label: 'Hasthi — Short #2', sub: 'Visual language', url: 'https://youtube.com/shorts/cEL5mO55fos', tag: 'SHORT' },
]

export default function SectionMoodTrailer({ id }: { id: string }) {
  return (
    <section id={id} style={{ minHeight: '100svh', padding: '9vh 26px 12vh', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 540, margin: '0 auto' }}>
        <motion.p {...stagger(0.1)} whileInView={stagger(0.1).animate} viewport={viewportConfig}
          style={{ fontFamily: 'var(--sans)', fontSize: 11.5, letterSpacing: '0.34em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 500, marginBottom: 18 }}>
          THE WORK
        </motion.p>
        <motion.h2 {...stagger(0.2)} whileInView={stagger(0.2).animate} viewport={viewportConfig}
          style={{ fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 'clamp(28px,7vw,40px)', lineHeight: 1.04, marginBottom: 12 }}>
          See the frame before reading the script.
        </motion.h2>
        <motion.p {...stagger(0.25)} whileInView={stagger(0.25).animate} viewport={viewportConfig}
          style={{ fontSize: 15, color: '#d7d2c9', marginBottom: 36, lineHeight: 1.6 }}>
          The Hasthi showreel is three minutes of directed, edited, graded cinema — the visual grammar RAPTURE will be made in.
        </motion.p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {clips.map((clip, i) => (
            <motion.a
              key={clip.url}
              href={clip.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.6, delay: 0.1 * i, ease: [0.25, 0, 0, 1] }}
              style={{
                display: 'flex', alignItems: 'center', gap: 16,
                border: '1px solid var(--line)', borderRadius: 10,
                padding: '18px 20px', textDecoration: 'none',
                background: 'rgba(217,138,74,0.03)',
                transition: 'border-color 0.2s, background 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(217,138,74,0.4)'; (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(217,138,74,0.06)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--line)'; (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(217,138,74,0.03)' }}
            >
              {/* Play icon */}
              <div style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid var(--warm)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                  <path d="M1 1l10 6-10 6V1z" fill="var(--warm)" />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontFamily: 'var(--serif)', fontSize: 18, color: '#efe7da', lineHeight: 1.2, marginBottom: 3 }}>{clip.label}</p>
                <p style={{ fontFamily: 'var(--sans)', fontWeight: 300, fontSize: 13, color: 'var(--muted)' }}>{clip.sub}</p>
              </div>
              <span style={{ fontFamily: 'var(--sans)', fontWeight: 500, fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--warm)', border: '1px solid rgba(217,138,74,0.35)', padding: '4px 8px', borderRadius: 3 }}>
                {clip.tag}
              </span>
            </motion.a>
          ))}
        </div>

        <motion.p {...stagger(0.6)} whileInView={stagger(0.6).animate} viewport={viewportConfig}
          style={{ fontFamily: 'var(--sans)', fontWeight: 300, fontSize: 13, color: 'var(--muted)', marginTop: 28, textAlign: 'center' }}>
          ↗ Opens on YouTube
        </motion.p>
      </div>
    </section>
  )
}
