import Container from 'components/Container'
import perkData from 'data/abilities/perks'
import { useAppDispatch, useAppSelector } from 'hooks'
import React, { useState } from 'react'

import { ConfigWrapper, EquipmentContainer, Image, PerkDeckImage, Preview, PreviewWrapper, ResetCurrentBuild, SelectorWrapper, Tab, TabTitle } from './Home-Elements'
import Selector from './Selector'
import SelectorSkills from './Selector/SelectorSkills'

const Home: React.FC = () => {

	const { mask, character, armour, equipment } = useAppSelector(state => state.character)

	const dispatch = useAppDispatch()

	const perkDeck = useAppSelector(state => state.abilities.perkdeck)
	const perkDeckIndex = perkData.indexOf(perkData.find(perk => perk.name === perkDeck.name) || perkData[0])

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
					<Selector title='mask'>
						<Image src={`images/masks/${mask.equiped.image}.png`} />
					</Selector>
					<Selector title='character'>
						<Image src={`images/characters/${character.name}.png`} />
					</Selector>
					<Selector title='armour'>
						<Image src={`images/armours/${armour.name}.png`} />
					</Selector>
					<Selector title='equipment'>
						{
							equipment.secondary ? <EquipmentContainer>
								<Image src={`images/equipment/${equipment.primary.name}.png`} />
								<Image src={`images/equipment/${equipment.secondary.name}.png`} />
							</EquipmentContainer> : <Image src={`images/equipment/${equipment.primary.name}.png`} />
						}
					</Selector>
				</SelectorWrapper>
			</Tab>

			<Tab id='weapons'>
				<TabTitle direction='rtl'>Weapons</TabTitle>
				<SelectorWrapper>
					<Selector title='primary' />
					<Selector title='secondary' />
					<Selector title='throwable' />
					<Selector title='melee' />
				</SelectorWrapper>
			</Tab>

			<Tab id='abilities'>
				<TabTitle direction='rtl'>Abilities</TabTitle>
				<SelectorWrapper>
					<SelectorSkills />
					<Selector title='perk deck'>
						<PerkDeckImage x={192} y={(perkDeckIndex + 1) * 48} />
					</Selector>
					<Selector title='crew mangement' />
					<Selector title='infamy' />
				</SelectorWrapper>
			</Tab>

			<ConfigWrapper>
				<ResetCurrentBuild onMouseDown={() => dispatch({type: 'RESET'})}>[Reset Build]</ResetCurrentBuild>
			</ConfigWrapper>

		</Container>
	)
}

export default Home
