import type { Theme } from './projects'

interface ThemeSpec {
  hex: string
  glow: string
  text: string
  bg: string
  borderSoft: string
  hoverBgSoft: string
}

export const themes: Record<Theme, ThemeSpec> = {
  amber: {
    hex: '#ffb020',
    glow: 'rgba(255, 176, 32, 0.16)',
    text: 'text-amber-500',
    bg: 'bg-amber-500',
    borderSoft: 'border-amber-500/30',
    hoverBgSoft: 'hover:bg-amber-500/10',
  },
  verdant: {
    hex: '#8bc34a',
    glow: 'rgba(139, 195, 74, 0.16)',
    text: 'text-verdant-500',
    bg: 'bg-verdant-500',
    borderSoft: 'border-verdant-500/30',
    hoverBgSoft: 'hover:bg-verdant-500/10',
  },
  teal: {
    hex: '#14b8a6',
    glow: 'rgba(20, 184, 166, 0.16)',
    text: 'text-teal-500',
    bg: 'bg-teal-500',
    borderSoft: 'border-teal-500/30',
    hoverBgSoft: 'hover:bg-teal-500/10',
  },
  crimson: {
    hex: '#ff4d4f',
    glow: 'rgba(255, 77, 79, 0.16)',
    text: 'text-crimson-500',
    bg: 'bg-crimson-500',
    borderSoft: 'border-crimson-500/30',
    hoverBgSoft: 'hover:bg-crimson-500/10',
  },
  ember: {
    hex: '#ff6b4a',
    glow: 'rgba(255, 107, 74, 0.16)',
    text: 'text-ember-500',
    bg: 'bg-ember-500',
    borderSoft: 'border-ember-500/30',
    hoverBgSoft: 'hover:bg-ember-500/10',
  },
}
