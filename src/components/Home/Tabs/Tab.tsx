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
import { Dispatch, FC, SetStateAction, useState } from 'react'
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
import SelectorSkills from './SkillsSelector'

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

	const [hoverInfo, setHoverInfo] = useState<HoverInfo | null>(null)

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

interface OuterSelectorProps {
	setHoverInfo: Dispatch<SetStateAction<HoverInfo | null>>;
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
		>
			<Image src={`/images/masks/${maskData.image}.webp`} />
		</Selector>
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
		>
			<Image src={`/images/masks/${characterData.image}.webp`} />
		</Selector>
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
		>
			<Image src={`/images/armours/${armourData.name}.webp`} />
		</Selector>
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
		>
			{
				equipmentSecondary ? <EquipmentContainer>
					<Image src={`/images/equipment/${equipmentPrimary.name}.webp`} />
					<Image src={`/images/equipment/${equipmentSecondary.name}.webp`} />
				</EquipmentContainer> : <Image src={`/images/equipment/${equipmentPrimary.name}.webp`} />
			}
		</Selector>
	)
}

const PrimarySelector: FC<OuterSelectorProps> = ({ setHoverInfo }) => {

	const primaryArmoury = useArmouryStore(state => state.primary)
	const primaryWeaponState = useWeaponsStore(state => state.primary)

	const primaryWeapon = primaryArmoury[primaryWeaponState]
	const primaryData = findWeapon(primaryWeapon.weaponFind)

	const { leftFacing } = useSettingsContext().state

	return (
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
	)
}

const SecondarySelector: FC<OuterSelectorProps> = ({ setHoverInfo }) => {

	const secondaryArmoury = useArmouryStore(state => state.secondary)
	const secondaryWeaponState = useWeaponsStore(state => state.secondary)

	const secondaryWeapon = secondaryArmoury[secondaryWeaponState]
	const secondaryData = findWeapon(secondaryWeapon.weaponFind)

	const { leftFacing } = useSettingsContext().state

	return (
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
		>
			<Image src={`/images/throwables/${throwableData.image}.webp`} />
		</Selector>
	)
}

const MeleeSelector: FC<OuterSelectorProps> = ({ setHoverInfo }) => {

	const meleeState = useWeaponsStore(state => state.melee)
	const meleeData = melees[meleeState]

	const { leftFacing } = useSettingsContext().state

	return (
		<Selector
			title='melee'
			setHoverInfo={setHoverInfo}
			infoData={{
				title: meleeData.name,
				table: <MeleeStatsTable selectedMelee={meleeData.name} />
			}}
		>
			<Image src={`/images/melees/${meleeData.image}.webp`} leftFacing={leftFacing} />
		</Selector>
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
