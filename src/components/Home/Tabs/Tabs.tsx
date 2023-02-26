import DetectionRisk from 'components/DetectionRisk'
import { InfoDescription, InfoTitle } from 'components/elements/infoElements'
import ModIcons from 'components/ModIcons'
import { CardIconBase } from 'components/PerkDeck/Perk'
import ArmourStatsTable from 'components/Table/ArmourStatsTable'
import MeleeStatsTable from 'components/Table/MeleeStatsTable'
import WeaponsStatsTable from 'components/Table/WeaponStatsTable'
import perkDecks from 'data/abilities/perks'
import armours from 'data/character/armours'
import characters from 'data/character/characters'
import equipments, { type EquipmentData } from 'data/character/equipment'
import melees from 'data/weapons/melees'
import throwables from 'data/weapons/throwables'
import { type Dispatch, type FC, type ReactElement, type SetStateAction, useState } from 'react'
import { useIsMobile } from 'state/settingsContext'
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
import SelectorSkills from './SkillsSelector'

interface HoverInfoData {
	title: string;
	description?: string[];
	table?: ReactElement;
}

export type HoverInfo = HoverInfoData | null

const EquipmentContainer = styled.div`
	display: flex;
	flex-direction: row;
`

const EquipmentImage = styled.img`
	width: 50%;
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
	height: calc(100% - 20px);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

const Preview = styled(corner)`
	height: calc(50% - 4px);
	background-color: ${dim};
	display: flex;
	flex-direction: column;
	padding: 8px 16px;
	box-sizing: border-box;
	overflow: auto;
`

const SelectorWrapper = styled(corner)`
	height: calc(100% - 20px);
	display: grid;
	grid-template-columns: ${props => props.theme.isMobile ? '1fr 1fr' : '1fr'};
	grid-template-rows: ${props => props.theme.isMobile ? 'minmax(0, 1fr) minmax(0, 1fr)' : '1fr 1fr 1fr 1fr'};
`

const Tabs: FC = () => {

	const [hoverInfo, setHoverInfo] = useState<HoverInfo | null>(null)

	const isMobile = useIsMobile()

	return (
		<>
			{
				!isMobile && <Tab area='stats'>
					<TabTitle direction='ltr'>Inventory</TabTitle>
					<PreviewWrapper>
						<CharacterInfo />
						<HoverInfoSection hoverInfo={hoverInfo} />
					</PreviewWrapper>
				</Tab>
			}

			<Tab area='character'>
				<TabTitle direction='rtl'>Character</TabTitle>
				<SelectorWrapper>
					<MaskSelector setHoverInfo={setHoverInfo} />
					<CharacterSelector setHoverInfo={setHoverInfo} />
					<ArmourSelector setHoverInfo={setHoverInfo} />
					<EquipmentSelector setHoverInfo={setHoverInfo} />
				</SelectorWrapper>
			</Tab>

			<Tab area='weapons'>
				<TabTitle direction='rtl'>Weapons</TabTitle>
				<SelectorWrapper>
					<PrimarySelector setHoverInfo={setHoverInfo} />
					<SecondarySelector setHoverInfo={setHoverInfo} />
					<ThrowableSelector setHoverInfo={setHoverInfo} />
					<MeleeSelector setHoverInfo={setHoverInfo} />
				</SelectorWrapper>
			</Tab>

			<Tab area='abilities'>
				<TabTitle direction='rtl'>Abilities</TabTitle>
				<SelectorWrapper>
					<SelectorSkills setHoverInfo={setHoverInfo} />
					<PerkDeckSelector setHoverInfo={setHoverInfo} />
					<CrewManagementSelector setHoverInfo={setHoverInfo} />
					<InfamySelector setHoverInfo={setHoverInfo} />
				</SelectorWrapper>
			</Tab>
		</>
	)
}

const CharacterInfo: FC = () => {
	return (
		<Preview>
			<DetectionRisk flexDirection='column' corner={false} />
		</Preview>
	)
}

interface HoverInfoSectionProps {
	hoverInfo: HoverInfo;
}

const HoverInfoSection: FC<HoverInfoSectionProps> = ({ hoverInfo }) => {
	return (
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
	)
}

interface OuterSelectorProps {
	setHoverInfo: Dispatch<SetStateAction<HoverInfo>>;
}

const MaskSelector: FC<OuterSelectorProps> = ({ setHoverInfo }) => {

	const maskState = useCharacterStore(state => state.mask)
	const maskData = findMask(maskState)

	return (
		<Selector
			title='mask'
			setHoverInfo={setHoverInfo}
			infoData={{
				title: maskData.name,
				description: maskData.description
			}}
			image={`masks/${maskData.image}`}
		/>
	)
}

const CharacterSelector: FC<OuterSelectorProps> = ({ setHoverInfo }) => {

	const characterState = useCharacterStore(state => state.character)
	const characterData = characters[characterState]

	return (
		<Selector
			title='character'
			setHoverInfo={setHoverInfo}
			infoData={{
				title: characterData.name,
				description: [`Nationality: ${characterData.nationality}`, `Age: ${characterData.age.toString()}`, ...characterData.description]
			}}
			image={`masks/${characterData.image}`}
		/>
	)
}

const ArmourSelector: FC<OuterSelectorProps> = ({ setHoverInfo }) => {

	const armourState = useCharacterStore(state => state.armour)
	const armourData = armours[armourState]

	return (
		<Selector
			title='armour'
			setHoverInfo={setHoverInfo}
			infoData={{
				title: armourData.name,
				table: <ArmourStatsTable selectedArmour={armourData.name} />
			}}
			image={`armours/${armourData.name}`}
		/>
	)
}

const EquipmentSelector: FC<OuterSelectorProps> = ({ setHoverInfo }) => {

	const equipmentState = useCharacterStore(state => state.equipment)
	const equipmentPrimary = equipments[equipmentState.primary]
	const equipmentSecondary: EquipmentData | null = equipments[equipmentState.secondary ?? '']

	return (
		<Selector
			title='equipment'
			setHoverInfo={setHoverInfo}
			infoData={{
				title: equipmentPrimary.name,
				description: equipmentPrimary.description
			}}
			image={!equipmentSecondary ? `equipment/${equipmentPrimary.name}` : undefined}
		>
			{
				equipmentSecondary && <EquipmentContainer>
					<EquipmentImage src={`/images/equipment/${equipmentPrimary.name}.webp`} />
					<EquipmentImage src={`/images/equipment/${equipmentSecondary.name}.webp`} />
				</EquipmentContainer>
			}
		</Selector>
	)
}

const PrimarySelector: FC<OuterSelectorProps> = ({ setHoverInfo }) => {

	const primaryArmoury = useArmouryStore(state => state.primary)
	const primaryWeaponState = useWeaponsStore(state => state.primary)

	const primaryWeapon = primaryArmoury[primaryWeaponState]
	const primaryData = findWeapon(primaryWeapon.weaponFind)

	return (
		<Selector
			title='primary'
			setHoverInfo={setHoverInfo}
			infoData={{
				title: primaryData.name,
				table: <WeaponsStatsTable showExtraStats={false} selectedWeapon={primaryWeapon} />
			}}
			image={`weapons/${primaryData.image}`}
			imageLeftFacing
		>
			<ModIcons
				weapon={primaryWeapon}
				link={true}
				setHoverInfo={setHoverInfo}
			/>
		</Selector>
	)
}

const SecondarySelector: FC<OuterSelectorProps> = ({ setHoverInfo }) => {

	const secondaryArmoury = useArmouryStore(state => state.secondary)
	const secondaryWeaponState = useWeaponsStore(state => state.secondary)

	const secondaryWeapon = secondaryArmoury[secondaryWeaponState]
	const secondaryData = findWeapon(secondaryWeapon.weaponFind)

	return (
		<Selector
			title='secondary'
			setHoverInfo={setHoverInfo}
			infoData={{
				title: secondaryData.name,
				table: <WeaponsStatsTable showExtraStats={false} selectedWeapon={secondaryWeapon} />
			}}
			image={`weapons/${secondaryData.image}`}
			imageLeftFacing
		>
			<ModIcons
				weapon={secondaryWeapon}
				link={true}
				setHoverInfo={setHoverInfo}
			/>
		</Selector>
	)
}

const ThrowableSelector: FC<OuterSelectorProps> = ({ setHoverInfo }) => {

	const throwableState = useWeaponsStore(state => state.throwable)
	const throwableData = throwables[throwableState]

	return (
		<Selector
			title='throwable'
			setHoverInfo={setHoverInfo}
			infoData={{
				title: throwableData.name,
				description: throwableData.description
			}}
			image={`throwables/${throwableData.image}`}
		/>
	)
}

const MeleeSelector: FC<OuterSelectorProps> = ({ setHoverInfo }) => {

	const meleeState = useWeaponsStore(state => state.melee)
	const meleeData = melees[meleeState]

	return (
		<Selector
			title='melee'
			setHoverInfo={setHoverInfo}
			infoData={{
				title: meleeData.name,
				table: <MeleeStatsTable selectedMelee={meleeData.name} />
			}}
			image={`melees/${meleeData.image}`}
			imageLeftFacing
		/>
	)
}

const PerkDeckSelector: FC<OuterSelectorProps> = ({ setHoverInfo }) => {

	const perkDeckState = useAbilityStore(state => state.perkDeck)
	const perkDeckData = perkDecks[perkDeckState]
	const perkDeckIndex = Object.keys(perkDecks).indexOf(perkDeckData.name)

	return (
		<Selector
			title='perk deck'
			setHoverInfo={setHoverInfo}
			infoData={{
				title: perkDeckData.name,
				description: perkDeckData.description
			}}
		>
			<PerkDeckImage x={192} y={(perkDeckIndex + 1) * 48} />
		</Selector>
	)
}

const CrewManagementSelector: FC<OuterSelectorProps> = ({ setHoverInfo }) => {
	return (
		<Selector
			title='crew management'
			setHoverInfo={setHoverInfo}
			infoData={null}
		/>
	)
}

const InfamySelector: FC<OuterSelectorProps> = ({ setHoverInfo }) => {
	return (
		<Selector
			title='infamy'
			setHoverInfo={setHoverInfo}
			infoData={null}
		/>
	)
}

export default Tabs
