module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("@suhomozgy-andrey/panthera-tailwind/dist/theme.js")],
  corePlugins: {
		preflight: false
	},
  plugins: [],
}
