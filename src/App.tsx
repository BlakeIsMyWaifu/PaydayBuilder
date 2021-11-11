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
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { isDev } from 'utils/isDev'

const App: React.FC = () => {
	return (
		<div onContextMenu={event => isDev() ? null : event.preventDefault()}>
			<Background />
			<MemoryRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/mask' element={<Mask />} />
					<Route path='/character' element={<Character />} />
					<Route path='/armour' element={<Armour />} />
					<Route path='/equipment' element={<Equipment />} />

					<Route path='/primary' element={<Weapons slot='primary' />} />
					<Route path='/secondary' element={<Weapons slot='secondary' />} />
					<Route path='/throwable' element={<Throwable />} />
					<Route path='/melee' element={<Melee />} />

					<Route path='/skills' element={<Skills />} />
					<Route path='/perkdeck' element={<PerkDeck />} />
					<Route path='/crewmanagement' element={<CrewManagement />} />
				</Routes>
			</MemoryRouter>
		</div>
	)
}

export default App