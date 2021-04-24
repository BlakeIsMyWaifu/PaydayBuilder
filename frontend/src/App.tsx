import './App.css'

import React from 'react'
import { MemoryRouter, Route, Switch } from 'react-router'

import Home from './pages/Home'
import Mask from './pages/Mask'

const App: React.FC = () => {
	return (
		<MemoryRouter>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/mask' component={Mask} />
			</Switch>
		</MemoryRouter>
	)
}

export default App
