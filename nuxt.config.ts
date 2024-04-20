export default defineNuxtConfig({
	devtools: { enabled: true },

	modules: [
		'@nuxtjs/tailwindcss',
		'shadcn-nuxt',
		'nuxt-typed-router',
		'@pinia/nuxt',
		'@nuxtjs/eslint-module',
		'nuxt-icon',
	],

	shadcn: {
		prefix: '',
		componentDir: './components/ui',
	},

	components: [
		{
			path: '~/components/ui',
			extensions: ['.vue'],
			prefix: '',
		},
		{
			path: '~/components/shared',
			extensions: ['.vue'],
			prefix: '',
		},
		{
			path: '~/components',
			extensions: ['.vue'],
			prefix: '',
		},
	],

	// ssr config
	ssr: false,

	// runtime config
	runtimeConfig: {
		app: {},
		openaiKey: '',
		replicateKey: '',
		appUrl: '',
		public: {
			apiBase: '',
		},
	},

	// ts
	typescript: {
		strict: true,
		shim: false,
	},
});
