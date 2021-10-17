import { resetAbilities } from 'actions/abilitiesAction'
import { resetCharacter } from 'actions/characterAction'
import { resetSkills } from 'actions/skillsAction'
import { resetWeapon } from 'actions/weaponsAction'
import Container from 'components/Container'
import { InfoDescription, InfoTitle } from 'components/Info'
import perkData from 'data/abilities/perks'
import { useAppDispatch, useAppSelector } from 'hooks'
import { ArmourStatsTable } from 'pages/Armour'
import { MeleeStatsTable } from 'pages/Melee'
import WeaponsStatsTable from 'pages/Weapons/WeaponStatsTable'
import React, { ReactElement, useState } from 'react'

import { ConfigButton, ConfigWrapper, EquipmentContainer, Image, PerkDeckImage, Preview, PreviewWrapper, SelectorWrapper, Tab, TabTitle } from './Home-Elements'
import Selector from './Selector'
import SelectorSkills from './Selector/SelectorSkills'
import SettingsPanel from './SettingsPanel'
import SkillTable from './SkillTable'

export interface hoverInfo {
	title: string;
	description?: string[];
	table?: ReactElement;
}

const Home: React.FC = () => {

	const dispatch = useAppDispatch()

	const { mask, character, armour, equipment } = useAppSelector(state => state.character)
	const { primary, secondary, throwable, melee } = useAppSelector(state => state.weapons)
	const armoury = useAppSelector(state => state.armoury)

	const [hoverInfo, setHoverInfo] = useState<hoverInfo | null>(null)

	const perkDeck = useAppSelector(state => state.abilities.perkdeck)
	const perkDeckIndex = perkData.indexOf(perkData.find(perk => perk.name === perkDeck.name) || perkData[0])

	const [toggleSettings, setToggleSettings] = useState(false)
	const leftFacing = useAppSelector(state => state.settings.leftFacing)

	return (
		<>
			<SettingsPanel toggleSettings={toggleSettings} />
			<Container columns='2fr 1fr 1fr 1fr' rows='calc(100% - 3rem) 3rem' areas='"stats character weapons abilities" ". config config config"' backButton={false}>

				<Tab id='stats'>
					<TabTitle direction='ltr'>Inventory</TabTitle>
					<PreviewWrapper>
						<Preview id='player'></Preview>
						<Preview id='details'>
							{
								hoverInfo && (
									<>
										<InfoTitle>{hoverInfo.title}</InfoTitle>
										<InfoDescription>{hoverInfo.description?.join('\n\n')}</InfoDescription>
										{hoverInfo.table}
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
							title: mask.name,
							description: mask.description
						}}>
							<Image src={`images/masks/${mask.image}.png`} />
						</Selector>

						<Selector title='character' setHoverInfo={setHoverInfo} infoData={{
							title: character.name,
							description: [`Nationality: ${character.nationality}`, `Age: ${character.age.toString()}`, ...character.description]
						}}>
							<Image src={`images/masks/${character.image}.png`} />
						</Selector>

						<Selector title='armour' setHoverInfo={setHoverInfo} infoData={{
							title: armour.name,
							table: <ArmourStatsTable selectedArmour={armour} />
						}}>
							<Image src={`images/armours/${armour.name}.png`} />
						</Selector>

						<Selector title='equipment' setHoverInfo={setHoverInfo} infoData={{
							title: equipment.primary.name,
							description: equipment.primary.description
						}}>
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

						<Selector title='primary' setHoverInfo={setHoverInfo} infoData={{
							title: armoury.primary[primary].weapon.name,
							table: <WeaponsStatsTable showExtraStats={false} selectedWeapon={armoury.primary[primary].weapon} />
						}}>
							<Image src={`images/weapons/${armoury.primary[primary].weapon.image}.png`} leftFacing={leftFacing} />
						</Selector>

						<Selector title='secondary' setHoverInfo={setHoverInfo} infoData={{
							title: armoury.secondary[secondary].weapon.name,
							table: <WeaponsStatsTable showExtraStats={false} selectedWeapon={armoury.secondary[secondary].weapon} />
						}}>
							<Image src={`images/weapons/${armoury.secondary[secondary].weapon.image}.png`} leftFacing={leftFacing} />
						</Selector>

						<Selector title='throwable' setHoverInfo={setHoverInfo} infoData={{
							title: throwable.name,
							description: throwable.description
						}}>
							<Image src={`images/throwables/${throwable.image}.png`} />
						</Selector>

						<Selector title='melee' setHoverInfo={setHoverInfo} infoData={{
							title: melee.name,
							table: <MeleeStatsTable selectedMelee={melee.stats} />
						}}>
							<Image src={`images/melees/${melee.image}.png`} leftFacing={leftFacing} />
						</Selector>

					</SelectorWrapper>
				</Tab>

				<Tab id='abilities'>
					<TabTitle direction='rtl'>Abilities</TabTitle>
					<SelectorWrapper>

						<SelectorSkills setHoverInfo={setHoverInfo} infoData={{
							title: 'Skills',
							table: <SkillTable />
						}} />

						<Selector title='perk deck' setHoverInfo={setHoverInfo} infoData={{
							title: perkDeck.name,
							description: perkDeck.description
						}}>
							<PerkDeckImage x={192} y={(perkDeckIndex + 1) * 48} />
						</Selector>

						<Selector title='crew management' setHoverInfo={setHoverInfo} infoData={null} />

						<Selector title='infamy' setHoverInfo={setHoverInfo} infoData={null} />

					</SelectorWrapper>
				</Tab>

				<ConfigWrapper>
					<ConfigButton onClick={() => setToggleSettings(!toggleSettings)}>[Settings]</ConfigButton>
					<ConfigButton onClick={() => {
						dispatch(resetAbilities())
						dispatch(resetCharacter())
						dispatch(resetSkills())
						dispatch(resetWeapon())
					}}>[Reset Build]</ConfigButton>
				</ConfigWrapper>

			</Container>
		</>
	)
}

export default Home
