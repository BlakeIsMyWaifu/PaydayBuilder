// @ts-check

!process.env.SKIP_ENV_VALIDATION && (await import('./src/env.mjs'))

import bundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = bundleAnalyzer({
	enabled: process.env.ANALYZE === 'true'
})

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
	},
	eslint: {
		dirs: ['styles']
	}
}

export default withBundleAnalyzer(config)
