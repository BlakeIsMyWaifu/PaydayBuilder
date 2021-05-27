import './App.css'

import Background from 'components/Background'
import Armour from 'pages/Armour'
import Character from 'pages/Character'
import Equipment from 'pages/Equipment'
import Home from 'pages/Home'
import Mask from 'pages/Mask'
import Melee from 'pages/Melee'
import PerkDeck from 'pages/PerkDeck'
import Skills from 'pages/Skills'
import Throwable from 'pages/Throwable'
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
					<Route path='/character' component={Character} />
					<Route path='/armour' component={Armour} />
					<Route path='/equipment' component={Equipment} />

					<Route path='/throwable' component={Throwable} />
					<Route path='/melee' component={Melee} />

					<Route path='/skills' component={Skills} />
					<Route path='/perkdeck' component={PerkDeck} />
				</Switch>
			</MemoryRouter>
		</div>
	)
}

export default App
