import './App.css'

import Background from 'components/Background/Background'
import Home from 'pages/Home'
import Mask from 'pages/Mask'
import Skills from 'pages/Skills'
import React from 'react'
import { MemoryRouter, Route, Switch } from 'react-router'
import { isDev } from 'utils/isDev'

const App: React.FC = () => {
	return (
		<div onContextMenu={e => isDev() ? null : e.preventDefault()}>
			<Background />
			<MemoryRouter>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/mask' component={Mask} />
					<Route path='/skills' component={Skills} />
				</Switch>
			</MemoryRouter>
		</div>
	)
}

export default App
