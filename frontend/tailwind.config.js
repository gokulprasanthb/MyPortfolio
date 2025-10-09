/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Background Colors
        background: 'var(--color-background)', // gray-50
        foreground: 'var(--color-foreground)', // gray-900
        card: {
          DEFAULT: 'var(--color-card)', // white
          foreground: 'var(--color-card-foreground)' // gray-900
        },
        popover: {
          DEFAULT: 'var(--color-popover)', // white
          foreground: 'var(--color-popover-foreground)' // gray-900
        },
        muted: {
          DEFAULT: 'var(--color-muted)', // gray-100
          foreground: 'var(--color-muted-foreground)' // gray-500
        },
        
        // Brand Colors
        primary: {
          DEFAULT: 'var(--color-primary)', // indigo-500
          foreground: 'var(--color-primary-foreground)' // white
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', // violet-500
          foreground: 'var(--color-secondary-foreground)' // white
        },
        accent: {
          DEFAULT: 'var(--color-accent)', // emerald-500
          foreground: 'var(--color-accent-foreground)' // white
        },
        
        // Semantic Colors
        success: {
          DEFAULT: 'var(--color-success)', // emerald-600
          foreground: 'var(--color-success-foreground)' // white
        },
        warning: {
          DEFAULT: 'var(--color-warning)', // amber-600
          foreground: 'var(--color-warning-foreground)' // white
        },
        error: {
          DEFAULT: 'var(--color-error)', // red-600
          foreground: 'var(--color-error-foreground)' // white
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', // red-600
          foreground: 'var(--color-destructive-foreground)' // white
        },
        
        // UI Elements
        border: 'var(--color-border)', // gray-200
        input: 'var(--color-input)', // white
        ring: 'var(--color-ring)', // indigo-500
        
        // Extended Brand Colors
        'text-primary': 'var(--color-text-primary)', // gray-900
        'text-secondary': 'var(--color-text-secondary)', // gray-500
        surface: 'var(--color-surface)', // white
        trust: {
          DEFAULT: 'var(--color-trust)', // blue-500
          foreground: 'var(--color-trust-foreground)' // white
        },
        conversion: {
          DEFAULT: 'var(--color-conversion)', // red-500
          foreground: 'var(--color-conversion-foreground)' // white
        }
      },
      
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', 'monospace']
      },
      
      fontSize: {
        'brand-hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'brand-title': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        'brand-subtitle': ['1.5rem', { lineHeight: '1.3', fontWeight: '500' }],
        'brand-body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'brand-caption': ['0.875rem', { lineHeight: '1.4', fontWeight: '400' }]
      },
      
      spacing: {
        'brand-xs': 'var(--spacing-xs)', // 8px
        'brand-sm': 'var(--spacing-sm)', // 16px
        'brand-md': 'var(--spacing-md)', // 24px
        'brand-lg': 'var(--spacing-lg)', // 32px
        'brand-xl': 'var(--spacing-xl)', // 48px
        'brand-2xl': 'var(--spacing-2xl)' // 64px
      },
      
      boxShadow: {
        'brand-subtle': 'var(--shadow-subtle)',
        'brand-medium': 'var(--shadow-medium)',
        'brand-prominent': 'var(--shadow-prominent)',
        'brand-hover': 'var(--shadow-hover)',
        'brand-inner': 'inset 0 2px 20px rgba(99, 102, 241, 0.2)',
        'brand-card': '0 4px 20px rgba(0, 0, 0, 0.1), 0 8px 40px rgba(99, 102, 241, 0.15)'
      },
      
      borderRadius: {
        'brand': '8px',
        'brand-lg': '12px',
        'brand-xl': '16px'
      },
      
      transitionDuration: {
        'brand-fast': '200ms',
        'brand-medium': '300ms',
        'brand-slow': '400ms',
        'brand-complex': '600ms'
      },
      
      transitionTimingFunction: {
        'brand': 'cubic-bezier(0.4, 0, 0.2, 1)'
      },
      
      gridTemplateColumns: {
        'brand-24': 'repeat(24, 1fr)',
        'brand-12': 'repeat(12, 1fr)'
      },
      
      animation: {
        'blink': 'blink 1s infinite',
        'float': 'float 8s ease-in-out infinite',
        'pulse-gentle': 'pulseGentle 3s ease-in-out infinite',
        'typewriter': 'typewriter 3s steps(40) 1s forwards'
      },
      
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        pulseGentle: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' }
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' }
        }
      },
      
      backdropBlur: {
        'brand': '8px'
      },
      
      zIndex: {
        'header': '50',
        'sidebar': '40',
        'modal': '100',
        'floating': '60'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate')
  ]
}