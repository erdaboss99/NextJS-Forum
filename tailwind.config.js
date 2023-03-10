/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					dark: '#393053',
					light: '#ECF2FF',
				},
				highlight: {
					dark: '#ECF2FF',
					light: '#655DBB',
				},
				secondary: {
					dark: '#635985',
					light: '#BFACE2',
				},
				action: '#3E54AC',
			},
			transitionProperty: {
				width: 'width',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
