import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        bg: 'var(--bg)',
        areaBg: 'var(--areaBg)',
<<<<<<< HEAD
        textLess: 'var(--textLess)',
        textMuted : 'var(--textMuted)',
=======
        textDark: 'var(--textDark)',
        textLess: 'var(--textLess)',
        textMuted : 'var(--textMuted)',
        placeholder: 'var(--textPlaceholder)',
>>>>>>> origin/feat/3-concertListPage
      },
    },
  },
  plugins: [],
} satisfies Config;
