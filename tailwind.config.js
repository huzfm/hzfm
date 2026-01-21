/** @type {import('tailwindcss').Config} */
module.exports = {
      content: [
            "./app/**/*.{js,ts,jsx,tsx}",
            "./pages/**/*.{js,ts,jsx,tsx}",
            "./components/**/*.{js,ts,jsx,tsx}",
            "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
            extend: {
                  animation: {
                        energy: "energy 6s linear infinite",
                        scan: "scan 2.5s linear infinite",
                        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
                        "float-up": "float-up 3s ease-in-out infinite",
                        shimmer: "shimmer 3s linear infinite",
                        "shimmer-text": "shimmer-text 2s linear infinite",
                        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
                        breath: "breath 4s ease-in-out infinite",
                        "glitch-1": "glitch-1 0.3s ease-in-out infinite",
                        "glitch-2": "glitch-2 0.3s ease-in-out infinite",
                        wave: "wave 0.6s ease-in-out",
                        "bounce-letter": "bounce-letter 0.4s ease-out",
                  },
                  keyframes: {
                        energy: {
                              "0%": { backgroundPosition: "0% 50%" },
                              "100%": { backgroundPosition: "400% 50%" },
                        },
                        scan: {
                              "0%": { backgroundPosition: "0 0" },
                              "100%": { backgroundPosition: "200px 0" },
                        },
                        "pulse-slow": {
                              "0%, 100%": { opacity: "0.3" },
                              "50%": { opacity: "0.6" },
                        },
                        "float-up": {
                              "0%": { transform: "translateY(100%)", opacity: "0" },
                              "10%": { opacity: "0.6" },
                              "90%": { opacity: "0.6" },
                              "100%": { transform: "translateY(-100vh)", opacity: "0" },
                        },
                        shimmer: {
                              "0%": { backgroundPosition: "-200% 0" },
                              "100%": { backgroundPosition: "200% 0" },
                        },
                        "shimmer-text": {
                              "0%": { backgroundPosition: "200% 0" },
                              "100%": { backgroundPosition: "-200% 0" },
                        },
                        "pulse-glow": {
                              "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
                              "50%": { opacity: "0.6", transform: "scale(1.05)" },
                        },
                        breath: {
                              "0%, 100%": { transform: "scale(1) scaleX(1.1)" },
                              "50%": { transform: "scale(1.03) scaleX(1.12)" },
                        },
                        "glitch-1": {
                              "0%, 100%": { transform: "translate(0)" },
                              "20%": { transform: "translate(-3px, 2px)" },
                              "40%": { transform: "translate(3px, -2px)" },
                              "60%": { transform: "translate(-2px, 1px)" },
                              "80%": { transform: "translate(2px, -1px)" },
                        },
                        "glitch-2": {
                              "0%, 100%": { transform: "translate(0)" },
                              "20%": { transform: "translate(3px, -2px)" },
                              "40%": { transform: "translate(-3px, 2px)" },
                              "60%": { transform: "translate(2px, -1px)" },
                              "80%": { transform: "translate(-2px, 1px)" },
                        },
                        wave: {
                              "0%, 100%": { transform: "translateY(0)" },
                              "50%": { transform: "translateY(-10px)" },
                        },
                        "bounce-letter": {
                              "0%": { transform: "scale(1)" },
                              "50%": { transform: "scale(1.2)" },
                              "100%": { transform: "scale(1)" },
                        },
                  },
            },
      },
      plugins: [],
};
