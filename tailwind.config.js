/* eslint global-require: "off" */
module.exports = {
  content: ['./src/components/**/*.{js,ts,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f9fafb',
          100: '#F7FAFC',
          200: '#EDF2F7',
          300: '#E2E8F0',
          400: '#CBD5E0',
          500: '#A0AEC0',
          600: '#718096',
          700: '#4A5568',
          800: '#2D3748',
          900: '#1A202C',
        },
      },
      keyframes: {
        loading: {
          '0%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0 50%' },
        },
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        loading: 'loading 1.5s infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
