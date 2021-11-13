import './App.css'

import Background from 'components/Background'
import React from 'react'
import AppRoutes from 'routes/AppRoutes'
import { isDev } from 'utils/isDev'

const App: React.FC = () => {
	return (
		<div onContextMenu={event => isDev() ? null : event.preventDefault()}>
			<Background />
			<AppRoutes />
		</div>
	)
}

export default App