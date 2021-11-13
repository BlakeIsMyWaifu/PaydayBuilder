import Loader from 'components/Loader'
import React, { Suspense, lazy } from 'react'
import { Route, MemoryRouter as Router, Routes } from 'react-router-dom'

const Home = lazy(() => import('pages/Home'))

const Mask = lazy(() => import('pages/Mask'))
const Character = lazy(() => import('pages/Character'))
const Armour = lazy(() => import('pages/Armour'))
const Equipment = lazy(() => import('pages/Equipment'))

const Weapons = lazy(() => import('pages/Weapons'))
const Throwable = lazy(() => import('pages/Throwable'))
const Melee = lazy(() => import('pages/Melee'))

const Skills = lazy(() => import('pages/Skills'))
const PerkDeck = lazy(() => import('pages/PerkDeck'))
const CrewManagement = lazy(() => import('pages/CrewManagement'))

const AppRoutes: React.FC = () => {
	return (
		<Router>
			<Suspense fallback={<Loader />}>
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
			</Suspense>
		</Router>
	)
}

export default AppRoutes
