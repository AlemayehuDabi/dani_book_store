// Theme configuration for the admin interface
export const theme = {
  // Color palette (using CSS variables from the provided theme)
  colors: {
    // Primary colors
    primary: {
      50: 'var(--color-primary-50)',
      100: 'var(--color-primary-100)',
      200: 'var(--color-primary-200)',
      300: 'var(--color-primary-300)',
      400: 'var(--color-primary-400)',
      500: 'var(--color-primary-500)',
      600: 'var(--color-primary-600)',
      700: 'var(--color-primary-700)',
      800: 'var(--color-primary-800)',
      900: 'var(--color-primary-900)',
      950: 'var(--color-primary-950)'
    },
    
    // Gray scale
    gray: {
      50: 'var(--color-gray-50)',
      100: 'var(--color-gray-100)',
      200: 'var(--color-gray-200)',
      300: 'var(--color-gray-300)',
      400: 'var(--color-gray-400)',
      500: 'var(--color-gray-500)',
      600: 'var(--color-gray-600)',
      700: 'var(--color-gray-700)',
      800: 'var(--color-gray-800)',
      900: 'var(--color-gray-900)',
      950: 'var(--color-gray-950)'
    },
    
    // Status colors
    success: {
      50: '#f0fdf4',
      100: '#dcfce7',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d'
    },
    warning: {
      50: '#fffbeb',
      100: '#fef3c7',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309'
    },
    error: {
      50: '#fef2f2',
      100: '#fee2e2',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c'
    },
    info: {
      50: '#eff6ff',
      100: '#dbeafe',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8'
    }
  },
  
  // Typography
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    serif: ['"Crimson Pro"', 'Georgia', 'serif'],
    mono: ['"Fira Code"', 'monospace']
  },
  
  // Shadows
  boxShadow: {
    xs: '0 1px 2px 0 rgba(0, 0, 0, 0.03)',
    sm: '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
    DEFAULT: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
    md: '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
    lg: '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
    xl: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.03)',
    none: 'none',
    // Special shadow for cards and elevated surfaces
    card: '0 10px 25px -5px rgba(0, 0, 0, 0.03), 0 8px 10px -6px rgba(0, 0, 0, 0.01)',
    'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)'
  },
  
  // Border radius
  borderRadius: {
    none: '0px',
    sm: '0.25rem',
    DEFAULT: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.5rem',
    '2xl': '2rem',
    '3xl': '3rem',
    full: '9999px'
  },
  
  // Transitions
  transition: {
    DEFAULT: 'all 0.2s ease-in-out',
    transform: 'transform 0.2s ease-in-out',
    colors: 'color, background-color, border-color, text-decoration-color, fill, stroke 0.2s ease-in-out',
    opacity: 'opacity 0.2s ease-in-out',
    shadow: 'box-shadow 0.2s ease-in-out'
  },
  
  // Z-index
  zIndex: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800
  }
} as const;

// Animation keyframes
export const keyframes = {
  'fade-in': {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  'fade-out': {
    '0%': { opacity: '1' },
    '100%': { opacity: '0' },
  },
  'slide-in-right': {
    '0%': { transform: 'translateX(100%)' },
    '100%': { transform: 'translateX(0)' },
  },
  'slide-out-right': {
    '0%': { transform: 'translateX(0)' },
    '100%': { transform: 'translateX(100%)' },
  },
  'slide-in-up': {
    '0%': { transform: 'translateY(20px)', opacity: '0' },
    '100%': { transform: 'translateY(0)', opacity: '1' },
  }
} as const;

// Animation utilities
export const animation = {
  'fade-in': 'fade-in 0.2s ease-out',
  'fade-out': 'fade-out 0.2s ease-out',
  'slide-in-right': 'slide-in-right 0.3s ease-out',
  'slide-out-right': 'slide-out-right 0.3s ease-out',
  'slide-in-up': 'slide-in-up 0.3s ease-out'
} as const;

// Export theme types
export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];
export type ThemeShadows = keyof Theme['boxShadow'];
export type ThemeBorderRadius = keyof Theme['borderRadius'];
