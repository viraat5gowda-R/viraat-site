export const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.0, ease: [0.25, 0, 0, 1] as const }
}

export const stagger = (delay: number = 0) => ({
  ...fadeUp,
  transition: { ...fadeUp.transition, delay }
})

export const viewportConfig = { once: true, amount: 0.15 }

export const DESIGN = {
  bg: '#0a0c0e',
  ink: '#f4efe7',
  warm: '#d98a4a',
  cold: '#5e7d93',
  muted: '#9aa0a6',
  faint: '#6c7378',
  line: 'rgba(244,239,231,0.12)',
}
