'use client'
import { motion } from 'framer-motion'
import { stagger, viewportConfig } from '@/app/lib/motion'

const characters = [
  {
    tag: '◎ HERO',
    name: 'Arjun',
    identity: 'The man the town relies on and never records.',
    dot: 'var(--warm)',
    src: '/arjun_face.jpg',
    pos: 'center top',
  },
  {
    tag: '◎ INVESTIGATOR',
    name: 'Meera',
    identity: 'She finds missing people. She is here for her brother.',
    dot: 'var(--cold)',
    src: '/meera_close.jpg',
    pos: 'center center',
  },
  {
    tag: '◎ OFFICER',
    name: 'Vikram',
    identity: 'The most trusted man in Rudravaram. The town\'s anchor.',
    dot: '#b8914a',
    src: '/vikram_close.jpg',
    pos: 'center top',
  },
  {
    tag: '◎ COAST',
    name: 'Janga',
    identity: 'The visible king. The room organises itself around him.',
    dot: '#c4b48a',
    src: '/janga_close.jpg',
    pos: 'center top',
  },
]

export default function SectionCharacterGallery({ id }: { id: string }) {
  return (
    <section id={id} style={{ minHeight: '100svh', padding: '9vh 26px 12vh', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 540, margin: '0 auto' }}>
        <motion.p {...stagger(0.1)} whileInView={stagger(0.1).animate} viewport={viewportConfig} style={{ fontFamily: 'var(--sans)', fontSize: 11.5, letterSpacing: '0.34em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 500, marginBottom: 18 }}>
          THE FOUR
        </motion.p>
        <motion.h2 {...stagger(0.2)} whileInView={stagger(0.2).animate} viewport={viewportConfig} style={{ fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 'clamp(28px,7vw,40px)', lineHeight: 1.04, marginBottom: 32 }}>
          Each one necessary.
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
          {characters.map((char, i) => (
            <motion.div
              key={char.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.25, 0, 0, 1] }}
              style={{ border: '1px solid var(--line)', borderRadius: 18, overflow: 'hidden' }}
            >
              <div style={{ aspectRatio: '3/4', overflow: 'hidden', background: 'linear-gradient(135deg, rgba(94,125,147,0.2), rgba(10,12,14,0.8))' }}>
                <img
                  src={char.src}
                  alt={char.name}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: char.pos, display: 'block' }}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                />
              </div>
              <div style={{ padding: '16px 16px 20px' }}>
                <span style={{ fontSize: 12, color: '#cfc9bf', border: '1px solid var(--line)', padding: '5px 10px', borderRadius: 999, display: 'inline-block', marginBottom: 10 }}>
                  {char.tag}
                </span>
                <p style={{ fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 26, marginBottom: 6, lineHeight: 1.1 }}>
                  {char.name}
                </p>
                <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 16, color: '#d7d2c9', lineHeight: 1.4, marginBottom: 10 }}>
                  {char.identity}
                </p>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: char.dot }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
