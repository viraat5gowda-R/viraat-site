'use client'
import { motion } from 'framer-motion'
import { stagger, viewportConfig } from '@/app/lib/motion'

export default function SectionDirector({ id }: { id: string }) {
  return (
    <section id={id} style={{ minHeight: '100svh', padding: '9vh 26px 12vh', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 540, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 'inherit' }}>
        <motion.p {...stagger(0.1)} whileInView={stagger(0.1).animate} viewport={viewportConfig} style={{ fontFamily: 'var(--sans)', fontSize: 11.5, letterSpacing: '0.34em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 500, marginBottom: 24 }}>
          THE DIRECTOR
        </motion.p>

        <motion.div {...stagger(0.2)} whileInView={stagger(0.2).animate} viewport={viewportConfig} style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 28 }}>
          <div style={{ width: 90, height: 90, borderRadius: '50%', border: '2.5px solid var(--warm)', overflow: 'hidden', flexShrink: 0, background: 'rgba(217,138,74,0.1)' }}>
            <img src="/director_viraat.jpg" alt="Viraat" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
              onError={(e) => {
                const el = e.target as HTMLImageElement
                el.style.display = 'none'
                if (el.parentElement) {
                  el.parentElement.innerHTML = '<span style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-family:var(--serif);font-size:36px;font-weight:700;color:var(--warm)">V</span>'
                }
              }} />
          </div>
          <div>
            <p style={{ fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 30, lineHeight: 1, marginBottom: 4 }}>Viraat</p>
            <p style={{ fontFamily: 'var(--sans)', fontWeight: 300, fontSize: 13, color: 'var(--muted)', marginBottom: 8 }}>Director · Writer</p>
            <p style={{ fontFamily: 'var(--sans)', fontWeight: 500, fontSize: 11, letterSpacing: '0.34em', textTransform: 'uppercase', color: 'var(--warm)', marginBottom: 2 }}>KGF CHAPTER 2</p>
            <p style={{ fontFamily: 'var(--sans)', fontWeight: 300, fontSize: 13, color: 'var(--muted)' }}>Direction Department</p>
          </div>
        </motion.div>

        <motion.p {...stagger(0.3)} whileInView={stagger(0.3).animate} viewport={viewportConfig} style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 21, color: '#e7dfd2', lineHeight: 1.3, marginBottom: 28 }}>
          &ldquo;RAPTURE is about the one man in every town who does the right thing and gets no record for it. I have been in rooms where that man was standing. I made this film because I want the hall to finally see him.&rdquo;
        </motion.p>

        <motion.div {...stagger(0.4)} whileInView={stagger(0.4).animate} viewport={viewportConfig} style={{ borderTop: '1px solid var(--line)', paddingTop: 20, marginBottom: 24 }}>
          {[['Hasthi', 'Director'], ['KGF Chapter 2', 'Direction Department']].map(([film, role]) => (
            <div key={film} style={{ display: 'flex', justifyContent: 'space-between', padding: '11px 0', borderBottom: '1px solid var(--line)' }}>
              <span style={{ fontFamily: 'var(--serif)', fontSize: 18, color: '#efe7da' }}>{film}</span>
              <span style={{ fontSize: 13, color: 'var(--muted)' }}>{role}</span>
            </div>
          ))}
        </motion.div>

        <motion.div {...stagger(0.5)} whileInView={stagger(0.5).animate} viewport={viewportConfig} style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'center' }}>
          <a href="https://viraat.pages.dev" target="_blank" rel="noopener" style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--warm)', textDecoration: 'none', borderBottom: '1px solid rgba(217,138,74,0.4)' }}>Portfolio ↗</a>
          <a href="https://www.imdb.com/name/nm18569819/" target="_blank" rel="noopener" style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--cold)', textDecoration: 'none', borderBottom: '1px solid rgba(94,125,147,0.4)' }}>IMDb ↗</a>
          <a href="https://youtu.be/WHEOOzDfoSQ" target="_blank" rel="noopener" style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--warm)', textDecoration: 'none', borderBottom: '1px solid rgba(217,138,74,0.4)' }}>Hasthi Showreel ↗</a>
        </motion.div>
      </div>
    </section>
  )
}
