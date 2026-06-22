'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { stagger, viewportConfig } from '@/app/lib/motion'

const tabs = ['LOGLINE', 'SHORT', 'PRODUCER'] as const
type Tab = typeof tabs[number]

const content: Record<Tab, React.ReactNode> = {
  LOGLINE: (
    <p style={{ fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 'clamp(22px,5vw,32px)', lineHeight: 1.1, color: 'var(--ink)' }}>
      An uncertified man in a coastal town, doing the police&apos;s work with no badge and no credit, uncovers the drug erasing the town&apos;s young — and finds it is run by the one man the entire town trusts.
    </p>
  ),
  SHORT: (
    <p style={{ fontFamily: 'var(--sans)', fontWeight: 300, fontSize: 16, color: '#d7d2c9', maxWidth: '44ch', lineHeight: 1.7 }}>
      Arjun failed the police exam by four marks — he stopped mid-test to carry a collapsing stranger out. He never told anyone. Now he works Rudravaram&apos;s problems unofficially, for no record.<br /><br />
      When a synthetic drug called RAPTURE begins killing the town&apos;s young — fourteen minutes of false heaven, then the sea takes them — Arjun begins looking. Meera, a professional finder of missing people, is in town for her own reason: her brother vanished.<br /><br />
      What they find together changes everything the town believes about its most trusted, most beloved protector.
    </p>
  ),
  PRODUCER: (
    <p style={{ fontFamily: 'var(--sans)', fontWeight: 300, fontSize: 15, color: '#d7d2c9', maxWidth: '44ch', lineHeight: 1.7 }}>
      RAPTURE is a grounded mass-action thriller set in Rudravaram, a contemporary South Indian coastal fishing port owned by a police-political-port nexus.<br /><br />
      The film follows Arjun — a man who lost his police examination seat because he stopped to save a dying stranger, then refused a bribe, and told no one — as he investigates RAPTURE, a synthetic drug erasing the town&apos;s young. His investigation crosses with Meera, an independent missing-person Finder tracing her own brother.<br /><br />
      RAPTURE is structured as a commercial mass-entertainer: strong first-half comedy with an emotional wound beneath; interval reveal with maximum recognition timing; grounded investigation and action in the second half; and a climax on the harbour during the Mutyalamma festival that resolves through understanding rather than force. The ending is the salute and the father&apos;s eyes.<br /><br />
      Budget tier: mid-range theatrical. Contained world. Human scale. Mass appeal.
    </p>
  ),
}

export default function SectionSynopsis({ id }: { id: string }) {
  const [active, setActive] = useState<Tab>('LOGLINE')

  return (
    <section id={id} style={{ minHeight: '100svh', padding: '9vh 26px 12vh', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 540, margin: '0 auto' }}>
        <motion.p {...stagger(0.1)} whileInView={stagger(0.1).animate} viewport={viewportConfig} style={{ fontFamily: 'var(--sans)', fontSize: 11.5, letterSpacing: '0.34em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 500, marginBottom: 18 }}>
          THE STORY
        </motion.p>
        <motion.h2 {...stagger(0.2)} whileInView={stagger(0.2).animate} viewport={viewportConfig} style={{ fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 'clamp(28px,7vw,40px)', lineHeight: 1.04, marginBottom: 32 }}>
          At every depth.
        </motion.h2>

        {/* Tab bar */}
        <div style={{ display: 'flex', gap: 28, marginBottom: 32, borderBottom: '1px solid var(--line)', paddingBottom: 0 }}>
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              style={{
                fontFamily: 'var(--sans)', fontWeight: 500, fontSize: 12, letterSpacing: '0.16em',
                textTransform: 'uppercase', background: 'none', border: 'none', cursor: 'pointer',
                paddingBottom: 12,
                color: active === tab ? 'var(--warm)' : 'var(--muted)',
                borderBottom: active === tab ? '1px solid var(--warm)' : '1px solid transparent',
                marginBottom: -1,
                transition: 'color 0.2s',
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {content[active]}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
