import DetectionRisk from 'components/DetectionRisk'
import { InfoDescription, InfoTitle } from 'components/elements/infoElements'
import ModIcons from 'components/ModIcons'
import { CardIconBase } from 'components/PerkDeck/Perk'
import ArmourStatsTable from 'components/Table/ArmourStatsTable'
import MeleeStatsTable from 'components/Table/MeleeStatsTable'
import WeaponsStatsTable from 'components/Weapons/WeaponStatsTable'
import perkDecks from 'data/abilities/perks'
import armours from 'data/character/armours'
import characters from 'data/character/characters'
import equipments, { EquipmentData } from 'data/character/equipment'
import melees from 'data/weapons/melees'
import throwables from 'data/weapons/throwables'
import Link from 'next/link'
import { HoverInfo } from 'pages/index'
import { FC, useState } from 'react'
import { useSettingsContext } from 'state/settingsContext'
import { useAbilityStore } from 'state/useAbilitiesStore'
import { useArmouryStore } from 'state/useArmouryStore'
import { useCharacterStore } from 'state/useCharacterStore'
import { useWeaponsStore } from 'state/useWeaponsStore'
import styled from 'styled-components'
import { dim } from 'utils/colours'
import corner from 'utils/corner'
import findMask from 'utils/findMask'
import findWeapon from 'utils/findWeapon'

import Selector from './Selector'
import SelectorSkills from './SelectorSkills'
import SkillTable from './SkillTable'

const EquipmentContainer = styled.div`
	display: flex;
	flex-direction: row;
`

interface ImageProps {
	leftFacing?: boolean;
}

const Image = styled.img<ImageProps>`
	height: calc(100% - 32px);
	width: auto;
	max-width: 100%;
	display: block;
	margin-left: auto;
	margin-right: auto;
	${props => props.leftFacing && 'transform: scaleX(-1)'};
`

const PerkDeckImage = styled(CardIconBase)`
	height: calc(100% - 32px);
	aspect-ratio: 1;
	max-width: 100%;
	margin: auto;
	filter: invert(1);
`

interface TabProps {
	area: string;
}

const Tab = styled.div<TabProps>`
	grid-area: ${props => props.area};
`

interface TabTitleProps {
	direction: 'ltr' | 'rtl';
}

const TabTitle = styled.h1<TabTitleProps>`
	direction: ${props => props.direction};
	font-size: 20px;
`

const PreviewWrapper = styled.div`
	width: 100%;
	height: calc(100% - 20px);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

const Preview = styled.div`
	width: calc(100% - 32px);
	height: calc(50% - 20px);
	background-color: ${dim} !important;
	display: flex;
	flex-direction: column;
	padding: 8px 16px;
	overflow-y: auto;
	${corner};
`

const SelectorWrapper = styled.div`
	width: 100%;
	height: calc(100% - 20px);
	${corner};
`

const Tabs: FC = () => {

	const characterState = useCharacterStore()
	const mask = findMask(characterState.mask)
	const character = characters[characterState.character]
	const armour = armours[characterState.armour]
	const equipmentPrimary = equipments[characterState.equipment.primary]
	const equipmentSecondary: EquipmentData | null = equipments[characterState.equipment.secondary || '']

	const armoury = useArmouryStore()
	const weaponsState = useWeaponsStore()

	const primaryWeapon = armoury.primary[weaponsState.primary]
	const secondaryWeapon = armoury.secondary[weaponsState.secondary]
	const primaryData = findWeapon(primaryWeapon.weaponFind)
	const secondaryData = findWeapon(secondaryWeapon.weaponFind)
	const throwable = throwables[weaponsState.throwable]
	const melee = melees[weaponsState.melee]

	const perkDeck = perkDecks[useAbilityStore(state => state.perkDeck)]
	const perkDeckIndex = Object.keys(perkDecks).indexOf(perkDeck.name)

	const [hoverInfo, setHoverInfo] = useState<HoverInfo | null>(null)

	const { leftFacing } = useSettingsContext().state

	return (
		<>
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
						<Image src={`/images/masks/${mask.image}.webp`} />
					</Selector>

					<Selector
						title='character'
						setHoverInfo={setHoverInfo}
						infoData={{
							title: character.name,
							description: [`Nationality: ${character.nationality}`, `Age: ${character.age.toString()}`, ...character.description]
						}}
					>
						<Image src={`/images/masks/${character.image}.webp`} />
					</Selector>

					<Selector
						title='armour'
						setHoverInfo={setHoverInfo}
						infoData={{
							title: armour.name,
							table: <ArmourStatsTable selectedArmour={armour.name} />
						}}
					>
						<Image src={`/images/armours/${armour.name}.webp`} />
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
								<Image src={`/images/equipment/${equipmentPrimary.name}.webp`} />
								<Image src={`/images/equipment/${equipmentSecondary.name}.webp`} />
							</EquipmentContainer> : <Image src={`/images/equipment/${equipmentPrimary.name}.webp`} />
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
						<Link href='primary'>
							<Image
								src={`/images/weapons/${primaryData.image}.webp`}
								leftFacing={leftFacing}
								onMouseEnter={() => setHoverInfo({
									title: primaryData.name,
									table: <WeaponsStatsTable showExtraStats={false} selectedWeapon={primaryWeapon} />
								})}
							/>
						</Link>
						<ModIcons
							weapon={primaryWeapon}
							link={true}
							setHoverInfo={setHoverInfo}
						/>
					</Selector>

					<Selector
						title='secondary'
						setHoverInfo={setHoverInfo}
						enableLink={false}
					>
						<Link href='secondary'>
							<Image
								src={`/images/weapons/${secondaryData.image}.webp`}
								leftFacing={leftFacing}
								onMouseEnter={() => setHoverInfo({
									title: secondaryData.name,
									table: <WeaponsStatsTable showExtraStats={false} selectedWeapon={secondaryWeapon} />
								})}
							/>
						</Link>
						<ModIcons
							weapon={secondaryWeapon}
							link={true}
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
						<Image src={`/images/throwables/${throwable.image}.webp`} />
					</Selector>

					<Selector
						title='melee'
						setHoverInfo={setHoverInfo}
						infoData={{
							title: melee.name,
							table: <MeleeStatsTable selectedMelee={melee.name} />
						}}
					>
						<Image src={`/images/melees/${melee.image}.webp`} leftFacing={leftFacing} />
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
		</>
	)
}

export default Tabs
