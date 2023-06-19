import Container from 'components/Container'
import { InfoContainer, InfoDescription, InfoTitle } from 'components/elements/infoElements'
import { Item, ItemContainer, ItemEquipped, ItemImage, ItemName } from 'components/elements/itemElements'
import crewBoosts from 'data/abilities/crewBoosts'
import { type NextPage } from 'next'
import { useRouter } from 'next/router'
import { type CrewIndex,isValidCrewIndex } from 'pages/crewmanagement'
import { useState } from 'react'
import { useAbilityStore } from 'state/useAbilitiesStore'
import { itemColours } from 'utils/colours'
import { typedObject } from 'utils/typedObject'

const CrewBoostSlug: NextPage = () => {

	const router = useRouter()
	const { slug } = router.query
	const [crewIndex] = slug ?? []

	return isValidCrewIndex(crewIndex)
		? <CrewBoost crewIndex={crewIndex} />
		: <Container>
			<h1>Invalid URL parameters</h1>
		</Container>
}

interface CrewBoostProps {
	crewIndex: CrewIndex;
}

const CrewBoost = ({ crewIndex }: CrewBoostProps) =>  {

	const router = useRouter()

	const equippedBoostName = useAbilityStore(state => state.crewManagement[+crewIndex].boost)
	const [selectedBoostName, setSelectedBoostName] = useState(equippedBoostName)

	const changeCrewBoost = useAbilityStore(state => state.changeCrewBoost)

	const equipBoostHandler = () => {
		if (selectedBoostName === equippedBoostName) return
		router.push('/crewmanagement').catch(console.error)
		changeCrewBoost(crewIndex, selectedBoostName)
	}

	return (
		<Container title='Crew Boost'>

			<ItemContainer>
				{
					typedObject.keys(crewBoosts).map(boostName => {
						const isSelected = boostName === selectedBoostName
						return <Item
							key={boostName}
							rowAmount={4}
							selected={isSelected}
							onClick={() => isSelected ? equipBoostHandler(): setSelectedBoostName(boostName)}
						>
							<ItemName colour={itemColours.Free}>{boostName}</ItemName>
							{boostName === equippedBoostName && <ItemEquipped />}
							<ItemImage
								src={`/images/crew/boosts/${boostName}.webp`}
								onMouseDown={event => event.preventDefault()}
							/>
						</Item>
					})
				}
			</ItemContainer>

			<InfoContainer>
				<InfoTitle>{selectedBoostName}</InfoTitle>
				<InfoDescription>{crewBoosts[selectedBoostName]}</InfoDescription>
			</InfoContainer>

		</Container>
	)
}

export default CrewBoostSlug