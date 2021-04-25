import './App.css'

import React from 'react'
import { MemoryRouter, Route, Switch } from 'react-router'

import Background from './components/Background/Background'
import Home from './pages/Home'
import Mask from './pages/Mask'
import Skills from './pages/Skills'

const App: React.FC = () => {
	return (
		<>
			<Background />
			<MemoryRouter>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/mask' component={Mask} />
					<Route path='/skills' component={Skills} />
				</Switch>
			</MemoryRouter>
		</>
	)
}

export default App
