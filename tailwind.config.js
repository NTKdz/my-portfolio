/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "bounce-1": "bounce 1s infinite 0s",
        "bounce-2": "bounce 1s infinite 0.2s",
        "bounce-3": "bounce 1s infinite 0.4s",
        "bounce-4": "bounce 1s infinite 0.6s",
        "spin-1": "spin 1s infinite 0s",
        "spin-2": "spin 1s infinite 0.2s",
        "spin-3": "spin 1s infinite 0.4s",
        "spin-4": "spin 1s infinite 0.6s",
        "spin-duration-2": "spin 2s infinite",
        "spin-duration-3": "spin 3s infinite",
        "spin-duration-4": "spin 4s infinite",
        "spin-duration-5": "spin 5s infinite",
        "spin-duration-6": "spin 6s infinite",
        "spin-duration-7": "spin 7s infinite",
        "spin-duration-8": "spin 8s infinite",
        "spin-duration-9": "spin 9s infinite",
        "spin-duration-10": "spin 10s infinite",
      },
    },
  },
  plugins: [],
};
