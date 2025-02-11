/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx,vue,html}",
    "./src/views/**/*.{js,jsx,ts,tsx,vue,html}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "purple-gradient":
          "linear-gradient(270deg, #FBEAFF 8.58%, #E3CDFF 118.63%)",
      },
      colors: {
        sidebar: {
          DEFAULT: "var(--sidebar-background)",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        gray: {
          800: "#494C59",
        },
      },
      height: {
        "content-header": "var(--content-head-height)",
        "schedule-row-md": "var(--schedule-row-md-height)",
      },
      width: {
        "week-md": "var(--schedule-weeek-width-md)",
        "people-list": "var(--schedule-people-list-width)",
      },
      minHeight: {
        "schedule-row-md": "var(--schedule-row-md-height)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-animate")],
};
