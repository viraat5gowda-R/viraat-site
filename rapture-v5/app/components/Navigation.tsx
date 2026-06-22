'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const items = [
  { n: '01', label: 'The World', href: '#world' },
  { n: '02', label: 'The Drug', href: '#drug' },
  { n: '03', label: 'The Story', href: '#logline' },
  { n: '04', label: 'Characters', href: '#characters' },
  { n: '05', label: 'Arjun', href: '#arjun' },
  { n: '06', label: 'For the Actor', href: '#hero-pov' },
  { n: '07', label: 'The Interval', href: '#interval' },
  { n: '08', label: 'The Director', href: '#director' },
  { n: '09', label: 'The Proof', href: '#director-proof' },
  { n: '10', label: 'Positioning', href: '#positioning' },
  { n: '11', label: 'The Recognition', href: '#recognition' },
  { n: '12', label: 'Synopsis', href: '#synopsis' },
  { n: '13', label: 'Request Access', href: '#access' },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)

  const handleClick = (href: string) => {
    setOpen(false)
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }

  return (
    <>
      {/* Menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 90,
              background: 'rgba(8,10,12,0.97)',
              backdropFilter: 'blur(6px)',
              display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
              paddingLeft: 36,
            }}
          >
            <nav>
              {items.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                >
                  <button
                    onClick={() => handleClick(item.href)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 14,
                      padding: '7px 0', background: 'none', border: 'none',
                      cursor: 'pointer', textAlign: 'left', width: '100%',
                    }}
                  >
                    <span style={{ fontFamily: 'var(--sans)', fontSize: 10.5, color: 'var(--faint)', letterSpacing: '0.2em', minWidth: 24 }}>
                      {item.n}
                    </span>
                    <span style={{ fontFamily: 'var(--serif)', fontSize: 22, color: '#cfc9bf', letterSpacing: '0.02em' }}>
                      {item.label}
                    </span>
                  </button>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hamburger button */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        style={{
          position: 'fixed', bottom: 28, right: 28, zIndex: 95,
          width: 52, height: 52, borderRadius: '50%',
          background: 'rgba(20,24,27,0.82)',
          backdropFilter: 'blur(8px)',
          border: '1px solid var(--line)',
          cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexDirection: 'column', gap: open ? 0 : 5,
        }}
      >
        <span style={{
          display: 'block', width: 18, height: 1.5,
          background: 'var(--ink)',
          transform: open ? 'rotate(45deg) translate(0, 0)' : 'none',
          transition: 'transform 0.3s, margin 0.3s',
          margin: open ? '0' : undefined,
          marginTop: open ? '1.5px' : undefined,
        }} />
        <span style={{
          display: 'block', width: 18, height: 1.5,
          background: 'var(--ink)',
          opacity: open ? 0 : 1,
          transition: 'opacity 0.2s',
        }} />
        <span style={{
          display: 'block', width: 18, height: 1.5,
          background: 'var(--ink)',
          transform: open ? 'rotate(-45deg) translate(0, 0)' : 'none',
          transition: 'transform 0.3s, margin 0.3s',
          marginTop: open ? '-3px' : undefined,
        }} />
      </button>
    </>
  )
}
