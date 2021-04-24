import React from 'react'

import Background from '../../components/Background/Background'
import { Container, Preview, Tab } from './Home-Elements'
import Selector from './Selector'

const Home: React.FC = () => {
	return (
		<>
			<Background />
			<Container>

				<Preview id='stats'></Preview>
				<Preview id='preview'></Preview>

				<Tab id='character'>
					<Selector path='/mask'/>
					<Selector path='/character'/>
					<Selector path='/armour'/>
					<Selector path='/equipment'/>
				</Tab>

				<Tab id='weapons'>
					<Selector path='/primary'/>
					<Selector path='/secondary'/>
					<Selector path='/throwable'/>
					<Selector path='/melee'/>
				</Tab>

				<Tab id='abilities'>
					<Selector path='/skills'/>
					<Selector path='/perkdeck'/>
					<Selector path='/crewmangement'/>
					<Selector path='infamy'/>
				</Tab>

			</Container>
		</>
	)
}

export default Home
