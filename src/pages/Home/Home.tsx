import Container from 'components/Container'
import { useAppDispatch, useAppSelector } from 'hooks'
import React from 'react'

import { ConfigWrapper, Preview, PreviewWrapper, ResetCurrentBuild, SelectorWrapper, Tab, TabTitle } from './Home-Elements'
import Selector from './Selector'

const Home: React.FC = () => {

	const character = useAppSelector(state => state.character)

	const dispatch = useAppDispatch()

	return (
		<Container columns='2fr 1fr 1fr 1fr' rows='calc(100% - 3rem) 3rem' areas='"stats character weapons abilities" "config config config config"'>

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
					<Selector path='/mask' title='mask' imagePath={`images/masks/${character.mask.equiped.image}.png`}/>
					<Selector path='/character' title='character' imagePath={`images/characters/${character.character.name}.png`}/>
					<Selector path='/armour' title='armour' imagePath={`images/armours/${character.armour.name}.png`}/>
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

			<ConfigWrapper>
				<ResetCurrentBuild onMouseDown={() => dispatch({type: 'RESET'})}>[Reset Build]</ResetCurrentBuild>
			</ConfigWrapper>

		</Container>
	)
}

export default Home
