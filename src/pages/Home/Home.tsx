import Container from 'components/Container/Container'
import { useAppSelector } from 'hooks'
import React from 'react'

import { Preview, PreviewWrapper, SelectorWrapper, Tab, TabTitle } from './Home-Elements'
import Selector from './Selector'

const Home: React.FC = () => {

	const character = useAppSelector(state => state.character)

	return (
		<Container columns='2fr 1fr 1fr 1fr' rows='1fr' areas='"stats character weapons abilities"'>

			<Tab id='stats'>
				<TabTitle direction='ltr'>Inventory</TabTitle>
				<PreviewWrapper>
					<Preview id='player'></Preview>
					<Preview id='details'></Preview>
				</PreviewWrapper>
			</Tab>

			<Tab id='character'>
				<TabTitle direction='rtl'>Character</TabTitle>
				
				<SelectorWrapper>
					<Selector path='/mask' title='mask' imagePath={`images/masks/${character.mask.imageColour}.png`}/>
					<Selector path='/character' title='character' imagePath={`images/characters/${character.character.name}.png`}/>
					<Selector path='/armour' title='armour'/>
					<Selector path='/equipment' title='equipment'/>
				</SelectorWrapper>
			</Tab>

			<Tab id='weapons'>
				<TabTitle direction='rtl'>Weapons</TabTitle>
				<SelectorWrapper>
					<Selector path='/primary' title='primary'/>
					<Selector path='/secondary' title='secondary'/>
					<Selector path='/throwable' title='throwable'/>
					<Selector path='/melee' title='melee'/>
				</SelectorWrapper>
			</Tab>

			<Tab id='abilities'>
				<TabTitle direction='rtl'>Abilities</TabTitle>
				<SelectorWrapper>
					<Selector path='/skills' title='skills'/>
					<Selector path='/perkdeck' title='perk deck'/>
					<Selector path='/crewmangement' title='crew mangement'/>
					<Selector path='infamy' title='infamy'/>
				</SelectorWrapper>
			</Tab>

		</Container>
	)
}

export default Home
