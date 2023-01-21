import 'fonts/fonts.css'

import { withTRPC } from '@trpc/next'
import { GlobalStyle } from 'GlobalStyle'
import useMountEffect from 'hooks/useMountEffect'
import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { AppRouter } from 'server/router'
import { SettingsProvider, UpdateSettingsContext } from 'state/settingsContext'
import { defaultBuild, useBuildsStore } from 'state/useBuildsStore'
import styled from 'styled-components'
import superjson from 'superjson'
import { isDev } from 'utils/isDev'

const BackgroundContainer = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.25);
`

const BackgroundImage = styled.img`
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: -1;
`

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps): JSX.Element => {

	const router = useRouter()

	const { current, builds, importBuild } = useBuildsStore()

	const [hasImportedURL, setHasImportURL] = useState<boolean>(false)

	useEffect(() => {
		if (hasImportedURL || !router.isReady) return

		if (Object.keys(router.query).length) {
			const nonEncodedQuery = router.query
			nonEncodedQuery.s = router.query.s?.toString()
				.replaceAll(',', '%2C')
				.replaceAll('@', '%40')
			nonEncodedQuery.n = router.query.n?.toString()
				.replaceAll(' ', '+')
			const urlData = Object.entries(nonEncodedQuery).map(([k, v]) => `${k}=${v}`).join('&')
			importBuild(urlData, urlData !== builds[current].data && builds[current].data !== defaultBuild)
		} else {
			importBuild(builds[current].data)
		}

		setHasImportURL(true)
		// Don't want to call this every time the build changes, only on page load
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [router.isReady])

	useEffect(() => {
		if (!hasImportedURL) return
		router.push(`${router.asPath.split('?').at(0)}/?${builds[current].data}`.replace('//', '/'))
		// If router is added, it will endlessly loop
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [current, builds, hasImportedURL, router.route])

	useMountEffect(() => {
		if (!isDev) {
			const reset = (): void => {
				localStorage.clear()
				window.location.reload()
			}
			window.addEventListener('error', reset)
			return window.removeEventListener('error', reset)
		}
	})

	return (
		<SessionProvider session={session}>
			<SettingsProvider>

				<Head>
					<meta charSet='UTF-8' />
					<meta name='viewport' content='width=device-width, initial-scale=1.0' />
					<title>Payday Builder</title>
					<link rel='shortcut icon' href='/favicon.ico' />
				</Head>

				<UpdateSettingsContext />

				<GlobalStyle />

				<div onContextMenu={event => isDev() ? null : event.preventDefault()}>

					<BackgroundContainer>
						<BackgroundImage src='/images/loading_bg.png' />
					</BackgroundContainer>

					{hasImportedURL && <Component {...pageProps} />}

				</div>
			</SettingsProvider>
		</SessionProvider>
	)
}

const getBaseUrl = (): string => {
	if (typeof window !== undefined) return ''
	if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
	return `http://localhost:${process.env.PORT ?? 3000}`
}

export default withTRPC<AppRouter>({
	config() {
		const url = `${getBaseUrl()}/api/trpc`
		return {
			url,
			transformer: superjson
		}
	},
	ssr: false
})(App)