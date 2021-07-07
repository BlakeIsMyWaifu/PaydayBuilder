import './App.css'

import Background from 'components/Background'
import Armour from 'pages/Armour'
import Character from 'pages/Character'
import CrewManagement from 'pages/CrewManagement'
import Equipment from 'pages/Equipment'
import Home from 'pages/Home'
import Mask from 'pages/Mask'
import Melee from 'pages/Melee'
import PerkDeck from 'pages/PerkDeck'
import Skills from 'pages/Skills'
import Throwable from 'pages/Throwable'
import Weapons from 'pages/Weapons'
import React from 'react'
import { MemoryRouter, Route, Switch } from 'react-router'
import { isDev } from 'utils/isDev'

const App: React.FC = () => {
	return (
		<div onContextMenu={event => isDev() ? null : event.preventDefault()}>
			<Background />
			<MemoryRouter>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/mask' component={Mask} />
					<Route path='/character' component={Character} />
					<Route path='/armour' component={Armour} />
					<Route path='/equipment' component={Equipment} />

					<Route path='/primary' render={() => <Weapons slot='primary' />} />
					<Route path='/secondary' render={() => <Weapons slot='secondary' />} />
					<Route path='/throwable' component={Throwable} />
					<Route path='/melee' component={Melee} />

					<Route path='/skills' component={Skills} />
					<Route path='/perkdeck' component={PerkDeck} />
					<Route path='/crewmanagement' component={CrewManagement} />
				</Switch>
			</MemoryRouter>
		</div>
	)
}

export default App
