import DetectionRisk from 'components/DetectionRisk'
import { InfoDescription, InfoTitle } from 'components/elements/infoElements'
import ModIcons from 'components/ModIcons'
import { CardIconBase } from 'components/PerkDeck/Perk'
import ArmourStatsTable from 'components/Table/ArmourStatsTable'
import MeleeStatsTable from 'components/Table/MeleeStatsTable'
import WeaponsStatsTable from 'components/Table/WeaponStatsTable'
import { type Dispatch, type FC, type ReactElement, type SetStateAction, useState } from 'react'
import { useIsMobile } from 'state/settingsContext'
import { useAbilityStore } from 'state/useAbilitiesStore'
import { useArmouryStore } from 'state/useArmouryStore'
import { useCharacterStore } from 'state/useCharacterStore'
import { useWeaponsStore } from 'state/useWeaponsStore'
import styled from 'styled-components'
import { dim } from 'utils/colours'
import corner from 'utils/corner'
import { trpc } from 'utils/trpc'

import CrewManagementTable from './CrewManagementTable'
import PlaceholderSelector from './PlaceholderSelector'
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
	height: 100%;
	max-width: 100%;
	aspect-ratio: 1;
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
	grid-template-columns: ${props => props.theme.isMobile ? 'minmax(0, 1fr) minmax(0, 1fr)' : '1fr'};
	grid-template-rows: ${props => props.theme.isMobile ? 'minmax(0, 1fr) minmax(0, 1fr)' : '25% 25% 25% 25%'};
`

const CrewManagementContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, auto);
	grid-template-rows: repeat(2, auto);
	align-items: center;
	justify-content: center;
	padding: ${props => props.theme.isMobile ? '0' : '32px 0'}
`

const CrewManagementImage = styled.img`
	max-height: 90%;
	max-width: 90%;
	aspect-ratio: 1 / 1;
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
	const { isSuccess, data } = trpc.loadoutData.getMask.useQuery(maskState)

	return isSuccess ? (
		<Selector
			title='mask'
			setHoverInfo={setHoverInfo}
			infoData={{
				title: data.name,
				description: data.description
			}}
			image={`masks/${data.image}`}
		/>
	) : <PlaceholderSelector setHoverInfo={setHoverInfo} />
}

const CharacterSelector: FC<OuterSelectorProps> = ({ setHoverInfo }) => {

	const characterState = useCharacterStore(state => state.character)
	const { isSuccess, data } = trpc.loadoutData.getCharacter.useQuery(characterState)

	return isSuccess ? (
		<Selector
			title='character'
			setHoverInfo={setHoverInfo}
			infoData={{
				title: data.name,
				description: [`Nationality: ${data.nationality}`, `Age: ${data.age.toString()}`, ...data.description]
			}}
			image={`masks/${data.image}`}
		/>
	) : <PlaceholderSelector setHoverInfo={setHoverInfo} />
}

const ArmourSelector: FC<OuterSelectorProps> = ({ setHoverInfo }) => {

	const armourState = useCharacterStore(state => state.armour)
	const { isSuccess, data } = trpc.loadoutData.getArmour.useQuery(armourState)

	return isSuccess ? (
		<Selector
			title='armour'
			setHoverInfo={setHoverInfo}
			infoData={{
				title: data.name,
				table: <ArmourStatsTable selectedArmour={data.name} />
			}}
			image={`armours/${data.name}`}
		/>
	) : <PlaceholderSelector setHoverInfo={setHoverInfo} />
}

const EquipmentSelector: FC<OuterSelectorProps> = ({ setHoverInfo }) => {

	const equipmentState = useCharacterStore(state => state.equipment)
	const { isSuccess, data } = trpc.loadoutData.getEquipment.useQuery(equipmentState)

	return isSuccess ? (
		<Selector
			title='equipment'
			setHoverInfo={setHoverInfo}
			infoData={{
				title: data.primary.name,
				description: data.primary.description
			}}
			image={!data.secondary ? `equipment/${data.primary.name}` : undefined}
		>
			{
				data.secondary && <EquipmentContainer>
					<EquipmentImage src={`/images/equipment/${data.primary.name}.webp`} />
					<EquipmentImage src={`/images/equipment/${data.secondary.name}.webp`} />
				</EquipmentContainer>
			}
		</Selector>
	) : <PlaceholderSelector setHoverInfo={setHoverInfo} />
}

const PrimarySelector: FC<OuterSelectorProps> = ({ setHoverInfo }) => {

	const primaryArmoury = useArmouryStore(state => state.primary)
	const primaryWeaponState = useWeaponsStore(state => state.primary)
	const { isSuccess, data } = trpc.loadoutData.getWeapon.useQuery(primaryArmoury[primaryWeaponState].weaponFind)
	const primaryWeapon = primaryArmoury[primaryWeaponState]

	return isSuccess ? (
		<Selector
			title='primary'
			setHoverInfo={setHoverInfo}
			infoData={{
				title: data.name,
				table: <WeaponsStatsTable showExtraStats={false} selectedWeapon={primaryWeapon} />
			}}
			image={`weapons/${data.image}`}
			imageLeftFacing
		>
			<ModIcons
				weapon={primaryWeapon}
				link={true}
				setHoverInfo={setHoverInfo}
			/>
		</Selector>
	) : <PlaceholderSelector setHoverInfo={setHoverInfo} />
}

const SecondarySelector: FC<OuterSelectorProps> = ({ setHoverInfo }) => {

	const secondaryArmoury = useArmouryStore(state => state.secondary)
	const secondaryWeaponState = useWeaponsStore(state => state.secondary)
	const { isSuccess, data } = trpc.loadoutData.getWeapon.useQuery(secondaryArmoury[secondaryWeaponState].weaponFind)
	const secondaryWeapon = secondaryArmoury[secondaryWeaponState]

	return isSuccess ? (
		<Selector
			title='secondary'
			setHoverInfo={setHoverInfo}
			infoData={{
				title: data.name,
				table: <WeaponsStatsTable showExtraStats={false} selectedWeapon={secondaryWeapon} />
			}}
			image={`weapons/${data.image}`}
			imageLeftFacing
		>
			<ModIcons
				weapon={secondaryWeapon}
				link={true}
				setHoverInfo={setHoverInfo}
			/>
		</Selector>
	) : <PlaceholderSelector setHoverInfo={setHoverInfo} />
}

const ThrowableSelector: FC<OuterSelectorProps> = ({ setHoverInfo }) => {

	const throwableState = useWeaponsStore(state => state.throwable)
	const { isSuccess, data } = trpc.loadoutData.getThrowable.useQuery(throwableState)

	return isSuccess ? (
		<Selector
			title='throwable'
			setHoverInfo={setHoverInfo}
			infoData={{
				title: data.name,
				description: data.description
			}}
			image={`throwables/${data.image}`}
		/>
	) : <PlaceholderSelector setHoverInfo={setHoverInfo} />
}

const MeleeSelector: FC<OuterSelectorProps> = ({ setHoverInfo }) => {

	const meleeState = useWeaponsStore(state => state.melee)
	const { isSuccess, data } = trpc.loadoutData.getMelee.useQuery(meleeState)

	return isSuccess ? (
		<Selector
			title='melee'
			setHoverInfo={setHoverInfo}
			infoData={{
				title: data.name,
				table: <MeleeStatsTable selectedMelee={data.name} />
			}}
			image={`melees/${data.image}`}
			imageLeftFacing
		/>
	) : <PlaceholderSelector setHoverInfo={setHoverInfo} />
}

const PerkDeckSelector: FC<OuterSelectorProps> = ({ setHoverInfo }) => {

	const perkDeckState = useAbilityStore(state => state.perkDeck)
	const { isSuccess, data } = trpc.loadoutData.getPerkDeck.useQuery(perkDeckState)

	return isSuccess ? (
		<Selector
			linkChildren
			title='perk deck'
			setHoverInfo={setHoverInfo}
			infoData={{
				title: data.name,
				description: data.description
			}}
		>
			<PerkDeckImage x={192} y={(data.index + 1) * 48} />
		</Selector>
	) : <PlaceholderSelector setHoverInfo={setHoverInfo} />
}

const CrewManagementSelector: FC<OuterSelectorProps> = ({ setHoverInfo }) => {

	const crewManagement = useAbilityStore(state => state.crewManagement)

	return (
		<Selector
			linkChildren
			title='crew management'
			setHoverInfo={setHoverInfo}
			infoData={{
				title: 'Crew Management',
				table: <CrewManagementTable/>
			}}
		>
			<CrewManagementContainer>
				<CrewManagementImage src={`/images/crew/abilities/${crewManagement[0].ability}.webp`} />
				<CrewManagementImage src={`/images/crew/abilities/${crewManagement[1].ability}.webp`} />
				<CrewManagementImage src={`/images/crew/abilities/${crewManagement[2].ability}.webp`} />
				<CrewManagementImage src={`/images/crew/boosts/${crewManagement[0].boost}.webp`} />
				<CrewManagementImage src={`/images/crew/boosts/${crewManagement[1].boost}.webp`} />
				<CrewManagementImage src={`/images/crew/boosts/${crewManagement[2].boost}.webp`} />
			</CrewManagementContainer>
		</Selector>
	)
}

const InfamySelector: FC<OuterSelectorProps> = ({ setHoverInfo }) => {

	const infamy = useAbilityStore(state => state.infamy)

	return (
		<Selector
			title='infamy'
			setHoverInfo={setHoverInfo}
			infoData={{
				title: 'Infamy',
				description: [
					'Infamy lowers the required skill points spent to unlock the top skill of every tree from 18 to 16',
					`Currently ${infamy ? 'enabled' : 'disabled'}`
				]
			}}
			image={infamy ? 'masks/dallas' : 'masks/dallas_clean'}
		/>
	)
}

export default Tabs
