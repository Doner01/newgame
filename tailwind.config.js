/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        keyframes: {
            wiggle: {
                "0%, 100%": { transform: "scale(1)" }, // Reset to default scale
                "50%": { transform: "scale(1.1)" }, // Scale up by 10% at the midpoint
            },
            reduce: {
                "0%, 100%": { transform: "scale(0.9)" },
            },
        },
    },
    plugins: [],
};
