import 'fonts/fonts.css'

import { Analytics } from '@vercel/analytics/react'
import Cookies from 'components/Cookies'
import { GlobalStyle, Theme } from 'styles/GlobalStyle'
import useBuildImporter from 'hooks/useBuildImporter'
import useErrorHandler from 'hooks/useErrorHandler'
import { SessionProvider } from 'next-auth/react'
import { type AppProps as NextAppProps } from 'next/app'
import Head from 'next/head'
import { useState } from 'react'
import { SettingsProvider, UpdateSettingsContext } from 'state/settingsContext'
import styled, { type DefaultTheme, ThemeProvider } from 'styled-components'
import { isDev } from 'utils/isDev'
import { getBaseUrl, trpc } from 'utils/trpc'
import { type Session } from 'next-auth'
import { useRouter } from 'next/router'
import { blue } from 'utils/colours'
import { stringifyParams } from 'utils/stringifyUrl'
import { encode } from 'querystring'

const BackgroundImage = styled.img`
	position: absolute;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	z-index: -1;
`

interface AppProps extends NextAppProps {
	pageProps: {
		session: Session;
	};
}

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps): JSX.Element | null => {

	const hasImportedURL = useBuildImporter()

	useErrorHandler()

	const [theme, setTheme] = useState<DefaultTheme>({ isMobile: false })

	const { query } = useRouter()

	return (
		<SessionProvider session={session}>
			<SettingsProvider>
				<ThemeProvider theme={theme}>

					<Head>
						<meta charSet='UTF-8' />
						<meta name='viewport' content='width=device-width, initial-scale=1.0' />
						<title>Payday Builder</title>
						<link rel='shortcut icon' href='/favicon.ico' />
						<meta property='og:site_name' content='pd2.dev' />
						<meta property='og:title' content='Payday 2 Build Emulator' />
						<meta property='og:image' content={`${getBaseUrl()}/api/og?${stringifyParams(new URLSearchParams(encode(query)))}`} />
						<meta name='twitter:card' content='summary_large_image' />
						<meta name='theme-color' content={blue} />
					</Head>

					<UpdateSettingsContext />

					<GlobalStyle />

					<Theme setTheme={setTheme} />

					<Analytics />

					<div onContextMenu={event => isDev() ? null : event.preventDefault()}>

						<BackgroundImage src='/images/loading_bg.png' />

						<Cookies />

						{hasImportedURL && <Component {...pageProps} />}

					</div>
				</ThemeProvider>
			</SettingsProvider>
		</SessionProvider>
	)
}

export default trpc.withTRPC(App)