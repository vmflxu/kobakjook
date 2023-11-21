import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'headerBg': "url('https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg')",
        // 'headerBg': "url('/assets/images/bg_header.jpg')",
      },
      fontFamily: {
        Pretendard: ["Pretendard Variable"],
      },
      colors: {
        'color-base': '#ECE3CE',
        'color-week': '#739072',
        'color-normal': '#4F6F52',
        'color-strong': '#3A4D39',
        'color-more-strong': '#1D3224',
      }
    },
  },
  plugins: [],
}
export default config
