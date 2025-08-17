import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./out/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./out/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./out/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ["var(--font-jetbrains)"],
        roboto: ["var(--font-roboto)"],
      },
    },
  },
  plugins: [],
}
export default config
