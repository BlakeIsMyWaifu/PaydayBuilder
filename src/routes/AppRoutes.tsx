import { FC, Suspense, lazy } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Loader from 'routes/Loader'

import LoadURL from './LoadURL'
import UpdateBuild from './UpdateBuild'

const Home = lazy(() => import('components/Home'))

const Mask = lazy(() => import('components/Mask'))
const Character = lazy(() => import('components/Character'))
const Armour = lazy(() => import('components/Armour'))
const Equipment = lazy(() => import('components/Equipment'))

const Weapons = lazy(() => import('components/Weapons'))
const Blackmarket = lazy(() => import('components/Blackmarket'))
const Throwable = lazy(() => import('components/Throwable'))
const Melee = lazy(() => import('components/Melee'))

const Skills = lazy(() => import('components/Skills'))
const PerkDeck = lazy(() => import('components/PerkDeck'))
const CrewManagement = lazy(() => import('components/CrewManagement'))
const Infamy = lazy(() => import('components/Infamy'))

const AppRoutes: FC = () => {
	return (
		<Router>

			<LoadURL />
			<UpdateBuild />

			<Suspense fallback={<Loader />}>
				<Routes>
					<Route path='/' element={<Home />} />

					<Route path='/mask' element={<Mask />} />
					<Route path='/character' element={<Character />} />
					<Route path='/armour' element={<Armour />} />
					<Route path='/equipment' element={<Equipment />} />

					<Route path='/primary' element={<Weapons slot='primary' />} />
					<Route path='/secondary' element={<Weapons slot='secondary' />} />
					<Route path='/blackmarket/:slot/:id' element={<Blackmarket />} />
					<Route path='/blackmarket/:slot/:id/:modtype' element={<Blackmarket />} />
					<Route path='/throwable' element={<Throwable />} />
					<Route path='/melee' element={<Melee />} />

					<Route path='/skills' element={<Skills />} />
					<Route path='/perkdeck' element={<PerkDeck />} />
					<Route path='/crewmanagement' element={<CrewManagement />} />
					<Route path='/infamy' element={<Infamy />} />
				</Routes>
			</Suspense>
		</Router>
	)
}

export default AppRoutes
