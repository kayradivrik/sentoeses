/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.{html,js}"],
	theme: {
		screens: {
			sm: "640px",
			md: "768px",
			md2: "850px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
			"3xl": "1025px",
			coco: "1201px",
			ekmek: "1350px",
		},
		extend: {
			fontFamily: {
				dmsans: ['"DM Sans"', "sans-serif"],
				jakarta: ['"Plus Jakarta Sans"', "sans-serif"],
			},
		},
	},
	plugins: [],
};
