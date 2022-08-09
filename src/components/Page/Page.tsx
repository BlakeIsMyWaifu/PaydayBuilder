import { FC, ReactNode, useEffect } from 'react'
import { Provider } from 'react-redux'
import store from 'store'
import { isDev } from 'utils/isDev'

import { GlobalStyle } from './GlobalStyle'
import { BackgroundContainer, BackgroundImage } from './Page-Elements'

interface PageProps {
	children: ReactNode;
}

const Page: FC<PageProps> = ({ children }) => {

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
				{children}
			</div>
		</Provider>
	)
}

export default Page