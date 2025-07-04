/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                "JetBrains": ["JetBrains Mono", "monospace"],
                "Libre": ["Libre Caslon Display", "serif"],
                "Lora": ["Lora Display", "serif"]
            }
        },
    },
    plugins: [
        require('daisyui'),
    ],
}


