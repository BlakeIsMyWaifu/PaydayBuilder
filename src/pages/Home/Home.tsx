import Container from 'components/Container'
import DetectionRisk from 'components/DetectionRisk'
import { InfoDescription, InfoTitle } from 'components/Info/Info-Elements'
import ModIcons from 'components/ModIcons'
import perkDecks from 'data/abilities/perks'
import armours from 'data/character/armours'
import characters from 'data/character/characters'
import equipments, { EquipmentData } from 'data/character/equipment'
import masks from 'data/character/masks'
import melees from 'data/weapons/melees'
import throwables from 'data/weapons/throwables'
import { useAppSelector } from 'hooks/reduxHooks'
import ArmourStatsTable from 'pages/Armour/ArmourStatsTable'
import MeleeStatsTable from 'pages/Melee/MeleeStatsTable'
import WeaponsStatsTable from 'pages/Weapons/WeaponStatsTable'
import React, { ReactElement, useState } from 'react'
import { Link } from 'react-router-dom'
import findWeapon from 'utils/findWeapon'

import BuildSelector from './BuildSelector'
import { ConfigButton, ConfigWrapper, EquipmentContainer, Image, PerkDeckImage, Preview, PreviewWrapper, SelectorWrapper, Tab, TabTitle, VersionContainer, VersionText } from './Home-Elements'
import BuildsPanel from './Panel/BuildsPanel'
import SettingsPanel from './Panel/SettingsPanel'
import Selector from './Selector'
import SelectorSkills from './Selector/SelectorSkills'
import SkillTable from './SkillTable'

export interface HoverInfo {
	title: string;
	description?: string[];
	table?: ReactElement;
}

const Home: React.FC = () => {

	// const dispatch = useAppDispatch()

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

	const [toggleBuilds, setToggleBuilds] = useState(false)

	const [toggleSettings, setToggleSettings] = useState(false)
	const leftFacing = useAppSelector(state => state.settings.leftFacing)

	return (
		<>
			<BuildsPanel toggleBuilds={toggleBuilds} setToggleBuilds={setToggleBuilds} />
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
							<DetectionRisk flexDirection='column' corner={false} />
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
							enableLink={false}
						>
							<Link to='primary'>
								<Image
									src={`images/weapons/${primaryData.image}.png`}
									leftFacing={leftFacing}
									onMouseEnter={() => setHoverInfo({
										title: primaryData.name,
										table: <WeaponsStatsTable showExtraStats={false} selectedWeapon={primaryWeapon} />
									})}
								/>
							</Link>
							<ModIcons
								weapon={primaryData}
								modifications={primaryWeapon.modifications}
								setHoverInfo={setHoverInfo}
								weaponId={weaponsState.primary}
							/>
						</Selector>

						<Selector
							title='secondary'
							setHoverInfo={setHoverInfo}
							enableLink={false}
						>
							<Link to='secondary'>
								<Image
									src={`images/weapons/${secondaryData.image}.png`}
									leftFacing={leftFacing}
									onMouseEnter={() => setHoverInfo({
										title: secondaryData.name,
										table: <WeaponsStatsTable showExtraStats={false} selectedWeapon={secondaryWeapon} />
									})}
								/>
							</Link>
							<ModIcons
								weapon={secondaryData}
								modifications={secondaryWeapon.modifications}
								setHoverInfo={setHoverInfo}
								weaponId={weaponsState.secondary}
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
					<BuildSelector
						toggleBuilds={toggleBuilds}
						setToggleBuilds={setToggleBuilds}
						setToggleSettings={setToggleSettings}
					/>
					<ConfigButton onClick={() => {
						setToggleBuilds(false)
						setToggleSettings(!toggleSettings)
					}}>[Settings]</ConfigButton>
				</ConfigWrapper>

				<VersionContainer>
					<VersionText>Payday Version: 207</VersionText>
					<VersionText>Builder Version: 0.2.0</VersionText>
				</VersionContainer>

			</Container>
		</>
	)
}

export default Home
