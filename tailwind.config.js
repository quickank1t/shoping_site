/* eslint-disable node/no-unsupported-features/es-syntax */
/** @type {import('tailwindcss').Config} */
export default {
	content: [],
	theme: {
		extend: {
			content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
		},
	},
	plugins: [],
};
