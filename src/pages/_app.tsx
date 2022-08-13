import 'fonts/fonts.css'

import { GlobalStyle } from 'GlobalStyle'
import useMountEffect from 'hooks/useMountEffect'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { FC } from 'react'
import { SettingsProvider, UpdateSettingsContext } from 'state/settingsContext'
import { useBuildsStore } from 'state/useBuildsStore'
import styled from 'styled-components'
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

const App: FC<AppProps> = ({ Component, pageProps }) => {

	const { current, builds, importBuild } = useBuildsStore()

	useMountEffect(() => {
		importBuild(builds[current].data)
	})

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

				<Component {...pageProps} />

			</div>
		</SettingsProvider>
	)
}

export default App