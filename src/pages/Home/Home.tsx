import Container from 'components/Container'
import { InfoDescription, InfoTitle } from 'components/Info'
import perkData from 'data/abilities/perks'
import { useAppDispatch, useAppSelector } from 'hooks'
import React, { useState } from 'react'

import { ConfigWrapper, EquipmentContainer, Image, PerkDeckImage, Preview, PreviewWrapper, ResetCurrentBuild, SelectorWrapper, Tab, TabTitle } from './Home-Elements'
import Selector from './Selector'
import SelectorSkills from './Selector/SelectorSkills'

export interface hoverInfo {
	title: string;
	description: string[];
}

const Home: React.FC = () => {

	const { mask, character, armour, equipment } = useAppSelector(state => state.character)

	const { melee } = useAppSelector(state => state.weapons)

	const dispatch = useAppDispatch()

	const [hoverInfo, setHoverInfo] = useState<hoverInfo | null>(null)

	const perkDeck = useAppSelector(state => state.abilities.perkdeck)
	const perkDeckIndex = perkData.indexOf(perkData.find(perk => perk.name === perkDeck.name) || perkData[0])

	return (
		<Container columns='2fr 1fr 1fr 1fr' rows='calc(100% - 3rem) 3rem' areas='"stats character weapons abilities" "config config config config"'>

			<Tab id='stats'>
				<TabTitle direction='ltr'>Inventory</TabTitle>
				<PreviewWrapper>
					<Preview id='player'></Preview>
					<Preview id='details'>
						{
							hoverInfo && (
								<>
									<InfoTitle>{hoverInfo.title}</InfoTitle>
									<InfoDescription>{hoverInfo.description.join('\n\n')}</InfoDescription>
								</>
							)
						}
					</Preview>
				</PreviewWrapper>
			</Tab>

			<Tab id='character'>
				<TabTitle direction='rtl'>Character</TabTitle>
				<SelectorWrapper>

					<Selector title='mask' setHoverInfo={setHoverInfo} infoData={{
						title: mask.equiped.name,
						description: mask.equiped.description}}>
						<Image src={`images/masks/${mask.equiped.image}.png`} />
					</Selector>

					<Selector title='character' setHoverInfo={setHoverInfo} infoData={{
						title: character.name,
						description: [`Nationality: ${character.nationality}`, `Age: ${character.age.toString()}`, ...character.description]}}>
						<Image src={`images/masks/${character.image}.png`} />
					</Selector>

					<Selector title='armour' setHoverInfo={setHoverInfo} infoData={{
						title: armour.name,
						description: armour.desciption}}>
						<Image src={`images/armours/${armour.name}.png`} />
					</Selector>

					<Selector title='equipment' setHoverInfo={setHoverInfo} infoData={{
						title: equipment.primary.name,
						description: equipment.primary.description}}>
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

					<Selector title='primary' setHoverInfo={setHoverInfo} infoData={null} />

					<Selector title='secondary' setHoverInfo={setHoverInfo} infoData={null} />

					<Selector title='throwable' setHoverInfo={setHoverInfo} infoData={null} />

					<Selector title='melee' setHoverInfo={setHoverInfo} infoData={null}>
						<Image src={`images/melees/${melee.image}.png`} />
					</Selector>

				</SelectorWrapper>
			</Tab>

			<Tab id='abilities'>
				<TabTitle direction='rtl'>Abilities</TabTitle>
				<SelectorWrapper>

					<SelectorSkills setHoverInfo={setHoverInfo} infoData={null} />

					<Selector title='perk deck' setHoverInfo={setHoverInfo} infoData={{
						title: perkDeck.name,
						description: perkDeck.description}}>
						<PerkDeckImage x={192} y={(perkDeckIndex + 1) * 48} />
					</Selector>
	
					<Selector title='crew mangement' setHoverInfo={setHoverInfo} infoData={null} />

					<Selector title='infamy' setHoverInfo={setHoverInfo} infoData={null} />

				</SelectorWrapper>
			</Tab>

			<ConfigWrapper>
				<ResetCurrentBuild onMouseDown={() => dispatch({type: 'RESET'})}>[Reset Build]</ResetCurrentBuild>
			</ConfigWrapper>

		</Container>
	)
}

export default Home
