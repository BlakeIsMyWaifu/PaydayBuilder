import 'fonts/fonts.css'

import { GlobalStyle } from 'GlobalStyle'
import { AppProps } from 'next/app'
import { FC, useEffect } from 'react'
import { Provider } from 'react-redux'
import store from 'store'
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

const App: FC<AppProps> = ({ Component }) => {

	useEffect(() => {
		if (!isDev) {
			const reset = (): void => {
				localStorage.clear()
				window.location.reload()
			}
			window.addEventListener('error', reset)
			return window.removeEventListener('error', reset)
		}
	}, [])

	return (
		<Provider store={store}>

			<GlobalStyle />

			<div onContextMenu={event => isDev() ? null : event.preventDefault()}>

				<BackgroundContainer>
					<BackgroundImage src='/images/loading_bg.png' />
				</BackgroundContainer>

				<Component />

			</div>
		</Provider>
	)
}

export default App