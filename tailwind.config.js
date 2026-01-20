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
                  },
            },
      },
      plugins: [],
};
