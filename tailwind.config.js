/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'], // Dark mode is enabled via the class strategy
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: {
          DEFAULT: 'hsl(var(--background-light))', // Light mode background
          dark: 'hsl(var(--background-dark))', // Dark mode background
        },
        foreground: {
          DEFAULT: 'hsl(var(--foreground-light))', // Light mode foreground
          dark: 'hsl(var(--foreground-dark))', // Dark mode foreground
        },
        primary: {
          DEFAULT: 'hsl(var(--primary-light))', // Light mode primary
          dark: 'hsl(var(--primary-dark))', // Dark mode primary
          foreground: {
            DEFAULT: 'hsl(var(--primary-foreground-light))',
            dark: 'hsl(var(--primary-foreground-dark))',
          },
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary-light))',
          dark: 'hsl(var(--secondary-dark))',
          foreground: {
            DEFAULT: 'hsl(var(--secondary-foreground-light))',
            dark: 'hsl(var(--secondary-foreground-dark))',
          },
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive-light))',
          dark: 'hsl(var(--destructive-dark))',
          foreground: {
            DEFAULT: 'hsl(var(--destructive-foreground-light))',
            dark: 'hsl(var(--destructive-foreground-dark))',
          },
        },
        muted: {
          DEFAULT: 'hsl(var(--muted-light))',
          dark: 'hsl(var(--muted-dark))',
          foreground: {
            DEFAULT: 'hsl(var(--muted-foreground-light))',
            dark: 'hsl(var(--muted-foreground-dark))',
          },
        },
        accent: {
          DEFAULT: 'hsl(var(--accent-light))',
          dark: 'hsl(var(--accent-dark))',
          foreground: {
            DEFAULT: 'hsl(var(--accent-foreground-light))',
            dark: 'hsl(var(--accent-foreground-dark))',
          },
        },
        popover: {
          DEFAULT: 'hsl(var(--popover-light))',
          dark: 'hsl(var(--popover-dark))',
          foreground: {
            DEFAULT: 'hsl(var(--popover-foreground-light))',
            dark: 'hsl(var(--popover-foreground-dark))',
          },
        },
        card: {
          DEFAULT: 'hsl(var(--card-light))',
          dark: 'hsl(var(--card-dark))',
          foreground: {
            DEFAULT: 'hsl(var(--card-foreground-light))',
            dark: 'hsl(var(--card-foreground-dark))',
          },
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
