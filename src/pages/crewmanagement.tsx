import Container from 'components/Container'
import CrewWeaponTable from 'components/Table/CrewWeaponTable'
import crewAbilities from 'data/abilities/crewAbilities'
import crewBoosts from 'data/abilities/crewBoosts'
import crewWeapons from 'data/abilities/crewWeapons'
import { type NextPage } from 'next'
import { useRouter } from 'next/router'
import { type FC } from 'react'
import { Crew, useAbilityStore } from 'state/useAbilitiesStore'
import styled from 'styled-components'
import { blue, dim } from 'utils/colours'
import corner from 'utils/corner'

export type CrewIndex = '0' | '1' | '2'

export const isValidCrewIndex = (slot: string): slot is CrewIndex => ['0', '1', '2'].includes(slot)

const ItemContainer = styled.div`
	grid-area: items;
	display: flex;
	flex-direction: row;
	gap: 32px;
`

const CrewContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 8px;
`

const SlotContainer = styled(corner)`
	background-color: ${dim};
	display: grid;
	grid-template-columns: 126px auto;
	grid-template-rows: 32px auto;
	grid-template-areas: "title label" "image description";
	padding: 8px;
`

const SlotTitle = styled.p`
	grid-area: title;
	font-size: 1.5rem;
	text-align: center;
`

const SlotImage = styled.img`
	grid-area: image;
	cursor: pointer;
`

const SlotDescription = styled.p`
	grid-area: description;
`

const SlotLabel = styled.p`
	grid-area: label;
	color: ${blue};
	text-align: right;
`

const TableWrapper = styled.div`
	grid-area: description;
	margin-left: 160px;
`

const CrewManagement: NextPage = () => {

	const crews = useAbilityStore(state => state.crewManagement)

	return (
		<Container
			title='Crew Management'
			desktopLayout={{
				rows: '4rem auto 4rem',
				areas: '"title title" "items items" ". back"'
			}}
			mobileLayout={{
				rows: '4rem auto 64px',
				areas: '"title title" "items items" ". back"'
			}}
		>
			<ItemContainer>
				{
					crews.map((crew, i) => {
						return <Crew
							key={i}
							crew={crew}
							crewIndex={i}
						/>
					})
				}
			</ItemContainer>
		</Container>
	)
}

interface CrewProps {
	crew: Crew;
	crewIndex: number;
}

const Crew: FC<CrewProps> = ({ crew: { weapon, ability, boost }, crewIndex }) => {
	return (
		<CrewContainer>

			<Slot
				label='Weapon'
				title={weapon}
				image={`weapons/${crewWeapons[weapon].image}`}
				description={<TableWrapper><CrewWeaponTable weaponName={weapon} /></TableWrapper>}
				crewIndex={crewIndex}
			/>

			<Slot
				label='Ability'
				title={ability}
				image={`crew/abilities/${ability}`}
				description={<SlotDescription>{crewAbilities[ability]}</SlotDescription>}
				crewIndex={crewIndex}
			/>

			<Slot
				label='Boost'
				title={boost}
				image={`crew/boosts/${boost}`}
				description={<SlotDescription>{crewBoosts[boost]}</SlotDescription>}
				crewIndex={crewIndex}
			/>

		</CrewContainer>
	)
}

interface SlotProps {
	label: string;
	title: string;
	image: string;
	description: JSX.Element;
	crewIndex: number;
}

const Slot: FC<SlotProps> = ({ label, title, image, description, crewIndex }) => {

	const router = useRouter()

	return (
		<SlotContainer>
			<SlotLabel>{label}</SlotLabel>
			<SlotTitle>{title}</SlotTitle>
			<SlotImage src={`/images/${image}.webp`} onClick={() => {
				router.push(`/crewmanagement/${label.toLowerCase()}/${crewIndex}`).catch(console.error)
			}} />
			{description}
		</SlotContainer>
	)
}

export default CrewManagement