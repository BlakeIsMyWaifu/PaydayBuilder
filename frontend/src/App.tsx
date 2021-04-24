import React from 'react'
import { MemoryRouter, Route, Switch } from 'react-router'

import Home from './pages/Home'
import Masks from './pages/Mask'

const App: React.FC = () => {
	return (
		<MemoryRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/mask" component={Masks} />
			</Switch>
		</MemoryRouter>
	)
}

export default App
