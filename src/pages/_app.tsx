import 'fonts/fonts.css'

import { Analytics } from '@vercel/analytics/react'
import Cookies from 'components/Cookies'
import useCacheAll from 'hooks/useCacheAll'
import useErrorHandler from 'hooks/useErrorHandler'
import useFirstLoadBuildImport from 'hooks/useFirstLoadBuildImport'
import useUpdateBuildData from 'hooks/useUpdateBuildData'
import useUpdateURL from 'hooks/useUpdateURL'
import { type AppProps as NextAppProps } from 'next/app'
import Head from 'next/head'
import { type Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { useState } from 'react'
import { SettingsProvider, UpdateSettingsContext } from 'state/settingsContext'
import styled, { type DefaultTheme, ThemeProvider } from 'styled-components'
import { GlobalStyle, Theme } from 'styles/GlobalStyle'
import { blue } from 'utils/colours'
import { isDev } from 'utils/isDev'
import { trpc } from 'utils/trpc'

const BackgroundImage = styled.img`
	position: absolute;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	z-index: -1;
	object-fit: cover;
`

interface AppProps extends NextAppProps {
	pageProps: {
		session: Session;
	};
}

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps): JSX.Element | null => {

	const hasImportedURL = useFirstLoadBuildImport()

	useUpdateURL(hasImportedURL)

	useUpdateBuildData()

	useErrorHandler()

	useCacheAll()

	const [theme, setTheme] = useState<DefaultTheme>({ isMobile: false })

	return (
		<SessionProvider session={session}>
			<SettingsProvider>
				<ThemeProvider theme={theme}>

					<Head>
						<link rel='shortcut icon' href='/favicon.ico' />
						<meta charSet='UTF-8' />
						<meta name='viewport' content='width=device-width, initial-scale=1.0' />
						<meta property='og:site_name' content='pd2.dev' />
						<meta property='og:title' content='Payday 2 Build Emulator' />
						<meta name='twitter:card' content='summary_large_image' />
						<meta name='theme-color' content={blue} />
					</Head>

					<UpdateSettingsContext />

					<GlobalStyle />

					<Theme setTheme={setTheme} />

					<Analytics />

					<div onContextMenu={event => isDev() ? null : event.preventDefault()}>

						<BackgroundImage src='/images/background.png' />

						<Cookies />

						{hasImportedURL && <Component {...pageProps} />}

					</div>
				</ThemeProvider>
			</SettingsProvider>
		</SessionProvider>
	)
}

export default trpc.withTRPC(App)