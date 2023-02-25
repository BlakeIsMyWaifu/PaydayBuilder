import 'fonts/fonts.css'

import { Analytics } from '@vercel/analytics/react'
import Cookies from 'components/Cookies'
import { GlobalStyle, Theme } from 'GlobalStyle'
import useBuildImporter from 'hooks/useBuildImporter'
import useErrorHandler from 'hooks/useErrorHandler'
import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useState } from 'react'
import { SettingsProvider, UpdateSettingsContext } from 'state/settingsContext'
import styled, { ThemeProvider } from 'styled-components'
import { isDev } from 'utils/isDev'
import { trpc } from 'utils/trpc'

const BackgroundImage = styled.img`
	position: absolute;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	z-index: -1;
`

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps): JSX.Element => {

	const hasImportedURL = useBuildImporter()

	useErrorHandler()

	const [theme, setTheme] = useState<Theme>({ isMobile: false })

	return (
		<SessionProvider session={session}>
			<SettingsProvider>
				<ThemeProvider theme={theme}>

					<Head>
						<meta charSet='UTF-8' />
						<meta name='viewport' content='width=device-width, initial-scale=1.0' />
						<title>Payday Builder</title>
						<link rel='shortcut icon' href='/favicon.ico' />
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