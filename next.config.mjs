// @ts-check

!process.env.SKIP_ENV_VALIDATION && (await import('./src/env.mjs'))

/** @type {import('next').NextConfig} */
const config = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true
	},
	swcMinify: true,
	i18n: {
		locales: ['en'],
		defaultLocale: 'en'
	}
}

export default config
