import { resetAbilities } from 'actions/abilitiesAction'
import { resetCharacter } from 'actions/characterAction'
import { resetSkills } from 'actions/skillsAction'
import { resetWeapon } from 'actions/weaponsAction'
import Container from 'components/Container'
import DetectionRisk from 'components/DetectionRisk'
import { InfoDescription, InfoTitle } from 'components/Info'
import perkDecks from 'data/abilities/perks'
import armours from 'data/character/armours'
import characters from 'data/character/characters'
import equipments, { EquipmentData } from 'data/character/equipment'
import masks from 'data/character/masks'
import melees from 'data/weapons/melees'
import throwables from 'data/weapons/throwables'
import { useAppDispatch, useAppSelector } from 'hooks'
import ArmourStatsTable from 'pages/Armour/ArmourStatsTable'
import MeleeStatsTable from 'pages/Melee/MeleeStatsTable'
import ModIcons from 'pages/Weapons/ModIcons/ModIcons'
import WeaponsStatsTable from 'pages/Weapons/WeaponStatsTable'
import React, { ReactElement, useState } from 'react'
import findWeapon from 'utils/findWeapon'

import { ConfigButton, ConfigWrapper, EquipmentContainer, Image, PerkDeckImage, Preview, PreviewWrapper, SelectorWrapper, Tab, TabTitle, VersionText, VersionWrapper } from './Home-Elements'
import Selector from './Selector'
import SelectorSkills from './Selector/SelectorSkills'
import SettingsPanel from './SettingsPanel'
import SkillTable from './SkillTable'

export interface HoverInfo {
	title: string;
	description?: string[];
	table?: ReactElement;
}

const Home: React.FC = () => {

	const dispatch = useAppDispatch()

	const characterState = useAppSelector(state => state.character)
	const mask = masks[characterState.mask]
	const character = characters[characterState.character]
	const armour = armours[characterState.armour]
	const equipmentPrimary = equipments[characterState.equipment.primary]
	const equipmentSecondary: EquipmentData | null = equipments[characterState.equipment.secondary || '']

	const armoury = useAppSelector(state => state.armoury)
	const weaponsState = useAppSelector(state => state.weapons)

	const primaryWeapon = armoury.primary[weaponsState.primary]
	const secondaryWeapon = armoury.secondary[weaponsState.secondary]
	const primaryData = findWeapon(primaryWeapon.weaponFind)
	const secondaryData = findWeapon(secondaryWeapon.weaponFind)
	const throwable = throwables[weaponsState.throwable]
	const melee = melees[weaponsState.melee]

	const [hoverInfo, setHoverInfo] = useState<HoverInfo | null>(null)

	const perkDeck = perkDecks[useAppSelector(state => state.abilities.perkdeck)]
	const perkDeckIndex = Object.keys(perkDecks).indexOf(perkDeck.name)

	const [toggleSettings, setToggleSettings] = useState(false)
	const leftFacing = useAppSelector(state => state.settings.leftFacing)

	return (
		<>
			<SettingsPanel toggleSettings={toggleSettings} setToggleSettings={setToggleSettings} />
			<Container
				columns='2fr 1fr 1fr 1fr'
				rows='calc(100% - 3rem) 3rem'
				areas='"stats character weapons abilities" "version config config config"'
				backButton={false}
			>

				<Tab area='stats'>
					<TabTitle direction='ltr'>Inventory</TabTitle>
					<PreviewWrapper>
						<Preview>
							<DetectionRisk />
						</Preview>
						<Preview>
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

				<Tab area='character'>
					<TabTitle direction='rtl'>Character</TabTitle>
					<SelectorWrapper>

						<Selector
							title='mask'
							setHoverInfo={setHoverInfo}
							infoData={{
								title: mask.name,
								description: mask.description
							}}
						>
							<Image src={`images/masks/${mask.image}.png`} />
						</Selector>

						<Selector
							title='character'
							setHoverInfo={setHoverInfo}
							infoData={{
								title: character.name,
								description: [`Nationality: ${character.nationality}`, `Age: ${character.age.toString()}`, ...character.description]
							}}
						>
							<Image src={`images/masks/${character.image}.png`} />
						</Selector>

						<Selector
							title='armour'
							setHoverInfo={setHoverInfo}
							infoData={{
								title: armour.name,
								table: <ArmourStatsTable selectedArmour={armour.name} />
							}}
						>
							<Image src={`images/armours/${armour.name}.png`} />
						</Selector>

						<Selector
							title='equipment'
							setHoverInfo={setHoverInfo}
							infoData={{
								title: equipmentPrimary.name,
								description: equipmentPrimary.description
							}}
						>
							{
								equipmentSecondary ? <EquipmentContainer>
									<Image src={`images/equipment/${equipmentPrimary.name}.png`} />
									<Image src={`images/equipment/${equipmentSecondary.name}.png`} />
								</EquipmentContainer> : <Image src={`images/equipment/${equipmentPrimary.name}.png`} />
							}
						</Selector>

					</SelectorWrapper>
				</Tab>

				<Tab area='weapons'>
					<TabTitle direction='rtl'>Weapons</TabTitle>
					<SelectorWrapper>

						<Selector
							title='primary'
							setHoverInfo={setHoverInfo}
						>
							<Image
								src={`images/weapons/${primaryData.image}.png`}
								leftFacing={leftFacing}
								onMouseEnter={() => setHoverInfo({
									title: primaryData.name,
									table: <WeaponsStatsTable showExtraStats={false} selectedWeapon={primaryWeapon} />
								})}
							/>
							<ModIcons
								weapon={primaryData}
								modifications={primaryWeapon.modifications}
								setHoverInfo={setHoverInfo}
							/>
						</Selector>

						<Selector
							title='secondary'
							setHoverInfo={setHoverInfo}
						>
							<Image
								src={`images/weapons/${secondaryData.image}.png`}
								leftFacing={leftFacing}
								onMouseEnter={() => setHoverInfo({
									title: secondaryData.name,
									table: <WeaponsStatsTable showExtraStats={false} selectedWeapon={secondaryWeapon} />
								})}
							/>
							<ModIcons
								weapon={secondaryData}
								modifications={secondaryWeapon.modifications}
								setHoverInfo={setHoverInfo}
							/>
						</Selector>

						<Selector
							title='throwable'
							setHoverInfo={setHoverInfo}
							infoData={{
								title: throwable.name,
								description: throwable.description
							}}
						>
							<Image src={`images/throwables/${throwable.image}.png`} />
						</Selector>

						<Selector
							title='melee'
							setHoverInfo={setHoverInfo}
							infoData={{
								title: melee.name,
								table: <MeleeStatsTable selectedMelee={melee.name} />
							}}
						>
							<Image src={`images/melees/${melee.image}.png`} leftFacing={leftFacing} />
						</Selector>

					</SelectorWrapper>
				</Tab>

				<Tab area='abilities'>
					<TabTitle direction='rtl'>Abilities</TabTitle>
					<SelectorWrapper>

						<SelectorSkills setHoverInfo={setHoverInfo} infoData={{
							title: 'Skills',
							table: <SkillTable />
						}} />

						<Selector
							title='perk deck'
							setHoverInfo={setHoverInfo}
							infoData={{
								title: perkDeck.name,
								description: perkDeck.description
							}}
						>
							<PerkDeckImage x={192} y={(perkDeckIndex + 1) * 48} />
						</Selector>

						<Selector
							title='crew management'
							setHoverInfo={setHoverInfo}
							infoData={null}
						/>

						<Selector
							title='infamy'
							setHoverInfo={setHoverInfo}
							infoData={null}
						/>

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

				<VersionWrapper>
					<VersionText>Latest Update: 207</VersionText>
				</VersionWrapper>

			</Container>
		</>
	)
}

export default Home
