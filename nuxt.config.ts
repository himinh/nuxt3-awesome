export default defineNuxtConfig({
	devtools: { enabled: true },

	// build modules
	modules: [
		"@nuxt/ui",
		"nuxt-typed-router",
		"@pinia/nuxt",
		"@nuxtjs/eslint-module",
	],

	// ssr config
	ssr: false,

	// runtime config
	runtimeConfig: {
		app: {},
		public: {
			apiBase: process.env.API_BASE_URL,
			firebaseConfig: process.env.API_BASE_URL,
		},
	},

	// ts
	typescript: {
		strict: true,
		shim: false,
	},
});
