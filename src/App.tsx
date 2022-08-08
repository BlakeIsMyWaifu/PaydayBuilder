import { BackgroundContainer, BackgroundImage } from 'App-Elements'
import { FC } from 'react'
import AppRoutes from 'routes/AppRoutes'
import { isDev } from 'utils/isDev'

if (!isDev) {
	window.addEventListener('error', () => {
		localStorage.clear()
		window.location.reload()
	})
}

const App: FC = () => {
	return (
		<div onContextMenu={event => isDev() ? null : event.preventDefault()}>
			<BackgroundContainer>
				<BackgroundImage src='/images/loading_bg.png' />
			</BackgroundContainer>
			<AppRoutes />
		</div>
	)
}

export default App