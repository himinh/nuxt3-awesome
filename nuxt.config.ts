// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },

	ssr: false,

	// dir
	srcDir: "src/",

	// imports
	imports: {
		dirs: ["stores/**"],
	},

	// build modules
	modules: ["nuxt-typed-router", "@pinia/nuxt"],

	// runtime config
	runtimeConfig: {
		app: {},
		public: {
			apiBase: process.env.API_BASE_URL,
		},
	},

	// ts
	typescript: {
		strict: true,
		shim: false,
	},

	// pinia config
	pinia: {
		autoImports: ["defineStore"],
	},
});
