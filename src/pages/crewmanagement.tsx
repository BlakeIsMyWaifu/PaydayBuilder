import Container from 'components/Container'
import CrewWeaponTable from 'components/Table/CrewWeaponTable'
import crewAbilities from 'data/abilities/crewAbilities'
import crewBoosts from 'data/abilities/crewBoosts'
import crewWeapons from 'data/abilities/crewWeapons'
import useWindowSize from 'hooks/useWindow.size'
import { type NextPage } from 'next'
import { useRouter } from 'next/router'
import { type FC } from 'react'
import { useIsMobile } from 'state/settingsContext'
import { Crew, useAbilityStore } from 'state/useAbilitiesStore'
import styled from 'styled-components'
import { blue, dim } from 'utils/colours'
import corner from 'utils/corner'
import { isUniqueValue } from 'utils/isUniqueValue'

const ItemContainer = styled.div`
	grid-area: items;
	display: flex;
	flex-direction: row;
	gap: ${props => props.theme.isMobile ? '8px' : '32px'};
`

const CrewContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 8px;
`

interface SlotContainerProps {
	isUnique: boolean;
	firstColumnWidth: 128 | 256;
}

const SlotContainer = styled(corner)<SlotContainerProps>`
	background-color: ${props => props.isUnique ? dim : 'rgba(255, 40, 40, 0.3)'};
	display: grid;
	grid-template-columns: ${props => props.theme.isMobile ? 'minmax(auto, 196px)' : `minmax(${props.firstColumnWidth / 2}px, ${props.firstColumnWidth}px)`};
	grid-template-rows: 32px auto;
	grid-template-areas: ${props => props.theme.isMobile ? '"title" "image"': '"title label" "image description"'};
	padding: 8px;
	align-items: center;
`

const SlotTitle = styled.p`
	grid-area: title;
	font-size: 1.5rem;
	text-align: center;
`

interface SlotImageProps {
	aspectRatio: '1 / 1' | '2 / 1';
}

const SlotImage = styled.img<SlotImageProps>`
	grid-area: image;
	width: 100%;
	aspect-ratio: ${props => props.aspectRatio};
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
	display: flex;
	flex-direction: row;
	justify-content: center;
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
				label='weapon'
				title={weapon}
				image={`weapons/${crewWeapons[weapon].image}`}
				description={<TableWrapper><CrewWeaponTable weaponName={weapon} /></TableWrapper>}
				crewIndex={crewIndex}
				mobileSize={1300}
			/>

			<Slot
				label='ability'
				title={ability}
				image={`crew/abilities/${ability}`}
				description={<SlotDescription>{crewAbilities[ability]}</SlotDescription>}
				crewIndex={crewIndex}
				mobileSize={1020}
			/>

			<Slot
				label='boost'
				title={boost}
				image={`crew/boosts/${boost}`}
				description={<SlotDescription>{crewBoosts[boost]}</SlotDescription>}
				crewIndex={crewIndex}
				mobileSize={1020}
			/>

		</CrewContainer>
	)
}

interface SlotProps {
	label: keyof Crew;
	title: string;
	image: string;
	description: JSX.Element;
	crewIndex: number;
	mobileSize: number;
}

const Slot: FC<SlotProps> = ({ label, title, image, description, crewIndex, mobileSize }) => {

	const router = useRouter()

	const crewManagement = useAbilityStore(state => state.crewManagement)

	const isWeapon = label === 'weapon'

	const isMobile = useIsMobile()

	const { width } = useWindowSize()

	return (
		<SlotContainer isUnique={isWeapon || isUniqueValue(title, crewManagement.map(crew => crew[label]))} firstColumnWidth={isWeapon ? 256 : 128}>
			{!isMobile && <SlotLabel>{label}</SlotLabel>}
			<SlotTitle>{title}</SlotTitle>
			<SlotImage
				src={`/images/${image}.webp`}
				aspectRatio={isWeapon ? '2 / 1' : '1 / 1'}
				onClick={() => {
					router.push(`/crewmanagement/${label}/${crewIndex}`).catch(console.error)
				}}
			/>
			{width > mobileSize && description}
		</SlotContainer>
	)
}

export default CrewManagement